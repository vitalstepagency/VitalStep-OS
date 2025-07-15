'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Briefcase, 
  Users, 
  Rocket, 
  FileText, 
  Zap, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Calendar,
  Plus,
  Filter,
  MoreHorizontal,
  Play,
  Pause,
  Settings,
  BarChart3,
  Workflow,
  Brain,
  Database,
  Sparkles,
  Cpu,
  Layers,
  Network,
  Orbit,
  Atom,
  Hexagon,
  Shield,
  Cog
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const tasks = [
  {
    id: 1,
    title: 'TechCorp Campaign Launch',
    description: 'Set up new lead generation funnel',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Chen',
    dueDate: '2024-12-20',
    progress: 75,
    client: 'TechCorp Solutions'
  },
  {
    id: 2,
    title: 'Digital Dynamics Onboarding',
    description: 'Complete client setup and training',
    status: 'pending',
    priority: 'medium',
    assignee: 'Mike Rodriguez',
    dueDate: '2024-12-22',
    progress: 30,
    client: 'Digital Dynamics'
  },
  {
    id: 3,
    title: 'Q4 Performance Review',
    description: 'Analyze campaign performance across all clients',
    status: 'completed',
    priority: 'low',
    assignee: 'Alex Thompson',
    dueDate: '2024-12-15',
    progress: 100,
    client: 'Internal'
  },
  {
    id: 4,
    title: 'Innovation Labs Integration',
    description: 'Connect new automation workflows',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Emma Wilson',
    dueDate: '2024-12-18',
    progress: 60,
    client: 'Innovation Labs'
  }
]

const campaigns = [
  {
    id: 1,
    name: 'TechCorp Lead Gen',
    status: 'active',
    leads: 1247,
    conversions: 89,
    budget: 5000,
    spent: 3200,
    roi: 245
  },
  {
    id: 2,
    name: 'Digital Dynamics Retargeting',
    status: 'paused',
    leads: 892,
    conversions: 67,
    budget: 3500,
    spent: 2100,
    roi: 189
  },
  {
    id: 3,
    name: 'Innovation Labs Awareness',
    status: 'active',
    leads: 2156,
    conversions: 134,
    budget: 8000,
    spent: 6400,
    roi: 312
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'in-progress': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    case 'active': return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'paused': return 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    case 'low': return 'bg-green-500/10 text-green-400 border-green-500/20'
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  }
}

export default function InternalDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Quantum Operations Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Geometry Neural Network */}
        <div className="absolute top-32 right-32 w-80 h-80 opacity-5">
          <svg viewBox="0 0 320 320" className="w-full h-full animate-spin" style={{animationDuration: '180s'}}>
            <defs>
              <linearGradient id="operationsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* Hexagonal Grid Pattern */}
            {Array.from({length: 7}, (_, row) => 
              Array.from({length: 7}, (_, col) => {
                const x = col * 40 + (row % 2) * 20 + 40
                const y = row * 35 + 40
                return (
                  <polygon
                    key={`${row}-${col}`}
                    points={`${x},${y-15} ${x+13},${y-7.5} ${x+13},${y+7.5} ${x},${y+15} ${x-13},${y+7.5} ${x-13},${y-7.5}`}
                    fill="none"
                    stroke="url(#operationsGradient)"
                    strokeWidth="0.8"
                    opacity="0.4"
                  />
                )
              })
            )}
          </svg>
        </div>
        
        {/* Floating Operational Elements */}
        <div className="absolute top-1/3 left-1/4 w-28 h-28 opacity-8 animate-float">
          <Workflow className="w-full h-full text-blue-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 opacity-8 animate-pulse">
          <Rocket className="w-full h-full text-purple-400" />
        </div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 opacity-8 animate-bounce" style={{animationDuration: '4s'}}>
          <Database className="w-full h-full text-cyan-400" />
        </div>
        
        {/* Operational Data Streams */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="operationalNode">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Operational Network Grid */}
            {Array.from({length: 15}, (_, i) => {
              const x = (i % 5) * 250 + 125
              const y = Math.floor(i / 5) * 180 + 90
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="url(#operationalNode)" className="animate-pulse" />
                  {i < 10 && (
                    <line 
                      x1={x} y1={y} 
                      x2={(i + 5) % 5 * 250 + 125} 
                      y2={Math.floor((i + 5) / 5) * 180 + 90}
                      stroke="#3b82f6" 
                      strokeWidth="0.6" 
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

      <div className="relative z-10 p-8 space-y-8">
        {/* Quantum Operations Command Center */}
        <div className="relative">
          {/* Multi-dimensional Operational Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse" style={{animationDuration: '5s'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-violet-500/10 to-blue-500/10 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '7s', animationDelay: '1.5s'}} />
          <div className="absolute inset-0 bg-gradient-conic from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl animate-spin" style={{animationDuration: '25s'}} />
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            {/* Holographic Operations Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 p-[1px]">
              <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                        OPERATIONS NEXUS
                      </h1>
                      <div className="flex items-center gap-2 mt-2">
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <p className="text-slate-300 text-lg font-medium">Neural Workflow Intelligence</p>
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-400/30 px-4 py-2 text-sm font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      12 NEURAL TASKS
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                    <Plus className="w-5 h-5 mr-2" />
                    Initialize Task
                  </Button>
                </div>
              </div>

              {/* Quantum Operations Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Active Tasks Neural Core */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-cyan-400 uppercase tracking-wider">TASK NEURAL CORE</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">{tasks.filter(t => t.status === 'in-progress').length}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-cyan-400">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-semibold">{tasks.filter(t => t.status === 'pending').length}</span>
                          </div>
                          <span className="text-xs text-slate-400">neural pending</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Campaign Quantum Field */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-emerald-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider">CAMPAIGN FIELD</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">{campaigns.filter(c => c.status === 'active').length}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-emerald-400">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">{campaigns.length}</span>
                          </div>
                          <span className="text-xs text-slate-400">quantum streams</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Team Efficiency Core */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-violet-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-violet-400 uppercase tracking-wider">EFFICIENCY CORE</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">94%</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-violet-400">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-semibold">OPTIMAL</span>
                          </div>
                          <span className="text-xs text-slate-400">neural sync</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Automation Matrix */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative bg-slate-900/90 border border-yellow-500/30 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-yellow-400 uppercase tracking-wider">AI MATRIX</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-black text-white tracking-tight">12</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Brain className="w-4 h-4" />
                            <span className="text-sm font-semibold">ACTIVE</span>
                          </div>
                          <span className="text-xs text-slate-400">neural flows</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
        </div>
      </div>

        {/* Neural Operations Command Center */}
        <div className="relative">
          {/* Quantum Aura for Tabs */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
          <div className="absolute inset-0 bg-gradient-conic from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl animate-spin" style={{animationDuration: '30s'}} />
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8">
            {/* Neural Command Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                  NEURAL OPERATIONS MATRIX
                </h2>
                <p className="text-slate-400 font-medium">Quantum-Enhanced Workflow Intelligence</p>
              </div>
            </div>

            <Tabs defaultValue="tasks" className="space-y-8">
              {/* Quantum Tab Navigation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl blur-sm" />
                <TabsList className="relative grid w-full grid-cols-4 bg-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-2 shadow-2xl">
                  <TabsTrigger 
                    value="tasks" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    NEURAL TASKS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="campaigns" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    QUANTUM CAMPAIGNS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="assets" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    ASSET MATRIX
                  </TabsTrigger>
                  <TabsTrigger 
                    value="automations" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-amber-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    AI AUTOMATIONS
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Neural Task Management */}
              <TabsContent value="tasks" className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl blur-xl" />
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Neural Task Command</h3>
                          <p className="text-slate-400 text-sm">Quantum-Enhanced Workflow Management</p>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        <Plus className="w-4 h-4 mr-2" />
                        Initialize Neural Task
                      </Button>
                    </div>

                    {/* Neural Task Grid */}
                    <div className="grid gap-6">
                      {tasks.map((task) => (
                        <div key={task.id} className="group relative">
                          <div className={`absolute inset-0 rounded-2xl blur-lg transition-all duration-500 ${
                            task.status === 'completed' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' :
                            task.status === 'in-progress' ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20' :
                            'bg-gradient-to-r from-slate-500/20 to-gray-500/20'
                          }`} />
                          <Card className={`relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 ${
                            task.status === 'completed' ? 'border border-green-500/30 group-hover:border-green-400/50' :
                            task.status === 'in-progress' ? 'border border-yellow-500/30 group-hover:border-yellow-400/50' :
                            'border border-slate-600/30 group-hover:border-slate-500/50'
                          }`}>
                            <div className={`absolute inset-0 ${
                              task.status === 'completed' ? 'bg-gradient-to-br from-green-500/5 to-transparent' :
                              task.status === 'in-progress' ? 'bg-gradient-to-br from-yellow-500/5 to-transparent' :
                              'bg-gradient-to-br from-slate-500/5 to-transparent'
                            }`} />
                            <CardContent className="p-6 relative z-10">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className={`w-4 h-4 rounded-full shadow-lg ${
                                    task.status === 'completed' ? 'bg-green-400 shadow-green-400/50 animate-pulse' :
                                    task.status === 'in-progress' ? 'bg-yellow-400 shadow-yellow-400/50 animate-pulse' :
                                    'bg-slate-400 shadow-slate-400/50'
                                  }`} />
                                  <div>
                                    <h4 className="font-bold text-white text-lg">{task.title}</h4>
                                    <p className="text-slate-300 font-medium">{task.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Badge variant="outline" className={`font-semibold px-3 py-1 ${
                                    task.priority === 'high' ? 'border-red-400/50 text-red-300 bg-red-500/10' :
                                    task.priority === 'medium' ? 'border-yellow-400/50 text-yellow-300 bg-yellow-500/10' :
                                    'border-green-400/50 text-green-300 bg-green-500/10'
                                  }`}>
                                    {task.priority.toUpperCase()}
                                  </Badge>
                                  <div className="flex items-center gap-2">
                                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-6">
                                <div className="flex items-center justify-between text-sm font-medium mb-3">
                                  <span className="text-slate-300">Neural Progress</span>
                                  <span className={`${
                                    task.status === 'completed' ? 'text-green-400' :
                                    task.status === 'in-progress' ? 'text-yellow-400' :
                                    'text-slate-400'
                                  }`}>{task.progress}%</span>
                                </div>
                                <div className="relative">
                                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full transition-all duration-1000 ${
                                        task.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                        task.status === 'in-progress' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
                                        'bg-gradient-to-r from-slate-500 to-gray-500'
                                      }`}
                                      style={{ width: `${task.progress}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="campaigns">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-green-600/10 rounded-2xl blur-xl" />
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Quantum Campaign Matrix</h3>
                        <p className="text-slate-400 text-sm">Neural Marketing Intelligence</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {campaigns.map((campaign) => (
                        <div key={campaign.id} className="group relative">
                          <div className={`absolute inset-0 rounded-2xl blur-lg transition-all duration-500 ${
                            campaign.status === 'active' ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20' :
                            'bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                          }`} />
                          <Card className={`relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 ${
                            campaign.status === 'active' ? 'border border-emerald-500/30 group-hover:border-emerald-400/50' :
                            'border border-orange-500/30 group-hover:border-orange-400/50'
                          }`}>
                            <div className={`absolute inset-0 ${
                              campaign.status === 'active' ? 'bg-gradient-to-br from-emerald-500/5 to-transparent' :
                              'bg-gradient-to-br from-orange-500/5 to-transparent'
                            }`} />
                            <CardContent className="p-6 relative z-10">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <h3 className="text-white font-bold text-lg">{campaign.name}</h3>
                                  <Badge variant="outline" className={getStatusColor(campaign.status)}>
                                    {campaign.status.toUpperCase()}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg">
                                    {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg">
                                    <Settings className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div>
                                  <p className="text-slate-400 text-sm font-medium">Neural Leads</p>
                                  <p className="text-white font-bold text-lg">{campaign.leads.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm font-medium">Conversions</p>
                                  <p className="text-emerald-400 font-bold text-lg">{campaign.conversions}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm font-medium">Budget</p>
                                  <p className="text-white font-bold text-lg">${campaign.budget.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm font-medium">Spent</p>
                                  <p className="text-yellow-400 font-bold text-lg">${campaign.spent.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400 text-sm font-medium">Quantum ROI</p>
                                  <p className="text-green-400 font-bold text-lg">{campaign.roi}%</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="assets">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-2xl blur-xl" />
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">Neural Asset Matrix</h3>
                        <p className="text-slate-400 text-sm">Quantum Resource Intelligence</p>
                      </div>
                    </div>

                    <div className="text-center py-16">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
                        <FileText className="relative w-20 h-20 text-violet-400 mx-auto mb-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Neural Asset Management System</h3>
                      <p className="text-slate-400 text-lg">Quantum-enhanced asset library and version control initializing...</p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automations">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-2xl blur-xl" />
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">AI Automation Nexus</h3>
                        <p className="text-slate-400 text-sm">Neural Workflow Intelligence</p>
                      </div>
                    </div>

                    <div className="text-center py-16">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl" />
                        <Workflow className="relative w-20 h-20 text-yellow-400 mx-auto mb-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Neural Automation Hub</h3>
                      <p className="text-slate-400 text-lg">AI-powered quantum workflow automation deploying...</p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
    </div>
  )
}