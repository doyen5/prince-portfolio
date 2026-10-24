import { Braces, Compass, Rocket, Activity, Languages } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { content } from '../data/content'

const icons = [Activity, Compass, Rocket, Braces, Languages] // Un pictogramme par catégorie de compétences.

export default function SkillsSection({ language }) {
  const t = content[language]
  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow={t.skillsLabel} title={t.skillsTitle} description={t.skillsIntro} /></Reveal>
        <div className="skills-grid">
          {t.skillGroups.map((group, index) => {
            const Icon = icons[index]
            return <Reveal key={group.title} delay={index * 0.08}><article className="skill-card">
              <div className="skill-icon"><Icon size={22} /></div>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article></Reveal>
          })}
        </div>
      </div>
    </section>
  )
}
