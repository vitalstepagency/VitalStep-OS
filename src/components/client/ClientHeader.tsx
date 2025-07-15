'use client'

import { useState } from 'react'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Bell, 
  Settings, 
  Calendar, 
  Download, 
  MessageSquare,
  ChevronDown,
  Star,
  TrendingUp,
  Target,
  Users,
  ExternalLink,
  HelpCircle,
  Zap
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

const notifications = [
  {
    id: 1,
    title: 'Campaign milestone reached',
    description: 'Summer Product Launch hit 75% completion',
    time: '1 hour ago',
    type: 'success',
    unread: true
  },
  {
    id: 2,
    title: 'New lead generated',
    description: 'High-value prospect from Brand Awareness campaign',
    time: '3 hours ago',
    type: 'info',
    unread: true
  },
  {
    id: 3,
    title: 'Meeting reminder',
    description: 'Strategy session with your account manager tomorrow',
    time: '5 hours ago',
    type: 'warning',
    unread: false
  }
]

const quickActions = [
  { name: 'Schedule Meeting', icon: Calendar },
  { name: 'Download Report', icon: Download },
  { name: 'Contact Support', icon: MessageSquare },
  { name: 'View Analytics', icon: TrendingUp }
]

export function ClientHeader() {
  const [searchFocused, setSearchFocused] = useState(false)
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="relative bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />
      
      <div className="relative flex items-center justify-between px-8 py-4">
        {/* Left Section - Search */}
        <div className="flex items-center gap-6 flex-1">
          <div className="relative max-w-md w-full">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search campaigns, reports, or analytics..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="pl-10 pr-20 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-purple-500/50 focus:ring-purple-500/20"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-2 py-1 text-xs bg-slate-700/50 text-slate-400 rounded border border-slate-600/50">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Quick Actions Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
                <Zap className="w-4 h-4 mr-2" />
                Quick Actions
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800/95 backdrop-blur-xl border-slate-700/50">
              <div className="p-2">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Quick Actions</h4>
                {quickActions.map((action) => {
                  const IconComponent = action.icon
                  return (
                    <DropdownMenuItem key={action.name} className="text-slate-300 hover:bg-slate-700/50 cursor-pointer">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {action.name}
                    </DropdownMenuItem>
                  )
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Center Section - Account Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/30 rounded-full border border-slate-700/30">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Account Active</span>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
              Premium
            </Badge>
          </div>
        </div>

        {/* Right Section - Metrics & Profile */}
        <div className="flex items-center gap-4">
          {/* Performance Metrics */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300">4.8%</span>
              <span className="text-slate-500">conversion</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">245%</span>
              <span className="text-slate-500">ROI</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">2.3K</span>
              <span className="text-slate-500">leads</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-slate-700/50" />

          {/* Action Buttons */}
          <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>

          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white hover:bg-slate-800/50">
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-purple-500 text-white text-xs flex items-center justify-center">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-slate-800/95 backdrop-blur-xl border-slate-700/50">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-slate-300">Notifications</h4>
                  <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-white">
                    Mark all read
                  </Button>
                </div>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-3 rounded-lg border transition-colors ${
                      notification.unread 
                        ? 'bg-slate-700/30 border-slate-600/50' 
                        : 'bg-slate-800/30 border-slate-700/30'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-emerald-400' :
                          notification.type === 'warning' ? 'bg-yellow-400' :
                          'bg-cyan-400'
                        }`} />
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-slate-200">{notification.title}</h5>
                          <p className="text-xs text-slate-400 mt-1">{notification.description}</p>
                          <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <DropdownMenuSeparator className="my-3 bg-slate-700/50" />
                <Button variant="ghost" className="w-full text-sm text-slate-400 hover:text-white">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help */}
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
            <HelpCircle className="w-4 h-4" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
            <Settings className="w-4 h-4" />
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-slate-200">Client User</p>
              <p className="text-xs text-slate-400">Premium Account</p>
            </div>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all"
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}