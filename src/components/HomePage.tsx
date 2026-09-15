import { Send } from 'lucide-react'
import './HomePage.css'

const HomePage = () => {
  const handleSend = () => {
    console.log('Message sent')
  }

  const quickActions = [
    { id: 1, label: 'Create Project', icon: '✨' },
    { id: 2, label: 'Search', icon: '🔍' },
    { id: 3, label: 'Generate', icon: '⚡' },
    { id: 4, label: 'Explore', icon: '🌍' },
    { id: 5, label: 'More', icon: '⋯' },
  ]

  return (
    <div className="home-page">
      <div className="cinematic-background">
        <svg className="background-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0a1428', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#0d1f3c', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1a3a52', stopOpacity: 1 }} />
            </linearGradient>
            <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#2a4a6a', stopOpacity: 0.8 }} />
              <stop offset="70%" style={{ stopColor: '#1a2a4a', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#0a1428', stopOpacity: 0 }} />
            </radialGradient>
            <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff8c42', stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: '#ff6b1f', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#1a3a52', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {/* Sky */}
          <rect width="1920" height="1080" fill="url(#skyGradient)" />
          
          {/* Distant mountains on left */}
          <path d="M 0 600 Q 200 400 400 550 L 400 1080 L 0 1080 Z" fill="#0d1f3c" opacity="0.8" />
          <path d="M 300 620 Q 450 350 550 600 L 550 1080 L 300 1080 Z" fill="#1a2a4a" opacity="0.7" />
          
          {/* Water/horizon line */}
          <ellipse cx="960" cy="700" rx="1200" ry="300" fill="#0f3a5f" opacity="0.5" />
          
          {/* Horizon glow */}
          <rect y="500" width="1920" height="300" fill="url(#horizonGlow)" />
          
          {/* Sun/light source at horizon */}
          <circle cx="1400" cy="680" r="120" fill="#ff8c42" opacity="0.3" />
          <circle cx="1400" cy="680" r="80" fill="#ffa566" opacity="0.4" />
          <circle cx="1400" cy="680" r="40" fill="#ffb88c" opacity="0.6" />
          
          {/* Water reflections */}
          <ellipse cx="1400" cy="900" rx="150" ry="80" fill="#ff8c42" opacity="0.15" />
          <line x1="1350" y1="750" x2="1350" y2="950" stroke="#ff8c42" strokeWidth="2" opacity="0.2" />
          <line x1="1450" y1="750" x2="1450" y2="950" stroke="#ff8c42" strokeWidth="2" opacity="0.2" />
          
          {/* Large planet/celestial sphere on upper right */}
          <circle cx="1600" cy="300" r="200" fill="#1a3a5a" opacity="0.7" />
          <circle cx="1600" cy="300" r="200" fill="url(#planetGlow)" />
          <circle cx="1600" cy="300" r="195" fill="none" stroke="#5a8aaa" strokeWidth="2" opacity="0.3" />
          <ellipse cx="1600" cy="280" rx="150" ry="80" fill="#2a5a7a" opacity="0.5" />
          
          {/* Luminous edge of planet */}
          <path d="M 1400 300 A 200 200 0 0 1 1800 300" fill="none" stroke="#8aaacc" strokeWidth="3" opacity="0.4" />
          
          {/* Futuristic city structures on right side */}
          <g opacity="0.6">
            {/* Tall structures */}
            <rect x="1700" y="400" width="80" height="350" fill="#1a4a6a" />
            <rect x="1790" y="380" width="60" height="370" fill="#2a5a7a" />
            <rect x="1860" y="420" width="70" height="330" fill="#1a4a6a" />
            
            {/* Illuminated windows */}
            <rect x="1710" y="430" width="12" height="12" fill="#ffd700" opacity="0.8" />
            <rect x="1730" y="450" width="12" height="12" fill="#ffd700" opacity="0.8" />
            <rect x="1710" y="480" width="12" height="12" fill="#ffd700" opacity="0.7" />
            <rect x="1800" y="420" width="12" height="12" fill="#ffed4e" opacity="0.9" />
            <rect x="1820" y="460" width="12" height="12" fill="#ffed4e" opacity="0.8" />
            <rect x="1870" y="450" width="12" height="12" fill="#ffd700" opacity="0.7" />
          </g>
          
          {/* Foreground rocky terrain */}
          <path d="M 0 750 Q 300 700 600 740 T 1200 720 T 1920 760 L 1920 1080 L 0 1080 Z" fill="#0a0e27" opacity="0.9" />
          <path d="M 0 850 Q 400 820 800 840 T 1600 830 T 1920 880 L 1920 1080 L 0 1080 Z" fill="#050810" opacity="0.8" />
        </svg>
      </div>

      <div className="home-content">
        <div className="hero-section">
          <div className="greeting">
            <span>Hello, Ramakanth</span>
            <span className="crown-icon">👑</span>
          </div>

          <h1 className="hero-heading">
            What would you like to <span className="gold-accent">create</span> today?
          </h1>

          <p className="hero-subtitle">Dream bigger. Build faster. Explore further.</p>

          <div className="prompt-container">
            <div className="prompt-box">
              <span className="prompt-icon">✨</span>
              <input
                type="text"
                placeholder="Type your message here..."
                className="prompt-input"
              />
              <button className="send-btn" onClick={handleSend} aria-label="Send message">
                <Send size={20} />
              </button>
            </div>
          </div>

          <div className="quick-actions">
            {quickActions.map((action) => (
              <button key={action.id} className="action-btn">
                <span className="action-icon">{action.icon}</span>
                <span className="action-label">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <footer className="home-footer">
          <span>ARTI AI</span>
          <span className="separator">•</span>
          <span>Powered by Premium AI</span>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
