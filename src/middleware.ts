import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isInternalRoute = createRouteMatcher(['/internal(.*)'])
const isClientRoute = createRouteMatcher(['/client(.*)'])
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/internal(.*)',
  '/client(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth()
  
  // Redirect to sign-in if accessing protected routes without authentication
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  if (userId && sessionClaims) {
    const role = sessionClaims.publicMetadata?.role as string | string[]
    const clientId = sessionClaims.publicMetadata?.clientId as string
    
    // Handle multiple roles - convert to array for consistent processing
    const roles = Array.isArray(role) ? role : (role ? [role] : [])
    const hasRole = (checkRole: string) => roles.includes(checkRole)
    const isAdmin = hasRole('admin')
    const isTeam = hasRole('team')
    const isClient = hasRole('client') || hasRole('client_team')

    // Admin role access control
    if (isAdminRoute(req) && !isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    // Internal route access control
    if (isInternalRoute(req) && !(isAdmin || isTeam)) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    // Client route access control
    if (isClientRoute(req)) {
      if (!(isAdmin || isClient)) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      
      // Extract client ID from URL for non-admin users
      const urlClientId = req.nextUrl.pathname.split('/client/')[1]?.split('/')[0]
      if (!isAdmin && clientId !== urlClientId) {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }

    // Redirect authenticated users from home page to their appropriate dashboard
    // Priority: admin > team > client
    if (req.nextUrl.pathname === '/' && roles.length > 0) {
      if (isAdmin) {
        return NextResponse.redirect(new URL('/admin', req.url))
      } else if (isTeam) {
        return NextResponse.redirect(new URL('/internal', req.url))
      } else if (isClient && clientId) {
        return NextResponse.redirect(new URL(`/client/${clientId}`, req.url))
      }
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};