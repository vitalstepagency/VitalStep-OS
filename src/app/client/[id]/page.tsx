'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  BarChart3,
  Calendar,
  Download,
  ExternalLink,
  Play,
  Pause,
  Settings,
  Bell,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  DollarSign,
  Activity,
  Brain,
  Sparkles,
  Cpu,
  Layers,
  Network,
  Orbit,
  Atom,
  Hexagon,
  Shield,
  Rocket,
  Crown,
  Diamond,
  MessageSquare
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 45000, leads: 320, conversions: 48 },
  { month: 'Feb', revenue: 52000, leads: 380, conversions: 62 },
  { month: 'Mar', revenue: 48000, leads: 350, conversions: 55 },
  { month: 'Apr', revenue: 61000, leads: 420, conversions: 73 },
  { month: 'May', revenue: 58000, leads: 390, conversions: 68 },
  { month: 'Jun', revenue: 67000, leads: 450, conversions: 82 }
]

const campaignData = [
  { name: 'Social Media', value: 35, color: '#06b6d4' },
  { name: 'Email Marketing', value: 25, color: '#8b5cf6' },
  { name: 'Content Marketing', value: 20, color: '#10b981' },
  { name: 'Paid Ads', value: 15, color: '#f59e0b' },
  { name: 'SEO', value: 5, color: '#ef4444' }
]

const activeCampaigns = [
  {
    id: 1,
    name: 'Summer Product Launch',
    status: 'active',
    progress: 78,
    budget: 25000,
    spent: 19500,
    leads: 342,
    conversions: 28,
    roi: 245,
    startDate: '2024-06-01',
    endDate: '2024-07-15'
  },
  {
    id: 2,
    name: 'Brand Awareness Campaign',
    status: 'active',
    progress: 45,
    budget: 15000,
    spent: 6750,
    leads: 189,
    conversions: 15,
    roi: 178,
    startDate: '2024-06-15',
    endDate: '2024-08-01'
  },
  {
    id: 3,
    name: 'Retargeting Campaign',
    status: 'paused',
    progress: 92,
    budget: 8000,
    spent: 7360,
    leads: 156,
    conversions: 23,
    roi: 312,
    startDate: '2024-05-01',
    endDate: '2024-06-30'
  }
]

const recentActivities = [
  {
    id: 1,
    type: 'campaign_update',
    title: 'Campaign performance improved',
    description: 'Summer Product Launch campaign ROI increased by 12%',
    time: '2 hours ago',
    icon: TrendingUp,
    color: 'text-emerald-400'
  },
  {
    id: 2,
    type: 'lead_generated',
    title: 'New qualified lead',
    description: 'High-value prospect from Brand Awareness campaign',
    time: '4 hours ago',
    icon: Users,
    color: 'text-cyan-400'
  },
  {
    id: 3,
    type: 'conversion',
    title: 'Conversion milestone reached',
    description: 'Retargeting campaign hit 25 conversions',
    time: '6 hours ago',
    icon: Target,
    color: 'text-violet-400'
  }
]

export default function ClientDashboard({ params }: { params: { id: string } }) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6m')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Quantum Client Experience Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Geometry Client Network */}
        <div className="absolute top-20 left-20 w-96 h-96 opacity-4">
          <svg viewBox="0 0 384 384" className="w-full h-full animate-spin" style={{animationDuration: '240s'}}>
            <defs>
              <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#8b5cf6" />
                <stop offset="66%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            {/* Flower of Life Pattern */}
            {Array.from({length: 19}, (_, i) => {
              const angle = (i * 360 / 19) * (Math.PI / 180)
              const radius = 80
              const centerX = 192
              const centerY = 192
              const x = centerX + Math.cos(angle) * radius
              const y = centerY + Math.sin(angle) * radius
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="40"
                  fill="none"
                  stroke="url(#clientGradient)"
                  strokeWidth="1.2"
                  opacity="0.6"
                />
              )
            })}
            <circle cx="192" cy="192" r="40" fill="none" stroke="url(#clientGradient)" strokeWidth="1.2" opacity="0.8" />
          </svg>
        </div>
        
        {/* Floating Client Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-6 animate-float">
          <Crown className="w-full h-full text-blue-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 opacity-6 animate-pulse">
          <Diamond className="w-full h-full text-purple-400" />
        </div>
        <div className="absolute top-2/3 right-1/3 w-28 h-28 opacity-6 animate-bounce" style={{animationDuration: '5s'}}>
          <Shield className="w-full h-full text-cyan-400" />
        </div>
        
        {/* Client Success Constellation */}
        <div className="absolute inset-0 opacity-2">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="clientStar">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Success Constellation */}
            {Array.from({length: 12}, (_, i) => {
              const x = (i % 4) * 300 + 150
              const y = Math.floor(i / 4) * 200 + 100
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="6" fill="url(#clientStar)" className="animate-pulse" />
                  {i < 8 && (
                    <line 
                      x1={x} y1={y} 
                      x2={(i + 4) % 4 * 300 + 150} 
                      y2={Math.floor((i + 4) / 4) * 200 + 100}
                      stroke="#3b82f6" 
                      strokeWidth="0.8" 
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

      <div className="relative z-10 p-8">
        {/* Quantum Client Command Center */}
        <div className="relative mb-8">
          {/* Multi-dimensional Client Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 via-purple-500/20 to-cyan-500/25 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-violet-500/15 to-blue-500/15 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}} />
          <div className="absolute inset-0 bg-gradient-conic from-blue-500/8 via-purple-500/8 to-cyan-500/8 rounded-3xl blur-xl animate-spin" style={{animationDuration: '35s'}} />
          
          <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            {/* Holographic Client Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/25 via-transparent to-purple-500/25 p-[1px]">
              <div className="w-full h-full bg-slate-900/95 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                        CLIENT NEXUS
                      </h1>
                      <div className="flex items-center gap-2 mt-2">
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <p className="text-slate-300 text-lg font-medium">Quantum Performance Intelligence</p>
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                    <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-400/30 px-4 py-2 text-sm font-medium">
                      <Activity className="w-4 h-4 mr-2" />
                      NEURAL CAMPAIGN ACTIVE
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Neural Support
                  </Button>
                </div>
              </div>

              {/* Quantum Client Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Neural Lead Generation */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-blue-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-blue-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-blue-400 uppercase tracking-wider">NEURAL LEADS</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">2,341</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-blue-400">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">+8.2%</span>
                          </div>
                          <span className="text-xs text-slate-400">quantum growth</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Conversion Quantum Field */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-green-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-green-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-green-400 uppercase tracking-wider">CONVERSIONS</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">4.8%</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-green-400">
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="text-sm font-semibold">+0.3%</span>
                          </div>
                          <span className="text-xs text-slate-400">neural rate</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Revenue Quantum Core */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-yellow-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-yellow-400 uppercase tracking-wider">REVENUE CORE</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">$331K</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-yellow-400">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">+12.5%</span>
                          </div>
                          <span className="text-xs text-slate-400">quantum period</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* ROI Quantum Matrix */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-purple-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-purple-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-purple-400 uppercase tracking-wider">ROI MATRIX</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">245%</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-purple-400">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-semibold">+18%</span>
                          </div>
                          <span className="text-xs text-slate-400">neural targets</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Analytics Command Center */}
        <div className="relative">
          {/* Cosmic Analytics Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/15 via-purple-500/10 to-cyan-500/15 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-500/10 to-emerald-500/10 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '12s', animationDelay: '3s'}} />
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/40 rounded-3xl p-8 shadow-2xl">
            {/* Neural Analytics Matrix Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                    NEURAL ANALYTICS MATRIX
                  </h2>
                  <p className="text-slate-400 font-medium">Quantum Intelligence Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="border-slate-600/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50 backdrop-blur-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Neural Data
                </Button>
                <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Neural Consultation
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/60 border border-slate-600/30 backdrop-blur-xl rounded-2xl p-2">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 text-slate-300 hover:text-white transition-all duration-300 rounded-xl font-semibold"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Neural Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="campaigns" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 text-slate-300 hover:text-white transition-all duration-300 rounded-xl font-semibold"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Quantum Campaigns
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 text-slate-300 hover:text-white transition-all duration-300 rounded-xl font-semibold"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Neural Analytics
                </TabsTrigger>
                <TabsTrigger 
                  value="reports" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-white transition-all duration-300 rounded-xl font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Quantum Reports
                </TabsTrigger>
              </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Trend */}
            <Card className="lg:col-span-2 bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Revenue & Performance Trend</CardTitle>
                <CardDescription className="text-slate-400">
                  Track your revenue growth and campaign performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="conversionsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #334155',
                          borderRadius: '8px',
                          color: '#f1f5f9'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        fill="url(#revenueGradient)" 
                        name="Revenue ($)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="conversions" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        fill="url(#conversionsGradient)" 
                        name="Conversions"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Distribution */}
            <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Campaign Distribution</CardTitle>
                <CardDescription className="text-slate-400">
                  Performance breakdown by channel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={campaignData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {campaignData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #334155',
                          borderRadius: '8px',
                          color: '#f1f5f9'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {campaignData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-slate-300">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-slate-400">
                Latest updates and milestones from your campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <div className={`w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center ${activity.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{activity.title}</h4>
                        <p className="text-sm text-slate-400 mt-1">{activity.description}</p>
                        <p className="text-xs text-slate-500 mt-2">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6">
            {activeCampaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                      <Badge 
                        variant={campaign.status === 'active' ? 'default' : 'secondary'}
                        className={campaign.status === 'active' 
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Progress</p>
                      <div className="mt-2">
                        <Progress value={campaign.progress} className="h-2" />
                        <p className="text-sm text-white mt-1">{campaign.progress}%</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Budget</p>
                      <p className="text-sm text-white mt-2">${campaign.budget.toLocaleString()}</p>
                      <p className="text-xs text-slate-400">${campaign.spent.toLocaleString()} spent</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Leads</p>
                      <p className="text-sm text-white mt-2">{campaign.leads}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Conversions</p>
                      <p className="text-sm text-white mt-2">{campaign.conversions}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">ROI</p>
                      <p className="text-sm text-emerald-400 mt-2">{campaign.roi}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Duration</p>
                      <p className="text-sm text-white mt-2">{campaign.startDate}</p>
                      <p className="text-xs text-slate-400">to {campaign.endDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
            <p className="text-slate-400 mb-6">Detailed performance insights and predictive analytics coming soon</p>
            <Button className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700">
              Request Analytics Access
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="text-center py-12">
            <Download className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Custom Reports</h3>
            <p className="text-slate-400 mb-6">Generate detailed reports tailored to your business needs</p>
            <Button className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700">
              Generate Report
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}