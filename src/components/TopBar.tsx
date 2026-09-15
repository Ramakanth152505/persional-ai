import { Search, Sparkles, Bell } from 'lucide-react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-search-section">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search anything... (chats, projects, files, tools, knowledge...)"
            className="search-input"
          />
          <span className="search-shortcut">Ctrl K</span>
        </div>
      </div>

      <div className="topbar-controls">
        <div className="magic-mode">
          <Sparkles size={16} className="magic-icon" />
          <span>Magic Mode</span>
          <span className="magic-dropdown">▼</span>
        </div>

        <button className="topbar-icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>

        <div className="profile-section">
          <span className="profile-name">Ramakanth</span>
          <span className="private-mode">Private Mode</span>
          <span className="profile-dropdown">▼</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
