import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { businessName, industry, challenges, assets } = body

    // Generate a unique client ID
    const clientId = `VS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Create or update the company profile
    const companyProfile = await prisma.companyProfile.upsert({
      where: { userId },
      update: {
        companyName: businessName,
        industry,
        challenges: JSON.stringify(challenges), // Store as JSON array
        onboardingCompleted: true,
        onboardingStep: 5,
        updatedAt: new Date()
      },
      create: {
        userId,
        clientId,
        companyName: businessName,
        industry,
        challenges: JSON.stringify(challenges), // Store as JSON array
        onboardingCompleted: true,
        onboardingStep: 5
      }
    })

    // Track onboarding progress completion
    await prisma.onboardingProgress.create({
      data: {
        userId,
        step: 5, // Final completion step
        data: {
          businessName,
          industry,
          challenges,
          assets,
          completedOnboarding: true
        }
      }
    })

    // Assign client role and clientId to user in Clerk
    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'client',
        clientId: companyProfile.clientId,
        onboardingCompleted: true
      }
    })

    // Create initial client metrics
    await prisma.clientMetrics.upsert({
      where: {
        userId_companyProfileId: {
          userId,
          companyProfileId: companyProfile.id
        }
      },
      update: {
        lastLoginAt: new Date(),
        loginCount: { increment: 1 }
      },
      create: {
        userId,
        companyProfileId: companyProfile.id,
        loginCount: 1,
        lastLoginAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      clientId: companyProfile.clientId,
      message: 'Onboarding completed successfully' 
    })

  } catch (error) {
    console.error('Error completing onboarding:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}