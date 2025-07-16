'use client'

import { useUser } from '@clerk/nextjs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp,
  DollarSign,
  UserPlus,
  Users,
  Brain,
  Sparkles,
  Activity,
  ArrowUpRight
} from 'lucide-react'

// Dashboard metrics data
const dashboardMetrics = {
  revenueLastMonth: 847250,
  monthlyRecurringRevenue: 125000,
  newCustomers: 23,
  totalCustomers: 156
}

export default function AdminDashboard() {
  const { isLoaded } = useUser()

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
            INITIALIZING NEXUS
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Transcendent Quantum Reality Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 via-indigo-950/20 to-slate-900" />
        
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="adminGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#adminGrid)" />
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5 animate-float">
          <Brain className="w-full h-full text-violet-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-5 animate-pulse">
          <Activity className="w-full h-full text-cyan-400" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 opacity-5 animate-bounce" style={{animationDuration: '3s'}}>
          <Sparkles className="w-full h-full text-emerald-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 p-8 space-y-8">
        {/* Transcendent Header */}
        <div className="relative">
          {/* Ethereal Aura */}
          <div className="absolute -inset-8 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.15))',
                animation: 'ethereal-drift 20s linear infinite',
                filter: 'blur(40px)'
              }}
            />
          </div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    {/* Holographic Logo */}
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 via-purple-600/20 to-cyan-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                        <Brain className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                      </div>
                    </div>
                    
                    <div>
                      <h1 className="text-6xl font-black tracking-tight">
                        <span 
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
                            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.1))'
                          }}
                        >
                          NEXUS
                        </span>
                        <span className="text-3xl font-thin tracking-[0.3em] ml-4"
                          style={{
                            background: `linear-gradient(135deg, 
                              #a855f7 0%,
                              #c084fc 25%,
                              #e879f9 50%,
                              #f0abfc 75%,
                              #fae8ff 100%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          COMMAND
                        </span>
                      </h1>
                      <div className="flex items-center gap-3 mt-3">
                        <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                        <p className="text-slate-300 text-xl font-light tracking-wide">Quantum User Management System</p>
                        <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                    <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-400/30 px-4 py-2 text-sm font-medium">
                      <Activity className="w-4 h-4 mr-2" />
                      NEXUS OPERATIONAL
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    Client Management
                  </Button>
                </div>
              </div>

              {/* Transcendent Metrics Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    label: 'Revenue Last Month', 
                    value: `$${(dashboardMetrics.revenueLastMonth / 1000).toFixed(0)}K`, 
                    icon: TrendingUp, 
                    color: 'from-emerald-500 to-green-500',
                    trend: '+12.5%'
                  },
                  { 
                    label: 'Monthly Recurring Revenue', 
                    value: `$${(dashboardMetrics.monthlyRecurringRevenue / 1000).toFixed(0)}K`, 
                    icon: DollarSign, 
                    color: 'from-violet-500 to-purple-500',
                    trend: '+8.2%'
                  },
                  { 
                    label: 'New Customers', 
                    value: dashboardMetrics.newCustomers, 
                    icon: UserPlus, 
                    color: 'from-cyan-500 to-blue-500',
                    trend: '+15.3%'
                  },
                  { 
                    label: 'Total Customers', 
                    value: dashboardMetrics.totalCustomers, 
                    icon: Users, 
                    color: 'from-amber-500 to-orange-500',
                    trend: '+6.7%'
                  }
                ].map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div key={index} className="group relative">
                      {/* Ethereal Aura */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${metric.color}/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100`} />
                      
                      <Card className="relative bg-slate-900/95 border border-slate-700/30 backdrop-blur-3xl rounded-3xl overflow-hidden group-hover:border-slate-600/40 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                        {/* Holographic Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${metric.color}/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        
                        {/* Quantum Border Effect */}
                        <div className="absolute inset-0 rounded-3xl">
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${metric.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm`} />
                        </div>
                        
                        <CardContent className="p-8 relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                {metric.trend}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="text-4xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500">
                              {metric.value}
                            </div>
                            <div className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors duration-500">
                              {metric.label}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Transcendent Call-to-Action */}
        <div className="relative mt-16">
          {/* Ethereal Background */}
          <div className="absolute -inset-8 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-cyan-600/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-slate-900/90 backdrop-blur-3xl border border-slate-700/30 rounded-3xl p-12 text-center">
            {/* Holographic Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-slate-900/95 rounded-3xl" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-black tracking-tight">
                  <span 
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
                      filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.1))'
                    }}
                  >
                    TRANSCENDENT
                  </span>
                  <span className="block text-3xl font-thin tracking-[0.3em] mt-2"
                    style={{
                      background: `linear-gradient(135deg, 
                        #a855f7 0%,
                        #c084fc 25%,
                        #e879f9 50%,
                        #f0abfc 75%,
                        #fae8ff 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    SIMPLICITY
                  </span>
                </h2>
                
                <p className="text-xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
                  Experience the pinnacle of administrative excellence. Every metric, every insight, crafted with unparalleled precision.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
                  <ArrowUpRight className="w-6 h-6 mr-3" />
                  Manage Clients
                </Button>
                
                <Button variant="outline" className="border-slate-600/50 text-slate-300 hover:bg-slate-800/50 px-8 py-4 rounded-2xl font-semibold">
                  <Activity className="w-6 h-6 mr-3" />
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes ethereal-drift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes aurora-shift {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        .animate-float {
          animation: gentle-float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}