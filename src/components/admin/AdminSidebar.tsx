'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield, 
  Bell, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Activity,
  Database,
  Workflow,
  CreditCard,
  UserCheck,
  Building,
  Briefcase
} from 'lucide-react'

const navigation = [
  {
    name: 'Overview',
    href: '/admin',
    icon: LayoutDashboard,
    badge: null,
    description: 'Command center'
  },
  {
    name: 'Client Management',
    href: '/admin/clients',
    icon: Users,
    badge: '47',
    description: 'Manage all clients'
  },
  {
    name: 'Internal Access',
    href: '/internal',
    icon: Building,
    badge: null,
    description: 'Internal operations'
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    badge: null,
    description: 'Performance insights'
  },
  {
    name: 'Billing & Revenue',
    href: '/admin/billing',
    icon: CreditCard,
    badge: null,
    description: 'Financial overview'
  },
  {
    name: 'User Management',
    href: '/admin/users',
    icon: UserCheck,
    badge: null,
    description: 'Team & permissions'
  },
  {
    name: 'System Health',
    href: '/admin/system',
    icon: Activity,
    badge: '99.9%',
    description: 'Infrastructure status'
  },
  {
    name: 'Integrations',
    href: '/admin/integrations',
    icon: Workflow,
    badge: '12',
    description: 'Connected services'
  },
  {
    name: 'Security',
    href: '/admin/security',
    icon: Shield,
    badge: null,
    description: 'Access & compliance'
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    badge: null,
    description: 'System configuration'
  }
]

const quickActions = [
  {
    name: 'Notifications',
    icon: Bell,
    count: 3,
    color: 'text-blue-400'
  },
  {
    name: 'Database',
    icon: Database,
    count: null,
    color: 'text-green-400'
  },
  {
    name: 'AI Engine',
    icon: Zap,
    count: null,
    color: 'text-yellow-400'
  },
  {
    name: 'Global Status',
    icon: Globe,
    count: null,
    color: 'text-violet-400'
  }
]

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn(
      "relative flex flex-col bg-slate-900/80 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300",
      collapsed ? "w-20" : "w-80"
    )}>
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-cyan-900/10" />
      
      {/* Header */}
      <div className="relative p-6 border-b border-slate-800/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                VitalStep OS
              </h1>
              <p className="text-slate-400 text-sm mt-1">Admin Control Center</p>
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
                {action.count && (
                  <Badge variant="secondary" className="text-xs bg-red-500/20 text-red-400 border-red-500/30">
                    {action.count}
                  </Badge>
                )}
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
                  ? "bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 text-white" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                collapsed && "justify-center"
              )}>
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-r-full" />
                )}
                
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-violet-400" : "text-slate-400 group-hover:text-white"
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
                            ? "bg-violet-500/20 text-violet-300 border-violet-500/30" 
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
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </Button>
            
            <div className="p-3 bg-gradient-to-r from-violet-900/20 to-cyan-900/20 rounded-xl border border-violet-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400">System Status</span>
              </div>
              <p className="text-xs text-slate-400">All systems operational</p>
              <p className="text-xs text-slate-500">99.9% uptime</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}