"use client"

import { cn } from "@/lib/utils"

interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "secondary"
}

function GlassBadge({
  className,
  variant = "default",
  children,
  ...props
}: GlassBadgeProps) {
  const variants = {
    default: "bg-white/[0.08] text-white/80 border-white/[0.1]",
    primary: "bg-primary/20 text-primary border-primary/30",
    success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    danger: "bg-red-500/20 text-red-400 border-red-500/30",
    secondary: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium backdrop-blur-sm border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { GlassBadge }
