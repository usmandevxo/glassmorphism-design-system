"use client"

import { GlassCard } from "@/components/glass-card"
import { GlassBadge } from "@/components/glass-badge"

const sources = [
  { 
    name: "Organic Search", 
    visitors: 28450, 
    change: 12.4,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    color: "bg-emerald-500"
  },
  { 
    name: "Direct", 
    visitors: 18234, 
    change: 5.2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "bg-primary"
  },
  { 
    name: "Social Media", 
    visitors: 12847, 
    change: 24.8,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    color: "bg-violet-500"
  },
  { 
    name: "Email", 
    visitors: 8456, 
    change: -3.2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "bg-amber-500"
  },
  { 
    name: "Referral", 
    visitors: 6234, 
    change: 8.7,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    color: "bg-cyan-500"
  },
]

const totalVisitors = sources.reduce((acc, s) => acc + s.visitors, 0)

export function TrafficSources() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-white">Traffic Sources</h3>
        <GlassBadge variant="default">{(totalVisitors / 1000).toFixed(1)}K total</GlassBadge>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        {sources.map((source) => {
          const percentage = (source.visitors / totalVisitors) * 100
          
          return (
            <div 
              key={source.name}
              className="group p-2.5 sm:p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${source.color} flex items-center justify-center text-white`}>
                  {source.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-white truncate">{source.name}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs sm:text-sm font-semibold text-white">{source.visitors.toLocaleString()}</p>
                  <p className={`text-[10px] sm:text-xs ${source.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {source.change >= 0 ? '+' : ''}{source.change}%
                  </p>
                </div>
              </div>
              
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div 
                  className={`h-full ${source.color} rounded-full transition-all duration-500 group-hover:shadow-lg`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}
