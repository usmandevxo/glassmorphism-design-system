"use client"

import { useState, useRef } from "react"
import { GlassCard } from "@/components/glass-card"
import { GlassInput } from "@/components/glass-input"
import { GlassButton } from "@/components/glass-button"
import { GlassToggle } from "@/components/glass-toggle"
import { cn } from "@/lib/utils"

function SettingsPage() {
  const [companyLogo, setCompanyLogo] = useState<string | null>(null)
  const [favicon, setFavicon] = useState<string | null>(null)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)
  const faviconInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)

  // Settings state
  const [settings, setSettings] = useState({
    companyName: "Acme Analytics",
    websiteUrl: "https://analytics.acme.com",
    supportEmail: "support@acme.com",
    timezone: "America/New_York",
    language: "en",
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    twoFactorAuth: false,
    publicProfile: true,
    dataRetention: "90",
  })

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: string | null) => void
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setter(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (setter: (value: string | null) => void) => {
    setter(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-white/50 mt-1">Configure your workspace preferences and branding</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Branding Card */}
        <GlassCard className="xl:col-span-2">
          <h2 className="text-lg font-semibold text-white mb-6">Branding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company Logo */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Company Logo</label>
              <div 
                className={cn(
                  "relative group aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all",
                  "bg-white/[0.03] border-2 border-dashed border-white/[0.1] hover:border-primary/50",
                  companyLogo && "border-solid border-white/[0.1]"
                )}
                onClick={() => logoInputRef.current?.click()}
              >
                {companyLogo ? (
                  <>
                    <img src={companyLogo} alt="Company Logo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button 
                        className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => { e.stopPropagation(); logoInputRef.current?.click() }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        </svg>
                      </button>
                      <button 
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        onClick={(e) => { e.stopPropagation(); removeImage(setCompanyLogo) }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/40 group-hover:text-primary transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                    <span className="text-xs font-medium">Upload Logo</span>
                    <span className="text-[10px]">PNG, JPG up to 2MB</span>
                  </div>
                )}
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setCompanyLogo)}
                  className="hidden"
                />
              </div>
            </div>

            {/* Favicon */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Favicon</label>
              <div 
                className={cn(
                  "relative group aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all",
                  "bg-white/[0.03] border-2 border-dashed border-white/[0.1] hover:border-primary/50",
                  favicon && "border-solid border-white/[0.1]"
                )}
                onClick={() => faviconInputRef.current?.click()}
              >
                {favicon ? (
                  <>
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                      <img src={favicon} alt="Favicon" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button 
                        className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => { e.stopPropagation(); faviconInputRef.current?.click() }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        </svg>
                      </button>
                      <button 
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        onClick={(e) => { e.stopPropagation(); removeImage(setFavicon) }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/40 group-hover:text-primary transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m8 12 2 2 4-4"/>
                    </svg>
                    <span className="text-xs font-medium">Upload Favicon</span>
                    <span className="text-[10px]">ICO, PNG 32x32</span>
                  </div>
                )}
                <input
                  ref={faviconInputRef}
                  type="file"
                  accept="image/*,.ico"
                  onChange={(e) => handleImageUpload(e, setFavicon)}
                  className="hidden"
                />
              </div>
            </div>

            {/* Cover Image */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Cover Image</label>
              <div 
                className={cn(
                  "relative group aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all",
                  "bg-white/[0.03] border-2 border-dashed border-white/[0.1] hover:border-primary/50",
                  coverImage && "border-solid border-white/[0.1]"
                )}
                onClick={() => coverInputRef.current?.click()}
              >
                {coverImage ? (
                  <>
                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button 
                        className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => { e.stopPropagation(); coverInputRef.current?.click() }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        </svg>
                      </button>
                      <button 
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        onClick={(e) => { e.stopPropagation(); removeImage(setCoverImage) }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/40 group-hover:text-primary transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      <path d="m18 2 4 4-8 8h-4v-4l8-8z"/>
                    </svg>
                    <span className="text-xs font-medium">Upload Cover</span>
                    <span className="text-[10px]">1200x630 recommended</span>
                  </div>
                )}
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setCoverImage)}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* General Settings */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-6">General Settings</h2>
          <div className="space-y-5">
            <GlassInput 
              label="Company Name"
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
            />
            <GlassInput 
              label="Website URL"
              type="url"
              value={settings.websiteUrl}
              onChange={(e) => setSettings({ ...settings, websiteUrl: e.target.value })}
            />
            <GlassInput 
              label="Support Email"
              type="email"
              value={settings.supportEmail}
              onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                className="h-11 w-full rounded-xl px-4 bg-white/[0.04] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              >
                <option value="America/New_York" className="bg-[#0a0a12]">Eastern Time (ET)</option>
                <option value="America/Chicago" className="bg-[#0a0a12]">Central Time (CT)</option>
                <option value="America/Denver" className="bg-[#0a0a12]">Mountain Time (MT)</option>
                <option value="America/Los_Angeles" className="bg-[#0a0a12]">Pacific Time (PT)</option>
                <option value="Europe/London" className="bg-[#0a0a12]">London (GMT)</option>
                <option value="Europe/Paris" className="bg-[#0a0a12]">Paris (CET)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Language</label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="h-11 w-full rounded-xl px-4 bg-white/[0.04] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              >
                <option value="en" className="bg-[#0a0a12]">English</option>
                <option value="es" className="bg-[#0a0a12]">Spanish</option>
                <option value="fr" className="bg-[#0a0a12]">French</option>
                <option value="de" className="bg-[#0a0a12]">German</option>
                <option value="ja" className="bg-[#0a0a12]">Japanese</option>
              </select>
            </div>
          </div>
        </GlassCard>

        {/* Notifications & Security */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-6">Notifications & Security</h2>
          <div className="space-y-5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-sm font-medium text-white">Email Notifications</p>
                <p className="text-xs text-white/50">Receive updates via email</p>
              </div>
              <GlassToggle 
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-sm font-medium text-white">Push Notifications</p>
                <p className="text-xs text-white/50">Browser push alerts</p>
              </div>
              <GlassToggle 
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-sm font-medium text-white">Weekly Report</p>
                <p className="text-xs text-white/50">Get summary every Monday</p>
              </div>
              <GlassToggle 
                checked={settings.weeklyReport}
                onCheckedChange={(checked) => setSettings({ ...settings, weeklyReport: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-sm font-medium text-white">Two-Factor Auth</p>
                <p className="text-xs text-white/50">Extra login security</p>
              </div>
              <GlassToggle 
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-sm font-medium text-white">Public Profile</p>
                <p className="text-xs text-white/50">Allow others to find you</p>
              </div>
              <GlassToggle 
                checked={settings.publicProfile}
                onCheckedChange={(checked) => setSettings({ ...settings, publicProfile: checked })}
              />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <GlassButton variant="secondary">Cancel</GlassButton>
        <GlassButton variant="primary">Save Changes</GlassButton>
      </div>
    </div>
  )
}

export { SettingsPage }
