'use client'

import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MakeAdminPage() {
  const { user, isLoaded } = useUser()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const makeAdmin = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/user/make-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      
      const result = await response.json()
      
      if (result.success) {
        setMessage('✅ Admin role assigned successfully! Please refresh the page.')
        // Refresh the page after a short delay
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        setMessage(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Please sign in first</div>
      </div>
    )
  }

  const role = user.publicMetadata?.role as string | string[]
  const roles = Array.isArray(role) ? role : (role ? [role] : [])
  const isAdmin = roles.includes('admin')

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <Card className="w-full max-w-md bg-slate-900 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-center">Admin Role Assignment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-slate-300">
            <p><strong>User:</strong> {user.emailAddresses[0]?.emailAddress}</p>
            <p><strong>Current Roles:</strong> {roles.length > 0 ? roles.join(', ') : 'None'}</p>
            <p><strong>Is Admin:</strong> {isAdmin ? 'Yes' : 'No'}</p>
          </div>
          
          {!isAdmin && (
            <Button 
              onClick={makeAdmin} 
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              {loading ? 'Assigning...' : 'Make Me Admin'}
            </Button>
          )}
          
          {isAdmin && (
            <div className="text-green-400 text-center">
              ✅ You already have admin access!
            </div>
          )}
          
          {message && (
            <div className="text-sm text-center p-2 rounded bg-slate-800">
              {message}
            </div>
          )}
          
          <div className="text-xs text-slate-500 text-center">
            This is a development utility. Visit /admin after getting admin role.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}