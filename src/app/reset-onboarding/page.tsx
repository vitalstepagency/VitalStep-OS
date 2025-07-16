'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function ResetOnboardingPage() {
  const { user } = useUser()
  const router = useRouter()
  const [isResetting, setIsResetting] = useState(false)
  const [message, setMessage] = useState('')

  const resetOnboarding = async () => {
    if (!user) {
      setMessage('Please sign in first')
      return
    }

    setIsResetting(true)
    setMessage('')

    try {
      const response = await fetch('/api/client/reset-onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(`✅ Success! ${data.message} (Updated ${data.updatedCount} profile(s))`)
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        setMessage(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      setMessage(`❌ Network error: ${error}`)
    } finally {
      setIsResetting(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Please Sign In</h1>
          <p>You need to be signed in to reset your onboarding status.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Reset Onboarding
        </h1>
        
        <div className="text-white/80 mb-6 text-center">
          <p className="mb-4">
            This will reset your onboarding status so you can go through the onboarding process again.
          </p>
          <p className="text-sm">
            Signed in as: <span className="font-semibold">{user.emailAddresses[0]?.emailAddress}</span>
          </p>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-lg bg-white/10 text-white text-center">
            {message}
          </div>
        )}

        <button
          onClick={resetOnboarding}
          disabled={isResetting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          {isResetting ? 'Resetting...' : 'Reset My Onboarding'}
        </button>

        <button
          onClick={() => router.push('/')}
          className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}