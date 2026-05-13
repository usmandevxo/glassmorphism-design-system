"use client"

import { cn } from "@/lib/utils"

interface GlassProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: "primary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  label?: string
}

function GlassProgress({
  value,
  max = 100,
  variant = "primary",
  size = "md",
  showLabel = false,
  label,
  className,
  ...props
}: GlassProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/80",
    success: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    warning: "bg-gradient-to-r from-amber-500 to-amber-400",
    danger: "bg-gradient-to-r from-red-500 to-red-400",
  }

  const glowColors = {
    primary: "shadow-primary/30",
    success: "shadow-emerald-500/30",
    warning: "shadow-amber-500/30",
    danger: "shadow-red-500/30",
  }

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  }

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="font-medium text-white/80">{label || "Progress"}</span>
          <span className="text-white/50">{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className={cn(
          "w-full rounded-full overflow-hidden",
          "bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]",
          sizes[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out shadow-lg",
            variants[variant],
            glowColors[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export { GlassProgress }
