import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { businessName, industry, challenges, assets } = await req.json()

    // Generate a unique client ID if one doesn't exist
    const clientId = `VS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Mark onboarding as completed
    const profile = await prisma.companyProfile.upsert({
      where: { userId },
      update: {
        companyName: businessName,
        industry,
        challenges: JSON.stringify(challenges),
        onboardingCompleted: true,
        onboardingStep: 5, // Final step
        updatedAt: new Date()
      },
      create: {
        userId,
        clientId,
        companyName: businessName,
        industry,
        challenges: JSON.stringify(challenges),
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

    // Update user metadata in Clerk
    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'client',
        clientId: profile.clientId,
        onboardingCompleted: true
      }
    })

    // Create initial client metrics
    await prisma.clientMetrics.upsert({
      where: {
        userId_companyProfileId: {
          userId,
          companyProfileId: profile.id
        }
      },
      update: {
        lastLoginAt: new Date(),
        loginCount: { increment: 1 }
      },
      create: {
        userId,
        companyProfileId: profile.id,
        loginCount: 1,
        lastLoginAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      profile,
      clientId: profile.clientId,
      message: 'Onboarding completed successfully'
    })
  } catch (error) {
    console.error('Onboarding completion error:', error)
    return NextResponse.json({ error: 'Failed to complete onboarding' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}