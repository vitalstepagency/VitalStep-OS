import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

interface AdminLayoutProps {
  children: ReactNode
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const { userId, sessionClaims } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const role = sessionClaims?.publicMetadata?.role as string | string[]
  
  // Handle multiple roles - convert to array for consistent processing
  const roles = Array.isArray(role) ? role : (role ? [role] : [])
  const hasRole = (checkRole: string) => roles.includes(checkRole)
  const isAdmin = hasRole('admin')
  
  if (!isAdmin) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 via-pink-900/10 to-black"></div>
        
        {/* Animated Particle Field */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-pulse"
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
              <pattern id="admin-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#admin-grid)" />
          </svg>
        </div>

        {/* Dynamic Orbs */}
        <div className="absolute top-1/6 left-1/12 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-2/3 right-1/12 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/6 left-1/4 w-56 h-56 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-screen">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}