import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { content } from '../data/content'
import { profile } from '../data/profile'

export default function ProjectDetailPage({ language }) {
  const { slug } = useParams()
  const t = content[language]
  const project = projects.find(item => item.slug === slug)
  if (!project) return <div className="container not-found"><h1>{t.notFound}</h1><Link className="button button-primary" to="/">{t.goHome}</Link></div>
  return <article className="project-detail-page">
    <div className="container project-detail">
      <Link to="/#projects" className="back-link"><ArrowLeft size={16} />{t.backProjects}</Link>
      <p className="eyebrow"><span />{t[project.category] || project.category} · {project.year}</p>
      <h1>{project.title[language]}</h1>
      <p className="project-detail-lead">{project.summary[language]}</p>
      <div className="project-detail-art"><div className="project-visual-orb" /><span>{project.title[language].slice(0, 2).toUpperCase()}</span></div>
      <div className="project-detail-columns">
        <div><h2>{language === 'fr' ? 'À propos du projet' : 'About the project'}</h2><p>{project.description[language]}</p><p className="project-note">{t.projectNote}</p></div>
        <aside><h3>{language === 'fr' ? 'Technologies & domaines' : 'Technology & focus'}</h3><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><hr /><h3>{language === 'fr' ? 'Votre projet' : 'Your project'}</h3><p>{language === 'fr' ? 'Échangeons sur votre besoin.' : 'Let’s discuss your needs.'}</p>{project.repositoryUrl && <p><a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">{language === 'fr' ? 'Consulter mes dépôts GitHub' : 'Explore my GitHub repositories'}<ArrowUpRight size={15} /></a></p>}{profile.email && <a className="text-link" href={`mailto:${profile.email}`}>{t.emailCta}<ArrowUpRight size={15} /></a>}</aside>
      </div>
    </div>
  </article>
}
