import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { ClientSidebar } from '@/components/client/ClientSidebar'
import { ClientHeader } from '@/components/client/ClientHeader'

interface ClientLayoutProps {
  children: ReactNode
  params: Promise<{ id: string }>
}

export default async function ClientLayout({ children, params }: ClientLayoutProps) {
  const { id } = await params
  const { userId, sessionClaims } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const role = (sessionClaims?.publicMetadata as { role?: string | string[]; clientId?: string })?.role as string | string[]
  const userClientId = (sessionClaims?.publicMetadata as { role?: string | string[]; clientId?: string })?.clientId as string
  
  // Handle multiple roles - convert to array for consistent processing
  const roles = Array.isArray(role) ? role : (role ? [role] : [])
  const hasRole = (checkRole: string) => roles.includes(checkRole)
  const isAdmin = hasRole('admin')
  const isClient = hasRole('client') || hasRole('client_team')
  
  // Allow access for:
  // 1. Admin users (can access any client dashboard)
  // 2. Client users accessing their own dashboard
  // 3. Client team members accessing their client's dashboard
  if (!(isAdmin || isClient)) {
    redirect('/')
  }
  
  // If user is client or client_team, ensure they can only access their own client dashboard
  if (!isAdmin && isClient && userClientId !== id) {
    redirect(`/client/${userClientId}`)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-teal-900/10 via-blue-900/10 to-black"></div>
        
        {/* Animated Particle Field */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-emerald-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="client-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="emerald" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#client-grid)" />
          </svg>
        </div>

        {/* Dynamic Orbs */}
        <div className="absolute top-1/5 right-1/8 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/8 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-teal-500/15 to-green-500/15 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        <ClientSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <ClientHeader />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}