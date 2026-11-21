import { useNavigate } from "react-router-dom";
import { projects } from "../assets/projects";
import { motion, useReducedMotion } from "motion/react";

const MAX_VISIBLE_TAGS = 3;

function getLiveLink(project) {
  return project.links.find(
    (link) =>
      link.href.startsWith("http") && !/github/i.test(link.label),
  );
}

function createRevealVariants(prefersReducedMotion, delay = 0) {
  return {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : 18,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  };
}

function Projects() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const liveProjectCount = projects.filter(getLiveLink).length;

  return (
    <section
      className="px-6 py-23 md:px-4 md:py-16"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <motion.header
          variants={createRevealVariants(prefersReducedMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 flex flex-col gap-6 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="eyebrow-label">Selected work</p>
            <h1
              id="projects-title"
              className="text-4xl leading-tight font-bold text-white"
            >
              Ideas made real.
              <span className="block text-accent">Built to be useful.</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              A timeline of the web, mobile, and IoT projects I have built and
              explored.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { count: projects.length, label: "Projects" },
              { count: liveProjectCount, label: "Live demos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 sm:flex-none"
              >
                <p className="font-mono text-2xl font-bold text-accent">
                  {String(stat.count).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[9px] w-px bg-line md:left-[132px]"
          />

          <ol className="relative m-0 list-none space-y-4 p-0 md:space-y-5">
            {projects.map((project, index) => {
              const coverImage = Array.isArray(project.image)
                ? project.image[0]
                : project.image;
              const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
              const hiddenTagCount = project.tags.length - visibleTags.length;
              const liveLink = getLiveLink(project);

              return (
                <motion.li
                  key={project.id}
                  variants={createRevealVariants(
                    prefersReducedMotion,
                    (index % 3) * 0.08,
                  )}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.12 }}
                  className="relative grid grid-cols-[18px_minmax(0,1fr)] items-stretch gap-x-4 md:grid-cols-[100px_24px_minmax(0,1fr)] md:gap-x-5"
                >
                  <p className="hidden pt-5 text-right font-mono text-xs leading-5 text-muted md:block">
                    {project.year ?? "Not dated"}
                  </p>

                  <div className="relative z-10 flex justify-center pt-5">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        project.status === "Production"
                          ? "border-accent bg-canvas shadow-[0_0_14px_rgba(199,244,100,0.28)]"
                          : "border-line bg-surface"
                      }`}
                    >
                      {project.status === "Production" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </span>
                  </div>

                  <motion.article
                    whileHover={{ borderColor: "#c7f464" }}
                    className="group min-w-0 overflow-hidden rounded-2xl border border-line bg-surface/75 transition-colors duration-300"
                  >
                    <div className="grid min-w-0 lg:grid-cols-[minmax(220px,0.75fr)_minmax(0,1.25fr)]">
                      <div className="relative h-48 overflow-hidden bg-surface-2 p-2.5 lg:h-[250px]">
                        <span className="absolute top-4 left-4 z-10 rounded-full border border-line bg-canvas/85 px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.06em] text-white backdrop-blur">
                          P.{String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-full overflow-hidden rounded-xl bg-canvas/40">
                          <motion.img
                            src={coverImage}
                            alt={`${project.title} project preview`}
                            className="h-full w-full object-contain object-top"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-col gap-4 p-4 sm:p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[0.68rem] font-semibold tracking-[0.1em] text-accent uppercase">
                            {project.projectType ?? project.type}
                          </span>
                          <div className="flex items-center gap-2">
                            {project.year && (
                              <span className="rounded-full border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] text-muted md:hidden">
                                {project.year}
                              </span>
                            )}
                            {project.status && (
                              <span className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 font-mono text-[0.68rem] text-accent">
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h2 className="text-xl leading-snug font-bold text-white">
                            {project.title}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {project.shortSummary ?? project.summary}
                          </p>
                        </div>

                        <div
                          className="flex flex-wrap gap-2"
                          aria-label={`${project.title} key technologies`}
                        >
                          {visibleTags.map((tag) => (
                            <span key={tag} className="tag-pill">
                              {tag}
                            </span>
                          ))}
                          {hiddenTagCount > 0 && (
                            <span
                              className="tag-pill text-muted"
                              aria-label={`and ${hiddenTagCount} more technologies`}
                            >
                              +{hiddenTagCount}
                            </span>
                          )}
                        </div>

                        <div className="mt-auto flex items-center gap-2 border-t border-line pt-4">
                          {liveLink && (
                            <a
                              href={liveLink.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} live demo`}
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                            >
                              <i
                                className="bi bi-box-arrow-up-right"
                                aria-hidden="true"
                              />
                            </a>
                          )}
                          <motion.button
                            type="button"
                            className="btn-secondary min-w-0 flex-1"
                            onClick={() => navigate(`/project/${project.id}`)}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                          >
                            View project details
                            <i
                              className="bi bi-arrow-up-right ml-2"
                              aria-hidden="true"
                            />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Projects;
