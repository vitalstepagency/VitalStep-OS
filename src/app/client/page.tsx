'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser, SignInButton } from '@clerk/nextjs'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Building2, 
  Sparkles, 
  Upload, 
  Crown,
  ChevronLeft
} from 'lucide-react'

const getSteps = (businessName: string) => [
  {
    id: 1,
    title: "What's your business name?",
    subtitle: "Let's begin with the foundation of your empire",
    field: "businessName"
  },
  {
    id: 2,
    title: businessName ? `Welcome, ${businessName}` : "What industry are you in?",
    subtitle: "What industry are you in?",
    field: "industry"
  },
  {
    id: 3,
    title: "What are your current biggest growth challenges?",
    subtitle: "The obstacles become the path",
    field: "challenges"
  },
  {
    id: 4,
    title: "Upload your brand assets",
    subtitle: "Your visual identity, refined",
    field: "assets"
  },
  {
    id: 5,
    title: "Welcome to the future",
    subtitle: "You're in. Let's build something legendary.",
    field: "complete"
  }
]

const industries = [
  "Technology", "Healthcare", "Finance", "Real Estate", 
  "E-commerce", "Manufacturing", "Consulting", "Other"
]

const challenges = [
  "Lead Generation", "Customer Retention", "Market Expansion", 
  "Operational Efficiency", "Digital Transformation", "Team Scaling"
]

export default function ClientOnboarding() {
  const { isSignedIn, isLoaded, user } = useUser()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    customIndustry: '',
    challenges: [] as string[],
    assets: null
  })
  const [showCustomIndustry, setShowCustomIndustry] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after client mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const steps = getSteps(formData.businessName)
  const currentStepData = steps.find(step => step.id === currentStep)
  const progress = (currentStep / steps.length) * 100

  const trackStepProgress = async (step: number, stepData: any) => {
    try {
      await fetch('/api/onboarding/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          step,
          data: stepData
        })
      })
    } catch (error) {
      console.error('Error tracking step progress:', error)
    }
  }

  const handleNext = async () => {
    if (currentStep < steps.length) {
      setIsLoading(true)
      
      // Track progress for the current step before moving to next
      const stepData = {
        businessName: formData.businessName,
        industry: formData.industry,
        customIndustry: formData.customIndustry,
        challenges: formData.challenges,
        assets: formData.assets,
        completedStep: currentStep
      }
      
      await trackStepProgress(currentStep, stepData)
      await new Promise(resolve => setTimeout(resolve, 800))
      setCurrentStep(currentStep + 1)
      setIsLoading(false)
    }
  }

  const handleComplete = async () => {
    console.log('Starting onboarding completion...')
    console.log('User authenticated:', isSignedIn)
    console.log('User ID:', user?.id)
    
    try {
      const requestData = {
        businessName: formData.businessName,
        industry: formData.industry === 'Other' ? formData.customIndustry : formData.industry,
        challenges: formData.challenges,
        assets: formData.assets
      }
      
      console.log('Sending data:', requestData)
      console.log('Making fetch request to /api/onboarding/complete...')
      
      const response = await fetch('/api/onboarding/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      })
      
      console.log('Fetch completed. Response received:')
      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))
      
      if (response.ok) {
        const responseData = await response.json()
        console.log('Success response:', responseData)
        
        // Get the clientId from the response to redirect to personalized dashboard
        const clientId = responseData.clientId
        if (clientId) {
          console.log('Navigating directly to personalized dashboard:', `/client/${clientId}`)
          window.location.href = `/client/${clientId}`
        } else {
          console.log('No clientId in response, navigating to /internal...')
          window.location.href = '/internal'
        }
        console.log('Router.push called')
      } else {
        console.log('Response not ok, reading error data...')
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }))
        console.error('Failed to complete onboarding:', errorData)
        alert(`Failed to complete onboarding: ${errorData.error || 'Unknown error'}. Please try again.`)
      }
    } catch (error) {
      console.error('Fetch error occurred:', error)
      console.error('Error type:', error.constructor.name)
      console.error('Error message:', error.message)
      if (error.stack) {
        console.error('Error stack:', error.stack)
      }
      alert(`Network error occurred: ${error.message}. Please check your connection and try again.`)
    } finally {
      console.log('Onboarding completion process finished')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Show loading while mounting or Clerk is initializing
  if (!mounted || !isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // Show sign-in prompt if user is not authenticated
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl text-center max-w-md">
            <Crown className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h1 className="text-3xl font-light text-white mb-4">Welcome to VitalStep</h1>
            <p className="text-slate-400 mb-8">Please sign in to begin your onboarding journey</p>
            <SignInButton mode="modal">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl">
                Sign In to Continue
              </Button>
            </SignInButton>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full" />
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/50">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glass Card */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <h1 className="text-4xl font-light text-white tracking-wide">
                      {currentStepData?.title}
                    </h1>
                  </motion.div>
                  <p className="text-slate-400 text-lg font-light">
                    {currentStepData?.subtitle}
                  </p>
                </div>

                {/* Step Content */}
                <div className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <Label className="text-white/80 text-sm font-light tracking-wide">Business Name</Label>
                      <Input
                        value={formData.businessName}
                        onChange={(e) => updateFormData('businessName', e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-14 text-lg rounded-xl focus:border-indigo-400/50 focus:ring-indigo-400/20"
                        placeholder="Enter your business name"
                      />
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <Label className="text-white/80 text-sm font-light tracking-wide">Industry</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {industries.map((industry) => (
                          <Button
                            key={industry}
                            variant={formData.industry === industry ? "default" : "outline"}
                            onClick={() => {
                              if (industry === 'Other') {
                                setShowCustomIndustry(true)
                                updateFormData('industry', industry)
                              } else {
                                setShowCustomIndustry(false)
                                updateFormData('industry', industry)
                                updateFormData('customIndustry', '')
                              }
                            }}
                            className={`h-12 rounded-xl transition-all duration-300 ${
                              formData.industry === industry
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent'
                                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                            }`}
                          >
                            {industry}
                          </Button>
                        ))}
                      </div>
                      {showCustomIndustry && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <Input
                            value={formData.customIndustry}
                            onChange={(e) => updateFormData('customIndustry', e.target.value)}
                            className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-12 text-lg rounded-xl focus:border-indigo-400/50 focus:ring-indigo-400/20"
                            placeholder="Please specify your industry"
                          />
                        </motion.div>
                      )}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <Label className="text-white/80 text-sm font-light tracking-wide">Growth Challenges</Label>
                      <p className="text-slate-500 text-sm">Select all that apply</p>
                      <div className="grid grid-cols-1 gap-3">
                        {challenges.map((challenge) => {
                          const isSelected = formData.challenges.includes(challenge)
                          return (
                            <Button
                              key={challenge}
                              variant={isSelected ? "default" : "outline"}
                              onClick={() => {
                                const currentChallenges = formData.challenges
                                if (isSelected) {
                                  updateFormData('challenges', currentChallenges.filter(c => c !== challenge))
                                } else {
                                  updateFormData('challenges', [...currentChallenges, challenge])
                                }
                              }}
                              className={`h-12 rounded-xl transition-all duration-300 text-left justify-start ${
                                isSelected
                                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent'
                                  : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                                  isSelected ? 'bg-white border-white' : 'border-white/40'
                                }`}>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-2 h-2 bg-indigo-500 rounded"
                                    />
                                  )}
                                </div>
                                {challenge}
                              </div>
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <Label className="text-white/80 text-sm font-light tracking-wide">Brand Assets</Label>
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-white/30 transition-colors cursor-pointer">
                        <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
                        <p className="text-white/80 mb-2">Drop your logo and brand assets here</p>
                        <p className="text-slate-500 text-sm">or click to browse</p>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="text-center space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                      >
                        <Crown className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
                      </motion.div>
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-400/30 px-6 py-2">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Elite Access Granted
                        </Badge>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
                          Welcome to VitalStep OS. Your journey into the future of business intelligence begins now.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    variant="ghost"
                    className="text-white/60 hover:text-white disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index + 1 === currentStep
                            ? 'bg-indigo-400 w-8'
                            : index + 1 < currentStep
                            ? 'bg-indigo-600'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  {currentStep < steps.length ? (
                    <Button
                      onClick={handleNext}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl transition-all duration-300"
                    >
                      {isLoading ? 'Processing...' : 'Continue'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleComplete}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl transition-all duration-300"
                    >
                      {isLoading ? 'Entering VitalStep...' : 'Enter VitalStep'}
                      <Crown className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}