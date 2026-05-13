"use client"

import { cn } from "@/lib/utils"

interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark-mesh" | "dark-aurora" | "dark-radial"
}

function GradientBackground({
  variant = "dark-mesh",
  className,
  children,
  ...props
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)} {...props}>
      {/* Dark base */}
      <div className="fixed inset-0 bg-[#0a0a12]" />
      
      {variant === "dark-mesh" && (
        <>
          {/* Animated gradient orbs */}
          <div 
            className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-30 animate-pulse"
            style={{
              background: "radial-gradient(circle, rgba(24,86,255,0.4) 0%, rgba(24,86,255,0.1) 40%, transparent 70%)",
              filter: "blur(80px)",
              animationDuration: "8s",
            }}
          />
          <div 
            className="fixed bottom-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)",
              filter: "blur(80px)",
              animation: "pulse 10s ease-in-out infinite",
            }}
          />
          <div 
            className="fixed top-[30%] left-[40%] w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 60%)",
              filter: "blur(60px)",
              animation: "pulse 12s ease-in-out infinite reverse",
            }}
          />
          {/* Noise texture overlay */}
          <div 
            className="fixed inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )}

      {variant === "dark-aurora" && (
        <>
          <div 
            className="fixed top-0 left-0 right-0 h-[60vh] opacity-40"
            style={{
              background: "linear-gradient(180deg, rgba(24,86,255,0.2) 0%, rgba(124,58,237,0.15) 30%, rgba(6,182,212,0.1) 60%, transparent 100%)",
              filter: "blur(100px)",
            }}
          />
          <div 
            className="fixed bottom-0 left-0 right-0 h-[40vh] opacity-30"
            style={{
              background: "linear-gradient(0deg, rgba(24,86,255,0.15) 0%, transparent 100%)",
              filter: "blur(80px)",
            }}
          />
        </>
      )}

      {variant === "dark-radial" && (
        <div 
          className="fixed inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(at 20% 30%, rgba(24,86,255,0.15) 0px, transparent 50%),
              radial-gradient(at 80% 20%, rgba(124,58,237,0.12) 0px, transparent 50%),
              radial-gradient(at 50% 80%, rgba(6,182,212,0.1) 0px, transparent 50%)
            `,
          }}
        />
      )}

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export { GradientBackground }
