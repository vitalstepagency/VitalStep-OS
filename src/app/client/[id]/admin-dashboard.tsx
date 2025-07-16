'use client'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Building2, 
  Target, 
  Users, 
  Settings, 
  ArrowLeft,
  Shield,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'
import Link from 'next/link'

interface ClientData {
  id: string
  name: string
  email: string
  companyName?: string
  industry?: string
  challenges?: string[]
  objectives?: string
  timeline?: string
  budget?: string
  onboardingCompleted?: boolean
  onboardingStep?: number
  onboardingProgress?: Array<{
    id: string;
    step: number;
    completedAt: string;
    data: string;
  }>
  userDetails?: {
    firstName?: string
    lastName?: string
    imageUrl?: string
  }
}

export default function ClientDashboard() {
  const params = useParams()
  const searchParams = useSearchParams()
  const clientId = params.id as string
  const isAdminMode = searchParams.get('admin') === 'true'
  
  const [client, setClient] = useState<ClientData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch(`/api/admin/client/${clientId}`)
        if (response.ok) {
          const data = await response.json()
          setClient(data)
        } else {
          setError('Failed to load client data')
        }
      } catch {
        setError('Error loading client data')
      } finally {
        setLoading(false)
      }
    }

    fetchClientData()
  }, [clientId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Loading client dashboard...</p>
        </div>
      </div>
    )
  }

  if (error || !client) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Client not found'}</p>
          <Link href="/admin/clients">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Clients
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/clients">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Clients
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                {client.name} Dashboard
              </h1>
              <p className="text-slate-400 mt-1">{client.email}</p>
            </div>
          </div>
          
          {isAdminMode && (
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Admin Mode
            </Badge>
          )}
        </div>

        {/* Dashboard Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="overview" className="text-slate-300 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="onboarding" className="text-slate-300 data-[state=active]:text-white">Onboarding</TabsTrigger>
            <TabsTrigger value="progress" className="text-slate-300 data-[state=active]:text-white">Progress</TabsTrigger>
            <TabsTrigger value="settings" className="text-slate-300 data-[state=active]:text-white">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    Company Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm">Company</p>
                    <p className="text-white font-semibold">{client.companyName || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Industry</p>
                    <p className="text-white font-semibold">{client.industry || 'Not provided'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{client.objectives || 'Not provided'}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-2">
                  {client.onboardingCompleted ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Onboarding Complete</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-amber-400" />
                      <span className="text-amber-400 font-semibold">In Progress (Step {client.onboardingStep || 1})</span>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="onboarding" className="space-y-6 mt-6">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Onboarding Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Timeline</p>
                    <p className="text-white bg-slate-800/50 p-3 rounded-lg">
                      {client.timeline || 'Not provided'}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Budget</p>
                    <p className="text-white bg-slate-800/50 p-3 rounded-lg">
                      {client.budget || 'Not provided'}
                    </p>
                  </div>
                </div>
                
                {client.challenges && client.challenges.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Challenges</p>
                    <div className="flex flex-wrap gap-2">
                      {client.challenges.map((challenge, index) => (
                        <Badge key={index} className="bg-red-500/20 text-red-400 border-red-500/30">
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress" className="space-y-6 mt-6">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Onboarding Progress</CardTitle>
              </CardHeader>
              <CardContent>
                {client.onboardingProgress && client.onboardingProgress.length > 0 ? (
                  <div className="space-y-4">
                    {client.onboardingProgress.map((progress, index) => (
                      <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">Step {progress.step}</span>
                          <span className="text-slate-400 text-sm">
                            {new Date(progress.completedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <pre className="text-slate-300 text-sm overflow-auto">
                          {JSON.stringify(progress.data, null, 2)}
                        </pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">No progress data available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  Client Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isAdminMode ? (
                  <div className="space-y-4">
                    <p className="text-slate-400">Admin management tools will be available here.</p>
                    <div className="flex gap-4">
                      <Button className="bg-cyan-500 hover:bg-cyan-600">
                        Update Client Info
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        Reset Onboarding
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-400">Settings and preferences will be available here.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}