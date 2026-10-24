import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import { content } from '../data/content'

export default function FeaturedProjectsSection({ language }) {
  const t = content[language]
  // La liste reste vide tant qu'aucune réalisation vérifiée et publiable n'a été ajoutée.
  return (
    <section id="projects" className="section-pad projects-section">
      <div className="container">
        <Reveal><div className="projects-heading-row"><SectionHeading eyebrow={t.projectsLabel} title={t.projectsTitle} description={t.projectsIntro} /><span className="section-side-note">SELECTED / WORK</span></div></Reveal>
        {/* Les filtres n'apparaissent que lorsqu'il existe des projets documentés. */}
        {projects.length > 0 ? <div className="projects-grid">
          {projects.map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} language={language} t={t} index={index} /></Reveal>)}
        </div> : <div className="projects-empty-state"><span className="projects-empty-mark">↗</span><p>{t.noProjects}</p></div>}
        <div className="projects-footnote"><span>{language === 'fr' ? 'Portfolio en évolution' : 'Portfolio in progress'}</span><a href="#contact">{language === 'fr' ? 'Échanger sur une collaboration' : 'Discuss a collaboration'} <ArrowUpRight size={15} /></a></div>
      </div>
    </section>
  )
}
