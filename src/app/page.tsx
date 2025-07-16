"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      const role = user.publicMetadata?.role as string | string[];
      const clientId = user.publicMetadata?.clientId as string;
      
      console.log('🔄 AUTO-REDIRECT: Checking user for automatic redirection');
      console.log('User metadata:', { role, clientId, publicMetadata: user.publicMetadata });
      
      // Handle multiple roles
      const roles = Array.isArray(role) ? role : (role ? [role] : []);
      const hasRole = (checkRole: string) => roles.includes(checkRole);
      const isAdmin = hasRole('admin');
      const isTeam = hasRole('team');
      const isClient = hasRole('client') || hasRole('client_team');
      
      console.log('🔍 AUTO-REDIRECT ANALYSIS:', {
        roles,
        isAdmin,
        isTeam,
        isClient,
        clientId
      });
      
      // Auto-redirect based on role
      if (isAdmin) {
        console.log('🚀 AUTO-REDIRECTING ADMIN TO /admin');
        router.push('/admin');
      } else if (isTeam) {
        console.log('🚀 AUTO-REDIRECTING TEAM TO /internal');
        router.push('/internal');
      } else if (isClient && clientId) {
        console.log('🚀 AUTO-REDIRECTING CLIENT TO /client/' + clientId);
        router.push(`/client/${clientId}`);
      } else if (!role || (Array.isArray(role) && role.length === 0)) {
        console.log('❌ No role found, auto-assigning default client role');
        // Auto-assign default client role
        fetch('/api/user/self-assign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('✅ Role assigned successfully, redirecting to refresh page');
            window.location.href = '/refresh?redirect_url=' + encodeURIComponent('/');
          } else {
            console.error('❌ Failed to assign role:', data.error);
          }
        })
        .catch(error => {
          console.error('❌ Error assigning role:', error);
        });
      }
    }
  }, [isLoaded, user, router]);



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
            INITIALIZING
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Transcendent Quantum Reality */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 via-indigo-950/20 to-slate-900" />
        
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="neuralGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#8B5CF6" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="50" y1="50" x2="50" y2="100" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, rgba(139, 92, 246, ${0.8 + Math.random() * 0.2}), rgba(236, 72, 153, ${0.4 + Math.random() * 0.3}), transparent)`,
                animation: `gentle-float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(139, 92, 246, 0.6)`
              }}
            />
          ))}
        </div>
        
        {/* Holographic Depth Layers */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-5"
              style={{
                background: `conic-gradient(from ${i * 90}deg, transparent, rgba(139, 92, 246, 0.1), transparent, rgba(236, 72, 153, 0.1), transparent)`,
                animation: `aurora-shift ${20 + i * 5}s linear infinite`,
                animationDelay: `${i * 2}s`,
                transform: `scale(${1 + i * 0.1}) rotate(${i * 15}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Liquid Crystal Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%), 
                        linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, transparent 25%, rgba(139, 92, 246, 0.05) 50%, transparent 75%)`,
            animation: 'aurora-shift 15s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <SignedOut>
          {/* TRANSCENDENT HOLOGRAPHIC LOGO NEXUS */}
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
            <div className="relative group" style={{
              animation: 'gentle-float 6s ease-in-out infinite'
            }}>
              

              
              {/* HOLOGRAPHIC DEPTH MATRIX */}
              <div className="relative">
                {/* Holographic Depth Layers */}
                {[...Array(3)].map((_, i) => (
                  <Image
                    key={i}
                    src="https://i.postimg.cc/rws2hzg1/Asset-4.png"
                    alt="VitalStep AI Hologram"
                    width={140}
                    height={140}
                    className="absolute top-0 left-0 object-contain"
                    style={{
                      transform: `translateZ(${i * 2}px) scale(${1 + i * 0.02})`,
                      opacity: 0.3 - i * 0.1,
                      filter: `blur(${i}px) hue-rotate(${i * 30 + 5}deg) brightness(125%) contrast(85%) drop-shadow(0 ${4 + i * 2}px ${8 + i * 4}px rgba(139, 92, 246, ${0.3 - i * 0.1}))`,
                      animation: `gentle-float ${8 + i}s ease-in-out infinite`
                    }}
                  />
                ))}
                
                {/* Primary Holographic Logo */}
                <Image 
                  src="https://i.postimg.cc/rws2hzg1/Asset-4.png" 
                  alt="VitalStep AI Logo" 
                  width={140}
                  height={140}
                  className="relative object-contain transition-all duration-1000 group-hover:scale-105"
                  style={{
                    filter: 'saturate(120%) brightness(115%) contrast(90%) hue-rotate(3deg) drop-shadow(0 8px 16px rgba(139, 92, 246, 0.4)) drop-shadow(0 4px 8px rgba(236, 72, 153, 0.3))',
                    animation: 'gentle-float 8s ease-in-out infinite'
                  }}
                />
              </div>

            </div>
          </div>

          {/* TRANSCENDENT PURE TYPOGRAPHY */}
          <div className="text-center mt-[120px]">
            {/* Primary Heading */}
            <div className="relative mb-12">
              {/* ELEGANT SHADOW AURA BEHIND TEXT */}
              <div className="absolute -inset-32 pointer-events-none">
                {/* Primary Ethereal Glow */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.15))',
                    animation: 'ethereal-drift 20s linear infinite',
                    filter: 'blur(40px)'
                  }}
                />
                
                {/* Secondary Harmonics */}
                <div 
                  className="absolute inset-8 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
                    animation: 'ethereal-breathe 8s ease-in-out infinite'
                  }}
                />
                
                {/* Subtle Interference Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                  <defs>
                    <radialGradient id="textAura" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3">
                        <animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="70%" stopColor="#EC4899" stopOpacity="0.2">
                        <animate attributeName="stop-opacity" values="0.05;0.3;0.05" dur="8s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {[...Array(2)].map((_, i) => (
                    <circle
                      key={i}
                      cx="50%"
                      cy="50%"
                      r={`${30 + i * 20}%`}
                      fill="none"
                      stroke="url(#textAura)"
                      strokeWidth="0.5"
                      opacity="0.3"
                      style={{
                        animation: `ethereal-drift ${12 + i * 4}s ease-in-out infinite`,
                        animationDelay: `${i * 2}s`
                      }}
                    />
                  ))}
                </svg>
              </div>
              
              <h1 className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-white mb-8">
                <div className="flex flex-col items-center space-y-1">
                  {/* VITALSTEP - Pure Elegance */}
                  <div className="relative group">
                    <span 
                      className="relative z-10 inline-block font-extralight tracking-[0.15em]"
                      style={{
                        background: `linear-gradient(135deg, 
                          #ffffff 0%,
                          #f8fafc 20%,
                          #e2e8f0 40%,
                          #cbd5e1 60%,
                          #94a3b8 80%,
                          #64748b 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.05))',
                        animation: 'ethereal-drift 18s ease-in-out infinite'
                      }}
                    >
                      VITALSTEP
                    </span>
                    
                    {/* Refined Glow Enhancement */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-2000"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                        animation: 'shimmer-flow 4s ease-in-out infinite',
                        backgroundSize: '200% 100%'
                      }}
                    />
                  </div>
                  
                  {/* AI - Crystalline Perfection */}
                  <div className="relative group">
                    <span 
                      className="relative z-10 inline-block text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.4em]"
                      style={{
                        background: `linear-gradient(135deg, 
                          #a855f7 0%,
                          #c084fc 25%,
                          #e879f9 50%,
                          #f0abfc 75%,
                          #fae8ff 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 1px 4px rgba(168, 85, 247, 0.1))',
                        animation: 'ethereal-drift 14s ease-in-out infinite reverse'
                      }}
                    >
                      AI
                    </span>
                    
                    {/* Refined Shimmer */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-2000"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
                        animation: 'shimmer-flow 3.5s ease-in-out infinite',
                        backgroundSize: '200% 100%'
                      }}
                    />
                  </div>
                </div>
              </h1>
              
              {/* Elegant Underline */}
              <div className="relative mx-auto w-32 h-px mb-12">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse"
                  style={{
                    opacity: 0.6
                  }}
                />
              </div>
            </div>
            
            {/* REFINED SUBHEADING */}
            <div className="relative mt-6">
              <p className="relative z-10 text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                <span 
                  style={{
                    opacity: 0.9
                  }}
                >
                  Your dedicated AI partner, transforming your vision into measurable success through intelligent automation and data-driven insights.
                </span>
              </p>
            </div>
          </div>

          {/* TRANSCENDENT PORTAL GATEWAY */}
          <div className="pt-[58.2px]">
            <SignInButton mode="modal">
              <button 
                className="group relative px-16 py-6 text-lg font-medium tracking-[0.2em] transition-all duration-1000 ease-out overflow-hidden hover:scale-110 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(15, 23, 42, 0.6) 0%,
                    rgba(30, 41, 59, 0.7) 50%,
                    rgba(15, 23, 42, 0.6) 100%)`,
                  border: `1px solid rgba(139, 92, 246, 0.2)`,
                  borderRadius: '12px',
                  backdropFilter: 'blur(24px)',
                  boxShadow: `
                    0 4px 16px rgba(0, 0, 0, 0.3),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 0 32px rgba(139, 92, 246, 0.1)`
                }}
              >
                {/* Quantum Field Generator */}
                <div className="absolute inset-0 -m-4">
                  {/* Primary Quantum Field */}
                  <div 
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.2))',
                      animation: 'aurora-shift 6s linear infinite',
                      filter: 'blur(15px)'
                    }}
                  />
                  
                  {/* Secondary Resonance */}
                  <div 
                    className="absolute inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
                      animation: 'ethereal-breathe 2s ease-in-out infinite'
                    }}
                  />
                </div>
                
                {/* Quantum Interference Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20 rounded-xl overflow-hidden">
                  <defs>
                    <linearGradient id="portalFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6">
                        <animate attributeName="stop-opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#portalFlow)" />
                  
                  {/* Portal Rings */}
                  {[...Array(3)].map((_, i) => (
                    <circle
                      key={i}
                      cx="50%"
                      cy="50%"
                      r={`${15 + i * 10}%`}
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="1"
                      opacity="0.6"
                      style={{
                        animation: `gentle-float ${3 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </svg>
                
                {/* Transcendent Glow */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.08))',
                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(236, 72, 153, 0.2), 0 0 180px rgba(59, 130, 246, 0.1)'
                  }}
                />
                
                {/* Neural Pathway Lines */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute opacity-0 group-hover:opacity-60 transition-opacity duration-1000"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '0%',
                        width: '1px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.6), transparent)',
                        animation: `gentle-float ${1.5 + i * 0.3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Elegant Text */}
                <span 
                  className="relative z-20 text-slate-100 font-light tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-700"
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))'
                  }}
                >
                  ENTER SYSTEM
                </span>
                
                {/* Quantum Accent Lines */}
                <div 
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-1000 ease-out"
                  style={{
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4), rgba(139, 92, 246, 0.6), transparent)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                  }}
                />
                
                <div 
                  className="absolute top-0 left-1/2 w-0 h-0.5 opacity-0 group-hover:opacity-100 group-hover:w-3/4 transition-all duration-1000 ease-out"
                  style={{
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(to right, transparent, rgba(236, 72, 153, 0.8), transparent)',
                    boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)'
                  }}
                />
              </button>
            </SignInButton>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </SignedOut>

        <SignedIn>
          <div className="text-center max-w-4xl mx-auto">
            {/* Minimalist Welcome Section */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white mb-8">
                <span 
                  style={{
                    background: `linear-gradient(135deg, 
                      #ffffff 0%,
                      #e2e8f0 50%,
                      #cbd5e1 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
                  }}
                >
                  Welcome Back
                </span>
              </h1>
              
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8 opacity-60" />
              
              <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Your advanced healthcare platform is ready
              </p>
            </div>
            
            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <button 
                className="px-12 py-4 text-lg font-light tracking-[0.2em] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(30, 41, 59, 0.9) 0%,
                    rgba(51, 65, 85, 0.8) 100%)`,
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '2px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 2px 8px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                  color: '#e2e8f0',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                }}
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  console.log('=== DASHBOARD BUTTON CLICKED ===');
                  console.log('User object:', user);
                  console.log('User loaded:', isLoaded);
                  
                  if (user) {
                    console.log('=== DASHBOARD BUTTON CLICKED ===');
                    console.log('User metadata:', user.publicMetadata);
                    console.log('User object:', {
                      id: user.id,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      emailAddresses: user.emailAddresses.map(e => e.emailAddress),
                      publicMetadata: user.publicMetadata,
                      externalId: user.externalId
                    });
                    console.log('User loaded:', true);
                    
                    // Debug session claims
                    console.log('🔍 SESSION DEBUGGING:');
                    console.log('- User ID:', user.id);
                    console.log('- Session exists:', !!user.id);
                    console.log('- Public metadata:', JSON.stringify(user.publicMetadata, null, 2));
                    
                    const role = user.publicMetadata?.role as string | string[];
                    const clientId = user.publicMetadata?.clientId as string;
                    
                    console.log('=== USER METADATA DEBUG ===');
                    console.log('Full publicMetadata:', JSON.stringify(user.publicMetadata, null, 2));
                    console.log('Role:', role);
                    console.log('ClientId:', clientId);
                    console.log('Role type:', typeof role);
                    console.log('Role is array:', Array.isArray(role));
                    
                    // Handle multiple roles - convert to array for consistent processing
                    const roles = Array.isArray(role) ? role : (role ? [role] : []);
                    const hasRole = (checkRole: string) => roles.includes(checkRole);
                    const isAdmin = hasRole('admin');
                    const isTeam = hasRole('team');
                    const isClient = hasRole('client') || hasRole('client_team');

                    console.log('=== ROLE ANALYSIS ===');
                    console.log('Processed roles array:', roles);
                    console.log('Is Admin:', isAdmin);
                    console.log('Is Team:', isTeam);
                    console.log('Is Client:', isClient);
                    console.log('Has ClientId:', !!clientId);

                    // Priority: admin > team > client
                    if (isAdmin) {
                      console.log('🔄 REDIRECTING TO ADMIN DASHBOARD');
                      router.push('/admin');
                    } else if (isTeam) {
                      console.log('🔄 REDIRECTING TO INTERNAL DASHBOARD');
                      router.push('/internal');
                    } else if (isClient && clientId) {
                      const targetUrl = `/client/${clientId}`;
                      console.log('🔄 REDIRECTING TO CLIENT DASHBOARD:', targetUrl);
                      console.log('✅ USING NEXT.JS ROUTER NAVIGATION');
                      console.log('🔍 URL BREAKDOWN:');
                      console.log('  - Base path: /client/');
                      console.log('  - Client ID:', clientId);
                      console.log('  - Full URL:', targetUrl);
                      console.log('  - Current location:', window.location.href);
                      
                      // Use direct window navigation to bypass Clerk redirects
                      console.log('🚀 NAVIGATING NOW WITH DIRECT WINDOW.LOCATION...');
                      console.log('🔄 Direct navigation to:', targetUrl);
                      window.location.href = targetUrl;
                    } else {
                       console.log('❌ NO VALID ROLE OR CLIENT ID FOUND');
                       console.log('Attempting role assignment...');
                       
                       // Try to assign default role if none exists
                       if (!role || (Array.isArray(role) && role.length === 0)) {
                         console.log('📝 ASSIGNING DEFAULT CLIENT ROLE');
                         try {
                           const response = await fetch('/api/user/self-assign', {
                             method: 'POST',
                             headers: { 'Content-Type': 'application/json' }
                           });
                           const data = await response.json();
                           
                           console.log('API Response:', data);
                           
                           if (data.success) {
                             console.log('✅ ROLE ASSIGNED SUCCESSFULLY:', data.metadata);
                             console.log('🔄 REDIRECTING TO REFRESH PAGE...');
                             window.location.href = '/refresh?redirect_url=' + encodeURIComponent('/');
                           } else {
                             console.error('❌ FAILED TO ASSIGN ROLE:', data.error);
                             alert('Failed to assign role: ' + data.error);
                           }
                         } catch (err) {
                           console.error('❌ API ERROR:', err);
                           alert('Network error: ' + err);
                         }
                       } else {
                         console.log('🔄 REDIRECTING TO REFRESH PAGE...');
                         window.location.href = '/refresh?redirect_url=' + encodeURIComponent('/');
                       }
                     }
                  } else {
                    console.log('❌ NO USER FOUND');
                    alert('No user found. Please sign in again.');
                  }
                }}
              >
                ENTER DASHBOARD
              </button>
            </div>
          </div>
        </SignedIn>
        
        {/* Bottom Ambient Light */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        
        {/* Revolutionary CSS Animations */}
        <style jsx>{`
        @keyframes quantum-pulse {
          0% { 
            opacity: 0.2; 
            transform: scale(0.95); 
            filter: blur(2px);
          }
          25% { 
            opacity: 0.6; 
            transform: scale(1.02); 
            filter: blur(1px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.08); 
            filter: blur(0px);
          }
          75% { 
            opacity: 0.6; 
            transform: scale(1.02); 
            filter: blur(1px);
          }
          100% { 
            opacity: 0.2; 
            transform: scale(0.95); 
            filter: blur(2px);
          }
        }
        
        @keyframes gentle-float {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes subtle-glow {
          0%, 100% { 
            filter: brightness(1) saturate(1) hue-rotate(0deg); 
            box-shadow: 0 0 20px rgba(113, 11, 255, 0.3);
          }
          33% { 
            filter: brightness(1.15) saturate(1.3) hue-rotate(10deg); 
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.4);
          }
          66% { 
            filter: brightness(1.1) saturate(1.2) hue-rotate(-5deg); 
            box-shadow: 0 0 30px rgba(192, 132, 252, 0.35);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbital-dance {
          0% { 
            transform: rotate(0deg) translateX(100px) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
            opacity: 0.4;
          }
        }
        
        @keyframes infinity-pulse {
          0%, 100% { 
            stroke-width: 4;
            opacity: 0.8;
            filter: blur(1px) drop-shadow(0 0 10px rgba(139,92,246,0.5));
          }
          50% { 
            stroke-width: 6;
            opacity: 1;
            filter: blur(2px) drop-shadow(0 0 20px rgba(139,92,246,0.8));
          }
        }
        
        @keyframes infinity-flow {
          0% { opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        
        @keyframes infinity-counter-flow {
          0% { opacity: 0; transform: scale(0.3); }
          15% { opacity: 0.8; transform: scale(1); }
          85% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        
        @keyframes orbital-spin {
          0% { transform: rotate(0deg); stroke-dashoffset: 0; }
          100% { transform: rotate(360deg); stroke-dashoffset: -100; }
        }
        
        @keyframes quantum-twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(0.5);
            filter: blur(0.5px);
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.2);
            filter: blur(0px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
            filter: blur(1px);
          }
          75% { 
            opacity: 0.6; 
            transform: scale(1);
            filter: blur(0.5px);
          }
        }
        
        @keyframes ethereal-breathe {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        
        @keyframes aurora-shift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer-flow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
      </div>
    </div>
  );
}
