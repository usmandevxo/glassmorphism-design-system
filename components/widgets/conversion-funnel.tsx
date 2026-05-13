"use client"

import { GlassCard } from "@/components/glass-card"

const funnelSteps = [
  { name: "Visitors", count: 48234, percentage: 100 },
  { name: "Sign Up Started", count: 12847, percentage: 26.6 },
  { name: "Email Verified", count: 9823, percentage: 20.4 },
  { name: "Profile Complete", count: 6234, percentage: 12.9 },
  { name: "First Purchase", count: 2847, percentage: 5.9 },
]

export function ConversionFunnel() {
  const maxWidth = 100
  
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-white">Conversion Funnel</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          5.9% overall
        </span>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {funnelSteps.map((step, index) => {
          const width = (step.percentage / 100) * maxWidth
          const dropoff = index > 0 
            ? ((funnelSteps[index - 1].count - step.count) / funnelSteps[index - 1].count * 100).toFixed(1)
            : null
          
          return (
            <div key={step.name} className="relative">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[10px] sm:text-xs font-medium text-white/60">
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">{step.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  {dropoff && (
                    <span className="text-[10px] sm:text-xs text-red-400">-{dropoff}%</span>
                  )}
                  <span className="text-xs sm:text-sm text-white/60">{step.count.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Funnel bar */}
              <div className="relative h-8 sm:h-10 flex items-center justify-center">
                <div 
                  className="absolute h-full rounded-lg bg-gradient-to-r from-primary/40 to-primary/20 border border-primary/30 transition-all duration-500"
                  style={{ 
                    width: `${width}%`,
                    left: `${(100 - width) / 2}%`
                  }}
                />
                <span className="relative z-10 text-xs sm:text-sm font-semibold text-white">
                  {step.percentage}%
                </span>
              </div>
              
              {/* Connector */}
              {index < funnelSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}
