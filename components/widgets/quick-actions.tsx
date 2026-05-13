"use client"

import { GlassCard } from "@/components/glass-card"
import { GlassButton } from "@/components/glass-button"

const actions = [
  {
    label: "Export Report",
    description: "Download CSV or PDF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    label: "Share Dashboard",
    description: "Invite team members",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    label: "Schedule Report",
    description: "Set up auto-delivery",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Create Alert",
    description: "Set metric thresholds",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export function QuickActions() {
  return (
    <GlassCard className="h-full">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="group p-3 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] transition-all text-left"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-2 sm:mb-3 group-hover:bg-primary/30 group-hover:scale-105 transition-all">
              {action.icon}
            </div>
            <p className="text-xs sm:text-sm font-medium text-white mb-0.5">{action.label}</p>
            <p className="text-[10px] sm:text-xs text-white/40">{action.description}</p>
          </button>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/[0.06]">
        <GlassButton variant="primary" className="w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create Custom Widget
        </GlassButton>
      </div>
    </GlassCard>
  )
}
