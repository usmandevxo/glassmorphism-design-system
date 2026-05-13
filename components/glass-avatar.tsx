"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface GlassAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "away" | "busy"
}

function GlassAvatar({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  status,
  className,
  ...props
}: GlassAvatarProps) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  }

  const statusColors = {
    online: "bg-emerald-500 shadow-lg shadow-emerald-500/50",
    offline: "bg-white/30",
    away: "bg-amber-500 shadow-lg shadow-amber-500/50",
    busy: "bg-red-500 shadow-lg shadow-red-500/50",
  }

  const statusSizes = {
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-4 w-4",
  }

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <div
        className={cn(
          "relative rounded-full overflow-hidden",
          "bg-gradient-to-br from-primary/30 to-violet-500/30 backdrop-blur-md border border-white/[0.1]",
          "flex items-center justify-center font-medium text-white/80",
          sizes[size]
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <span>{fallback || alt.charAt(0).toUpperCase()}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-[#0a0a12]",
            statusColors[status],
            statusSizes[size]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  )
}

export { GlassAvatar }
