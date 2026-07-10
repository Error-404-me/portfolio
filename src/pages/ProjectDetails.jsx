import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects } from '../assets/projects'

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((item) => item.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <section className="project-details not-found">
        <div className="card">
          <h2>Project not found</h2>
          <p>We couldn't find the project you're looking for.</p>
          <button type="button" className="btn-project" onClick={() => navigate('/')}>
            Back to home
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="project-details" id="project-details">
      <div className="card">
        <button type="button" className="btn-back" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left arrow-left"></i>
          Back
        </button>

        <div className="project-details-header">
          <p className="eyebrow">{project.type}</p>
          <h2>{project.title}</h2>
        </div>

        <div className="project-details-image">
          <img src={project.image} alt={`${project.title} preview`} />
        </div>

        <p className="project-details-summary">{project.summary}</p>

        <h3>Highlights</h3>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-tags" aria-label="Project technologies">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.links.map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={`/${link.href}`}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails