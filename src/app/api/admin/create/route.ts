import { NextRequest, NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function POST(req: NextRequest) {
  try {
    const { email, password, firstName, lastName } = await req.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Create the user
    const user = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      firstName: firstName || 'Admin',
      lastName: lastName || 'User',
      publicMetadata: {
        role: ['admin'],
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user created successfully',
      userId: user.id 
    })
  } catch (error: unknown) {
    console.error('Error creating admin user:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      error: 'Failed to create admin user', 
      details: errorMessage 
    }, { status: 500 })
  }
}