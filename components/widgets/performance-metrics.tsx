"use client"

import { GlassCard } from "@/components/glass-card"
import { GlassProgress } from "@/components/glass-progress"

const metrics = [
  { 
    name: "Page Load Time", 
    value: "1.2s", 
    target: "< 2s",
    progress: 85,
    status: "success" as const,
    trend: "down"
  },
  { 
    name: "Time to Interactive", 
    value: "2.4s", 
    target: "< 3s",
    progress: 72,
    status: "success" as const,
    trend: "down"
  },
  { 
    name: "Core Web Vitals", 
    value: "Good", 
    target: "Passed",
    progress: 92,
    status: "success" as const,
    trend: "up"
  },
  { 
    name: "Error Rate", 
    value: "0.8%", 
    target: "< 1%",
    progress: 45,
    status: "warning" as const,
    trend: "up"
  },
]

export function PerformanceMetrics() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-white">Performance</h3>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          All systems normal
        </span>
      </div>
      
      <div className="space-y-4 sm:space-y-5">
        {metrics.map((metric) => (
          <div key={metric.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-white/70">{metric.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-white">{metric.value}</span>
                {metric.trend === "down" ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={metric.status === "warning" ? "text-amber-400" : "text-emerald-400"}>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                )}
              </div>
            </div>
            <GlassProgress 
              value={metric.progress} 
              variant={metric.status === "warning" ? "warning" : "success"}
              size="sm"
            />
            <p className="text-[10px] sm:text-xs text-white/40 mt-1">Target: {metric.target}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <div className="flex items-center gap-2 mb-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="text-xs font-medium text-white">Performance Score</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-emerald-400">94</span>
          <span className="text-xs text-white/50">/ 100</span>
        </div>
      </div>
    </GlassCard>
  )
}
