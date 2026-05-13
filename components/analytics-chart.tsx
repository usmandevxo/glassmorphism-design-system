"use client"

import { GlassCard } from "./glass-card"
import { GlassBadge } from "./glass-badge"
import { GlassButton } from "./glass-button"
import { useState } from "react"

const weeklyData = [
  { day: "Mon", visitors: 2400, pageViews: 4200, bounceRate: 32 },
  { day: "Tue", visitors: 3200, pageViews: 5800, bounceRate: 28 },
  { day: "Wed", visitors: 2800, pageViews: 4900, bounceRate: 35 },
  { day: "Thu", visitors: 3900, pageViews: 6400, bounceRate: 25 },
  { day: "Fri", visitors: 3400, pageViews: 5600, bounceRate: 30 },
  { day: "Sat", visitors: 2100, pageViews: 3800, bounceRate: 42 },
  { day: "Sun", visitors: 1800, pageViews: 3200, bounceRate: 45 },
]

const monthlyData = [
  { day: "W1", visitors: 18400, pageViews: 32000, bounceRate: 31 },
  { day: "W2", visitors: 22100, pageViews: 38500, bounceRate: 29 },
  { day: "W3", visitors: 19800, pageViews: 34200, bounceRate: 33 },
  { day: "W4", visitors: 24500, pageViews: 42000, bounceRate: 27 },
]

function AnalyticsChart() {
  const [timeRange, setTimeRange] = useState<"week" | "month">("week")
  const data = timeRange === "week" ? weeklyData : monthlyData
  const maxVisitors = Math.max(...data.map(d => d.visitors))
  const maxPageViews = Math.max(...data.map(d => d.pageViews))

  const totalVisitors = data.reduce((acc, d) => acc + d.visitors, 0)
  const totalPageViews = data.reduce((acc, d) => acc + d.pageViews, 0)
  const avgBounceRate = Math.round(data.reduce((acc, d) => acc + d.bounceRate, 0) / data.length)

  return (
    <GlassCard className="h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Traffic Analytics</h3>
          <p className="text-sm text-white/50 mt-1">Visitors and page views over time</p>
        </div>
        <div className="flex items-center gap-2">
          <GlassButton 
            size="sm" 
            variant={timeRange === "week" ? "primary" : "ghost"}
            onClick={() => setTimeRange("week")}
          >
            Week
          </GlassButton>
          <GlassButton 
            size="sm" 
            variant={timeRange === "month" ? "primary" : "ghost"}
            onClick={() => setTimeRange("month")}
          >
            Month
          </GlassButton>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[10px] sm:text-xs text-white/50">Total Visitors</p>
          <p className="text-base sm:text-xl font-bold text-white mt-0.5 sm:mt-1">{(totalVisitors / 1000).toFixed(1)}K</p>
        </div>
        <div className="p-2 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[10px] sm:text-xs text-white/50">Page Views</p>
          <p className="text-base sm:text-xl font-bold text-white mt-0.5 sm:mt-1">{(totalPageViews / 1000).toFixed(1)}K</p>
        </div>
        <div className="p-2 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[10px] sm:text-xs text-white/50">Bounce Rate</p>
          <p className="text-base sm:text-xl font-bold text-white mt-0.5 sm:mt-1">{avgBounceRate}%</p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex items-end justify-between gap-1 sm:gap-2 h-36 sm:h-48 mb-4">
        {data.map((item, index) => {
          const visitorsHeight = (item.visitors / maxVisitors) * 100
          const pageViewsHeight = (item.pageViews / maxPageViews) * 100
          return (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-2 sm:gap-3 group">
              <div className="w-full flex items-end justify-center gap-0.5 sm:gap-1 h-28 sm:h-40 relative">
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs text-white whitespace-nowrap z-10 border border-white/10 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item.visitors.toLocaleString()} visitors
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {item.pageViews.toLocaleString()} views
                  </div>
                </div>
                {/* Visitors bar */}
                <div 
                  className="w-full max-w-3 sm:max-w-4 rounded-t-md bg-gradient-to-t from-primary/60 to-primary group-hover:from-primary/80 group-hover:to-primary transition-all duration-300 cursor-pointer"
                  style={{ height: `${visitorsHeight}%` }}
                />
                {/* Page views bar */}
                <div 
                  className="w-full max-w-3 sm:max-w-4 rounded-t-md bg-gradient-to-t from-cyan-500/60 to-cyan-400 group-hover:from-cyan-500/80 group-hover:to-cyan-400 transition-all duration-300 cursor-pointer"
                  style={{ height: `${pageViewsHeight}%` }}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-white/50 group-hover:text-white/80 transition-colors">{item.day}</span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-white/60">Visitors</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-xs text-white/60">Page Views</span>
        </div>
      </div>
    </GlassCard>
  )
}

export { AnalyticsChart }
