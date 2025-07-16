'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search,
  Filter,
  Users,
  Crown,
  Shield,
  Eye,
  MoreVertical,
  Sparkles,
  UserCheck,
  Clock,
  AlertTriangle,
  Plus,
  Building2,
  Target,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
  BarChart3,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

// Mock client data - will be replaced with real Clerk data
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@techcorp.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    role: 'client',
    clientId: '1',
    joinDate: '2024-01-15',
    lastActive: '2 hours ago',
    revenue: 125000,
    campaigns: 8,
    createdAt: Date.now() - 86400000 * 100,
    updatedAt: Date.now()
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'marcus.r@innovate.io',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    status: 'trial',
    role: 'client',
    clientId: '2',
    joinDate: '2024-02-20',
    lastActive: '1 day ago',
    revenue: 0,
    campaigns: 2,
    createdAt: Date.now() - 86400000 * 60,
    updatedAt: Date.now()
  },
  {
    id: '3',
    name: 'Emily Watson',
    email: 'emily.watson@startup.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    status: 'needs_attention',
    role: 'client',
    clientId: '3',
    joinDate: '2024-01-08',
    lastActive: '5 days ago',
    revenue: 89000,
    campaigns: 5,
    createdAt: Date.now() - 86400000 * 150,
    updatedAt: Date.now()
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@enterprise.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    role: 'client',
    clientId: '4',
    joinDate: '2023-11-12',
    lastActive: '30 minutes ago',
    revenue: 245000,
    campaigns: 12,
    createdAt: Date.now() - 86400000 * 200,
    updatedAt: Date.now()
  }
]

interface Client {
  id: string
  name: string
  email: string
  avatar: string
  status: ClientStatus
  role: string
  clientId: string
  revenue: number
  campaigns: number
  joinDate: string
  lastActive: string
  createdAt: number
  updatedAt: number
  // Onboarding data
  companyName?: string
  industry?: string
  challenges?: string[]
  objectives?: string
  timeline?: string
  budget?: string
  onboardingCompleted?: boolean
  onboardingStep?: number
  onboardingProgress?: OnboardingProgressItem[]
  userDetails?: {
    firstName?: string
    lastName?: string
    imageUrl?: string
    lastSignInAt?: number
  }
}

interface OnboardingProgressItem {
  id: string
  step: number
  data: any
  completedAt: string
}

type ClientStatus = 'all' | 'active' | 'trial' | 'needs_attention'

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    case 'trial':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    case 'needs_attention':
      return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <UserCheck className="w-4 h-4" />
    case 'trial':
      return <Clock className="w-4 h-4" />
    case 'needs_attention':
      return <AlertTriangle className="w-4 h-4" />
    default:
      return <Users className="w-4 h-4" />
  }
}

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus>('all')
  const [clients, setClients] = useState<Client[]>(mockClients)
  const [loading, setLoading] = useState(false)

  // Fetch real onboarding data
  useEffect(() => {
    const fetchOnboardingData = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/admin/onboarding-data')
        if (response.ok) {
          const data = await response.json()
          
          // Transform the data to match our Client interface
          const transformedClients = data.data.map((profile: any) => ({
            id: profile.id,
            name: profile.userDetails ? 
              `${profile.userDetails.firstName || ''} ${profile.userDetails.lastName || ''}`.trim() || 'Unknown User' :
              'Unknown User',
            email: profile.userDetails?.emailAddresses?.[0]?.emailAddress || 'No email',
            avatar: profile.userDetails?.imageUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            status: profile.onboardingCompleted ? 'active' : 'trial',
            role: 'client',
            clientId: profile.clientId,
            revenue: profile.metrics?.revenue || 0,
            campaigns: profile.metrics?.campaigns || 0,
            joinDate: new Date(profile.createdAt).toLocaleDateString(),
            lastActive: profile.userDetails?.lastSignInAt ? 
              new Date(profile.userDetails.lastSignInAt).toLocaleDateString() : 'Never',
            createdAt: new Date(profile.createdAt).getTime(),
            updatedAt: new Date(profile.updatedAt).getTime(),
            // Onboarding specific data
            companyName: profile.companyName,
            industry: profile.industry,
            challenges: profile.challenges || [],
            objectives: profile.objectives,
            timeline: profile.timeline,
            budget: profile.budget,
            onboardingCompleted: profile.onboardingCompleted,
            onboardingStep: profile.onboardingStep,
            onboardingProgress: profile.onboardingProgress,
            userDetails: profile.userDetails
          }))
          
          setClients(transformedClients)
        } else {
          console.error('Failed to fetch onboarding data:', response.statusText)
          // Keep mock data as fallback
          setClients(mockClients)
        }
      } catch (error) {
        console.error('Error fetching onboarding data:', error)
        // Keep mock data as fallback
        setClients(mockClients)
      } finally {
        setLoading(false)
      }
    }

    fetchOnboardingData()
  }, [])

  // Update client status based on onboarding completion
  const updatedClients = clients.map(client => ({
    ...client,
    status: client.onboardingCompleted ? 'active' : 
           (client.onboardingStep && client.onboardingStep > 1) ? 'needs_attention' : 'trial'
  }))

  const filteredClients = updatedClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (client.companyName && client.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus
    
    return matchesSearch && matchesStatus
  })

  const statusCounts = {
    all: clients.length,
    active: clients.filter(c => c.onboardingCompleted).length,
    trial: clients.filter(c => !c.onboardingCompleted).length,
    needs_attention: clients.filter(c => !c.onboardingCompleted && (c.onboardingStep || 1) > 1).length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400 text-lg">Loading clients...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
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

        {/* Onboarding Statistics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-400 text-sm font-medium">Completed Onboarding</p>
                  <p className="text-3xl font-bold text-white">{statusCounts.active}</p>
                  <p className="text-green-300 text-xs">
                    {clients.length > 0 ? Math.round((statusCounts.active / clients.length) * 100) : 0}% completion rate
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-400 text-sm font-medium">In Progress</p>
                  <p className="text-3xl font-bold text-white">{statusCounts.trial}</p>
                  <p className="text-blue-300 text-xs">Active onboarding</p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-400 text-sm font-medium">Needs Attention</p>
                  <p className="text-3xl font-bold text-white">{statusCounts.needs_attention}</p>
                  <p className="text-amber-300 text-xs">Stalled progress</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-400 text-sm font-medium">Total Clients</p>
                  <p className="text-3xl font-bold text-white">{clients.length}</p>
                  <p className="text-purple-300 text-xs">All registered</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client Status Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Status Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Clients', count: statusCounts.all },
                { key: 'active', label: 'Completed Onboarding', count: statusCounts.active },
                { key: 'trial', label: 'In Progress', count: statusCounts.trial },
                { key: 'needs_attention', label: 'Needs Attention', count: statusCounts.needs_attention }
              ].map((status) => (
                <Button
                  key={status.key}
                  variant={selectedStatus === status.key ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus(status.key as ClientStatus)}
                  className={`${
                    selectedStatus === status.key
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
                      : 'border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-500/50'
                  } transition-all duration-300`}
                >
                  {status.label}
                  <Badge className="ml-2 bg-white/20 text-white border-0">
                    {status.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Search and Filter Controls */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-slate-900/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <Button variant="outline" className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <Card key={client.id} className="bg-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={client.avatar}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-slate-700/50"
                      />
                      <div className="absolute -bottom-1 -right-1">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${getStatusColor(client.status)}`}>
                          {getStatusIcon(client.status)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {client.email}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(client.status)}>
                      {client.status.replace('_', ' ').charAt(0).toUpperCase() + client.status.replace('_', ' ').slice(1)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-slate-400">Revenue</p>
                      <p className="text-white font-semibold">${client.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Campaigns</p>
                      <p className="text-white font-semibold">{client.campaigns}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700/50">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Joined {new Date(client.joinDate).toLocaleDateString()}</span>
                      <span>Active {client.lastActive}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          {client.name} - Client Details
                        </DialogTitle>
                      </DialogHeader>
                      
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                          <TabsTrigger value="overview" className="text-slate-300 data-[state=active]:text-white">Overview</TabsTrigger>
                          <TabsTrigger value="onboarding" className="text-slate-300 data-[state=active]:text-white">Onboarding</TabsTrigger>
                          <TabsTrigger value="progress" className="text-slate-300 data-[state=active]:text-white">Progress</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="overview" className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="bg-slate-800/50 border-slate-700">
                              <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                  <Building2 className="w-5 h-5 text-cyan-400" />
                                  Company Information
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <p className="text-slate-400 text-sm">Company Name</p>
                                  <p className="text-white font-semibold">{client.companyName || 'Not provided'}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm">Industry</p>
                                  <p className="text-white font-semibold">{client.industry || 'Not provided'}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm">Email</p>
                                  <p className="text-white font-semibold">{client.email}</p>
                                </div>
                              </CardContent>
                            </Card>
                            
                            <Card className="bg-slate-800/50 border-slate-700">
                              <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                  <BarChart3 className="w-5 h-5 text-purple-400" />
                                  Performance Metrics
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <p className="text-slate-400 text-sm">Revenue</p>
                                  <p className="text-white font-semibold">${client.revenue.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm">Campaigns</p>
                                  <p className="text-white font-semibold">{client.campaigns}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm">Status</p>
                                  <Badge className={getStatusColor(client.status)}>
                                    {client.status.replace('_', ' ').charAt(0).toUpperCase() + client.status.replace('_', ' ').slice(1)}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="onboarding" className="space-y-6">
                          <div className="grid grid-cols-1 gap-6">
                            <Card className="bg-slate-800/50 border-slate-700">
                              <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                  <Target className="w-5 h-5 text-green-400" />
                                  Onboarding Responses
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Objectives</p>
                                    <p className="text-white bg-slate-700/50 p-3 rounded-lg">
                                      {client.objectives || 'Not provided'}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Timeline</p>
                                    <p className="text-white bg-slate-700/50 p-3 rounded-lg">
                                      {client.timeline || 'Not provided'}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Budget</p>
                                    <p className="text-white bg-slate-700/50 p-3 rounded-lg">
                                      {client.budget || 'Not provided'}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Completion Status</p>
                                    <div className="flex items-center gap-2">
                                      {client.onboardingCompleted ? (
                                        <><CheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-green-400 font-semibold">Completed</span></>
                                      ) : (
                                        <><XCircle className="w-5 h-5 text-amber-400" />
                                        <span className="text-amber-400 font-semibold">In Progress (Step {client.onboardingStep || 1})</span></>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {client.challenges && Array.isArray(client.challenges) && client.challenges.length > 0 && (
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Challenges</p>
                                    <div className="flex flex-wrap gap-2">
                                      {client.challenges.map((challenge, index) => (
                                        <Badge key={index} className="bg-red-500/20 text-red-400 border-red-500/30">
                                          {challenge}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="progress" className="space-y-6">
                          <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                              <CardTitle className="text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-blue-400" />
                                Onboarding Progress Timeline
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              {client.onboardingProgress && client.onboardingProgress.length > 0 ? (
                                <div className="space-y-6">
                                  {/* Progress Overview */}
                                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                                    <div className="flex items-center justify-between mb-3">
                                      <h3 className="text-white font-semibold">Progress Overview</h3>
                                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                        {client.onboardingProgress.length} Steps Completed
                                      </Badge>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                      <div 
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${Math.min((client.onboardingProgress.length / 5) * 100, 100)}%` }}
                                      />
                                    </div>
                                    <p className="text-slate-300 text-sm mt-2">
                                      {client.onboardingCompleted ? 'Onboarding completed successfully!' : `Step ${client.onboardingStep || client.onboardingProgress.length} of 5`}
                                    </p>
                                  </div>

                                  {/* Step Details */}
                                  <div className="space-y-4">
                                    {client.onboardingProgress.map((progress, index) => {
                                      const getStepTitle = (step) => {
                                        switch(step) {
                                          case 1: return 'Welcome & Introduction'
                                          case 2: return 'Company Information'
                                          case 3: return 'Business Objectives'
                                          case 4: return 'Project Requirements'
                                          case 5: return 'Final Review'
                                          default: return `Step ${step}`
                                        }
                                      }

                                      const getStepDescription = (step, data) => {
                                        try {
                                          const parsedData = typeof data === 'string' ? JSON.parse(data) : data
                                          switch(step) {
                                            case 1: return 'Initial setup and welcome process completed'
                                            case 2: return `Company details provided: ${parsedData?.companyName || 'Information collected'}`
                                            case 3: return `Business objectives defined: ${parsedData?.objectives || 'Goals established'}`
                                            case 4: return `Project requirements specified: ${parsedData?.timeline || 'Requirements documented'}`
                                            case 5: return 'Final review and confirmation completed'
                                            default: return 'Step completed successfully'
                                          }
                                        } catch {
                                          return 'Step completed successfully'
                                        }
                                      }

                                      return (
                                        <div key={progress.id} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                                          <div className="relative">
                                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                              <CheckCircle className="w-5 h-5" />
                                            </div>
                                            {index < client.onboardingProgress.length - 1 && (
                                              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-green-500 to-slate-600" />
                                            )}
                                          </div>
                                          <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                              <h4 className="text-white font-semibold text-lg">{getStepTitle(progress.step)}</h4>
                                              <div className="flex items-center gap-2">
                                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                                  Completed
                                                </Badge>
                                                <span className="text-slate-400 text-sm">
                                                  {new Date(progress.completedAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                  })}
                                                </span>
                                              </div>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                              {getStepDescription(progress.step, progress.data)}
                                            </p>
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              ) : (
                                <div className="text-center py-12">
                                  <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-slate-500" />
                                  </div>
                                  <h3 className="text-slate-400 font-semibold mb-2">No Progress Data</h3>
                                  <p className="text-slate-500 text-sm">This client hasn't started the onboarding process yet.</p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">No clients found</h3>
            <p className="text-slate-500">Try adjusting your search criteria or check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}