import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { InternalSidebar } from '@/components/internal/InternalSidebar'
import { InternalHeader } from '@/components/internal/InternalHeader'

interface InternalLayoutProps {
  children: ReactNode
}

export default async function InternalLayout({ children }: InternalLayoutProps) {
  const { userId, sessionClaims } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const role = (sessionClaims?.publicMetadata as { role?: string | string[] })?.role as string | string[]
  
  // Handle multiple roles - convert to array for consistent processing
  const roles = Array.isArray(role) ? role : (role ? [role] : [])
  const hasRole = (checkRole: string) => roles.includes(checkRole)
  const isAdmin = hasRole('admin')
  const isTeam = hasRole('team')
  
  // Allow access for admin and team roles
  if (!(isAdmin || isTeam)) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-900/10 via-purple-900/10 to-black"></div>
        
        {/* Animated Particle Field */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-cyan-400/20 rounded-full animate-pulse"
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
              <pattern id="internal-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="cyan" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#internal-grid)" />
          </svg>
        </div>

        {/* Dynamic Orbs */}
        <div className="absolute top-1/5 right-1/8 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/8 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        <InternalSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <InternalHeader />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}