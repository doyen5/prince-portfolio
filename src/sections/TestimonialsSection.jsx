import { Quote } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { content } from '../data/content'

export default function TestimonialsSection({ language }) {
  const t = content[language]
  return (
    <section className="section-pad testimonials-section">
      <div className="container testimonials-layout">
        <Reveal><SectionHeading eyebrow={t.testimonialsLabel} title={t.testimonialsTitle} /></Reveal>
        <Reveal delay={0.1}><div className="testimonial-placeholder"><Quote size={30} /><p>{t.testimonialsText}</p><span>— {language === 'fr' ? 'Section en préparation' : 'Section in progress'}</span></div></Reveal>
      </div>
    </section>
  )
}
