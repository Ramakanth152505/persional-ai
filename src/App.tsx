import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  return (
    <div className="app-shell">
      <Sidebar expanded={sidebarExpanded} onToggle={() => setSidebarExpanded(!sidebarExpanded)} />
      <div className="main-content">
        <TopBar />
        <HomePage />
      </div>
    </div>
  )
}

export default App
