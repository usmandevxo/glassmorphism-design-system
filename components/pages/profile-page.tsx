"use client"

import { useState, useRef } from "react"
import { GlassCard } from "@/components/glass-card"
import { GlassInput } from "@/components/glass-input"
import { GlassButton } from "@/components/glass-button"
import { GlassAvatar } from "@/components/glass-avatar"
import { GlassBadge } from "@/components/glass-badge"
import { cn } from "@/lib/utils"

type TabType = "information" | "password" | "address"

interface TabItem {
  id: TabType
  label: string
  icon: React.ReactNode
}

const tabs: TabItem[] = [
  {
    id: "information",
    label: "Information",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: "password",
    label: "Password",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    id: "address",
    label: "Address",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>("information")
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form states
  const [info, setInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    bio: "Senior Product Designer with 8+ years of experience in creating user-centered digital experiences.",
    website: "https://johndoe.design",
    twitter: "@johndoe",
    linkedin: "johndoe",
  })

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const [address, setAddress] = useState({
    street: "123 Innovation Drive",
    apartment: "Suite 456",
    city: "San Francisco",
    state: "California",
    zipCode: "94102",
    country: "United States",
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "information":
        return (
          <div className="space-y-6">
            {/* Profile Photo Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-violet-500/30 border-2 border-white/[0.1]">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white/60">
                      JD
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                  </svg>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Profile Photo</h3>
                <p className="text-sm text-white/50 mt-1">
                  Upload a photo to personalize your account. JPG, PNG or GIF, max 2MB.
                </p>
                <div className="flex gap-2 mt-3">
                  <GlassButton size="sm" variant="secondary" onClick={() => fileInputRef.current?.click()}>
                    Upload New
                  </GlassButton>
                  {profileImage && (
                    <GlassButton size="sm" variant="ghost" onClick={() => setProfileImage(null)}>
                      Remove
                    </GlassButton>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <GlassInput
                label="First Name"
                value={info.firstName}
                onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
              />
              <GlassInput
                label="Last Name"
                value={info.lastName}
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              />
              <GlassInput
                label="Email Address"
                type="email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
              <GlassInput
                label="Phone Number"
                type="tel"
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Bio</label>
              <textarea
                value={info.bio}
                onChange={(e) => setInfo({ ...info, bio: e.target.value })}
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 resize-none transition-all"
              />
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white mb-4">Social Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">Website</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <input
                      type="url"
                      value={info.website}
                      onChange={(e) => setInfo({ ...info, website: e.target.value })}
                      className="h-11 w-full rounded-xl pl-10 pr-4 bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">Twitter</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <input
                      type="text"
                      value={info.twitter}
                      onChange={(e) => setInfo({ ...info, twitter: e.target.value })}
                      className="h-11 w-full rounded-xl pl-10 pr-4 bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">LinkedIn</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                    </svg>
                    <input
                      type="text"
                      value={info.linkedin}
                      onChange={(e) => setInfo({ ...info, linkedin: e.target.value })}
                      className="h-11 w-full rounded-xl pl-10 pr-4 bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "password":
        return (
          <div className="space-y-6">
            {/* Password Requirements */}
            <div className="p-5 rounded-2xl bg-primary/[0.08] border border-primary/20">
              <div className="flex gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-white">Password Requirements</h3>
                  <ul className="mt-2 space-y-1 text-xs text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Minimum 8 characters long
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      At least one number
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      At least one special character
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="space-y-5">
              <GlassInput
                label="Current Password"
                type="password"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                placeholder="Enter your current password"
              />
              <GlassInput
                label="New Password"
                type="password"
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
                placeholder="Enter your new password"
              />
              <GlassInput
                label="Confirm New Password"
                type="password"
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                placeholder="Confirm your new password"
                error={password.confirm && password.new !== password.confirm ? "Passwords do not match" : undefined}
              />
            </div>

            {/* Password Strength */}
            {password.new && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Password Strength</span>
                  <GlassBadge variant={password.new.length >= 12 ? "success" : password.new.length >= 8 ? "warning" : "danger"}>
                    {password.new.length >= 12 ? "Strong" : password.new.length >= 8 ? "Medium" : "Weak"}
                  </GlassBadge>
                </div>
                <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-300",
                      password.new.length >= 12 ? "bg-emerald-500 w-full" :
                      password.new.length >= 8 ? "bg-amber-500 w-2/3" :
                      "bg-red-500 w-1/3"
                    )}
                  />
                </div>
              </div>
            )}

            {/* Last Changed */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="p-2 rounded-lg bg-white/[0.04]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white">Last password change</p>
                <p className="text-xs text-white/50">January 15, 2024 at 2:30 PM</p>
              </div>
            </div>
          </div>
        )

      case "address":
        return (
          <div className="space-y-6">
            {/* Map Preview Placeholder */}
            <div className="relative h-40 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-white/30 mb-2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-sm text-white/50">Map preview</p>
                </div>
              </div>
              <div className="absolute bottom-3 right-3">
                <GlassButton size="sm" variant="secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  Expand
                </GlassButton>
              </div>
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <GlassInput
                  label="Street Address"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  placeholder="123 Main Street"
                />
              </div>
              <GlassInput
                label="Apartment, Suite, etc."
                value={address.apartment}
                onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
                placeholder="Apt 4B"
              />
              <GlassInput
                label="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">State / Province</label>
                <select
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="h-11 w-full rounded-xl px-4 bg-white/[0.04] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                >
                  <option value="California" className="bg-[#0a0a12]">California</option>
                  <option value="New York" className="bg-[#0a0a12]">New York</option>
                  <option value="Texas" className="bg-[#0a0a12]">Texas</option>
                  <option value="Florida" className="bg-[#0a0a12]">Florida</option>
                  <option value="Washington" className="bg-[#0a0a12]">Washington</option>
                </select>
              </div>
              <GlassInput
                label="ZIP / Postal Code"
                value={address.zipCode}
                onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
              />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">Country</label>
                <select
                  value={address.country}
                  onChange={(e) => setAddress({ ...address, country: e.target.value })}
                  className="h-11 w-full rounded-xl px-4 bg-white/[0.04] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                >
                  <option value="United States" className="bg-[#0a0a12]">United States</option>
                  <option value="Canada" className="bg-[#0a0a12]">Canada</option>
                  <option value="United Kingdom" className="bg-[#0a0a12]">United Kingdom</option>
                  <option value="Germany" className="bg-[#0a0a12]">Germany</option>
                  <option value="France" className="bg-[#0a0a12]">France</option>
                </select>
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white mb-4">Saved Addresses</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-primary/30 cursor-pointer">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white">Home</p>
                      <GlassBadge variant="primary">Default</GlassBadge>
                    </div>
                    <p className="text-xs text-white/50 mt-0.5">123 Innovation Drive, Suite 456, San Francisco, CA 94102</p>
                  </div>
                  <button className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] cursor-pointer hover:border-white/[0.1] transition-colors">
                  <div className="p-2 rounded-lg bg-white/[0.04]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Work</p>
                    <p className="text-xs text-white/50 mt-0.5">456 Market Street, Floor 12, San Francisco, CA 94103</p>
                  </div>
                  <button className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-white/[0.1] text-white/50 hover:border-primary/50 hover:text-primary transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Add New Address
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Profile</h1>
          <p className="text-sm text-white/50 mt-1">Manage your personal information and preferences</p>
        </div>
        <GlassBadge variant="success" className="self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
          Profile Complete
        </GlassBadge>
      </div>

      {/* Profile Card with Tabs */}
      <GlassCard className="p-0 overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.06] overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 sm:px-6 py-4 text-sm font-medium transition-all relative whitespace-nowrap",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-white/50 hover:text-white/80"
              )}
            >
              <span className={cn(
                "transition-colors",
                activeTab === tab.id ? "text-primary" : "text-white/40"
              )}>
                {tab.icon}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6">
          {renderTabContent()}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6 border-t border-white/[0.06] bg-white/[0.01]">
          <p className="text-xs text-white/40">
            Last updated: January 20, 2024 at 4:15 PM
          </p>
          <div className="flex gap-3">
            <GlassButton variant="secondary">Discard Changes</GlassButton>
            <GlassButton variant="primary">Save Changes</GlassButton>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export { ProfilePage }
