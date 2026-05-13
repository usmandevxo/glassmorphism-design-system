"use client"

import { GlassCard } from "./glass-card"
import { GlassAvatar } from "./glass-avatar"
import { GlassBadge } from "./glass-badge"

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "deployed",
    target: "Production v2.4.1",
    time: "2 min ago",
    status: "online" as const,
    type: "success",
  },
  {
    id: 2,
    user: "Alex Kim",
    action: "opened issue",
    target: "Memory leak in dashboard",
    time: "15 min ago",
    status: "away" as const,
    type: "danger",
  },
  {
    id: 3,
    user: "Jordan Lee",
    action: "merged PR",
    target: "#482 - API optimization",
    time: "1 hour ago",
    status: "offline" as const,
    type: "primary",
  },
  {
    id: 4,
    user: "Morgan Davis",
    action: "commented on",
    target: "Design review thread",
    time: "3 hours ago",
    status: "online" as const,
    type: "default",
  },
  {
    id: 5,
    user: "Taylor Swift",
    action: "updated",
    target: "Security policies",
    time: "5 hours ago",
    status: "busy" as const,
    type: "warning",
  },
]

function ActivityFeed() {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-white">Activity Feed</h3>
        <GlassBadge variant="primary">{activities.length} new</GlassBadge>
      </div>
      <div className="space-y-1 flex-1 overflow-auto max-h-72 sm:max-h-none">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl transition-colors hover:bg-white/[0.04] cursor-pointer group"
          >
            <GlassAvatar 
              fallback={activity.user.split(" ").map(n => n[0]).join("")} 
              size="sm"
              status={activity.status}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-white/90">
                <span className="font-medium">{activity.user}</span>
                {" "}
                <span className="text-white/50">{activity.action}</span>
                {" "}
                <span className="text-white/70 group-hover:text-primary transition-colors truncate">{activity.target}</span>
              </p>
              <p className="text-[10px] sm:text-xs text-white/40 mt-0.5">{activity.time}</p>
            </div>
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 shrink-0 ${
              activity.type === 'success' ? 'bg-emerald-500' :
              activity.type === 'danger' ? 'bg-red-500' :
              activity.type === 'warning' ? 'bg-amber-500' :
              activity.type === 'primary' ? 'bg-primary' :
              'bg-white/30'
            }`} />
          </div>
        ))}
      </div>
      <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/[0.08]">
        <button className="w-full text-xs sm:text-sm text-white/50 hover:text-primary transition-colors">
          View all activity
        </button>
      </div>
    </GlassCard>
  )
}

export { ActivityFeed }
