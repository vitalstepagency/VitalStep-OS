import { NextRequest, NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { targetUserId, role, clientId } = await req.json()
    
    if (!targetUserId || !role) {
      return NextResponse.json({ error: 'User ID and role are required' }, { status: 400 })
    }

    // Get current user to check if they're admin
    const currentUser = await clerkClient.users.getUser(userId)
    const currentUserRoles = currentUser.publicMetadata?.role as string[] || []
    
    if (!currentUserRoles.includes('admin')) {
      return NextResponse.json({ error: 'Only admins can assign roles' }, { status: 403 })
    }

    // Prepare metadata update
    const metadata: any = {
      role: Array.isArray(role) ? role : [role]
    }
    
    if (clientId) {
      metadata.clientId = clientId
    }

    // Update user metadata
    await clerkClient.users.updateUserMetadata(targetUserId, {
      publicMetadata: metadata
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Role assigned successfully'
    })
  } catch (error: any) {
    console.error('Error assigning role:', error)
    return NextResponse.json({ 
      error: 'Failed to assign role', 
      details: error.message 
    }, { status: 500 })
  }
}