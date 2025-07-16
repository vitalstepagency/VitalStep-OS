import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is authenticated
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user details to check if they're an admin
    const user = await clerkClient.users.getUser(userId)
    const isAdmin = user.publicMetadata?.role === 'admin'
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    const { id: clientId } = params

    // Fetch company profile
    const companyProfile = await prisma.companyProfile.findUnique({
      where: { id: clientId },
      include: {
        onboardingProgress: {
          orderBy: { step: 'asc' }
        }
      }
    })

    if (!companyProfile) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }

    // Fetch user details from Clerk
    let userDetails = null
    try {
      const clerkUser = await clerkClient.users.getUser(companyProfile.userId)
      userDetails = {
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
        emailAddresses: clerkUser.emailAddresses
      }
    } catch (error) {
      console.error('Error fetching user details from Clerk:', error)
    }

    // Transform the data
    const clientData = {
      id: companyProfile.id,
      name: userDetails ? 
        `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim() || 'Unknown User' :
        'Unknown User',
      email: userDetails?.emailAddresses?.[0]?.emailAddress || 'No email',
      companyName: companyProfile.companyName,
      industry: companyProfile.industry,
      challenges: companyProfile.challenges || [],
      objectives: companyProfile.objectives,
      timeline: companyProfile.timeline,
      budget: companyProfile.budget,
      onboardingCompleted: companyProfile.onboardingCompleted,
      onboardingStep: companyProfile.onboardingStep,
      onboardingProgress: companyProfile.onboardingProgress,
      userDetails
    }

    return NextResponse.json(clientData)

  } catch (error) {
    console.error('Error fetching client data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}