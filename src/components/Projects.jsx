import { useEffect, useState } from 'react'
import PortfolioImg from '../assets/Screenshot 2025-07-14 155635.png'
import PortfolioImgPng from '../assets/portfolio.png'
import TravelGuideImg from '../assets/travel_guide.png'

const projects = [
  {
    title: 'Portfolio Website',
    type: 'Personal portfolio',
    image: PortfolioImg,
    summary:
      'A responsive personal website that presents profile details, projects, contact options, and a printable resume.',
    tags: ['React', 'Vite', 'CSS'],
    highlights: [
      'Single-page navigation with mobile support',
      'Project details and contact workflow',
      'Printable resume overlay',
    ],
    links: [
      { label: 'Open section', href: '#home' },
      { label: 'GitHub profile', href: 'https://github.com/Error-404-me' },
    ],
  },
  {
    title: 'To-do App',
    type: 'Productivity UI',
    image: PortfolioImgPng,
    summary:
      'A task-management interface concept focused on simple task entry, completion states, and clear daily priorities.',
    tags: ['JavaScript', 'UI Design', 'CSS'],
    highlights: [
      'Task-focused layout',
      'Reusable interface pattern',
      'Good practice for state and list rendering',
    ],
    links: [{ label: 'Discuss this project', href: '#contact' }],
  },
  {
    title: 'Lakwatserong Pinoy',
    type: 'Travel guide project',
    image: TravelGuideImg,
    summary:
      'A software design project that helps travelers explore local destinations with useful place information.',
    tags: ['Software Design', 'Travel', 'Team Project'],
    highlights: [
      'Destination-focused presentation',
      'Built for a Computer Engineering course project',
      'Organizes travel ideas into a browsable guide',
    ],
    links: [{ label: 'Discuss this project', href: '#contact' }],
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) {
    return null
  }

  return (
    <div className="project-modal" role="presentation" onClick={onClose}>
      <article
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>
        <img src={project.image} alt={`${project.title} preview`} />
        <p className="eyebrow">{project.type}</p>
        <h3 id="project-title">{project.title}</h3>
        <p>{project.summary}</p>

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
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={!link.href.startsWith('http') ? onClose : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </article>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <section className="my-projects" id="projects">
      <div className="card">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2 className="p-name">A few things I have built or designed.</h2>
          <p className="info">
            Each project has a focused preview, details, and next-step links so visitors
            can understand the work without guessing.
          </p>
        </div>

        <div className="p-container">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="cover">
                <div className="screen">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              </div>

              <div className="description">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags" aria-label={`${project.title} tags`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-project"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <div className='v-container'>
        <button type='button' className='btn-more'>
          See More 
          <i className="bi bi-arrow-right arrow-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Projects
