import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if user is authenticated and is an admin
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user details to check if they're an admin
    const clerk = await clerkClient()
    const user = await clerk.users.getUser(userId)
    const isAdmin = user.publicMetadata?.role === 'admin'
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    const { id: clientId } = await params

    // First, get the company profile to find the associated Clerk user ID
    const companyProfile = await prisma.companyProfile.findUnique({
      where: { id: clientId }
    })

    if (!companyProfile) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }

    // Delete from Clerk (this will delete the user account)
    try {
      const clerk = await clerkClient()
      await clerk.users.deleteUser(companyProfile.userId)
    } catch (clerkError) {
      console.error('Error deleting user from Clerk:', clerkError)
      // Continue with database cleanup even if Clerk deletion fails
    }

    // Delete all related records from database
    await prisma.$transaction(async (tx) => {
      // Delete onboarding progress
      await tx.onboardingProgress.deleteMany({
        where: { userId: companyProfile.userId }
      })

      // Delete client metrics
      await tx.clientMetrics.deleteMany({
        where: { userId: companyProfile.userId }
      })

      // Delete company profile
      await tx.companyProfile.delete({
        where: { id: clientId }
      })
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Client deleted successfully' 
    })

  } catch (error) {
    console.error('Error deleting client:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}