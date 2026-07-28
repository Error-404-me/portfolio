// src/pages/MoreProjects.jsx
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../assets/projects";

function MoreProjects() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-canvas pb-12 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] bg-[length:22px_22px]">
      <button
        type="button"
        className="sticky top-2.5 right-2.5 z-[9999] ml-auto flex animate-fade-up animate-pulse-glow items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 font-mono text-[0.78rem] tracking-[0.08em] text-muted uppercase transition duration-200 [animation-delay:500ms] hover:-translate-x-[3px] hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        onClick={() => navigate("/")}
      >
        <i className="bi bi-x-lg text-[0.85rem]"></i>
      </button>

      <div className="mx-auto mb-10 max-w-[1080px]">
        <p className="eyebrow-label mt-6">Projects</p>
        <h2 className="mb-3 text-[clamp(1.75rem,4vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white">
          All Projects
        </h2>
        <p className="max-w-[62ch] text-base leading-[1.6] text-muted">
          Everything I've built, designed, or contributed to so far. Pick any
          card to read the full write-up.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1080px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {projects.map((project, index) => {
          const coverImage = Array.isArray(project.image)
            ? project.image[0]
            : project.image;

          return (
            <Link
              to={`/project/${project.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface text-text no-underline transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              key={project.id}
            >
              <span className="absolute top-3 left-3 z-[1] animate-fade-up animate-pulse-glow rounded-full bg-canvas/60 px-2 py-0.5 font-mono text-[0.7rem] tracking-[0.06em] text-white [animation-delay:500ms]">
                P.{String(index + 1).padStart(2, "0")}
              </span>

              <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                <img
                  src={coverImage}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-contain transition-transform duration-350 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pt-5 pb-2">
                <p className="mb-1.5 font-mono text-[0.7rem] tracking-[0.1em] text-muted uppercase">
                  {project.type}
                </p>
                <h3 className="mb-2 text-[1.15rem] font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-[0.92rem] leading-[1.55] text-muted line-clamp-4">
                  {project.summary}
                </p>

                <div
                  className="mb-5 flex flex-wrap gap-1.5"
                  aria-label={`${project.title} tags`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex items-center gap-1.5 border-t border-line px-5 py-3.5 text-[0.85rem] font-semibold text-accent transition-colors duration-200 group-hover:text-cyan">
                View details
                <i className="bi bi-arrow-right"></i>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MoreProjects;
