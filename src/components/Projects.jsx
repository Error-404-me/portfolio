// src/components/Projects.jsx
import { useNavigate } from "react-router-dom";
import { projects } from "../assets/projects";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHover = {
  y: -8,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

function Projects() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="px-6 py-23 md:px-4 md:py-16"
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="shell">
        <motion.div variants={fadeUp} className="section-heading">
          <p className="eyebrow-label">Projects</p>
          <h2 className="heading-lg">A few things I have built or designed.</h2>
          <p className="mt-4 text-muted">
            Each project has a focused preview, details, and next-step links so
            visitors can understand the work without guessing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => {
            const coverImage = Array.isArray(project.image)
              ? project.image[0]
              : project.image;

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={cardHover}
                className="card-surface group grid grid-rows-[auto_1fr] overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-surface-2 p-2.5">
                  <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-canvas/60 px-2.5 py-0.5 font-mono text-[0.7rem] tracking-[0.06em] text-white">
                    P.{String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-full w-full overflow-hidden rounded-md bg-surface-2">
                    <motion.img
                      src={coverImage}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-contain object-top"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 p-5 text-left">
                  <p className="font-mono text-[0.76rem] font-semibold tracking-[0.08em] text-warm uppercase">
                    {project.type}
                  </p>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-muted line-clamp-4">{project.summary}</p>
                  <div
                    className="flex flex-wrap gap-2"
                    aria-label={`${project.title} tags`}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="tag-pill"
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.button
                    type="button"
                    className="btn-secondary mt-auto w-full"
                    onClick={() => navigate(`/project/${project.id}`)}
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <motion.button
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          type="button"
          className="btn-primary"
          onClick={() => navigate("/projects")}
        >
          See More
          <i className="bi bi-arrow-right ml-2.5"></i>
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Projects;
