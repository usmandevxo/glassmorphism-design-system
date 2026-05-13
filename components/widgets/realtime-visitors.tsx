"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/glass-card"

const pages = [
  { path: "/pricing", visitors: 23 },
  { path: "/features", visitors: 18 },
  { path: "/blog/ai-trends", visitors: 15 },
  { path: "/dashboard", visitors: 12 },
  { path: "/docs/getting-started", visitors: 9 },
]

export function RealtimeVisitors() {
  const [currentVisitors, setCurrentVisitors] = useState(127)
  const [trend, setTrend] = useState<number[]>([85, 92, 98, 105, 112, 118, 127])
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisitors(prev => {
        const change = Math.floor(Math.random() * 11) - 5
        const newValue = Math.max(80, prev + change)
        setTrend(t => [...t.slice(1), newValue])
        return newValue
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const maxTrend = Math.max(...trend)
  const minTrend = Math.min(...trend)
  const range = maxTrend - minTrend || 1

  return (
    <GlassCard className="h-full relative overflow-hidden">
      {/* Pulse effect */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
        </span>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm text-white/50 mb-1">Real-time Visitors</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold text-white">{currentVisitors}</span>
          <span className="text-xs sm:text-sm text-emerald-400">online now</span>
        </div>
      </div>
      
      {/* Mini sparkline */}
      <div className="h-12 sm:h-16 mb-4 sm:mb-6 flex items-end gap-1">
        {trend.map((value, i) => (
          <div 
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500/60 to-emerald-400 transition-all duration-300"
            style={{ height: `${((value - minTrend) / range) * 80 + 20}%` }}
          />
        ))}
      </div>
      
      {/* Active pages */}
      <div>
        <p className="text-xs text-white/50 mb-3">Most active pages</p>
        <div className="space-y-2">
          {pages.map((page) => (
            <div 
              key={page.path}
              className="flex items-center justify-between text-xs sm:text-sm"
            >
              <span className="text-white/70 font-mono truncate mr-2">{page.path}</span>
              <span className="text-white font-medium shrink-0">{page.visitors}</span>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}
