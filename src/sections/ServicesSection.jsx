import { ArrowUpRight, Lightbulb, PanelsTopLeft, Workflow } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { content } from '../data/content'

const icons = [Lightbulb, PanelsTopLeft, Workflow]

export default function ServicesSection({ language }) {
  const t = content[language]
  return (
    <section id="services" className="section-pad services-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow={t.servicesLabel} title={t.servicesTitle} /></Reveal>
        <div className="services-list">
          {t.serviceItems.map((item, i) => {
            const Icon = icons[i]
            return <Reveal key={item.title} delay={i * 0.06}><article className="service-row">
              <span className="service-index">0{i + 1}</span>
              <div className="service-icon"><Icon size={22} /></div>
              <div className="service-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
              <a href="#contact" aria-label={`${item.title} — contact`}><ArrowUpRight size={20} /></a>
            </article></Reveal>
          })}
        </div>
      </div>
    </section>
  )
}
