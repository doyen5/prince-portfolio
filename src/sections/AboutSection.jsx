import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { content } from '../data/content'
import { profile } from '../data/profile'

export default function AboutSection({ language }) {
  const t = content[language]
  return (
    <section id="about" className="section-pad about-section">
      <div className="container about-layout">
        <Reveal><SectionHeading eyebrow={t.aboutLabel} title={t.aboutTitle} /></Reveal>
        <Reveal delay={0.12}>
          <div className="about-copy">
            <p>{t.aboutText}</p>
            <p className="about-tagline">“{profile.tagline[language]}”</p>
            <a href="#journey" className="text-link">{t.nav.journey}<ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
      </div>
      <div className="container about-stats">
        <div><span className="stat-index">01</span><strong>{language === 'fr' ? 'Penser' : 'Think'}</strong><p>{language === 'fr' ? 'Comprendre le vrai besoin.' : 'Understand the real need.'}</p></div>
        <div><span className="stat-index">02</span><strong>{language === 'fr' ? 'Construire' : 'Build'}</strong><p>{language === 'fr' ? 'Concevoir avec intention.' : 'Design with intention.'}</p></div>
        <div><span className="stat-index">03</span><strong>{language === 'fr' ? 'Faire évoluer' : 'Improve'}</strong><p>{language === 'fr' ? 'Mesurer et apprendre.' : 'Measure and learn.'}</p></div>
      </div>
    </section>
  )
}
