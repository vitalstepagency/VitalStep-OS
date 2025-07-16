import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { step, data } = body

    // Track onboarding progress for this step
    await prisma.onboardingProgress.create({
      data: {
        userId,
        step,
        data: data || {}
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: `Step ${step} progress tracked successfully` 
    })

  } catch (error) {
    console.error('Error tracking onboarding progress:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all onboarding progress for this user
    const progress = await prisma.onboardingProgress.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' }
    })

    return NextResponse.json({ progress })

  } catch (error) {
    console.error('Error fetching onboarding progress:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}