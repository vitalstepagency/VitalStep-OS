'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2, 
  DollarSign, 
  Calendar, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Building,
  Mail,
  Phone,
  Globe,
  Settings,
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
  Zap,
  Target
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const clients = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    email: 'admin@techcorp.com',
    phone: '+1 (555) 123-4567',
    website: 'techcorp.com',
    plan: 'Enterprise',
    status: 'active',
    revenue: 12500,
    growth: 23,
    joinDate: '2024-01-15',
    lastActivity: '2 hours ago',
    campaigns: 8,
    conversions: 156,
    industry: 'Technology'
  },
  {
    id: '2',
    name: 'Digital Dynamics',
    email: 'contact@digitaldynamics.com',
    phone: '+1 (555) 234-5678',
    website: 'digitaldynamics.com',
    plan: 'Growth',
    status: 'active',
    revenue: 9800,
    growth: 18,
    joinDate: '2024-02-03',
    lastActivity: '1 day ago',
    campaigns: 5,
    conversions: 89,
    industry: 'Marketing'
  },
  {
    id: '3',
    name: 'Innovation Labs',
    email: 'hello@innovationlabs.io',
    phone: '+1 (555) 345-6789',
    website: 'innovationlabs.io',
    plan: 'Growth',
    status: 'warning',
    revenue: 8200,
    growth: -5,
    joinDate: '2023-11-20',
    lastActivity: '3 days ago',
    campaigns: 12,
    conversions: 203,
    industry: 'SaaS'
  },
  {
    id: '4',
    name: 'Future Systems',
    email: 'info@futuresystems.net',
    phone: '+1 (555) 456-7890',
    website: 'futuresystems.net',
    plan: 'Enterprise',
    status: 'active',
    revenue: 7600,
    growth: 31,
    joinDate: '2024-03-10',
    lastActivity: '5 hours ago',
    campaigns: 6,
    conversions: 134,
    industry: 'Fintech'
  },
  {
    id: '5',
    name: 'Quantum Ventures',
    email: 'team@quantumventures.co',
    phone: '+1 (555) 567-8901',
    website: 'quantumventures.co',
    plan: 'Starter',
    status: 'trial',
    revenue: 6900,
    growth: 12,
    joinDate: '2024-04-01',
    lastActivity: '1 hour ago',
    campaigns: 3,
    conversions: 45,
    industry: 'E-commerce'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'warning': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    case 'trial': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'inactive': return 'bg-red-500/10 text-red-400 border-red-500/20'
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
}

const getPlanColor = (plan: string) => {
  switch (plan) {
    case 'Enterprise': return 'bg-violet-500/10 text-violet-400 border-violet-500/20'
    case 'Growth': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    case 'Starter': return 'bg-green-500/10 text-green-400 border-green-500/20'
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
}

export default function ClientManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Quantum Client Management Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Geometry Client Network */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-4">
          <svg viewBox="0 0 384 384" className="w-full h-full animate-spin" style={{animationDuration: '300s'}}>
            <defs>
              <linearGradient id="clientMgmtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {/* Client Management Hexagonal Grid */}
            {Array.from({length: 37}, (_, i) => {
              const row = Math.floor(i / 6)
              const col = i % 6
              const offsetX = (row % 2) * 30
              const x = col * 60 + offsetX + 50
              const y = row * 52 + 50
              return (
                <polygon
                  key={i}
                  points={`${x},${y-20} ${x+17},${y-10} ${x+17},${y+10} ${x},${y+20} ${x-17},${y+10} ${x-17},${y-10}`}
                  fill="none"
                  stroke="url(#clientMgmtGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              )
            })}
          </svg>
        </div>
        
        {/* Floating Client Management Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-6 animate-float">
          <Users className="w-full h-full text-blue-400" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-6 animate-pulse">
          <Crown className="w-full h-full text-purple-400" />
        </div>
        <div className="absolute top-2/3 left-1/3 w-28 h-28 opacity-6 animate-bounce" style={{animationDuration: '6s'}}>
          <Shield className="w-full h-full text-cyan-400" />
        </div>
        
        {/* Client Success Network */}
        <div className="absolute inset-0 opacity-2">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="clientNode">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Client Network Nodes */}
            {Array.from({length: 15}, (_, i) => {
              const x = (i % 5) * 250 + 125
              const y = Math.floor(i / 5) * 180 + 90
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="8" fill="url(#clientNode)" className="animate-pulse" />
                  {i < 10 && (
                    <line 
                      x1={x} y1={y} 
                      x2={(i + 5) % 5 * 250 + 125} 
                      y2={Math.floor((i + 5) / 5) * 180 + 90}
                      stroke="#3b82f6" 
                      strokeWidth="1" 
                      opacity="0.4"
                      className="animate-pulse"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Quantum Client Command Center */}
        <div className="relative">
          {/* Multi-dimensional Client Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 via-purple-500/20 to-cyan-500/25 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '7s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-violet-500/15 to-emerald-500/15 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}} />
          <div className="absolute inset-0 bg-gradient-conic from-blue-500/8 via-purple-500/8 to-cyan-500/8 rounded-3xl blur-xl animate-spin" style={{animationDuration: '40s'}} />
          
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
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                        CLIENT NEXUS COMMAND
                      </h1>
                      <div className="flex items-center gap-2 mt-2">
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <p className="text-slate-300 text-lg font-medium">Neural Client Management Matrix</p>
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  <Plus className="w-5 h-5 mr-2" />
                  Neural Client Genesis
                </Button>
              </div>

              {/* Neural Search Matrix */}
              <div className="flex items-center gap-6">
                <div className="relative flex-1 max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 z-10" />
                    <Input
                      placeholder="Neural Client Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-3 bg-slate-800/80 border border-slate-600/50 text-white placeholder:text-slate-400 rounded-xl backdrop-blur-sm focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all duration-300"
                    />
                  </div>
                </div>
                <Button variant="outline" className="border-slate-600/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold">
                  <Filter className="w-4 h-4 mr-2" />
                  Quantum Filter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Client Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Clients Neural Core */}
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
                    <div className="text-xs font-medium text-blue-400 uppercase tracking-wider">NEURAL CLIENTS</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white tracking-tight">{clients.length}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-blue-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+3</span>
                    </div>
                    <span className="text-xs text-slate-400">quantum month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Clients Quantum Field */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <Card className="relative bg-slate-900/90 border border-green-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-green-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-green-400 uppercase tracking-wider">ACTIVE NEURAL</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white tracking-tight">{clients.filter(c => c.status === 'active').length}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-green-400">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-semibold">94%</span>
                    </div>
                    <span className="text-xs text-slate-400">retention rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Quantum Core */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <Card className="relative bg-slate-900/90 border border-green-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-green-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-green-400 uppercase tracking-wider">REVENUE CORE</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white tracking-tight">
                    ${clients.reduce((sum, client) => sum + client.revenue, 0).toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+12%</span>
                    </div>
                    <span className="text-xs text-slate-400">quantum month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Quantum Matrix */}
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
                    <div className="text-xs font-medium text-violet-400 uppercase tracking-wider">GROWTH MATRIX</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white tracking-tight">
                    {Math.round(clients.reduce((sum, client) => sum + client.growth, 0) / clients.length)}%
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-violet-400">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">OPTIMAL</span>
                    </div>
                    <span className="text-xs text-slate-400">neural average</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      {/* Client List */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-slate-800/50 border border-slate-700/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-violet-600">All Clients</TabsTrigger>
          <TabsTrigger value="active" className="data-[state=active]:bg-violet-600">Active</TabsTrigger>
          <TabsTrigger value="trial" className="data-[state=active]:bg-violet-600">Trial</TabsTrigger>
          <TabsTrigger value="warning" className="data-[state=active]:bg-violet-600">Needs Attention</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">All Clients</CardTitle>
              <CardDescription className="text-slate-400">
                Complete overview of all client accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div key={client.id} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {client.name.charAt(0)}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-white font-semibold text-lg">{client.name}</h3>
                            <Badge variant="outline" className={getPlanColor(client.plan)}>
                              {client.plan}
                            </Badge>
                            <Badge variant="outline" className={getStatusColor(client.status)}>
                              {client.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {client.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Building className="w-3 h-3" />
                              {client.industry}
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {client.website}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-8">
                        <div className="text-right">
                          <div className="text-white font-semibold">${client.revenue.toLocaleString()}</div>
                          <div className={`text-sm flex items-center gap-1 ${
                            client.growth > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            <TrendingUp className="w-3 h-3" />
                            {client.growth > 0 ? '+' : ''}{client.growth}%
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-white font-semibold">{client.campaigns} campaigns</div>
                          <div className="text-sm text-slate-400">{client.conversions} conversions</div>
                        </div>

                        <div className="text-right">
                          <div className="text-white font-semibold">Joined</div>
                          <div className="text-sm text-slate-400">{new Date(client.joinDate).toLocaleDateString()}</div>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-slate-800 border-slate-700">
                            <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                              <Eye className="w-4 h-4 mr-2" />
                              View Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Client
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                              <Settings className="w-4 h-4 mr-2" />
                              Manage Access
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400 hover:bg-red-900/20">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove Client
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">Active Clients</h3>
                <p className="text-slate-500">Showing {clients.filter(c => c.status === 'active').length} active clients</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trial">
          <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">Trial Clients</h3>
                <p className="text-slate-500">Showing {clients.filter(c => c.status === 'trial').length} trial clients</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warning">
          <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">Clients Needing Attention</h3>
                <p className="text-slate-500">Showing {clients.filter(c => c.status === 'warning').length} clients that need attention</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}