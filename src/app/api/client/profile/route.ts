import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await db.companyProfile.findUnique({
      where: { userId }
    })

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    // Update login metrics
    await db.clientMetrics.upsert({
      where: { 
        userId_companyProfileId: {
          userId,
          companyProfileId: profile.id
        }
      },
      update: {
        loginCount: { increment: 1 },
        lastLoginAt: new Date()
      },
      create: {
        userId,
        companyProfileId: profile.id,
        loginCount: 1,
        lastLoginAt: new Date()
      }
    })

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const updateData = await req.json()

    const profile = await db.companyProfile.update({
      where: { userId },
      data: {
        ...updateData,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}