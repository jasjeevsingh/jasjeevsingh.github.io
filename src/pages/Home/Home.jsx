import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const typewriterText = "Professional Ponderer. Semi-vibe coder."

  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            {/* Main Heading */}
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Jasjeev</span>
            </h1>
            
            {/* Tagline */}
            <div className="tagline-container">
              <h2 className="tagline">
                <span className="typewriter">
                  Professional <span className="accent-word">Ponderer</span>. Semi-vibe coder.
                </span>
              </h2>
            </div>

            {/* Brief Introduction */}
            <p className="hero-description">
              I'm an almost-physicist, former researcher, and falafel enthusiast. 
              I like dreaming about things—whether they're problems, ideas, or just the art of being thoughtful.
            </p>

            {/* Call to Action Buttons */}
            <div className="cta-buttons">
              <Link to="/about" className="cta-button primary">
                Learn More About Me
              </Link>
              <Link to="/projects" className="cta-button secondary">
                View My Work
              </Link>
            </div>

            {/* Quick Navigation Cards */}
            <div className="quick-nav">
              <Link to="/about" className="nav-card">
                <div className="card-icon">👋</div>
                <h3>About Me</h3>
                <p>Get to know the person behind the code</p>
              </Link>
              
              <Link to="/projects" className="nav-card">
                <div className="card-icon">💻</div>
                <h3>Projects</h3>
                <p>Explore my latest work and experiments</p>
              </Link>
              
              <Link to="/blog" className="nav-card">
                <div className="card-icon">📝</div>
                <h3>Blog</h3>
                <p>Read my thoughts & ideas</p>
              </Link>
              
              <Link to="/contact" className="nav-card">
                <div className="card-icon">📬</div>
                <h3>Contact</h3>
                <p>Let's connect and collaborate</p>
              </Link>
            </div>

            {/* Coming Soon Teasers */}
            {/* <div className="coming-soon">
              <h3 className="coming-soon-title">Coming Soon</h3>
              <div className="coming-soon-items">
                <div className="coming-soon-item">
                  <span className="item-icon">📝</span>
                  <span>Blog - Thoughts & Tutorials</span>
                </div>
                <div className="coming-soon-item">
                  <span className="item-icon">🎨</span>
                  <span>Portfolio - Creative Work</span>
                </div>
                <div className="coming-soon-item">
                  <span className="item-icon">💡</span>
                  <span>Startup Ideas - Innovation Board</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="chalk-dust"></div>
      <div className="chalk-dust"></div>
      <div className="chalk-dust"></div>
    </div>
  )
}

export default Home
