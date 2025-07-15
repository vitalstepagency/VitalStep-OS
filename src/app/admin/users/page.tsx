'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useUser } from '@clerk/nextjs'
import { Users, UserPlus, Shield, Settings } from 'lucide-react'

export default function UserManagement() {
  const { user } = useUser()
  const [adminForm, setAdminForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const [roleForm, setRoleForm] = useState({
    userId: '',
    role: 'client',
    clientId: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const createAdmin = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminForm)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setMessage('Admin user created successfully!')
        setAdminForm({ email: '', password: '', firstName: '', lastName: '' })
      } else {
        setMessage(`Error: ${result.error}`)
      }
    } catch (error) {
      setMessage('Failed to create admin user')
    }
    
    setLoading(false)
  }

  const assignRole = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/user/assign-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetUserId: roleForm.userId,
          role: [roleForm.role],
          clientId: roleForm.clientId || undefined
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setMessage('Role assigned successfully!')
        setRoleForm({ userId: '', role: 'client', clientId: '' })
      } else {
        setMessage(`Error: ${result.error}`)
      }
    } catch (error) {
      setMessage('Failed to assign role')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10">
          <svg viewBox="0 0 384 384" className="w-full h-full animate-spin" style={{animationDuration: '200s'}}>
            <circle cx="192" cy="192" r="150" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.3" />
            <circle cx="192" cy="192" r="100" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
            <circle cx="192" cy="192" r="50" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Users className="w-10 h-10 text-violet-400" />
              User Management
            </h1>
            <p className="text-slate-400">Manage users, roles, and permissions</p>
            {user && (
              <Badge variant="outline" className="mt-2 border-violet-500/30 text-violet-300">
                Current User: {user.emailAddresses[0]?.emailAddress} | Role: {(user.publicMetadata?.role as string[])?.join(', ') || 'No role'}
              </Badge>
            )}
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${message.includes('Error') ? 'bg-red-900/20 border border-red-500/30 text-red-300' : 'bg-green-900/20 border border-green-500/30 text-green-300'}`}>
              {message}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Admin User */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-violet-400" />
                  Create Admin User
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Create a new user with admin privileges
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Email"
                  type="email"
                  value={adminForm.email}
                  onChange={(e) => setAdminForm({...adminForm, email: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={adminForm.password}
                  onChange={(e) => setAdminForm({...adminForm, password: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="First Name"
                    value={adminForm.firstName}
                    onChange={(e) => setAdminForm({...adminForm, firstName: e.target.value})}
                    className="bg-slate-800/50 border-slate-600/50 text-white"
                  />
                  <Input
                    placeholder="Last Name"
                    value={adminForm.lastName}
                    onChange={(e) => setAdminForm({...adminForm, lastName: e.target.value})}
                    className="bg-slate-800/50 border-slate-600/50 text-white"
                  />
                </div>
                <Button 
                  onClick={createAdmin} 
                  disabled={loading || !adminForm.email || !adminForm.password}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  {loading ? 'Creating...' : 'Create Admin'}
                </Button>
              </CardContent>
            </Card>

            {/* Assign Role */}
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-400" />
                  Assign Role
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Assign roles to existing users
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="User ID (from Clerk Dashboard)"
                  value={roleForm.userId}
                  onChange={(e) => setRoleForm({...roleForm, userId: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white"
                />
                <select
                  value={roleForm.role}
                  onChange={(e) => setRoleForm({...roleForm, role: e.target.value})}
                  className="w-full p-2 bg-slate-800/50 border border-slate-600/50 rounded-md text-white"
                >
                  <option value="client">Client</option>
                  <option value="admin">Admin</option>
                  <option value="team">Team</option>
                  <option value="client_team">Client Team</option>
                </select>
                <Input
                  placeholder="Client ID (optional, for client roles)"
                  value={roleForm.clientId}
                  onChange={(e) => setRoleForm({...roleForm, clientId: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white"
                />
                <Button 
                  onClick={assignRole} 
                  disabled={loading || !roleForm.userId}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {loading ? 'Assigning...' : 'Assign Role'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-8 bg-slate-900/30 border-slate-700/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Setup Instructions</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <div>
                <h3 className="font-semibold text-violet-300 mb-2">1. Webhook Setup (for automatic client role assignment):</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Go to Clerk Dashboard → Webhooks</li>
                  <li>Create endpoint: <code className="bg-slate-800 px-2 py-1 rounded">http://localhost:3004/api/webhooks/clerk</code></li>
                  <li>Subscribe to: <code className="bg-slate-800 px-2 py-1 rounded">user.created</code> event</li>
                  <li>Copy webhook secret to .env.local as CLERK_WEBHOOK_SECRET</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">2. Current Status:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>✅ API routes created</li>
                  <li>✅ Role-based routing implemented</li>
                  <li>⚠️ Webhook secret needs to be configured</li>
                  <li>⚠️ Test the complete authentication flow</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}