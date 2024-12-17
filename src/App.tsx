import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'mappings' | 'templates' | 'analysis' | 'settings'>('mappings')
  const [_replacementsActive, _setReplacementsActive] = useState(false)

  return (
    <div className="opptics-container">
      <header className="opptics-header">
        <h1>Opptics</h1>
      </header>

      <nav className="opptics-nav">
        <button 
          className={`nav-button ${activeTab === 'mappings' ? 'active' : ''}`}
          onClick={() => setActiveTab('mappings')}
        >
          Mappings
        </button>
        <button 
          className={`nav-button ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          Templates
        </button>
        <button 
          className={`nav-button ${activeTab === 'analysis' ? 'active' : ''}`}
          onClick={() => setActiveTab('analysis')}
        >
          Analysis
        </button>
        <button 
          className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>

      <main className="opptics-main">
        {activeTab === 'mappings' && (
          <div className="content-section">
            <h2>Text Mappings</h2>
            <p>Define your text replacement mappings here.</p>
          </div>
        )}
        {activeTab === 'templates' && (
          <div className="content-section">
            <h2>Templates</h2>
            <p>Choose from preset industry templates.</p>
            {/* Template components will go here */}
          </div>
        )}
        {activeTab === 'analysis' && (
          <div className="content-section">
            <h2>Site Analysis</h2>
            <p>Analyze websites for mapping suggestions.</p>
            {/* Analysis components will go here */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="content-section">
            <h2>Settings</h2>
            <p>Configure extension settings.</p>
            {/* Settings components will go here */}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
