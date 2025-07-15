import { headers } from 'next/headers'
import { NextRequest } from 'next/server'
import { Webhook } from 'svix'
import { createClerkClient } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  if (!webhookSecret) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(webhookSecret)

  let evt: { type: string; data: { id: string } }

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as { type: string; data: { id: string } }
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  // Handle the webhook
  const eventType = evt.type
  
  if (eventType === 'user.created') {
    try {
      // Automatically assign 'client' role to new users
      await clerkClient.users.updateUserMetadata(evt.data.id, {
        publicMetadata: {
          role: ['client'],
          clientId: `client_${evt.data.id.slice(-8)}` // Generate a unique client ID
        }
      })
      
      console.log(`Assigned client role to user: ${evt.data.id}`)
    } catch (error) {
      console.error('Error updating user metadata:', error)
      return new Response('Error updating user metadata', { status: 500 })
    }
  }

  return new Response('', { status: 200 })
}