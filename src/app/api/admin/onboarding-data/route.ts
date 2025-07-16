import { NextResponse } from 'next/server'
import { auth, createClerkClient } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
const prisma = new PrismaClient()

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    const user = await clerkClient.users.getUser(userId)
    const userRole = user.publicMetadata?.role as string | string[]
    const roles = Array.isArray(userRole) ? userRole : (userRole ? [userRole] : [])
    
    if (!roles.includes('admin')) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    // Get all company profiles with onboarding data
    const companyProfiles = await prisma.companyProfile.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Get all onboarding progress records
    const onboardingProgress = await prisma.onboardingProgress.findMany({
      orderBy: {
        completedAt: 'desc'
      }
    })

    // Get client metrics
    const clientMetrics = await prisma.clientMetrics.findMany()

    // Get user details from Clerk for each profile
    const enrichedProfiles = await Promise.all(
      companyProfiles.map(async (profile) => {
        try {
          const clerkUser = await clerkClient.users.getUser(profile.userId)
          
          // Get progress for this user
          const userProgress = onboardingProgress.filter(p => p.userId === profile.userId)
          
          // Get metrics for this user
          const userMetrics = clientMetrics.find(m => m.userId === profile.userId)
          
          return {
            ...profile,
            userDetails: {
              id: clerkUser.id,
              firstName: clerkUser.firstName,
              lastName: clerkUser.lastName,
              emailAddresses: clerkUser.emailAddresses,
              imageUrl: clerkUser.imageUrl,
              createdAt: clerkUser.createdAt,
              lastSignInAt: clerkUser.lastSignInAt
            },
            onboardingProgress: userProgress,
            metrics: userMetrics
          }
        } catch (error) {
          console.error(`Error fetching user details for ${profile.userId}:`, error)
          // Return null for deleted users - will be filtered out
          return null
        }
      })
    )

    // Filter out deleted users (where userDetails is null)
    const validProfiles = enrichedProfiles.filter(profile => profile !== null)

    // Clean up orphaned records for deleted users
    const deletedUserIds = companyProfiles
      .filter((_, index) => enrichedProfiles[index] === null)
      .map(profile => profile.userId)

    if (deletedUserIds.length > 0) {
      console.log(`Cleaning up data for ${deletedUserIds.length} deleted users:`, deletedUserIds)
      
      // Delete orphaned records in parallel
      await Promise.all([
        prisma.companyProfile.deleteMany({
          where: { userId: { in: deletedUserIds } }
        }),
        prisma.onboardingProgress.deleteMany({
          where: { userId: { in: deletedUserIds } }
        }),
        prisma.clientMetrics.deleteMany({
          where: { userId: { in: deletedUserIds } }
        })
      ])
    }

    return NextResponse.json({
      success: true,
      data: validProfiles,
      totalClients: validProfiles.length,
      completedOnboarding: validProfiles.filter(p => p.onboardingCompleted).length,
      inProgress: validProfiles.filter(p => !p.onboardingCompleted).length
    })

  } catch (error) {
    console.error('Error fetching onboarding data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}