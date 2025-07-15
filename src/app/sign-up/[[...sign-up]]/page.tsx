import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="neuralGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#8B5CF6" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="50" y1="50" x2="50" y2="100" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, rgba(139, 92, 246, ${0.8 + Math.random() * 0.2}), rgba(236, 72, 153, ${0.4 + Math.random() * 0.3}), transparent)`,
                animation: `gentle-float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(139, 92, 246, 0.6)`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Sign Up Component */}
      <div className="relative z-10">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-slate-300",
              socialButtonsBlockButton: "bg-slate-800/50 border-slate-600/50 text-white hover:bg-slate-700/50",
              formFieldInput: "bg-slate-800/50 border-slate-600/50 text-white",
              formButtonPrimary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",
              footerActionLink: "text-purple-400 hover:text-purple-300",
              dividerLine: "bg-slate-600",
              dividerText: "text-slate-400",
              formFieldLabel: "text-slate-300",
              identityPreviewText: "text-slate-300",
              formResendCodeLink: "text-purple-400 hover:text-purple-300"
            }
          }}
        />
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gentle-float {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  )
}