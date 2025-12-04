import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
  }

  // 사이드바가 열려있을 때 body 스크롤 방지
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSidebarOpen])

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a 
            href="#" 
            className="navbar-brand" 
            onClick={(e) => { 
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsSidebarOpen(false)
            }}
          >
            RILA
          </a>
          <button 
            className="sidebar-toggle"
            type="button" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* 데스크톱 네비게이션 */}
          <div className="navbar-collapse desktop-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#aboutMe"
                  onClick={(e) => { e.preventDefault(); scrollToSection('aboutMe') }}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#skill"
                  onClick={(e) => { e.preventDefault(); scrollToSection('skill') }}
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#work"
                  onClick={(e) => { e.preventDefault(); scrollToSection('work') }}
                >
                  WORKS
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 사이드바 오버레이 */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 사이드바 */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <a 
            href="#" 
            className="sidebar-brand"
            onClick={(e) => { 
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsSidebarOpen(false)
            }}
          >
            RILA
          </a>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#aboutMe"
              onClick={(e) => { e.preventDefault(); scrollToSection('aboutMe') }}
            >
              <span className="nav-text">ABOUT</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#skill"
              onClick={(e) => { e.preventDefault(); scrollToSection('skill') }}
            >
              <span className="nav-text">SKILLS</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollToSection('work') }}
            >
              <span className="nav-text">WORKS</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            >
              <span className="nav-text">CONTACT</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

