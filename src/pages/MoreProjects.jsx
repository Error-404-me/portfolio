import { Link, useNavigate } from "react-router-dom";
import { projects } from "../assets/projects";

function MoreProjects() {
  const navigate = useNavigate();

  return (
    <section className="more-projects" id="more-projects">
      <button type="button" className="btn-back" onClick={() => navigate("/")}>
        <i className="bi bi-x-lg arrow-left"></i>
      </button>
      <div className="mp-header">
        <h2>All Projects</h2>
        <p className="mp-subtitle">
          Everything I've built, designed, or contributed to so far. Pick any
          card to read the full write-up.
        </p>
      </div>

      <div className="mp-grid">
        {projects.map((project, index) => {
          // project.image can be a single source or an array (e.g.
          // EggCubator) — this card only needs one representative shot.
          const coverImage = Array.isArray(project.image)
            ? project.image[0]
            : project.image;

          return (
            <Link
              to={`/project/${project.id}`}
              className="mp-card"
              key={project.id}
            >
              <span className="mp-index">
                P.{String(index + 1).padStart(2, "0")}
              </span>

              <div className="mp-cover">
                <img src={coverImage} alt={`${project.title} screenshot`} />
              </div>

              <div className="mp-body">
                <p className="mp-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="mp-summary">{project.summary}</p>

                <div
                  className="project-tags"
                  aria-label={`${project.title} tags`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <span className="mp-cta">
                View details
                <i className="bi bi-arrow-right arrow-right"></i>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MoreProjects;
