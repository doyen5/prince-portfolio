import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Preloader from '../components/motion/Preloader'
import HomePage from '../pages/HomePage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import NotFoundPage from '../pages/NotFoundPage'
import { getInitialLanguage, getInitialTheme } from '../utils/preferences'

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [theme, setTheme] = useState(getInitialTheme)
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('portfolio-intro-seen'))
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = language
    localStorage.setItem('portfolio-theme', theme)
    localStorage.setItem('portfolio-language', language)
  }, [theme, language])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  function finishLoading() {
    sessionStorage.setItem('portfolio-intro-seen', 'true')
    setLoading(false)
  }

  return (
    <div className="app-shell">
      {loading && <Preloader onComplete={finishLoading} />}
      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage language={language} />} />
          <Route path="*" element={<NotFoundPage language={language} />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  )
}
