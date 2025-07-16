"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RefreshPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/';

  useEffect(() => {
    if (isLoaded && user) {
      console.log('🔄 REFRESH PAGE: User loaded, checking metadata');
      console.log('User metadata:', user.publicMetadata);
      
      // Wait a moment for metadata to sync, then redirect
      setTimeout(() => {
        console.log('🚀 REFRESH PAGE: Redirecting to', redirectUrl);
        router.push(redirectUrl);
      }, 1000);
    } else if (isLoaded && !user) {
      console.log('❌ REFRESH PAGE: No user found, redirecting to sign-in');
      router.push('/sign-in');
    }
  }, [isLoaded, user, router, redirectUrl]);

  if (!isLoaded) {
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
            REFRESHING SESSION
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
        <div className="text-white text-2xl font-light tracking-widest animate-pulse">
          REDIRECTING
        </div>
      </div>
    </div>
  );
}