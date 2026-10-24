import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import { content } from '../data/content'

export default function HeroSection({ language }) {
  const t = content[language]
  const photo = profile.photo
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span />{t.heroEyebrow}</p>
          <h1>{t.heroTitle.split(' ').map((word, i) => {
            const highlight = language === 'fr' ? ['idées', 'expériences'].includes(word.replace(/[.,]/g, '')) : ['ideas', 'experiences.'].includes(word)
            return <span key={`${word}-${i}`} className={highlight ? 'gradient-text' : ''}>{word}{' '}</span>
          })}</h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">{t.explore}<ArrowUpRight size={17} /></a>
            <a href="#contact" className="button button-ghost">{t.contactMe}<ArrowDownRight size={17} /></a>
            {/* Le CV est servi depuis public/documents et téléchargé directement depuis le portfolio. */}
            <a href={profile.cv} className="button button-ghost" download><Download size={16} />{t.downloadCv}</a>
          </div>
          <div className="hero-meta">
            <div className="hero-availability"><span className="availability-dot" />{profile.location[language]}</div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-label={profile.name}>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-glow" />
          <div className="hero-photo-frame">
            {photo ? <img src={photo} alt={profile.name} /> : (
              <div className="photo-placeholder">
                <span className="photo-initials">PD<span>.</span></span>
                <span className="photo-placeholder-label">{language === 'fr' ? 'Votre photo ici' : 'Your photo here'}</span>
              </div>
            )}
          </div>
          <div className="floating-note note-top"><Sparkles size={15} /><span>{language === 'fr' ? 'Créativité & stratégie' : 'Creativity & strategy'}</span></div>
          <div className="floating-note note-bottom"><span className="note-dot" />{language === 'fr' ? 'Du concept au concret' : 'From concept to delivery'}</div>
          <span className="art-index">01 / 04</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span className="scroll-line" />{t.scroll}</a>
      <div className="hero-background-word" aria-hidden="true">AHOU</div>
    </section>
  )
}
