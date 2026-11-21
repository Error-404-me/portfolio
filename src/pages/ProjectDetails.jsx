import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../assets/projects";
import { categorizeTechnologies } from "../utils/techCategories";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
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

function ProjectGallery({ images, title, captions = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const thumbnailContainerRef = useRef(null);
  const thumbnailRefs = useRef([]);

  const activeImage = images[activeIndex];
  const activeCaption = captions[activeIndex];

  if (!images.length) return null;

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="group mx-auto w-full max-w-[950px] overflow-hidden rounded-2xl border border-line bg-[#111318] shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <div className="ml-4 flex-1 rounded-md bg-surface-2 px-3 py-1 text-center font-mono text-xs text-muted">
            {title.toLowerCase().replaceAll(" ", "-")}.app
          </div>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) goToPrevious();
            else if (info.offset.x < -100) goToNext();
          }}
          className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 via-canvas to-surface p-5 sm:min-h-[350px] lg:min-h-[430px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <motion.button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous screenshot"
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-line bg-black/50 p-3 text-white opacity-100 backdrop-blur-xl transition-all duration-300 hover:border-accent hover:bg-accent/20 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </motion.button>

          <motion.button
            type="button"
            onClick={goToNext}
            aria-label="Next screenshot"
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-line bg-black/50 p-3 text-white opacity-100 backdrop-blur-xl transition-all duration-300 hover:border-accent hover:bg-accent/20 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            aria-live="polite"
            className="absolute bottom-5 right-5 z-30 rounded-full border border-line bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-md"
          >
            {activeIndex + 1} / {images.length}
          </motion.div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={activeImage}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              src={activeImage}
              alt={`${title} screenshot ${activeIndex + 1} of ${images.length}`}
              className="relative z-20 max-h-[380px] w-full rounded-xl object-contain sm:max-h-[450px] lg:max-h-[520px]"
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {activeCaption && (
        <p
          className="mx-auto max-w-[700px] text-center text-[0.9rem] text-muted"
          aria-live="polite"
        >
          {activeCaption}
        </p>
      )}

      <div className="space-y-4">
        <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-surface-2">
          <motion.div
            animate={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.35 }}
            className="h-full rounded-full bg-accent"
          />
        </div>

        <div
          ref={thumbnailContainerRef}
          className="flex items-center gap-4 overflow-x-auto px-2 pb-2 pt-3 whitespace-nowrap scroll-smooth scrollbar-thumb-accent scrollbar-track-transparent"
        >
          {images.map((image, index) => (
            <motion.button
              ref={(el) => (thumbnailRefs.current[index] = el)}
              key={image}
              type="button"
              aria-label={`Show screenshot ${index + 1} of ${images.length}`}
              aria-current={activeIndex === index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              whileHover={{ y: -8, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: activeIndex === index ? 1.08 : 1,
                y: activeIndex === index ? -4 : 0,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={`relative shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                activeIndex === index
                  ? "border-accent shadow-[0_0_30px_rgba(34,197,94,.25)]"
                  : "border-line hover:border-accent/50"
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="active-thumbnail"
                  className="absolute inset-0 rounded-xl ring-2 ring-accent/60"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}

              <motion.img
                src={image}
                alt={`${title} preview ${index + 1}`}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.65,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.25 }}
                className="h-24 w-36 object-contain bg-surface-2"
              />

              {activeIndex === index && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
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
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useDocumentTitle(
    project
      ? `${project.title} | Argie C. Pasuquin`
      : "Project Not Found | Argie C. Pasuquin",
    project?.shortSummary ?? project?.summary,
  );

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
          <Link to="/projects" className="btn-secondary">
            Browse projects
          </Link>
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

  const metaFields = [
    { label: "Role", value: project.role },
    { label: "Type", value: project.projectType },
    { label: "Status", value: project.status },
    { label: "Year", value: project.year },
  ].filter((field) => Boolean(field.value));

  const techGroups = categorizeTechnologies(project.tags);

  const ctaLinks = [
    ...project.links.filter((link) => /^https?:\/\//i.test(link.href)),
    ...(project.githubUrl
      ? [{ label: "View source on GitHub", href: project.githubUrl }]
      : []),
    ...project.links.filter((link) => !/^https?:\/\//i.test(link.href)),
  ];

  return (
    <div className="min-h-screen bg-canvas [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] bg-[length:22px_22px]">
      <Link
        to="/projects"
        className="sticky top-2.5 left-2.5 z-30 ml-auto inline-flex items-center gap-2 rounded-full border border-line bg-canvas/90 px-4 py-2 font-mono text-xs tracking-[0.04em] text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <i className="bi bi-arrow-left" aria-hidden="true" />
        Back to projects
      </Link>

      <div className="relative mx-auto flex max-w-[1200px] flex-col rounded-[20px] p-[clamp(1.5rem,4vw,3rem)]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 mb-5"
        >
          <p className="eyebrow-label">{project.type}</p>
          <h2 className="m-0 text-[clamp(1.75rem,4vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white">
            {project.title}
          </h2>
        </motion.div>

        {metaFields.length > 0 && (
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4"
          >
            {metaFields.map((field) => (
              <div key={field.label}>
                <dt className="font-mono text-[0.68rem] tracking-[0.1em] text-cyan uppercase">
                  {field.label}
                </dt>
                <dd className="mt-1 text-sm text-text">{field.value}</dd>
              </div>
            ))}
          </motion.dl>
        )}

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
          {images.length > 0 && (
            <aside
              aria-label={`${project.title} screenshot gallery`}
              className="mb-8 min-w-0 lg:order-2 lg:sticky lg:top-16 lg:mb-0 lg:self-start"
            >
              <ProjectGallery
                images={images}
                title={project.title}
                captions={project.screenshotCaptions}
              />
            </aside>
          )}

          <div className="min-w-0 lg:order-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-7 max-w-[1200px] text-[1.05rem] leading-[1.7] text-muted"
            >
              {project.summary}
            </motion.p>

            {(project.role || project.responsibilities?.length > 0) && (
              <div className="mb-9">
                <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
                  My Role
                </h3>
                {project.role && (
                  <p className="mb-3 text-[1.05rem] font-semibold text-white">
                    {project.role}
                  </p>
                )}
                {project.responsibilities?.length > 0 && (
                  <ul className="grid list-none gap-2.5 p-0">
                    {project.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="relative pl-6 leading-[1.55] text-text before:absolute before:top-[0.5em] before:left-0 before:h-2 before:w-2 before:rotate-45 before:rounded-sm before:bg-accent before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {project.features?.length > 0 && (
              <div className="mb-9">
                <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
                  Key Features
                </h3>
                <ul className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-6 leading-[1.55] text-text before:absolute before:top-[0.5em] before:left-0 before:h-2 before:w-2 before:rotate-45 before:rounded-sm before:bg-accent before:content-['']"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges?.length > 0 && (
              <div className="mb-9">
                <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
                  Engineering Challenges
                </h3>
                <div className="grid gap-4">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge.problem}
                      className="rounded-xl border border-line bg-surface-2 p-4.5"
                    >
                      <p className="mb-1.5 font-semibold text-accent">
                        {challenge.problem}
                      </p>
                      <p className="text-[0.92rem] leading-[1.6] text-muted">
                        {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.architecture?.length > 0 && (
              <div className="mb-9">
                <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
                  System Architecture
                </h3>
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface-2 p-4.5">
                  {project.architecture.map((layer, index) => (
                    <div key={layer} className="flex items-center gap-2">
                      <span className="rounded-lg border border-line bg-surface px-3 py-2 font-mono text-[0.82rem] text-text">
                        {layer}
                      </span>
                      {index < project.architecture.length - 1 && (
                        <i
                          className="bi bi-arrow-right text-muted"
                          aria-hidden="true"
                        ></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="mb-3.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
                Tech Stack
              </h3>
              <div
                className="grid gap-5 sm:grid-cols-2"
                aria-label="Project technologies"
              >
                {techGroups.map((group) => (
                  <div key={group.category}>
                    <p className="mb-2 font-mono text-[0.68rem] tracking-[0.08em] text-cyan uppercase">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={scaleIn}
                          initial="hidden"
                          animate="show"
                          whileHover={{ y: -4, scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="tag-pill"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 sm:flex-row">
              {ctaLinks.map((link) => {
                const isExternal = /^https?:\/\//i.test(link.href);
                const destination =
                  link.href === "#contact" ? "/contact" : `/${link.href}`;
                const className = isExternal
                  ? "btn-primary w-full sm:w-auto"
                  : "btn-secondary w-full sm:w-auto";

                return isExternal ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {link.label}
                    <i
                      className="bi bi-arrow-up-right ml-2.5"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <Link key={link.label} to={destination} className={className}>
                    {link.label}
                    <i
                      className="bi bi-arrow-right ml-2.5"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
