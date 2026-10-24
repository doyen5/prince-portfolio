import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { profile } from '../../data/profile'
import { content } from '../../data/content'

export default function Footer({ language }) {
  const t = content[language]
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="footer-brand" href="#top">P<span>.</span> AHOU</a>
          <p>{t.footer}</p>
        </div>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#top" aria-label="Back to top"><ArrowUpRight size={18} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Prince Désiré AHOU</span>
      </div>
    </footer>
  )
}
