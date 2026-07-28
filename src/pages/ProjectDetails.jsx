// src/pages/ProjectDetails.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../assets/projects";
import { motion, AnimatePresence } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ProjectGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const thumbnailContainerRef = useRef(null);
  const thumbnailRefs = useRef([]);

  const activeImage = images[activeIndex];

  if (!images.length) return null;

  // ----------------------------
  // Navigation
  // ----------------------------

  const goToPrevious = useCallback(() => {
    setDirection(-1);

    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setDirection(1);

    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // ----------------------------
  // Keyboard Navigation
  // ----------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    const activeThumbnail = thumbnailRefs.current[activeIndex];

    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // ----------------------------
  // Animation Variants
  // ----------------------------

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      rotateY: direction > 0 ? 6 : -6,
      filter: "blur(8px)",
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },

    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 1.04,
      rotateY: direction > 0 ? -6 : 6,
      filter: "blur(8px)",
    }),
  };

  return (
    <div className="my-8 space-y-5">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          rotateX: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          group
          mx-auto
          w-full
          max-w-[950px]
          overflow-hidden
          rounded-2xl
          border
          border-line
          bg-[#111318]
          shadow-2xl
        "
      >
        {/* Browser Header */}

        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-line
            bg-surface
            px-4
            py-3
          "
        >
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <div
            className="
              ml-4
              flex-1
              rounded-md
              bg-surface-2
              px-3
              py-1
              text-center
              font-mono
              text-xs
              text-muted
            "
          >
            {title.toLowerCase().replaceAll(" ", "-")}.app
          </div>
        </div>

        {/* Screen */}

        {/* Screen */}

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) {
              goToPrevious();
            } else if (info.offset.x < -100) {
              goToNext();
            }
          }}
          className="
    relative
    flex
    min-h-[220px]
    items-center
    justify-center
    overflow-hidden
    bg-gradient-to-br
    from-surface-2
    via-canvas
    to-surface
    p-5
    sm:min-h-[350px]
    lg:min-h-[430px]
  "
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
      absolute
      -top-40
      -left-40
      h-80
      w-80
      rounded-full
      bg-accent/10
      blur-3xl
    "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
      absolute
      -bottom-40
      -right-40
      h-80
      w-80
      rounded-full
      bg-cyan-400/10
      blur-3xl
    "
          />

          {/* LEFT BUTTON */}

          <motion.button
            type="button"
            onClick={goToPrevious}
            whileHover={{
              scale: 1.08,
              x: -2,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
      absolute
      left-5
      top-1/2
      z-30
      -translate-y-1/2
      rounded-full
      border
      border-line
      bg-black/50
      p-3
      text-white
      opacity-0
      backdrop-blur-xl
      transition-all
      duration-300
      group-hover:opacity-100
      hover:border-accent
      hover:bg-accent/20
    "
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </motion.button>

          {/* RIGHT BUTTON */}

          <motion.button
            type="button"
            onClick={goToNext}
            whileHover={{
              scale: 1.08,
              x: 2,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
      absolute
      right-5
      top-1/2
      z-30
      -translate-y-1/2
      rounded-full
      border
      border-line
      bg-black/50
      p-3
      text-white
      opacity-0
      backdrop-blur-xl
      transition-all
      duration-300
      group-hover:opacity-100
      hover:border-accent
      hover:bg-accent/20
    "
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </motion.button>

          {/* IMAGE COUNTER */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
      absolute
      bottom-5
      right-5
      z-30
      rounded-full
      border
      border-line
      bg-black/60
      px-4
      py-2
      text-xs
      font-medium
      text-white
      backdrop-blur-md
    "
          >
            {activeIndex + 1} / {images.length}
          </motion.div>

          {/* Animated Image */}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={activeImage}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
              }}
              src={activeImage}
              alt={`${title} screenshot`}
              className="
        relative
        z-20
        max-h-[380px]
        w-full
        rounded-xl
        object-contain
        sm:max-h-[450px]
        lg:max-h-[520px]
      "
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Thumbnails */}

      <div className="space-y-4">
        {/* Progress Bar */}

        <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-surface-2">
          <motion.div
            animate={{
              width: `${((activeIndex + 1) / images.length) * 100}%`,
            }}
            transition={{
              duration: 0.35,
            }}
            className="h-full rounded-full bg-accent"
          />
        </div>

        {/* Thumbnail List */}

        <div
          ref={thumbnailContainerRef}
          className="
            flex
            items-center
            gap-4
            overflow-x-auto
            px-2
            pb-2
            pt-3
            whitespace-nowrap
            scroll-smooth
            scrollbar-thumb-accent
            scrollbar-track-transparent
          "
        >
          {images.map((image, index) => (
            <motion.button
              ref={(el) => (thumbnailRefs.current[index] = el)}
              key={image}
              type="button"
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              whileHover={{
                y: -8,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.95,
              }}
              animate={{
                scale: activeIndex === index ? 1.08 : 1,
                y: activeIndex === index ? -4 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 22,
              }}
              className={`
          relative
          shrink-0
          overflow-hidden
          rounded-xl
          border
          transition-all
          duration-300
          ${
            activeIndex === index
              ? "border-accent shadow-[0_0_30px_rgba(34,197,94,.25)]"
              : "border-line hover:border-accent/50"
          }
        `}
            >
              {/* Active Glow */}

              {activeIndex === index && (
                <motion.div
                  layoutId="active-thumbnail"
                  className="
              absolute
              inset-0
              rounded-xl
              ring-2
              ring-accent/60
            "
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 30,
                  }}
                />
              )}

              <motion.img
                src={image}
                alt={`${title} preview ${index + 1}`}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.65,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
            h-24
            w-36
            object-contain
            bg-surface-2
          "
              />

              {/* Active Dot */}

              {activeIndex === index && (
                <motion.div
                  layoutId="active-dot"
                  className="
              absolute
              bottom-2
              left-1/2
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-accent
            "
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <motion.section
        className="min-h-screen bg-canvas [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] bg-[length:22px_22px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto max-w-[480px] p-[clamp(1.5rem,4vw,3rem)] text-center">
          <h2 className="mb-2 text-2xl text-white">Project not found</h2>
          <p className="mb-6 text-muted">
            We couldn't find the project you're looking for.
          </p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
        </div>
      </motion.section>
    );
  }

  const rawImages = project.images ?? project.image;
  const images = Array.isArray(rawImages)
    ? rawImages
    : rawImages
      ? [rawImages]
      : [];

  return (
    <section className="min-h-screen bg-canvas [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] bg-[length:22px_22px]">
      <motion.button
        whileHover={{
          x: -5,
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        type="button"
        className="sticky top-2.5 right-2.5 z-[9999] ml-auto flex animate-fade-up animate-pulse-glow items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 font-mono text-[0.78rem] tracking-[0.08em] text-muted uppercase transition duration-200 [animation-delay:500ms] hover:-translate-x-[3px] hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-x-lg text-[0.85rem]"></i>
      </motion.button>

      <div className="relative mx-auto flex max-w-[1200px] flex-col rounded-[20px] p-[clamp(1.5rem,4vw,3rem)]">
        <motion.div variants={fadeUp} className="mt-7 mb-5">
          <p className="eyebrow-label">{project.type}</p>
          <h2 className="m-0 text-[clamp(1.75rem,4vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white">
            {project.title}
          </h2>
        </motion.div>

        {images.length > 0 && (
          <ProjectGallery images={images} title={project.title} />
        )}

        <motion.p
          variants={fadeUp}
          className="mb-7 max-w-[1200px] text-[1.05rem] leading-[1.7] text-muted"
        >
          {project.summary}
        </motion.p>

        <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
          Highlights
        </h3>
        <motion.ul
          variants={container}
          className="mb-7 grid list-none gap-2.5 p-0"
        >
          {project.highlights.map((highlight) => (
            <motion.li
              key={highlight}
              variants={fadeUp}
              className="relative pl-6 leading-[1.55] text-text before:absolute before:top-[0.5em] before:left-0 before:h-2 before:w-2 before:rotate-45 before:rounded-sm before:bg-accent before:content-['']"
            >
              {highlight}
            </motion.li>
          ))}
        </motion.ul>

        <div
          className="mb-8 flex flex-wrap gap-2"
          aria-label="Project technologies"
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={scaleIn}
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="tag-pill"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-wrap flex-col gap-3 pt-6 justify-end md:flex-row">
          {project.links.map((link) =>
            link.href.startsWith("http") ? (
              <motion.a
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
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-lg bg-accent px-[1.15rem] py-2.5 text-[0.9rem] font-semibold text-canvas no-underline transition duration-150 hover:-translate-y-0.5 hover:bg-cyan focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </motion.a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className="flex items-center justify-center rounded-lg bg-accent px-[1.15rem] py-2.5 text-[0.9rem] font-semibold text-canvas no-underline transition duration-150 hover:-translate-y-0.5 hover:bg-cyan focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
