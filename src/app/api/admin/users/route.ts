import { NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get current user to check if they're admin
    const currentUser = await clerkClient.users.getUser(userId)
    const currentUserRoles = currentUser.publicMetadata?.role as string[] || []
    
    // Check if user is admin
    const isAdmin = Array.isArray(currentUserRoles) 
      ? currentUserRoles.includes('admin')
      : currentUserRoles === 'admin'
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    // Fetch all users from Clerk
    const users = await clerkClient.users.getUserList({
      limit: 100, // Adjust as needed
      orderBy: '-created_at'
    })

    // Transform users to match our client interface
    const transformedUsers = users.data.map(user => {
      const role = user.publicMetadata?.role as string | string[]
      const clientId = user.publicMetadata?.clientId as string
      const roles = Array.isArray(role) ? role : (role ? [role] : [])
      
      // Determine primary status
      let status = 'active'
      if (roles.includes('trial')) status = 'trial'
      if (roles.includes('needs_attention')) status = 'needs_attention'
      
      return {
        id: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
        email: user.emailAddresses[0]?.emailAddress || 'No email',
        avatar: user.imageUrl || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`,
        status,
        role: roles[0] || 'client',
        clientId: clientId || user.id,
        revenue: Math.floor(Math.random() * 50000) + 10000, // Mock revenue for now
        campaigns: Math.floor(Math.random() * 10) + 1, // Mock campaigns
        joinDate: new Date(user.createdAt).toLocaleDateString(),
        lastActive: Math.random() > 0.3 ? 'Online' : `${Math.floor(Math.random() * 7) + 1}d ago`,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    })

    return NextResponse.json({ users: transformedUsers })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}