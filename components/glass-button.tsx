"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success"
  size?: "sm" | "md" | "lg"
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
      secondary: "bg-white/[0.06] text-white/90 border border-white/[0.1] hover:bg-white/[0.1] backdrop-blur-md",
      ghost: "bg-transparent text-white/80 hover:bg-white/[0.08] hover:text-white backdrop-blur-sm",
      danger: "bg-red-500/90 text-white hover:bg-red-500 shadow-lg shadow-red-500/25",
      success: "bg-emerald-500/90 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/25",
    }

    const sizes = {
      sm: "h-8 px-3 text-sm rounded-lg",
      md: "h-10 px-5 text-sm rounded-xl",
      lg: "h-12 px-8 text-base rounded-xl",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a12]",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton }
