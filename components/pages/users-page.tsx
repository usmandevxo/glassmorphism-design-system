"use client"

import { useState, useMemo } from "react"
import { GlassCard } from "@/components/glass-card"
import { GlassInput } from "@/components/glass-input"
import { GlassButton } from "@/components/glass-button"
import { GlassAvatar } from "@/components/glass-avatar"
import { GlassBadge } from "@/components/glass-badge"
import { cn } from "@/lib/utils"

interface User {
  id: string
  name: string
  email: string
  role: "Admin" | "Editor" | "Viewer"
  status: "online" | "offline" | "away" | "busy"
  department: string
  joinDate: string
  lastActive: string
}

const usersData: User[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@company.com", role: "Admin", status: "online", department: "Engineering", joinDate: "Jan 15, 2024", lastActive: "Just now" },
  { id: "2", name: "Marcus Johnson", email: "marcus@company.com", role: "Editor", status: "online", department: "Marketing", joinDate: "Feb 3, 2024", lastActive: "2 min ago" },
  { id: "3", name: "Emily Rodriguez", email: "emily@company.com", role: "Viewer", status: "away", department: "Design", joinDate: "Mar 22, 2024", lastActive: "15 min ago" },
  { id: "4", name: "James Wilson", email: "james@company.com", role: "Editor", status: "busy", department: "Engineering", joinDate: "Apr 8, 2024", lastActive: "1 hour ago" },
  { id: "5", name: "Aisha Patel", email: "aisha@company.com", role: "Admin", status: "offline", department: "Operations", joinDate: "May 1, 2024", lastActive: "2 days ago" },
  { id: "6", name: "Lucas Kim", email: "lucas@company.com", role: "Viewer", status: "online", department: "Sales", joinDate: "Jun 15, 2024", lastActive: "5 min ago" },
  { id: "7", name: "Olivia Brown", email: "olivia@company.com", role: "Editor", status: "away", department: "Design", joinDate: "Jul 20, 2024", lastActive: "30 min ago" },
  { id: "8", name: "Daniel Lee", email: "daniel@company.com", role: "Viewer", status: "online", department: "Engineering", joinDate: "Aug 5, 2024", lastActive: "Just now" },
]

const roleColors = {
  Admin: "danger",
  Editor: "primary", 
  Viewer: "default",
} as const

function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const departments = [...new Set(usersData.map(u => u.department))]

  const filteredUsers = useMemo(() => {
    return usersData.filter(user => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.department.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRole = roleFilter === "all" || user.role === roleFilter
      const matchesStatus = statusFilter === "all" || user.status === statusFilter
      const matchesDept = departmentFilter === "all" || user.department === departmentFilter
      return matchesSearch && matchesRole && matchesStatus && matchesDept
    })
  }, [searchQuery, roleFilter, statusFilter, departmentFilter])

  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id))
    }
  }

  const toggleSelectUser = (id: string) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Users</h1>
          <p className="text-sm text-white/50 mt-1">Manage your team members and their permissions</p>
        </div>
        <GlassButton variant="primary" className="gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add User
        </GlassButton>
      </div>

      {/* Filters Card */}
      <GlassCard>
        <div className="flex flex-col gap-4">
          {/* Search Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                type="text"
                placeholder="Search by name, email, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-all"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {/* Role Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50">Role:</span>
              <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                {["all", "Admin", "Editor", "Viewer"].map((role) => (
                  <button
                    key={role}
                    onClick={() => setRoleFilter(role)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg transition-all",
                      roleFilter === role
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    {role === "all" ? "All" : role}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50">Status:</span>
              <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                {["all", "online", "away", "busy", "offline"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg transition-all capitalize flex items-center gap-1.5",
                      statusFilter === status
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    {status !== "all" && (
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        status === "online" && "bg-emerald-500",
                        status === "away" && "bg-amber-500",
                        status === "busy" && "bg-red-500",
                        status === "offline" && "bg-white/30"
                      )} />
                    )}
                    {status === "all" ? "All" : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50">Dept:</span>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="h-9 px-3 rounded-lg bg-white/[0.04] border border-white/[0.1] text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              >
                <option value="all" className="bg-[#0a0a12]">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-[#0a0a12]">{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">
              Showing <span className="text-white font-medium">{filteredUsers.length}</span> of {usersData.length} users
            </span>
            {selectedUsers.length > 0 && (
              <span className="text-primary">
                {selectedUsers.length} selected
              </span>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Users Table */}
      <GlassCard className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.2] text-primary focus:ring-primary/50 focus:ring-offset-0 cursor-pointer"
                  />
                </th>
                <th className="p-4 text-left text-xs font-medium text-white/50 uppercase tracking-wider">User</th>
                <th className="p-4 text-left text-xs font-medium text-white/50 uppercase tracking-wider hidden md:table-cell">Role</th>
                <th className="p-4 text-left text-xs font-medium text-white/50 uppercase tracking-wider hidden lg:table-cell">Department</th>
                <th className="p-4 text-left text-xs font-medium text-white/50 uppercase tracking-wider hidden xl:table-cell">Join Date</th>
                <th className="p-4 text-left text-xs font-medium text-white/50 uppercase tracking-wider hidden sm:table-cell">Last Active</th>
                <th className="p-4 text-right text-xs font-medium text-white/50 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr 
                  key={user.id}
                  className={cn(
                    "border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer",
                    selectedUsers.includes(user.id) && "bg-primary/[0.05]"
                  )}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                      className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.2] text-primary focus:ring-primary/50 focus:ring-offset-0 cursor-pointer"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <GlassAvatar 
                        fallback={user.name.split(" ").map(n => n[0]).join("")}
                        size="md"
                        status={user.status}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">{user.name}</p>
                        <p className="text-xs text-white/50 truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <GlassBadge variant={roleColors[user.role]}>{user.role}</GlassBadge>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="text-sm text-white/70">{user.department}</span>
                  </td>
                  <td className="p-4 hidden xl:table-cell">
                    <span className="text-sm text-white/50">{user.joinDate}</span>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className="text-sm text-white/50">{user.lastActive}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        </svg>
                      </button>
                      <button className="p-2 rounded-lg text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-white/[0.06]">
          <span className="text-sm text-white/50">Page 1 of 1</span>
          <div className="flex items-center gap-2">
            <GlassButton variant="secondary" size="sm" disabled>
              Previous
            </GlassButton>
            <GlassButton variant="secondary" size="sm" disabled>
              Next
            </GlassButton>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export { UsersPage }
