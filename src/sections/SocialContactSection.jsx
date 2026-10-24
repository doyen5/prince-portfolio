import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { profile } from '../data/profile'
import { content } from '../data/content'

export default function SocialContactSection({ language }) {
  const t = content[language]
  return (
    <>
      <section className="section-pad social-section" id="social">
        <div className="container social-layout">
          <Reveal><SectionHeading eyebrow={t.socialLabel} title={t.socialTitle} /></Reveal>
          <Reveal delay={0.1}>
            <div className="social-cards">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-card"><Github size={24} /><span>GitHub</span><ArrowUpRight size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-card"><Linkedin size={24} /><span>LinkedIn</span><ArrowUpRight size={17} /></a>
              {/* Coordonnées reprises du CV pour faciliter une prise de contact directe. */}
              <a href={`mailto:${profile.email}`} className="social-card"><Mail size={24} /><span>{profile.email}</span><ArrowUpRight size={17} /></a>
              <a href={`tel:${profile.phones[0].replace(/\s/g, '')}`} className="social-card"><Phone size={24} /><span>{profile.phones[0]}</span><ArrowUpRight size={17} /></a>
            </div>
            <div className="phone-secondary"><Phone size={14} /> {profile.phones[1]}</div>
          </Reveal>
        </div>
      </section>
      <section id="contact" className="section-pad contact-section">
        <div className="contact-decoration" aria-hidden="true">LET’S<br />MAKE<br />IT REAL.</div>
        <div className="container contact-content">
          <Reveal>
            <p className="eyebrow"><span />{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="contact-description">{t.contactText}</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}`}><Mail size={17} />{t.emailCta}<ArrowUpRight size={17} /></a>
              {/* Le même PDF est proposé ici et dans la section d'accueil. */}
              <a className="button button-ghost contact-cv-button" href={profile.cv} download><Download size={17} />{t.cv}</a>
            </div>
          </Reveal>
          <div className="contact-bottom"><span>{profile.name}</span><span>{profile.role[language]}</span><span>{profile.location[language]}</span></div>
        </div>
      </section>
    </>
  )
}
