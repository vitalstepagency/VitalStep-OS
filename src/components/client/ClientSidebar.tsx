'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BarChart3, 
  Target, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  Home,
  TrendingUp,
  MessageSquare,
  Bell,
  Download,
  Zap,
  Star,
  Activity,
  Rocket,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const navigationItems = [
  {
    title: 'Overview',
    href: '',
    icon: Home,
    badge: null,
    description: 'Dashboard overview'
  },
  {
    title: 'Campaigns',
    href: '/campaigns',
    icon: Rocket,
    badge: '3',
    description: 'Active campaigns'
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    badge: null,
    description: 'Performance insights'
  },
  {
    title: 'Leads',
    href: '/leads',
    icon: Users,
    badge: '24',
    description: 'Lead management'
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: FileText,
    badge: null,
    description: 'Custom reports'
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
    badge: '2',
    description: 'Scheduled meetings'
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageSquare,
    badge: '5',
    description: 'Team communication'
  }
]

const quickActions = [
  {
    title: 'Schedule Meeting',
    icon: Calendar,
    color: 'from-cyan-500 to-blue-500',
    description: 'Book a strategy session'
  },
  {
    title: 'Download Report',
    icon: Download,
    color: 'from-emerald-500 to-teal-500',
    description: 'Export latest analytics'
  },
  {
    title: 'Contact Support',
    icon: HelpCircle,
    color: 'from-violet-500 to-purple-500',
    description: 'Get help from our team'
  }
]

export function ClientSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const params = useParams()
  const pathname = usePathname()
  const clientId = params.id as string

  const isActive = (href: string) => {
    const fullPath = `/client/${clientId}${href}`
    return pathname === fullPath
  }

  return (
    <div className={`relative bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-80'
    }`}>
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-emerald-900/5" />
      
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800/50">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Client Portal
                </h2>
                <p className="text-sm text-slate-400 mt-1">Your marketing command center</p>
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
          <div className="p-6 border-b border-slate-800/50">
            <h3 className="text-sm font-medium text-slate-300 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start p-3 h-auto text-left hover:bg-slate-800/30 group"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200">{action.title}</p>
                      <p className="text-xs text-slate-400">{action.description}</p>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 p-6">
          <div className="space-y-2">
            {!collapsed && (
              <h3 className="text-sm font-medium text-slate-300 mb-4">Navigation</h3>
            )}
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon
              const active = isActive(item.href)
              
              return (
                <Link key={index} href={`/client/${clientId}${item.href}`}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start transition-all duration-200 ${
                      collapsed ? 'px-3' : 'px-4'
                    } ${
                      active 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <IconComponent className={`w-5 h-5 ${
                        active ? 'text-cyan-400' : 'text-slate-400'
                      }`} />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="bg-slate-700/50 text-slate-300 text-xs px-2 py-0.5"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </div>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        {!collapsed && (
          <div className="p-6 border-t border-slate-800/50">
            <h3 className="text-sm font-medium text-slate-300 mb-4">Performance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-sm text-slate-300">Campaign Health</span>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                  Excellent
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-slate-300">ROI Trend</span>
                </div>
                <span className="text-sm font-medium text-cyan-400">+12.5%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-slate-300">Engagement</span>
                </div>
                <span className="text-sm font-medium text-violet-400">High</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-6 border-t border-slate-800/50">
          <div className="flex items-center gap-3">
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-200">VitalStep OS</p>
                <p className="text-xs text-slate-400">Client Dashboard v2.0</p>
              </div>
            )}
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}