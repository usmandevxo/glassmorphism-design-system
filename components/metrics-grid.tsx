"use client"

import { GlassCard } from "./glass-card"
import { GlassProgress } from "./glass-progress"

const metrics = [
  {
    title: "Server Load",
    value: 67,
    max: 100,
    variant: "primary" as const,
    detail: "2.4 GHz / 3.6 GHz",
  },
  {
    title: "Memory Usage",
    value: 82,
    max: 100,
    variant: "warning" as const,
    detail: "13.1 GB / 16 GB",
  },
  {
    title: "Storage",
    value: 45,
    max: 100,
    variant: "success" as const,
    detail: "450 GB / 1 TB",
  },
  {
    title: "Network I/O",
    value: 23,
    max: 100,
    variant: "primary" as const,
    detail: "2.3 Gbps",
  },
]

const topPages = [
  { path: "/dashboard", views: 12420, change: 12.5 },
  { path: "/analytics", views: 8340, change: -3.2 },
  { path: "/settings", views: 5280, change: 8.1 },
  { path: "/users", views: 4150, change: 15.3 },
]

function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* System Metrics */}
      <GlassCard>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">System Health</h3>
        <div className="space-y-5">
          {metrics.map((metric) => (
            <div key={metric.title}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70">{metric.title}</span>
                <span className="text-sm font-medium text-white">{metric.value}%</span>
              </div>
              <GlassProgress value={metric.value} variant={metric.variant} size="md" />
              <p className="text-xs text-white/40 mt-1">{metric.detail}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Top Pages */}
      <GlassCard>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Top Pages</h3>
        <div className="space-y-3 sm:space-y-4">
          {topPages.map((page, index) => (
            <div 
              key={page.path}
              className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-lg bg-white/[0.06] flex items-center justify-center text-xs text-white/60 font-medium">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm text-white/80 font-mono group-hover:text-primary transition-colors truncate">{page.path}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-sm font-medium text-white">{page.views.toLocaleString()}</span>
                <span className={`text-xs font-medium ${page.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {page.change >= 0 ? '+' : ''}{page.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}

export { MetricsGrid }
