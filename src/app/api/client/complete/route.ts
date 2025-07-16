import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { finalData } = await req.json()

    // Mark onboarding as completed
    const profile = await db.companyProfile.update({
      where: { userId },
      data: {
        ...finalData,
        onboardingCompleted: true,
        onboardingStep: 4, // Final step
        updatedAt: new Date()
      }
    })

    // Create initial client metrics
    await db.clientMetrics.create({
      data: {
        userId,
        companyProfileId: profile.id,
        loginCount: 1,
        lastLoginAt: new Date()
      }
    })

    return NextResponse.json({ success: true, profile })
  } catch (error) {
    console.error('Onboarding completion error:', error)
    return NextResponse.json({ error: 'Failed to complete onboarding' }, { status: 500 })
  }
}