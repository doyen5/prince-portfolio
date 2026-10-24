import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../../data/profile'
import { content } from '../../data/content'

export default function Navbar({ language, setLanguage, theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const t = content[language]
  const location = useLocation()
  const navItems = [
    ['#about', t.nav.about],
    ['#projects', t.nav.work],
    ['#journey', t.nav.journey],
    ['#services', t.nav.services],
    ['#contact', t.nav.contact]
  ]
  const isHome = location.pathname === '/'

  function jumpTo(id) {
    setOpen(false)
    if (!isHome) {
      window.location.href = `/${id}`
      return
    }
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand-mark">P<span>.</span></span>
          <span className="brand-name">Prince Désiré <b>AHOU</b></span>
        </Link>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => jumpTo(id)}>{label}</button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-button" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="language-button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} aria-label="Change language">
            {language === 'fr' ? 'EN' : 'FR'} <span className="language-dot" />
          </button>
          <button className="icon-button menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
