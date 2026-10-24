import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, language, t, index }) {
  const title = project.title[language]
  const summary = project.summary[language]
  return (
    <article className={`project-card project-card-${index % 3}`}>
      <Link to={`/projects/${project.slug}`} className="project-visual" aria-label={`${t.details}: ${title}`}>
        <div className="project-visual-orb" />
        <div className="project-visual-lines" />
        <span className="project-number">0{index + 1}</span>
        <span className="project-category">{t[project.category] || project.category}</span>
        <ArrowUpRight className="project-arrow" size={22} />
        {project.status === 'private' && <span className="private-tag"><LockKeyhole size={12} /> Private</span>}
        <div className="project-monogram">{title.slice(0, 2).toUpperCase()}</div>
      </Link>
      <div className="project-info">
        <div>
          <h3><Link to={`/projects/${project.slug}`}>{title}</Link></h3>
          <p>{summary}</p>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  )
}
