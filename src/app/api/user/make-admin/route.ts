import { NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function POST() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get current user
    const currentUser = await clerkClient.users.getUser(userId)
    
    // Assign admin role
    const metadata = {
      role: ['admin'],
      clientId: currentUser.publicMetadata?.clientId || `admin_${userId.slice(-8)}`
    }

    // Update user metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: metadata
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Admin role assigned successfully',
      metadata
    })
  } catch (error: unknown) {
    console.error('Error assigning admin role:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      error: 'Failed to assign admin role', 
      details: errorMessage 
    }, { status: 500 })
  }
}