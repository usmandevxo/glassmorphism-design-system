"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GlassToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const GlassToggle = forwardRef<HTMLInputElement, GlassToggleProps>(
  ({ className, label, id, ...props }, ref) => {
    const toggleId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <label
        htmlFor={toggleId}
        className={cn("inline-flex items-center gap-3 cursor-pointer group", className)}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-6 w-11 rounded-full transition-all duration-300",
              "bg-white/[0.08] backdrop-blur-sm border border-white/[0.1]",
              "peer-checked:bg-primary peer-checked:border-primary/50 peer-checked:shadow-lg peer-checked:shadow-primary/25",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#0a0a12]"
            )}
          />
          <div
            className={cn(
              "absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300",
              "bg-white/80 shadow-md",
              "peer-checked:translate-x-5 peer-checked:bg-white"
            )}
          />
        </div>
        {label && (
          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">{label}</span>
        )}
      </label>
    )
  }
)
GlassToggle.displayName = "GlassToggle"

export { GlassToggle }
