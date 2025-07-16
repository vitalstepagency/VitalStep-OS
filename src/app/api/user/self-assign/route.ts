import { NextRequest, NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get current user
    const currentUser = await clerkClient.users.getUser(userId)
    const currentRole = currentUser.publicMetadata?.role as string | string[]
    
    // Only allow self-assignment if user has no role
    if (currentRole && (Array.isArray(currentRole) ? currentRole.length > 0 : true)) {
      return NextResponse.json({ error: 'User already has a role assigned' }, { status: 400 })
    }

    // Assign default client role
    const metadata = {
      role: ['client'],
      clientId: `client_${userId.slice(-8)}`
    }

    // Update user metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: metadata
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Default role assigned successfully',
      metadata
    })
  } catch (error: unknown) {
    console.error('Error self-assigning role:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      error: 'Failed to assign role', 
      details: errorMessage 
    }, { status: 500 })
  }
}