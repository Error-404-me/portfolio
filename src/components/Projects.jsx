import { useNavigate } from 'react-router-dom'
import { projects } from '../assets/projects'

function Projects() {
  const navigate = useNavigate()

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
            <article className="project-card" key={project.id}>
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
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className='v-container'>
        <button type='button' className='btn-more' onClick={() => navigate("/projects")}>
          See More 
          <i className="bi bi-arrow-right arrow-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Projects