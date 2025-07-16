'use client'

import { useAuth, useUser } from '@clerk/nextjs'
import { useRouter, useParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { ClientSidebar } from '@/components/client/ClientSidebar'
import { ClientHeader } from '@/components/client/ClientHeader'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { userId, isLoaded: authLoaded } = useAuth()
  const { user, isLoaded: userLoaded } = useUser()
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const [isAssigningRole, setIsAssigningRole] = useState(false)
  
  useEffect(() => {
    if (!authLoaded || !userLoaded) return
    
    if (!userId) {
      router.push('/sign-in')
      return
    }

    const publicMetadata = user?.publicMetadata as any
    const role = publicMetadata?.role
    const userClientId = publicMetadata?.clientId
    
    console.log('🔍 CLIENT LAYOUT DEBUG:', {
      userId,
      role,
      userClientId,
      requestedId: id,
      publicMetadata
    })
    
    // Extract roles array if it exists
    const roles = Array.isArray(role) ? role : (role ? [role] : [])
    const isAdmin = roles.includes('admin')
    const isClient = roles.includes('client')
    const hasValidRole = isAdmin || (isClient && userClientId === id)
    
    console.log('🔍 CLIENT LAYOUT ROLE CHECK:', { roles, isAdmin, isClient, hasValidRole })
    
    // Check if user has valid role for this client
    if (!hasValidRole && !isAssigningRole) {
      console.log('❌ CLIENT LAYOUT: No valid role found, auto-assigning client role')
      setIsAssigningRole(true)
      
      // Auto-assign client role
      fetch('/api/user/self-assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('✅ CLIENT LAYOUT: Role assigned successfully, reloading user')
          // Force user reload to get updated metadata
          user?.reload()
          setIsAssigningRole(false)
        } else {
          console.error('❌ CLIENT LAYOUT: Failed to assign role:', data.error)
          router.push('/')
        }
      })
      .catch(error => {
        console.error('❌ CLIENT LAYOUT: Error assigning role:', error)
        router.push('/')
      })
    }
  }, [authLoaded, userLoaded, userId, user, id, router, isAssigningRole])
  
  if (!authLoaded || !userLoaded || isAssigningRole) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <div className="text-white text-2xl font-light tracking-widest animate-pulse">
            {isAssigningRole ? 'ASSIGNING ROLE' : 'LOADING'}
          </div>
        </div>
      </div>
    )
  }
  
  console.log('✅ CLIENT LAYOUT: Access granted')

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