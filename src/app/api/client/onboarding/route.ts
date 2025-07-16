import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()
    const { step, formData } = data

    // Save or update company profile
    const profile = await db.companyProfile.upsert({
      where: { userId },
      update: {
        ...formData,
        onboardingStep: step,
        onboardingCompleted: false, // Ensure onboarding is not marked as completed during progress
        updatedAt: new Date()
      },
      create: {
        userId,
        clientId: `client_${userId.slice(-8)}`,
        ...formData,
        onboardingStep: step,
        onboardingCompleted: false // Explicitly set to false for new profiles
      }
    })

    // Track progress
    await db.onboardingProgress.create({
      data: {
        userId,
        step,
        data: formData
      }
    })

    return NextResponse.json({ success: true, profile })
  } catch (error) {
    console.error('Onboarding save error:', error)
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await db.companyProfile.findUnique({
      where: { userId }
    })

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Onboarding fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 })
  }
}