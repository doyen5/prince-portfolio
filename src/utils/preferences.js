export function getInitialLanguage() {
  const saved = localStorage.getItem('portfolio-language')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

export function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
