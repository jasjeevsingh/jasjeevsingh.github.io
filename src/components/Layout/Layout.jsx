import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="layout">
      {/* Navigation Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            {/* Logo/Brand */}
            <Link to="/" className="nav-brand">
              <span className="brand-text">J</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/projects" 
                  className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/blog" 
                  className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/ideas" 
                  className={`nav-link ${isActive('/ideas') ? 'active' : ''}`}
                >
                  Ideas
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/ideas" 
              className={`mobile-nav-link ${isActive('/ideas') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Ideas
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Jasjeev Singh. Professional Ponderer.</p>
          <div className="footer-links">
            <a 
              href="https://github.com/jasjeevsingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jasjeevsingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
