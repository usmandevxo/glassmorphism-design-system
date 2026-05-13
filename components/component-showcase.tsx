"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { GlassInput } from "./glass-input"
import { GlassBadge } from "./glass-badge"
import { GlassProgress } from "./glass-progress"
import { GlassAvatar } from "./glass-avatar"
import { GlassToggle } from "./glass-toggle"

function ComponentShowcase() {
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: true,
    analytics: false,
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Buttons Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <GlassButton variant="primary">Primary</GlassButton>
          <GlassButton variant="secondary">Secondary</GlassButton>
          <GlassButton variant="ghost">Ghost</GlassButton>
          <GlassButton variant="success">Success</GlassButton>
          <GlassButton variant="danger">Danger</GlassButton>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <GlassButton size="sm">Small</GlassButton>
          <GlassButton size="md">Medium</GlassButton>
          <GlassButton size="lg">Large</GlassButton>
        </div>
      </GlassCard>

      {/* Badges Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Badges</h3>
        <div className="flex flex-wrap gap-3">
          <GlassBadge>Default</GlassBadge>
          <GlassBadge variant="primary">Primary</GlassBadge>
          <GlassBadge variant="success">Success</GlassBadge>
          <GlassBadge variant="warning">Warning</GlassBadge>
          <GlassBadge variant="danger">Danger</GlassBadge>
          <GlassBadge variant="secondary">Secondary</GlassBadge>
        </div>
      </GlassCard>

      {/* Inputs Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Form Elements</h3>
        <div className="grid gap-4">
          <GlassInput label="Email" placeholder="you@example.com" type="email" />
          <GlassInput label="Password" placeholder="Enter password" type="password" />
          <GlassInput label="With Error" placeholder="Invalid input" error="This field is required" />
        </div>
      </GlassCard>

      {/* Toggles Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Toggles</h3>
        <div className="flex flex-col gap-4">
          <GlassToggle 
            label="Enable notifications" 
            checked={toggleStates.notifications}
            onChange={(e) => setToggleStates(prev => ({ ...prev, notifications: e.target.checked }))}
          />
          <GlassToggle 
            label="Dark mode" 
            checked={toggleStates.darkMode}
            onChange={(e) => setToggleStates(prev => ({ ...prev, darkMode: e.target.checked }))}
          />
          <GlassToggle 
            label="Analytics tracking" 
            checked={toggleStates.analytics}
            onChange={(e) => setToggleStates(prev => ({ ...prev, analytics: e.target.checked }))}
          />
        </div>
      </GlassCard>

      {/* Progress Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Progress Bars</h3>
        <div className="space-y-6">
          <GlassProgress value={75} variant="primary" showLabel label="Storage Used" />
          <GlassProgress value={92} variant="success" size="lg" showLabel label="Tasks Complete" />
          <GlassProgress value={45} variant="warning" size="md" showLabel label="Memory Usage" />
          <GlassProgress value={23} variant="danger" size="sm" />
        </div>
      </GlassCard>

      {/* Avatars Section */}
      <GlassCard>
        <h3 className="text-lg font-semibold text-white mb-4">Avatars</h3>
        <div className="flex items-end gap-4">
          <GlassAvatar fallback="A" size="sm" status="online" />
          <GlassAvatar fallback="B" size="md" status="away" />
          <GlassAvatar fallback="C" size="lg" status="busy" />
          <GlassAvatar fallback="D" size="xl" status="offline" />
        </div>
      </GlassCard>

      {/* Card Variants Section - Full Width */}
      <GlassCard className="lg:col-span-2">
        <h3 className="text-lg font-semibold text-white mb-4">Card Variants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <GlassCard variant="default" className="p-4">
            <p className="text-sm font-medium text-white">Default Glass</p>
            <p className="text-xs text-white/50 mt-1">Standard blur effect</p>
          </GlassCard>
          <GlassCard variant="heavy" className="p-4">
            <p className="text-sm font-medium text-white">Heavy Glass</p>
            <p className="text-xs text-white/50 mt-1">Increased opacity</p>
          </GlassCard>
          <GlassCard variant="subtle" className="p-4">
            <p className="text-sm font-medium text-white">Subtle Glass</p>
            <p className="text-xs text-white/50 mt-1">Light effect</p>
          </GlassCard>
          <GlassCard variant="glow" className="p-4">
            <p className="text-sm font-medium text-white">Glow Effect</p>
            <p className="text-xs text-white/50 mt-1">With primary glow</p>
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  )
}

export { ComponentShowcase }
