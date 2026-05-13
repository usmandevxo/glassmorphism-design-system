"use client"

import { GlassCard } from "@/components/glass-card"

const countries = [
  { name: "United States", code: "US", visitors: 45234, percentage: 38.2, flag: "🇺🇸" },
  { name: "United Kingdom", code: "UK", visitors: 18472, percentage: 15.6, flag: "🇬🇧" },
  { name: "Germany", code: "DE", visitors: 12847, percentage: 10.8, flag: "🇩🇪" },
  { name: "Canada", code: "CA", visitors: 9823, percentage: 8.3, flag: "🇨🇦" },
  { name: "France", code: "FR", visitors: 8456, percentage: 7.1, flag: "🇫🇷" },
  { name: "Australia", code: "AU", visitors: 6234, percentage: 5.3, flag: "🇦🇺" },
]

export function GeoDistribution() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-white">Geographic Distribution</h3>
        <button className="text-xs text-white/50 hover:text-primary transition-colors">View all</button>
      </div>
      
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div 
            key={country.code}
            className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            <span className="text-xl sm:text-2xl">{country.flag}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs sm:text-sm font-medium text-white truncate">{country.name}</span>
                <span className="text-xs text-white/50 shrink-0 ml-2">{country.visitors.toLocaleString()}</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(24,86,255,0.4)]"
                  style={{ width: `${country.percentage}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-medium text-white/60 shrink-0">{country.percentage}%</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
