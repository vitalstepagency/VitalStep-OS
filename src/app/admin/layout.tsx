"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from 'react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

interface AdminLayoutProps {
  children: ReactNode
}

interface PublicMetadata {
  role?: string | string[];
  clientId?: string;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push('/sign-in');
        return;
      }

      if (user) {
        const publicMetadata = user.publicMetadata as PublicMetadata;
        const role = publicMetadata?.role;
        
        // Handle multiple roles - convert to array for consistent processing
        const roles = Array.isArray(role) ? role : (role ? [role] : []);
        const hasRole = (checkRole: string) => roles.includes(checkRole);
        const isAdmin = hasRole('admin');
        
        if (!isAdmin) {
          router.push('/');
          return;
        }
        
        setIsAuthorized(true);
      }
      setIsLoading(false);
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (isLoading || !isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <div className="text-white text-2xl font-light tracking-widest animate-pulse">
            AUTHORIZING ADMIN ACCESS
          </div>
        </div>
      </div>
    );
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