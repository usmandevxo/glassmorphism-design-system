"use client"

import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    label?: string
  }
  icon?: React.ReactNode
  trend?: "up" | "down"
  sparkline?: number[]
  className?: string
}

function StatCard({ title, value, change, icon, trend, sparkline, className }: StatCardProps) {
  const isPositive = change && change.value >= 0

  return (
    <GlassCard hover className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-white/50">{title}</p>
        {icon && (
          <div className="p-2.5 rounded-xl bg-primary/15 text-primary">
            {icon}
          </div>
        )}
      </div>
      
      {sparkline && (
        <div className="flex items-end gap-0.5 h-8">
          {sparkline.map((val, i) => (
            <div 
              key={i}
              className="flex-1 bg-primary/40 rounded-sm min-w-1 transition-all hover:bg-primary/60"
              style={{ height: `${(val / Math.max(...sparkline)) * 100}%` }}
            />
          ))}
        </div>
      )}
      
      <div className="flex items-end justify-between gap-4">
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        {change && (
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium",
            isPositive ? "text-emerald-400" : "text-red-400"
          )}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={cn(!isPositive && "rotate-180")}
            >
              <path d="M18 15l-6-6-6 6"/>
            </svg>
            <span>{isPositive ? "+" : ""}{change.value}%</span>
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export { StatCard }
