import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')} aria-label="Md Habibur Rahman - Home">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Habibur</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar__links" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link${activeSection === link.href.replace('#', '') ? ' navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <nav>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__mobile-link${activeSection === link.href.replace('#', '') ? ' navbar__mobile-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
