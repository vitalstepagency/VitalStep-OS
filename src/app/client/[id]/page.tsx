"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Zap } from "lucide-react";

interface ClientData {
  id: string;
  name: string;
  email: string;
  businessType: string;
  challenges: any[];
  createdAt: string;
}

// Removed generic tech metrics - replaced with personalized exclusive experience

export default function ClientDashboard() {
  const params = useParams();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch(`/api/admin/client/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setClientData(data);
        }
      } catch (error) {
        console.error("Error fetching client data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchClientData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 border-2 border-purple-500/30 border-t-purple-400 rounded-full mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-purple-100/80 text-lg font-light tracking-wide">
            Accessing Classified Terminal
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Sovereign Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/3 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Classified Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(147,51,234,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147,51,234,0.15) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Classified Header */}
        <motion.header
          className="border-b border-purple-500/10 backdrop-blur-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <h1 className="text-2xl font-light text-purple-100 tracking-wide">
                  VITALSTEP AI
                </h1>
                <div className="text-purple-400/60 text-xs font-mono tracking-wider">
                  CLASSIFIED
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <p className="text-purple-300/60 text-sm font-light">
                    Terminal Time
                  </p>
                  <p className="text-purple-100 font-mono text-sm">
                    {currentTime.toLocaleTimeString("en-US", { hour12: false })}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-purple-400 text-sm font-light">
                    SECURE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Dashboard */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Classified Status Banner */}
          <motion.div
            className="mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-violet-500/15 to-purple-500/15 rounded-2xl blur-xl" />
              <div className="relative bg-purple-950/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl">
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl mb-6"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Shield className="w-8 h-8 text-purple-200" />
                  </motion.div>

                  <h2 className="text-4xl font-light text-purple-100 mb-4 tracking-wide">
                    Transforming Your Business Through Tomorrow's Technology
                  </h2>

                  <p className="text-purple-200/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                    VitalStep AI aims to deliver intelligent automation that
                    doesn't just optimize your operations—it fundamentally
                    transforms how you work, think, and scale with confidence.
                    Every solution is meticulously crafted to unlock exponential
                    growth in the age of AI.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sovereign Access Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl font-extralight text-purple-100 mb-4 tracking-wider"
              >
                Your Intelligent Operations Platform is Under Construction
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-purple-200/70 text-lg font-light max-w-2xl mx-auto leading-relaxed"
              >
                We are architecting a comprehensive intelligence system that
                gives you AI-powered automation for every decision that
                transforms how you manage campaigns, communicate with leads,
                analyze performance, and scale client relationships. Every
                module is designed to deliver measurable operational superiority
                with real-time, <br></br> AI-driven decisions.
              </motion.p>
            </div>

            {/* Classified Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-purple-950/30 to-purple-950/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:from-purple-950/40 hover:to-purple-950/20 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 animate-pulse" />
                  <span className="text-purple-400 text-sm font-medium tracking-wide">
                    INTELLIGENT AUTOMATION
                  </span>
                </div>
                <h3 className="text-2xl font-light text-purple-100 mb-4">
                  Precision-Engineered for Your Success
                </h3>
                <p className="text-purple-200/70 leading-relaxed">
                  Our software uses real time, AI-driven decisions and
                  intelligent automation to deliver real drivers of performance
                  and measurable results that scale with your ambitions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-br from-purple-950/30 to-purple-950/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:from-purple-950/40 hover:to-purple-950/20 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-violet-400 rounded-full mr-4 animate-pulse" />
                  <span className="text-violet-400 text-sm font-medium tracking-wide">
                    TRANSFORMATIVE IMPACT
                  </span>
                </div>
                <h3 className="text-2xl font-light text-purple-100 mb-4">
                  Built to Amplify Human Excellence
                </h3>
                <p className="text-purple-200/70 leading-relaxed">
                  Every feature is designed to enhance your decision-making,
                  accelerate your processes, and unlock new possibilities for
                  growth and innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Classified Development Protocol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-light text-purple-100 mb-8 tracking-wide text-center">
              Engineering Excellence in Every Detail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gradient-to-b from-purple-950/30 to-purple-950/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 text-center hover:from-purple-950/40 hover:to-purple-950/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/40 to-violet-500/40 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-200" />
                </div>
                <h4 className="text-xl font-light text-purple-100 mb-3">
                  Strategic Campaign Architecture
                </h4>
                <p className="text-purple-200/70 text-sm leading-relaxed">
                  Sophisticated multi-channel campaign orchestration that
                  connects every touchpoint across your marketing ecosystem.
                  Intelligent automation sequences, behavioral triggers, and
                  predictive optimization deliver measurable ROI while scaling
                  your tech exponentially.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-b from-purple-950/30 to-purple-950/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 text-center hover:from-purple-950/40 hover:to-purple-950/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500/40 to-purple-500/40 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-purple-200" />
                </div>
                <h4 className="text-xl font-light text-purple-100 mb-3">
                  Autonomous Conversion Engine
                </h4>
                <p className="text-purple-200/70 text-sm leading-relaxed">
                  Revolutionary AI-powered calling systems that conduct natural,
                  persuasive conversations at scale. Advanced voice synthesis
                  and contextual intelligence enable personalized outreach that
                  converts prospects into qualified leads, and attends to
                  existing clients with human-like precision and
                  enterprise-grade reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-b from-purple-950/30 to-purple-950/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 text-center hover:from-purple-950/40 hover:to-purple-950/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/40 to-violet-400/40 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-violet-300 rounded-full animate-pulse" />
                </div>
                <h4 className="text-xl font-light text-purple-100 mb-3">
                  Seamless Scalability
                </h4>
                <p className="text-purple-200/70 text-sm leading-relaxed">
                  Built on cloud-native architecture that grows with your
                  business, designed to integrate effortlessly with your
                  existing systems while delivering consistent performance
                  reliably from startup to enterprise scale.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Classified Intelligence Forge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-purple-950/40 via-purple-950/20 to-transparent backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full animate-pulse" />
                </div>
                <h2 className="text-3xl font-extralight text-purple-100 mb-4 tracking-wider">
                  The VitalStep AI Advantage
                </h2>
                <p className="text-purple-200/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                  We don't just build AI solutions—we architect intelligent
                  ecosystems that transform how you operate. Every platform is
                  meticulously designed to deliver measurable impact and
                  sustainable competitive advantage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-100 mb-2">
                    Intelligent Automation
                  </div>
                  <div className="text-purple-300/60 text-sm">
                    Streamlines Complex Workflows
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-100 mb-2">
                    Predictive Analytics
                  </div>
                  <div className="text-purple-300/60 text-sm">
                    Anticipates Market Trends
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-100 mb-2">
                    Strategic Optimization
                  </div>
                  <div className="text-purple-300/60 text-sm">
                    Maximizes Business Impact
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-center"
              >
                <p className="text-purple-300/60 text-sm mb-4">
                  We'll notify you the moment your intelligent automation
                  platform is ready to transform your business.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-sm font-medium tracking-wide">
                    PLATFORM DEVELOPMENT ACTIVE
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Classified Terminal Footer */}
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-violet-500/15 to-purple-500/15 rounded-xl blur-xl" />

              <div className="relative bg-purple-950/20 border border-purple-500/20 rounded-xl p-8 backdrop-blur-xl">
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-xl font-light text-purple-100 mb-4 tracking-wide">
                    Your Intelligent Future Starts Here
                  </h4>

                  <p className="text-purple-200/70 font-light leading-relaxed mb-6">
                    We built our own custom system to run our entire business.
                    Our clients should have one too. We're engineering the next
                    generation of business intelligence—sophisticated automation
                    that learns, adapts, and delivers exponential value. Your
                    platform will set new standards for what's possible when
                    human vision meets artificial intelligence.
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-purple-300/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-light">
                      Platform delivery: 7-14 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
