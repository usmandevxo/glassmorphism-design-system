"use client"

import { GlassCard } from "@/components/glass-card"

const devices = [
  { 
    name: "Desktop", 
    percentage: 58, 
    sessions: "68.4K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "from-primary to-blue-400"
  },
  { 
    name: "Mobile", 
    percentage: 34, 
    sessions: "40.1K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: "from-cyan-400 to-teal-400"
  },
  { 
    name: "Tablet", 
    percentage: 8, 
    sessions: "9.4K",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: "from-violet-400 to-purple-400"
  },
]

export function DeviceBreakdown() {
  const total = devices.reduce((acc, d) => acc + d.percentage, 0)
  
  return (
    <GlassCard className="h-full">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Device Breakdown</h3>
      
      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {devices.map((device, index) => {
              const offset = devices.slice(0, index).reduce((acc, d) => acc + d.percentage, 0)
              const circumference = 2 * Math.PI * 40
              const strokeDasharray = (device.percentage / 100) * circumference
              const strokeDashoffset = -(offset / 100) * circumference
              
              return (
                <circle
                  key={device.name}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  strokeWidth="12"
                  className={`stroke-current ${
                    index === 0 ? 'text-primary' : 
                    index === 1 ? 'text-cyan-400' : 'text-violet-400'
                  }`}
                  style={{
                    strokeDasharray: `${strokeDasharray} ${circumference}`,
                    strokeDashoffset,
                  }}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-white">118K</span>
            <span className="text-xs text-white/50">Total</span>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {devices.map((device) => (
          <div 
            key={device.name}
            className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${device.color} flex items-center justify-center text-white`}>
                {device.icon}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-white">{device.name}</p>
                <p className="text-[10px] sm:text-xs text-white/40">{device.sessions} sessions</p>
              </div>
            </div>
            <span className="text-sm sm:text-base font-semibold text-white">{device.percentage}%</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
