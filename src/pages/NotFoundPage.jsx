import { Link } from 'react-router-dom'
import { content } from '../data/content'

export default function NotFoundPage({ language }) {
  const t = content[language]
  return <div className="container not-found"><span className="not-found-code">404</span><h1>{t.notFound}</h1><Link className="button button-primary" to="/">{t.goHome}</Link></div>
}
