'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Crown,
  Sparkles,
  Brain,
  Star,
  Diamond,
  Network,
  Check,
  Target,
  Award,
  Lock,
  ArrowRight,
  TrendingUp,
  Rocket
} from 'lucide-react'

const onboardingSteps = [
  {
    id: 1,
    title: 'Elite Verification',
    description: 'Exclusive access requires verification of your distinguished status',
    icon: Crown,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 2,
    title: 'Strategic Profile',
    description: 'Craft your executive presence within our quantum ecosystem',
    icon: Diamond,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 3,
    title: 'Vision Alignment',
    description: 'Define your transformational objectives and quantum goals',
    icon: Target,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 4,
    title: 'Nexus Integration',
    description: 'Complete your ascension into the VitalStep quantum realm',
    icon: Rocket,
    color: 'from-emerald-500 to-green-600'
  }
]

const exclusiveFeatures = [
  {
    title: 'Quantum Intelligence',
    description: 'AI-powered insights that transcend conventional analytics',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    title: 'Neural Optimization',
    description: 'Advanced algorithms that evolve with your business DNA',
    icon: Network,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Transcendent Results',
    description: 'Performance metrics that redefine industry standards',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    title: 'Elite Ecosystem',
    description: 'Exclusive access to the most distinguished network',
    icon: Award,
    gradient: 'from-amber-500 to-orange-600'
  }
]

export default function ClientDashboard() {
  const { isLoaded } = useUser()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    position: '',
    companySize: '',
    annualRevenue: '',
    objectives: '',
    challenges: '',
    timeline: '',
    budget: '',
    referralSource: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <div className="text-white text-2xl font-light tracking-widest animate-pulse">
            INITIALIZING NEXUS
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Transcendent Quantum Reality Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 via-indigo-950/20 to-slate-900" />
        
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="clientGrid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1.5" fill="#EC4899" opacity="0.7">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="60" y1="60" x2="120" y2="60" stroke="#EC4899" strokeWidth="0.5" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="60" y2="120" stroke="#EC4899" strokeWidth="0.5" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clientGrid)" />
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                background: `radial-gradient(circle, rgba(236, 72, 153, ${0.9 + Math.random() * 0.1}), rgba(139, 92, 246, ${0.5 + Math.random() * 0.3}), transparent)`,
                animation: `ethereal-float ${10 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                filter: 'blur(0.8px)',
                boxShadow: `0 0 ${6 + Math.random() * 12}px rgba(236, 72, 153, 0.7)`
              }}
            />
          ))}
        </div>
        
        {/* Holographic Depth Layers */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-4"
              style={{
                background: `conic-gradient(from ${i * 72}deg, transparent, rgba(236, 72, 153, 0.12), transparent, rgba(139, 92, 246, 0.08), transparent)`,
                animation: `quantum-drift ${25 + i * 7}s linear infinite`,
                animationDelay: `${i * 3}s`,
                transform: `scale(${1 + i * 0.15}) rotate(${i * 20}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/5 right-1/5 w-40 h-40 opacity-6 animate-float">
          <Crown className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 opacity-6 animate-pulse">
          <Diamond className="w-full h-full text-purple-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 opacity-6 animate-bounce" style={{animationDuration: '4s'}}>
          <Star className="w-full h-full text-cyan-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 p-8 space-y-8">
        {/* Transcendent Header */}
        <div className="relative">
          {/* Ethereal Aura */}
          <div className="absolute -inset-12 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.18), rgba(139, 92, 246, 0.12), rgba(59, 130, 246, 0.08), rgba(236, 72, 153, 0.18))',
                animation: 'quantum-drift 25s linear infinite',
                filter: 'blur(50px)'
              }}
            />
          </div>
          
          <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-slate-700/60 rounded-3xl p-10 shadow-2xl">
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/25 via-transparent to-purple-500/25 p-[1px]">
              <div className="w-full h-full bg-slate-900/95 rounded-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center space-y-8">
                {/* Holographic Logo */}
                <div className="relative group mx-auto w-fit">
                  <div className="absolute -inset-6 bg-gradient-to-r from-pink-600/40 via-purple-600/30 to-cyan-600/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Brain className="w-16 h-16 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-3xl" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-7xl font-black tracking-tight">
                    <span 
                      style={{
                        background: `linear-gradient(135deg, 
                          #ffffff 0%,
                          #f8fafc 15%,
                          #e2e8f0 30%,
                          #cbd5e1 50%,
                          #94a3b8 70%,
                          #64748b 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.15))'
                      }}
                    >
                      VITALSTEP
                    </span>
                  </h1>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                      <p className="text-2xl font-light tracking-[0.2em]"
                        style={{
                          background: `linear-gradient(135deg, 
                            #ec4899 0%,
                            #f472b6 25%,
                            #a855f7 50%,
                            #c084fc 75%,
                            #e879f9 100%)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        ELITE ONBOARDING
                      </p>
                      <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                    </div>
                    
                    <p className="text-slate-300 text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                      Welcome to the most exclusive quantum transformation experience ever conceived. 
                      Your journey into transcendent business evolution begins here.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/60" />
                      <Badge className="bg-pink-500/15 text-pink-300 border-pink-400/40 px-6 py-3 text-sm font-medium">
                        <Lock className="w-4 h-4 mr-2" />
                        INVITATION ONLY
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/60" />
                      <Badge className="bg-purple-500/15 text-purple-300 border-purple-400/40 px-6 py-3 text-sm font-medium">
                        <Crown className="w-4 h-4 mr-2" />
                        ULTRA EXCLUSIVE
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/10 via-purple-600/5 to-cyan-600/10 rounded-2xl blur-xl" />
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Ascension Progress</h2>
              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border-pink-400/30 px-4 py-2">
                Step {currentStep} of {onboardingSteps.length}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              {onboardingSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="relative group">
                      <div className={`absolute -inset-2 rounded-full blur-lg transition-all duration-500 ${
                        isActive ? `bg-gradient-to-br ${step.color}/40` :
                        isCompleted ? 'bg-emerald-500/30' : 'bg-slate-600/20'
                      }`} />
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive ? `bg-gradient-to-br ${step.color} shadow-2xl` :
                        isCompleted ? 'bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl' :
                        'bg-slate-700/50 border border-slate-600/50'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-8 h-8 text-white" />
                        ) : (
                          <Icon className={`w-8 h-8 ${
                            isActive ? 'text-white' : 'text-slate-400'
                          }`} />
                        )}
                      </div>
                    </div>
                    
                    {index < onboardingSteps.length - 1 && (
                      <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                        isActive ? `bg-gradient-to-r ${step.color}` :
                        'bg-slate-700/50'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {onboardingSteps[currentStep - 1].title}
              </h3>
              <p className="text-slate-400">
                {onboardingSteps[currentStep - 1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Onboarding Form */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-cyan-500/15 rounded-3xl blur-2xl" />
          <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-slate-700/60 rounded-3xl p-8">
            <div className="space-y-8">
              {/* Step 1: Elite Verification */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Crown className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Elite Verification</h3>
                    <p className="text-slate-400 text-lg">Confirm your distinguished status and executive credentials</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Company Name</label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Enter your distinguished organization"
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-amber-500/50 focus:ring-amber-500/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Industry Sector</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
                      >
                        <option value="">Select your domain of excellence</option>
                        <option value="technology">Technology & Innovation</option>
                        <option value="finance">Financial Services</option>
                        <option value="healthcare">Healthcare & Biotechnology</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="manufacturing">Advanced Manufacturing</option>
                        <option value="energy">Energy & Sustainability</option>
                        <option value="aerospace">Aerospace & Defense</option>
                        <option value="other">Other Elite Sector</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Executive Position</label>
                      <Input
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        placeholder="Your leadership title"
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-amber-500/50 focus:ring-amber-500/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Organization Scale</label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => handleInputChange('companySize', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
                      >
                        <option value="">Select organizational magnitude</option>
                        <option value="startup">Elite Startup (1-50)</option>
                        <option value="growth">Growth Enterprise (51-200)</option>
                        <option value="midmarket">Mid-Market Leader (201-1000)</option>
                        <option value="enterprise">Enterprise Giant (1000+)</option>
                        <option value="fortune">Fortune 500</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Strategic Profile */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Diamond className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Strategic Profile</h3>
                    <p className="text-slate-400 text-lg">Define your quantum business architecture and revenue dynamics</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Annual Revenue Tier</label>
                      <select
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                      >
                        <option value="">Select revenue magnitude</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-25m">$5M - $25M</option>
                        <option value="25m-100m">$25M - $100M</option>
                        <option value="100m-500m">$100M - $500M</option>
                        <option value="500m+">$500M+</option>
                        <option value="confidential">Confidential</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Investment Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                      >
                        <option value="">Select transformation timeline</option>
                        <option value="immediate">Immediate (0-30 days)</option>
                        <option value="quarter">This Quarter (1-3 months)</option>
                        <option value="semester">This Semester (3-6 months)</option>
                        <option value="annual">Annual Planning (6-12 months)</option>
                        <option value="strategic">Strategic Initiative (12+ months)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Strategic Objectives</label>
                      <Textarea
                        value={formData.objectives}
                        onChange={(e) => handleInputChange('objectives', e.target.value)}
                        placeholder="Describe your visionary goals and quantum transformation objectives..."
                        rows={4}
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500/50 focus:ring-purple-500/20 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Vision Alignment */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Vision Alignment</h3>
                    <p className="text-slate-400 text-lg">Synchronize your quantum aspirations with our transcendent capabilities</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Primary Challenges</label>
                      <Textarea
                        value={formData.challenges}
                        onChange={(e) => handleInputChange('challenges', e.target.value)}
                        placeholder="Describe the quantum barriers you seek to transcend..."
                        rows={4}
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Investment Capacity</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                        >
                          <option value="">Select investment tier</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k-500k">$250K - $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m+">$1M+</option>
                          <option value="enterprise">Enterprise Scale</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Discovery Source</label>
                        <select
                          value={formData.referralSource}
                          onChange={(e) => handleInputChange('referralSource', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                        >
                          <option value="">How did you discover us?</option>
                          <option value="referral">Elite Referral</option>
                          <option value="search">Quantum Search</option>
                          <option value="social">Social Networks</option>
                          <option value="event">Exclusive Event</option>
                          <option value="partner">Strategic Partner</option>
                          <option value="other">Other Channel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Nexus Integration */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Nexus Integration</h3>
                    <p className="text-slate-400 text-lg">Complete your ascension into the VitalStep quantum ecosystem</p>
                  </div>
                  
                  {/* Exclusive Features Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exclusiveFeatures.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div key={index} className="group relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                          <Card className="relative bg-slate-900/90 border border-slate-700/50 backdrop-blur-xl rounded-2xl overflow-hidden group-hover:border-slate-600/50 transition-all duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}/5 to-transparent`} />
                            <CardContent className="p-6 relative z-10">
                              <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                                </div>
                              </div>
                              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-white">Your Quantum Journey Awaits</h4>
                      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        You are moments away from joining the most exclusive network of visionary leaders. 
                        Prepare for transformation beyond imagination.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                      <Badge className="bg-emerald-500/15 text-emerald-300 border-emerald-400/40 px-6 py-3">
                        <Check className="w-4 h-4 mr-2" />
                        Elite Status Verified
                      </Badge>
                      <Badge className="bg-purple-500/15 text-purple-300 border-purple-400/40 px-6 py-3">
                        <Crown className="w-4 h-4 mr-2" />
                        Quantum Ready
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-700/50">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-slate-600/50 text-slate-300 hover:bg-slate-800/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </Button>
                
                <div className="flex items-center gap-2">
                  {onboardingSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index + 1 === currentStep ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' :
                        index + 1 < currentStep ? 'bg-emerald-500' :
                        'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
                
                {currentStep < onboardingSteps.length ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Continue Ascension
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button
                    className="bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 hover:from-emerald-700 hover:via-green-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Complete Integration
                    <Rocket className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes ethereal-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-15px) rotate(180deg) scale(1.1); }
        }
        
        @keyframes quantum-drift {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        .animate-float {
          animation: ethereal-float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}