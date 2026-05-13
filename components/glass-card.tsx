"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "heavy" | "subtle" | "glow"
  hover?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white/[0.03] border-white/[0.08]",
      heavy: "bg-white/[0.06] border-white/[0.12]",
      subtle: "bg-white/[0.02] border-white/[0.05]",
      glow: "bg-white/[0.04] border-primary/30 shadow-[0_0_40px_rgba(24,86,255,0.15)]",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 backdrop-blur-xl border",
          variants[variant],
          hover && "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-lg hover:shadow-primary/5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
