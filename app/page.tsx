"use client"

import { useState } from "react"
import { GradientBackground } from "@/components/gradient-background"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatCard } from "@/components/stat-card"
import { ActivityFeed } from "@/components/activity-feed"
import { AnalyticsChart } from "@/components/analytics-chart"
import { MetricsGrid } from "@/components/metrics-grid"
import { SidebarNav } from "@/components/sidebar-nav"
import { ComponentShowcase } from "@/components/component-showcase"
import { GeoDistribution } from "@/components/widgets/geo-distribution"
import { DeviceBreakdown } from "@/components/widgets/device-breakdown"
import { RealtimeVisitors } from "@/components/widgets/realtime-visitors"
import { ConversionFunnel } from "@/components/widgets/conversion-funnel"
import { TrafficSources } from "@/components/widgets/traffic-sources"
import { QuickActions } from "@/components/widgets/quick-actions"
import { PerformanceMetrics } from "@/components/widgets/performance-metrics"
import { UsersPage } from "@/components/pages/users-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { ProfilePage } from "@/components/pages/profile-page"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <GradientBackground variant="dark-mesh">
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-4 sm:py-6 max-w-[1600px]">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <div className="flex gap-6">
            {/* Sidebar Navigation */}
            <SidebarNav
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {activeTab === "dashboard" && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <StatCard
                      title="Total Revenue"
                      value="$48.2K"
                      change={{ value: 12.5 }}
                      sparkline={[30, 45, 35, 50, 42, 60, 55, 70, 65, 80, 75, 90]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Active Users"
                      value="2,847"
                      change={{ value: 8.2 }}
                      sparkline={[20, 35, 30, 45, 40, 55, 50, 60, 58, 70, 68, 85]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Conversion"
                      value="3.24%"
                      change={{ value: -2.1 }}
                      sparkline={[50, 48, 52, 45, 47, 43, 46, 42, 44, 40, 43, 38]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Avg. Session"
                      value="4m 32s"
                      change={{ value: 15.3 }}
                      sparkline={[25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 65]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      }
                    />
                  </div>

                  {/* Main Charts Row */}
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                    <div className="xl:col-span-2">
                      <AnalyticsChart />
                    </div>
                    <div className="xl:col-span-1">
                      <RealtimeVisitors />
                    </div>
                  </div>

                  {/* Widgets Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                    <DeviceBreakdown />
                    <TrafficSources />
                    <GeoDistribution />
                    <PerformanceMetrics />
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                    <ConversionFunnel />
                    <ActivityFeed />
                    <QuickActions />
                  </div>

                  {/* Metrics Grid */}
                  <MetricsGrid />
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <StatCard
                      title="Page Views"
                      value="124.5K"
                      change={{ value: 18.2 }}
                      sparkline={[30, 45, 35, 50, 42, 60, 55, 70, 65, 80, 75, 95]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Unique Visitors"
                      value="48.2K"
                      change={{ value: 12.4 }}
                      sparkline={[20, 35, 30, 45, 40, 55, 50, 60, 58, 70, 68, 75]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Bounce Rate"
                      value="32.4%"
                      change={{ value: -5.2 }}
                      sparkline={[50, 48, 45, 47, 43, 42, 40, 38, 36, 35, 33, 32]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        </svg>
                      }
                    />
                    <StatCard
                      title="Pages/Session"
                      value="4.8"
                      change={{ value: 8.7 }}
                      sparkline={[25, 30, 32, 35, 38, 40, 42, 44, 45, 46, 47, 48]}
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      }
                    />
                  </div>
                  <AnalyticsChart />
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    <GeoDistribution />
                    <TrafficSources />
                    <DeviceBreakdown />
                  </div>
                  <MetricsGrid />
                </div>
              )}

              {activeTab === "components" && <ComponentShowcase />}

              {activeTab === "users" && <UsersPage />}

              {activeTab === "settings" && <SettingsPage />}

              {activeTab === "profile" && <ProfilePage />}
            </main>
          </div>

          {/* Footer */}
          <footer className="mt-8 sm:mt-12 text-center py-4 sm:py-6 border-t border-white/[0.06]">
            <p className="text-xs sm:text-sm text-white/40">
              Built with Glassmorphism Design System
            </p>
          </footer>
        </div>
      </div>
    </GradientBackground>
  )
}
