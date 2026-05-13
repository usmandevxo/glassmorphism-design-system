"use client"

import { GlassCard } from "./glass-card"
import { GlassBadge } from "./glass-badge"

const data = [
  { month: "Jan", value: 35, revenue: 12400 },
  { month: "Feb", value: 52, revenue: 18200 },
  { month: "Mar", value: 41, revenue: 14800 },
  { month: "Apr", value: 68, revenue: 24500 },
  { month: "May", value: 59, revenue: 21200 },
  { month: "Jun", value: 85, revenue: 30400 },
  { month: "Jul", value: 78, revenue: 28100 },
  { month: "Aug", value: 92, revenue: 33600 },
]

function ChartCard() {
  const maxValue = Math.max(...data.map(d => d.value))
  const totalRevenue = data.reduce((acc, d) => acc + d.revenue, 0)

  return (
    <GlassCard className="h-full">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
          <p className="text-sm text-white/50 mt-1">Monthly performance metrics</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">${(totalRevenue / 1000).toFixed(1)}K</p>
          <GlassBadge variant="success" className="mt-1">+23.5%</GlassBadge>
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex items-end justify-between gap-3 h-48 mb-4">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100
          return (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-3 group">
              <div className="w-full flex items-end justify-center h-40 relative">
                {/* Value tooltip */}
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                  ${(item.revenue / 1000).toFixed(1)}K
                </div>
                <div 
                  className="w-full max-w-10 rounded-lg bg-gradient-to-t from-primary/60 to-primary group-hover:from-primary/80 group-hover:to-primary transition-all duration-300 cursor-pointer relative overflow-hidden"
                  style={{ 
                    height: `${height}%`,
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </div>
              <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">{item.month}</span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-white/60">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs text-white/60">Target</span>
        </div>
      </div>
    </GlassCard>
  )
}

export { ChartCard }
