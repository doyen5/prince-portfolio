import { GraduationCap, BriefcaseBusiness } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { content } from '../data/content'

export default function JourneySection({ language }) {
  const t = content[language]
  return (
    <section id="journey" className="section-pad journey-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow={t.journeyLabel} title={t.journeyTitle} /></Reveal>
        <div className="journey-grid">
          <Reveal>
            <div className="journey-column">
              <div className="journey-column-heading"><GraduationCap size={21} /><h3>{t.education}</h3></div>
              <div className="timeline">
                {t.educationItems.map((item, i) => <div className="timeline-item" key={`${item.date}-${item.title}`}>
                  <span className="timeline-marker">{String(i + 1).padStart(2, '0')}</span>
                  <div><span className="timeline-date">{item.date}</span><h4>{item.title}</h4><p>{item.detail}</p></div>
                </div>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="journey-column">
              <div className="journey-column-heading"><BriefcaseBusiness size={21} /><h3>{t.experience}</h3></div>
              {/* Les expériences sont alimentées par le CV ; les intitulés et dates restent dans content.js. */}
              <div className="timeline experience-timeline">
                {t.experienceItems.map((item, i) => <div className="timeline-item" key={`${item.date}-${item.title}`}>
                  <span className="timeline-marker">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="timeline-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p className="experience-company">{item.company}</p>
                    <ul className="experience-details">
                      {item.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
