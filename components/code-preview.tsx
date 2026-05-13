"use client"

import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { useState } from "react"

const codeSnippet = `import { GlassCard, GlassButton } from "@/components/glass"

export function MyComponent() {
  return (
    <GlassCard hover glow>
      <h2>Hello Glassmorphism</h2>
      <GlassButton variant="primary">
        Get Started
      </GlassButton>
    </GlassCard>
  )
}`

function CodePreview() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <GlassCard variant="dark" className="overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-warning/80" />
          <div className="w-3 h-3 rounded-full bg-success/80" />
        </div>
        <GlassButton 
          variant="ghost" 
          size="sm"
          onClick={handleCopy}
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          {copied ? (
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </span>
          )}
        </GlassButton>
      </div>
      <pre className="text-sm font-mono text-white/90 overflow-x-auto">
        <code>{codeSnippet}</code>
      </pre>
    </GlassCard>
  )
}

export { CodePreview }
