"use client"

import { GlassCard } from "./glass-card"

const colors = [
  { name: "Primary", token: "--glass-primary", value: "#1856FF", class: "bg-primary" },
  { name: "Secondary", token: "--glass-secondary", value: "#3A344E", class: "bg-secondary" },
  { name: "Success", token: "--glass-success", value: "#07CA6B", class: "bg-success" },
  { name: "Warning", token: "--glass-warning", value: "#E89558", class: "bg-warning" },
  { name: "Danger", token: "--glass-danger", value: "#EA2143", class: "bg-destructive" },
]

function ColorPalette() {
  return (
    <GlassCard>
      <h3 className="text-lg font-semibold text-foreground mb-4">Color Tokens</h3>
      <div className="grid grid-cols-5 gap-3">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center gap-2">
            <div 
              className={`w-12 h-12 rounded-xl ${color.class} shadow-lg ring-2 ring-white/20`}
              title={color.value}
            />
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{color.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground">{color.value}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

export { ColorPalette }
