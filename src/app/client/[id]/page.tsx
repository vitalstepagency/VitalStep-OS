"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ClientDashboardProps {
  params: {
    id: string;
  };
}

const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 15);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-gradient-to-b from-purple-400 to-blue-600 ml-1"
        />
      )}
    </span>
  );
};

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent ${className}`} style={{
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 2s ease-in-out infinite, text-glow 3s ease-in-out infinite'
  }}>
    {children}
  </span>
);

const FloatingCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 120, 
        scale: 0.7,
        rotateX: 45,
        rotateY: -15,
        z: -200
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0
      } : { 
        opacity: 0, 
        y: 120, 
        scale: 0.7,
        rotateX: 45,
        rotateY: -15,
        z: -200
      }}
      transition={{ 
        duration: 1.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 60,
        damping: 20
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateX: -2,
        rotateY: 2,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      style={{ perspective: 1000 }}
      className={`backdrop-blur-2xl bg-white/20 border border-purple-200/40 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/40 transition-all duration-700 hover:bg-white/25 hover:border-purple-300/60 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function ClientDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.8, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Transcendent Animated Background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {/* Base Gradient Foundation */}
         <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-purple-50/70" />
         
         {/* Brand Holographic Mesh Overlay */}
         <div className="absolute inset-0 opacity-15">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(113,11,255,0.25),transparent_50%)]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(113,11,255,0.15),transparent_50%)]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,20,39,0.08),transparent_70%)]" />
         </div>
         
         {/* Neural Network Grid */}
         <div className="absolute inset-0 opacity-8">
           <div className="absolute inset-0" style={{
             backgroundImage: `
               linear-gradient(rgba(113,11,255,0.2) 1px, transparent 1px),
               linear-gradient(90deg, rgba(113,11,255,0.2) 1px, transparent 1px)
             `,
             backgroundSize: '80px 80px'
           }} />
         </div>
        
        {/* Signature Brand Gradient Line */}
         <motion.div 
           className="absolute inset-0 opacity-50"
           style={{ opacity: gradientOpacity }}
         >
           <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600/25 via-transparent to-transparent" />
           <div className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-t from-purple-600 via-purple-500 to-purple-400 transform rotate-45 origin-bottom-left scale-y-150 shadow-2xl shadow-purple-500/60" style={{ background: 'linear-gradient(to top, #710bff, #8b5cf6, #a855f7)' }} />
           <div className="absolute bottom-0 left-0 w-1.5 h-full bg-gradient-to-t from-white via-purple-100 to-transparent transform rotate-45 origin-bottom-left scale-y-150" />
         </motion.div>
        
        {/* Brand Quantum Particles */}
         {[...Array(25)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute rounded-full"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               width: `${1.5 + Math.random() * 2.5}px`,
               height: `${1.5 + Math.random() * 2.5}px`,
               background: `radial-gradient(circle, rgba(113,11,255,${0.3 + Math.random() * 0.5}), transparent)`
             }}
             animate={{
               y: [-25, 25],
               x: [-12, 12],
               opacity: [0.15, 0.7, 0.15],
               scale: [0.2, 1, 0.2]
             }}
             transition={{
               duration: 5 + Math.random() * 3,
               repeat: Infinity,
               delay: Math.random() * 4,
               ease: "easeInOut"
             }}
           />
         ))}
        
        {/* Brand Ethereal Light Beams */}
         {[...Array(4)].map((_, i) => (
           <motion.div
             key={`beam-${i}`}
             className="absolute opacity-8"
             style={{
               left: `${25 + i * 20}%`,
               top: '0%',
               width: '1.5px',
               height: '100%',
               background: 'linear-gradient(180deg, transparent, rgba(113,11,255,0.4), transparent)',
               transform: `rotate(${-8 + i * 4}deg)`
             }}
             animate={{
               opacity: [0.08, 0.2, 0.08],
               scaleY: [0.9, 1.1, 0.9]
             }}
             transition={{
               duration: 7 + i * 0.5,
               repeat: Infinity,
               delay: i * 0.8
             }}
           />
         ))}
        
        {/* Brand Crystalline Reflections */}
         <div className="absolute inset-0 opacity-15">
           <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(113,11,255,0.15), transparent)' }} />
           <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-600/12 to-transparent rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(113,11,255,0.12), transparent)' }} />
           <div className="absolute top-1/2 left-3/4 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(113,11,255,0.10), transparent)' }} />
         </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-32"
            style={{ scale: headerScale, opacity: headerOpacity }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-extralight mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <TypewriterText 
                text="Transforming Your Business" 
                className="block text-gray-900 font-thin"
              />
              <TypewriterText 
                 text="Through Tomorrow's" 
                 delay={800}
                 className="block text-gray-700 font-light mt-4"
               />
              <GradientText className="block font-bold mt-4">
                 <TypewriterText text="Technology" delay={1400} />
               </GradientText>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 4, ease: "easeOut" }}
            >
              <TypewriterText 
                 text="VitalStep AI aims to deliver intelligent automation that doesn't just optimize your operations—it "
                 delay={2200}
               />
               <GradientText className="font-semibold">
                 <TypewriterText text="fundamentally transforms" delay={3500} />
               </GradientText>
               <TypewriterText 
                 text=" how you work, think, and scale with confidence. Every solution is meticulously crafted to unlock "
                 delay={4200}
               />
               <GradientText className="font-semibold">
                 <TypewriterText text="exponential growth" delay={5800} />
               </GradientText>
               <TypewriterText text=" in the age of AI." delay={6500} />
            </motion.p>
          </motion.div>

          {/* Under Construction Section */}
          <FloatingCard delay={0.3} className="mb-24 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <GradientText>Your Intelligent Operations Platform</GradientText>
              <motion.span 
                className="block text-gray-700 mt-2"
                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              >
                is Under Construction
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We are architecting a comprehensive intelligence system that gives you <GradientText className="font-semibold">AI-powered automation</GradientText> for every decision that transforms how you manage campaigns, communicate with leads, analyze performance, and scale client relationships. Every module is designed to deliver <GradientText className="font-semibold">measurable operational superiority</GradientText> with real-time, AI-driven decisions.
            </motion.p>
          </FloatingCard>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <FloatingCard delay={0.4}>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-sm font-bold tracking-widest text-purple-600 mb-4">INTELLIGENT AUTOMATION</h3>
                <h4 className="text-3xl font-light text-gray-900 mb-6">
                  <GradientText>Precision-Engineered</GradientText> for Your Success
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our software uses real time, <GradientText className="font-semibold">AI-driven decisions</GradientText> and intelligent automation to deliver real drivers of performance and <GradientText className="font-semibold">measurable results</GradientText> that scale with your ambitions.
                </p>
              </motion.div>
            </FloatingCard>

            <FloatingCard delay={0.6}>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-sm font-bold tracking-widest text-purple-600 mb-4">TRANSFORMATIVE IMPACT</h3>
                <h4 className="text-3xl font-light text-gray-900 mb-6">
                  Built to <GradientText>Amplify Human Excellence</GradientText>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Every feature is designed to <GradientText className="font-semibold">enhance your decision-making</GradientText>, accelerate your processes, and unlock new possibilities for <GradientText className="font-semibold">growth and innovation</GradientText>.
                </p>
              </motion.div>
            </FloatingCard>
          </div>

          {/* Engineering Excellence Section */}
          <FloatingCard delay={0.8} className="mb-24">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                <GradientText>Engineering Excellence</GradientText> in Every Detail
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <GradientText>Strategic Campaign Architecture</GradientText>
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Sophisticated multi-channel campaign orchestration that connects every touchpoint across your marketing ecosystem. <GradientText className="font-medium">Intelligent automation sequences</GradientText>, behavioral triggers, and predictive optimization deliver measurable ROI while scaling your tech exponentially.
                </p>
              </motion.div>

              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <GradientText>Autonomous Conversion Engine</GradientText>
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Revolutionary <GradientText className="font-medium">AI-powered calling systems</GradientText> that conduct natural, persuasive conversations at scale. Advanced voice synthesis and contextual intelligence enable personalized outreach that converts prospects into qualified leads, and attends to existing clients with <GradientText className="font-medium">human-like precision</GradientText> and enterprise-grade reliability.
                </p>
              </motion.div>

              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <GradientText>Seamless Scalability</GradientText>
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Built on <GradientText className="font-medium">cloud-native architecture</GradientText> that grows with your business, designed to integrate effortlessly with your existing systems while delivering consistent performance reliably from startup to enterprise scale.
                </p>
              </motion.div>
            </div>
          </FloatingCard>

          {/* VitalStep Advantage */}
          <FloatingCard delay={1.0} className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, x: -30, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 1.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                The <GradientText>
                  <motion.span
                    initial={{ opacity: 0, letterSpacing: '0.2em' }}
                    whileInView={{ opacity: 1, letterSpacing: '0.05em' }}
                    transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
                  >
                    VitalStep AI Advantage
                  </motion.span>
                </GradientText>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We don&apos;t just build AI solutions—we <GradientText className="font-semibold">architect intelligent ecosystems</GradientText> that transform how you operate. Every platform is meticulously designed to deliver <GradientText className="font-semibold">measurable impact</GradientText> and sustainable competitive advantage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Intelligent Automation", subtitle: "Streamlines Complex Workflows" },
                { title: "Predictive Analytics", subtitle: "Anticipates Market Trends" },
                { title: "Strategic Optimization", subtitle: "Maximizes Business Impact" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
                  initial={{ opacity: 0, scale: 0.8, rotateX: 45, rotateY: index % 2 === 0 ? -15 : 15, z: -200 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
                  transition={{ duration: 1.2, delay: 2.5 + index * 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 2 : -2, transition: { duration: 0.4 } }}
                  style={{ perspective: 1000 }}
                >
                  <motion.h4 
                    className="text-lg font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 + index * 0.3, duration: 0.8 }}
                  >
                    <GradientText>{item.title}</GradientText>
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600 text-sm"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2 + index * 0.3, duration: 0.6 }}
                  >
                    {item.subtitle}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </FloatingCard>

          {/* Notification Section */}
          <FloatingCard delay={1.2} className="mb-24 text-center">
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 4.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We&apos;ll notify you the moment your <GradientText className="font-semibold">intelligent automation platform</GradientText> is ready to transform your business.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 4.8, duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotateY: 2 }}
              style={{ perspective: 1000 }}
            >
              <motion.span 
                className="w-2 h-2 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 5.2, duration: 0.6 }}
              >
                PLATFORM DEVELOPMENT ACTIVE
              </motion.span>
            </motion.div>
          </FloatingCard>

          {/* Final Section */}
          <FloatingCard delay={1.4} className="text-center">
            <motion.h2 
              className="text-4xl font-light text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <GradientText>Your Intelligent Future</GradientText> Starts Here
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We built our own custom system to run our entire business. Our clients should have one too. We&apos;re engineering the next generation of <GradientText className="font-semibold">business intelligence</GradientText>—sophisticated automation that learns, adapts, and delivers <GradientText className="font-semibold">exponential value</GradientText>. Your platform will set new standards for what&apos;s possible when human vision meets artificial intelligence.
            </motion.p>
            
            <motion.div 
              className="text-2xl font-light text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Platform delivery: <GradientText className="font-semibold">7-14 days</GradientText>
            </motion.div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}