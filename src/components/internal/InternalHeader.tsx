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
  Command, 
  Target,
  ChevronDown,
  Plus,
  CheckCircle,
  Rocket
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

const notifications = [
  {
    id: 1,
    title: 'Task deadline approaching',
    description: 'TechCorp Campaign Launch due in 2 hours',
    time: '2 hours',
    type: 'warning',
    unread: true
  },
  {
    id: 2,
    title: 'Campaign performance alert',
    description: 'Digital Dynamics campaign exceeding targets',
    time: '4 hours',
    type: 'success',
    unread: true
  },
  {
    id: 3,
    title: 'Team meeting reminder',
    description: 'Weekly standup in 30 minutes',
    time: '30 min',
    type: 'info',
    unread: false
  }
]

const quickCommands = [
  { name: 'Create New Task', shortcut: '⌘ + T' },
  { name: 'Launch Campaign', shortcut: '⌘ + L' },
  { name: 'Generate Report', shortcut: '⌘ + R' },
  { name: 'AI Assistant', shortcut: '⌘ + A' }
]

export function InternalHeader() {
  const [searchFocused, setSearchFocused] = useState(false)
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="relative bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-emerald-900/5" />
      
      <div className="relative flex items-center justify-between px-8 py-4">
        {/* Left Section - Search */}
        <div className="flex items-center gap-6 flex-1">
          <div className="relative max-w-md w-full">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search tasks, campaigns, or team..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="pl-10 pr-20 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-2 py-1 text-xs bg-slate-700/50 text-slate-400 rounded border border-slate-600/50">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Quick Command Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
                <Command className="w-4 h-4 mr-2" />
                Commands
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-slate-800/95 backdrop-blur-xl border-slate-700/50">
              <div className="p-2">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Quick Commands</h4>
                {quickCommands.map((command) => (
                  <DropdownMenuItem key={command.name} className="text-slate-300 hover:bg-slate-700/50 cursor-pointer">
                    <div className="flex items-center justify-between w-full">
                      <span>{command.name}</span>
                      <kbd className="text-xs text-slate-500">{command.shortcut}</kbd>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Center Section - Team Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/30 rounded-full border border-slate-700/30">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Team Active</span>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
              Online
            </Badge>
          </div>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center gap-4">
          {/* Team Metrics */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">8</span>
              <span className="text-slate-500">tasks</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">3</span>
              <span className="text-slate-500">campaigns</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-violet-400" />
              <span className="text-slate-300">94%</span>
              <span className="text-slate-500">efficiency</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-slate-700/50" />

          {/* Quick Actions */}
          <Button size="sm" className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white hover:bg-slate-800/50">
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
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
                          <p className="text-xs text-slate-500 mt-2">{notification.time} ago</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
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

          {/* Settings */}
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
            <Settings className="w-4 h-4" />
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-slate-200">Team Member</p>
              <p className="text-xs text-slate-400">Operations</p>
            </div>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 ring-2 ring-cyan-500/20 hover:ring-cyan-500/40 transition-all"
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}