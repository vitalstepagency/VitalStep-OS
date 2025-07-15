'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  Rocket, 
  FileText, 
  Users, 
  BarChart3, 
  Workflow, 
  Brain, 
  Calendar, 
  Settings, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Target,
  Zap,
  Database,
  Clock,
  CheckCircle,
  TrendingUp,
  Layers
} from 'lucide-react'

const navigation = [
  {
    name: 'Operations Hub',
    href: '/internal',
    icon: Briefcase,
    badge: null,
    description: 'Main dashboard'
  },
  {
    name: 'Task Management',
    href: '/internal/tasks',
    icon: CheckCircle,
    badge: '8',
    description: 'Active tasks'
  },
  {
    name: 'Campaign Center',
    href: '/internal/campaigns',
    icon: Rocket,
    badge: '3',
    description: 'Active campaigns'
  },
  {
    name: 'Asset Library',
    href: '/internal/assets',
    icon: FileText,
    badge: null,
    description: 'Resources & files'
  },
  {
    name: 'Team Management',
    href: '/internal/team',
    icon: Users,
    badge: null,
    description: 'Team & access'
  },
  {
    name: 'Analytics',
    href: '/internal/analytics',
    icon: BarChart3,
    badge: null,
    description: 'Performance metrics'
  },
  {
    name: 'AI Toolkit',
    href: '/internal/ai',
    icon: Brain,
    badge: 'Beta',
    description: 'Poppy AI tools'
  },
  {
    name: 'Automations',
    href: '/internal/automations',
    icon: Workflow,
    badge: '12',
    description: 'Active workflows'
  },
  {
    name: 'SOP Builder',
    href: '/internal/sop',
    icon: Layers,
    badge: null,
    description: 'Process documentation'
  },
  {
    name: 'Calendar',
    href: '/internal/calendar',
    icon: Calendar,
    badge: null,
    description: 'Schedule & deadlines'
  }
]

const quickActions = [
  {
    name: 'New Task',
    icon: Target,
    count: null,
    color: 'text-cyan-400'
  },
  {
    name: 'Launch Campaign',
    icon: Rocket,
    count: null,
    color: 'text-emerald-400'
  },
  {
    name: 'AI Assistant',
    icon: Brain,
    count: null,
    color: 'text-violet-400'
  },
  {
    name: 'Quick Report',
    icon: BarChart3,
    count: null,
    color: 'text-yellow-400'
  }
]

export function InternalSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn(
      "relative flex flex-col bg-slate-900/80 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300",
      collapsed ? "w-20" : "w-80"
    )}>
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-emerald-900/10" />
      
      {/* Header */}
      <div className="relative p-6 border-b border-slate-800/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Internal Ops
              </h1>
              <p className="text-slate-400 text-sm mt-1">Agency Operations Hub</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white hover:bg-slate-800/50"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      {!collapsed && (
        <div className="relative p-6 border-b border-slate-800/50">
          <h3 className="text-slate-300 text-sm font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Button
                key={action.name}
                variant="ghost"
                className="h-auto p-3 flex flex-col items-center gap-2 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30"
              >
                <action.icon className={cn("w-5 h-5", action.color)} />
                <span className="text-xs text-slate-300">{action.name}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="relative flex-1 p-4 space-y-2">
        {!collapsed && (
          <h3 className="text-slate-300 text-sm font-medium mb-4 px-2">Navigation</h3>
        )}
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <div className={cn(
                "group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30 text-white" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                collapsed && "justify-center"
              )}>
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-r-full" />
                )}
                
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-white"
                )} />
                
                {!collapsed && (
                  <>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-400">
                        {item.description}
                      </div>
                    </div>
                    
                    {item.badge && (
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "text-xs",
                          isActive 
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" 
                            : "bg-slate-700/50 text-slate-400 border-slate-600/50"
                        )}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <div className="relative p-4 border-t border-slate-800/50">
        {!collapsed ? (
          <div className="space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800/50"
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800/50"
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </Button>
            
            <div className="p-3 bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">Team Status</span>
              </div>
              <p className="text-xs text-slate-400">8 active tasks</p>
              <p className="text-xs text-slate-500">3 campaigns running</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}