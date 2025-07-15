'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  Zap, 
  Globe, 
  Shield, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Settings,
  Plus,
  Brain,
  Sparkles,
  Cpu,
  Layers,
  Network,
  Orbit,
  Atom,
  Hexagon
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 45000, clients: 12 },
  { month: 'Feb', revenue: 52000, clients: 15 },
  { month: 'Mar', revenue: 48000, clients: 14 },
  { month: 'Apr', revenue: 61000, clients: 18 },
  { month: 'May', revenue: 55000, clients: 16 },
  { month: 'Jun', revenue: 67000, clients: 20 },
]

const clientDistribution = [
  { name: 'Enterprise', value: 45, color: '#8b5cf6' },
  { name: 'Growth', value: 35, color: '#06b6d4' },
  { name: 'Starter', value: 20, color: '#10b981' },
]

const topClients = [
  { name: 'TechCorp Solutions', revenue: 12500, growth: 23, status: 'active' },
  { name: 'Digital Dynamics', revenue: 9800, growth: 18, status: 'active' },
  { name: 'Innovation Labs', revenue: 8200, growth: -5, status: 'warning' },
  { name: 'Future Systems', revenue: 7600, growth: 31, status: 'active' },
  { name: 'Quantum Ventures', revenue: 6900, growth: 12, status: 'active' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Geometry Patterns */}
        <div className="absolute top-20 left-20 w-96 h-96 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{animationDuration: '120s'}}>
            <defs>
              <linearGradient id="cosmicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            {/* Flower of Life Pattern */}
            {Array.from({length: 19}, (_, i) => {
              const angle = (i * 360 / 19) * (Math.PI / 180)
              const radius = 60
              const cx = 200 + Math.cos(angle) * radius
              const cy = 200 + Math.sin(angle) * radius
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="40"
                  fill="none"
                  stroke="url(#cosmicGradient1)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              )
            })}
            <circle cx="200" cy="200" r="40" fill="none" stroke="url(#cosmicGradient1)" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10 animate-float">
          <Hexagon className="w-full h-full text-violet-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-10 animate-pulse">
          <Atom className="w-full h-full text-cyan-400" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 opacity-10 animate-bounce" style={{animationDuration: '3s'}}>
          <Orbit className="w-full h-full text-emerald-400" />
        </div>
        
        {/* Neural Network Visualization */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="nodeGradient">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Neural Network Nodes */}
            {Array.from({length: 12}, (_, i) => {
              const x = (i % 4) * 300 + 150
              const y = Math.floor(i / 4) * 200 + 100
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="3" fill="url(#nodeGradient)" className="animate-pulse" />
                  {i < 8 && (
                    <line 
                      x1={x} y1={y} 
                      x2={(i + 4) % 4 * 300 + 150} 
                      y2={Math.floor((i + 4) / 4) * 200 + 100}
                      stroke="#8b5cf6" 
                      strokeWidth="0.5" 
                      opacity="0.3"
                      className="animate-pulse"
                    />
                  )}
                </g>
              )
            })}
          </svg>
          </div>
        </div>

      <div className="relative z-10 p-8 space-y-8">
        {/* Transcendent Hero Section */}
        <div className="relative">
          {/* Multi-layered Cosmic Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-500/15 to-emerald-500/20 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-teal-500/10 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}} />
          <div className="absolute inset-0 bg-gradient-conic from-violet-500/5 via-cyan-500/5 to-emerald-500/5 rounded-3xl blur-xl animate-spin" style={{animationDuration: '20s'}} />
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 via-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-5xl font-black bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">
                        COMMAND NEXUS
                      </h1>
                      <div className="flex items-center gap-2 mt-2">
                        <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                        <p className="text-slate-300 text-lg font-medium">Quantum Enterprise Operations</p>
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-300 border-emerald-400/30 px-4 py-2 text-sm font-medium">
                      <Activity className="w-4 h-4 mr-2" />
                      NEXUS OPERATIONAL
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
                    <Plus className="w-5 h-5 mr-2" />
                    Initialize Client
                  </Button>
                </div>
              </div>

              {/* Quantum Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Revenue Quantum Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider">REVENUE NEXUS</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">$328,000</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-emerald-400">
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="text-sm font-semibold">+12.5%</span>
                          </div>
                          <span className="text-xs text-slate-400">quantum growth</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Clients Quantum Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-cyan-400 uppercase tracking-wider">CLIENT MATRIX</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">47</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-cyan-400">
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="text-sm font-semibold">+3</span>
                          </div>
                          <span className="text-xs text-slate-400">neural connections</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Conversion Quantum Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-violet-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-violet-400 uppercase tracking-wider">CONVERSION FIELD</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">24.8%</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-violet-400">
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="text-sm font-semibold">+2.1%</span>
                          </div>
                          <span className="text-xs text-slate-400">optimization</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* System Health Quantum Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-yellow-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                          <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-yellow-400 uppercase tracking-wider">SYSTEM CORE</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">99.9%</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold">OPTIMAL</span>
                          </div>
                          <span className="text-xs text-slate-400">quantum state</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
        </div>
      </div>

        {/* Quantum Analytics Command Center */}
        <div className="relative mt-12">
          {/* Cosmic Analytics Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/15 via-cyan-500/10 to-emerald-500/15 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '5s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-blue-500/8 to-teal-500/8 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}} />
          
          <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-slate-700/40 rounded-3xl p-8 shadow-2xl">
            {/* Neural Network Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">
                  NEURAL ANALYTICS MATRIX
                </h2>
                <p className="text-slate-400 text-sm font-medium">Real-time quantum intelligence streams</p>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="space-y-8">
              {/* Quantum Tab Navigation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl" />
                <TabsList className="relative grid w-full grid-cols-4 bg-slate-800/60 backdrop-blur-xl border border-slate-600/40 rounded-2xl p-2 shadow-2xl">
                  <TabsTrigger 
                    value="overview" 
                    className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:via-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    OVERVIEW
                  </TabsTrigger>
                  <TabsTrigger 
                    value="clients" 
                    className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:via-blue-600 data-[state=active]:to-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    CLIENTS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="revenue" 
                    className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:via-green-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    REVENUE
                  </TabsTrigger>
                  <TabsTrigger 
                    value="performance" 
                    className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:via-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    PERFORMANCE
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* OVERVIEW TAB - Quantum Data Streams */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Revenue Quantum Stream */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <Card className="relative bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-violet-400/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                              <BarChart3 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-white font-black text-lg tracking-tight">REVENUE QUANTUM STREAM</CardTitle>
                              <p className="text-violet-400 text-xs font-medium uppercase tracking-wider">Neural Revenue Analysis</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse shadow-lg shadow-violet-400/50" />
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10 pt-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent rounded-xl" />
                          <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={revenueData}>
                              <defs>
                                <linearGradient id="quantumRevenue" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                                  <stop offset="50%" stopColor="#a855f7" stopOpacity={0.2}/>
                                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                              <XAxis dataKey="month" stroke="#A78BFA" fontSize={12} fontWeight={600} />
                              <YAxis stroke="#A78BFA" fontSize={12} fontWeight={600} />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                                  border: '1px solid rgba(139, 92, 246, 0.3)',
                                  borderRadius: '12px',
                                  backdropFilter: 'blur(20px)',
                                  boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
                                }} 
                              />
                              <Area 
                                type="monotone" 
                                dataKey="revenue" 
                                stroke="#8b5cf6" 
                                fill="url(#quantumRevenue)" 
                                strokeWidth={3}
                                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2, fill: '#FFFFFF' }}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Client Distribution Quantum Matrix */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <Card className="relative bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                              <Globe className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-white font-black text-lg tracking-tight">CLIENT DISTRIBUTION MATRIX</CardTitle>
                              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider">Quantum Tier Analysis</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10 pt-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl" />
                          <div className="flex items-center justify-center">
                            <ResponsiveContainer width="100%" height={250}>
                              <PieChart>
                                <Pie
                                  data={clientDistribution}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={100}
                                  paddingAngle={5}
                                  dataKey="value"
                                >
                                  {clientDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                                    border: '1px solid rgba(6, 182, 212, 0.3)',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(20px)',
                                    boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25)'
                                  }} 
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="flex justify-center gap-6 mt-6">
                            {clientDistribution.map((item) => (
                              <div key={item.name} className="flex items-center gap-3 bg-slate-800/40 rounded-xl px-4 py-2 border border-slate-700/30">
                                <div 
                                  className="w-4 h-4 rounded-full shadow-lg" 
                                  style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}40` }}
                                />
                                <div className="text-center">
                                  <div className="text-sm font-semibold text-white">{item.name}</div>
                                  <div className="text-xs text-slate-400">{item.value}%</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
          </div>

                {/* Top Performing Clients Quantum Leaderboard */}
                <div className="lg:col-span-2 group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-green-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white font-black text-lg tracking-tight">QUANTUM CLIENT LEADERBOARD</CardTitle>
                            <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Elite Performance Matrix</p>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <div className="space-y-4">
                        {topClients.map((client, index) => (
                          <div key={client.name} className="group/item relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl blur-sm group-hover/item:blur-md transition-all duration-300" />
                            <div className="relative flex items-center justify-between p-6 bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/40 group-hover/item:border-emerald-500/30 transition-all duration-300">
                              <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg ${
                                  index === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-600 shadow-yellow-500/25' :
                                  index === 1 ? 'bg-gradient-to-br from-slate-400 to-slate-600 shadow-slate-500/25' :
                                  index === 2 ? 'bg-gradient-to-br from-amber-600 to-yellow-700 shadow-amber-600/25' :
                                  'bg-gradient-to-br from-violet-500 to-cyan-500 shadow-violet-500/25'
                                }`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="text-white font-bold text-lg tracking-tight">{client.name}</h4>
                                  <div className="flex items-center gap-3 mt-1">
                                    <p className="text-emerald-400 text-sm font-semibold">${client.revenue.toLocaleString()}</p>
                                    <span className="text-slate-500 text-xs">•</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-wider">Revenue Nexus</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-6">
                                <div className={`flex items-center gap-2 px-3 py-1 rounded-lg font-semibold text-sm ${
                                  client.growth > 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                }`}>
                                  {client.growth > 0 ? (
                                    <ArrowUpRight className="w-4 h-4" />
                                  ) : (
                                    <ArrowDownRight className="w-4 h-4" />
                                  )}
                                  {Math.abs(client.growth)}%
                                </div>
                                <Badge 
                                  variant={client.status === 'active' ? 'default' : 'destructive'}
                                  className={client.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-3 py-1 font-semibold' : 'bg-red-500/10 text-red-400 border-red-500/30 px-3 py-1 font-semibold'}
                                >
                                  {client.status.toUpperCase()}
                                </Badge>
                                <Button size="sm" className="bg-slate-700/50 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* CLIENT ANALYTICS TAB */}
              <TabsContent value="clients" className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white font-black text-lg tracking-tight">CLIENT NEURAL ANALYTICS</CardTitle>
                          <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider">Advanced Intelligence Matrix</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <Users className="w-12 h-12 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">QUANTUM CLIENT INTELLIGENCE</h3>
                        <p className="text-slate-400 text-lg font-medium">Neural network client insights initializing...</p>
                        <div className="flex justify-center gap-2 mt-6">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* REVENUE ANALYTICS TAB */}
              <TabsContent value="revenue" className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-green-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white font-black text-lg tracking-tight">REVENUE QUANTUM INTELLIGENCE</CardTitle>
                          <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Financial Neural Network</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <DollarSign className="w-12 h-12 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">FINANCIAL NEXUS CORE</h3>
                        <p className="text-slate-400 text-lg font-medium">Quantum revenue forecasting algorithms loading...</p>
                        <div className="flex justify-center gap-2 mt-6">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* PERFORMANCE TAB */}
              <TabsContent value="performance" className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 to-orange-600/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-yellow-500/30 backdrop-blur-xl rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white font-black text-lg tracking-tight">PERFORMANCE QUANTUM CORE</CardTitle>
                          <p className="text-yellow-400 text-xs font-medium uppercase tracking-wider">System Neural Metrics</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <Activity className="w-12 h-12 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">NEURAL PERFORMANCE MATRIX</h3>
                        <p className="text-slate-400 text-lg font-medium">Real-time quantum metrics synchronizing...</p>
                        <div className="flex justify-center gap-2 mt-6">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}