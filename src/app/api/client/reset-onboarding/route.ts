import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    const { userId } = await auth()
    
    console.log('Reset onboarding - User ID:', userId)
    
    if (!userId) {
      console.log('No user ID found in auth')
      return NextResponse.json({ error: 'Unauthorized - Please sign in' }, { status: 401 })
    }

    // Reset onboarding status for the current user
    const profile = await db.companyProfile.updateMany({
      where: { userId },
      data: {
        onboardingCompleted: false,
        onboardingStep: 1,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Onboarding status reset successfully',
      updatedCount: profile.count
    })
  } catch (error) {
    console.error('Reset onboarding error:', error)
    return NextResponse.json({ error: 'Failed to reset onboarding' }, { status: 500 })
  }
}

// Optional: Reset all profiles (for development/testing)
export async function DELETE() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Reset all profiles to require onboarding (development only)
    const profiles = await db.companyProfile.updateMany({
      data: {
        onboardingCompleted: false,
        onboardingStep: 1,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'All profiles reset successfully',
      updatedCount: profiles.count
    })
  } catch (error) {
    console.error('Reset all profiles error:', error)
    return NextResponse.json({ error: 'Failed to reset all profiles' }, { status: 500 })
  }
}