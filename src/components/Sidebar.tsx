import { useState } from 'react'
import { Menu, X, Home, MessageSquare, Folder, Globe, Grid3x3, Gamepad2, Image, Video, Music, FileText, Search, BookOpen, Zap, Wrench, Database, ShoppingBag, Settings, HelpCircle } from 'lucide-react'
import './Sidebar.css'

interface SidebarProps {
  expanded: boolean
  onToggle: () => void
}

const Sidebar = ({ expanded, onToggle }: SidebarProps) => {
  const primaryNav = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'websites', label: 'Websites', icon: Globe },
    { id: 'apps', label: 'Apps', icon: Grid3x3 },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'agents', label: 'Agents', icon: Zap },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'knowledge', label: 'Knowledge Base', icon: Database },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
  ]

  const secondaryNav = [
    { id: 'active-agents', label: 'Active Agents', icon: Zap },
    { id: 'recent-projects', label: 'Recent Projects', icon: Folder },
    { id: 'quick-actions', label: 'Quick Actions', icon: Zap },
    { id: 'task-control', label: 'Task Control Center', icon: Grid3x3 },
    { id: 'system-status', label: 'System Status', icon: Zap },
    { id: 'ai-command', label: 'AI Command Center', icon: Zap },
  ]

  const utilityNav = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ]

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="logo-section">
          {expanded && (
            <>
              <div className="phoenix-logo">
                <svg viewBox="0 0 64 64" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="phoenixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#d4af87', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8b7355', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="30" fill="none" stroke="#d4af87" strokeWidth="0.5" opacity="0.6" />
                  <g fill="url(#phoenixGrad)">
                    <circle cx="32" cy="32" r="12" />
                    <path d="M32 12 L36 18 L38 15 L40 20 L35 25 Z" fill="#d4af87" />
                    <path d="M32 52 L36 46 L38 49 L40 44 L35 39 Z" fill="#8b7355" />
                  </g>
                  <line x1="32" y1="8" x2="32" y2="6" stroke="#d4af87" strokeWidth="1" opacity="0.8" />
                  <line x1="32" y1="58" x2="32" y2="60" stroke="#d4af87" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              <div className="logo-text">
                <h1>ARTI AI</h1>
                <p className="tagline">Infinite Possibilities</p>
              </div>
            </>
          )}
        </div>
        <button className="collapse-toggle" onClick={onToggle} aria-label="Toggle sidebar">
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section primary-nav">
          {primaryNav.map((item) => {
            const Icon = item.icon
            const isActive = item.id === 'home'
            return (
              <div key={item.id} className={`nav-item ${isActive ? 'active' : ''}`}>
                <Icon size={18} className="nav-icon" />
                {expanded && <span className="nav-label">{item.label}</span>}
              </div>
            )
          })}
        </div>

        <div className="nav-divider" />

        <div className="nav-section secondary-nav">
          {secondaryNav.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="nav-item">
                <Icon size={18} className="nav-icon" />
                {expanded && <span className="nav-label">{item.label}</span>}
              </div>
            )
          })}
        </div>

        <div className="nav-divider" />

        <div className="nav-section utility-nav">
          {utilityNav.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="nav-item">
                <Icon size={18} className="nav-icon" />
                {expanded && <span className="nav-label">{item.label}</span>}
              </div>
            )
          })}
        </div>
      </nav>

      <div className="sidebar-footer">
        {expanded && (
          <>
            <div className="footer-text">
              <p>ARTI AI</p>
              <span className="footer-tagline">Infinite Possibilities</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Sidebar
