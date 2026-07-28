// src/pages/MoreAbout.jsx
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../assets/img/5f10c3cf-1a72-4049-802e-2a5ef6c7e4bc_removalai_preview.png";
import { motion } from "motion/react";

const profileFields = [
  { label: "Status", value: "Open to freelance & junior roles" },
  { label: "Focus", value: "Front-end engineering & product design" },
  {
    label: "Base",
    value: "Computer Engineering, University of Cebu – Main Campus",
  },
];

const strengthDetails = [
  {
    name: "Adaptable",
    detail:
      "Comfortable moving between hardware and software contexts, or picking up a new stack mid-project.",
  },
  {
    name: "Detail-focused",
    detail:
      "Cares about the small stuff — spacing, edge cases, naming — because it adds up.",
  },
  {
    name: "Curious",
    detail:
      'Default response to "how does this actually work" is to go find out.',
  },
  {
    name: "Reliable",
    detail: "Says what will get done and follows through on it.",
  },
  {
    name: "Resourceful",
    detail: "Works with what is available and finds a way through blockers.",
  },
];

const toolbox = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "Python", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.JS", "Bootstrap", "Flet"],
  },
  {
    category: "Platforms & Tools",
    items: [
      "Git/GitHub",
      "GitHub Actions",
      "WordPress",
      "Firebase",
      "Supabase",
    ],
  },
  {
    category: "Hardware & Mobile",
    items: ["Embedded System", "Mobile App Development"],
  },
];

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

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function MoreAbout() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="min-h-screen bg-canvas pb-12 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] bg-[length:22px_22px]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.button
        whileHover={{
          x: -4,
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

      <div className="relative mx-auto max-w-[1200px] rounded-[20px] p-[clamp(1.5rem,4vw,3rem)]">
        <motion.div variants={fadeUp}>
          <p className="eyebrow-label mt-7">About</p>
          <h2 className="mb-3 text-[clamp(1.75rem,4vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white">
            More About Me
          </h2>
          <p className="mb-8 max-w-[62ch] text-[1.05rem] leading-[1.7] text-muted">
            A closer look at where I'm coming from, how I like to work, and what
            I'm building toward.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="mb-10 flex flex-col items-stretch gap-7 sm:flex-row"
        >
          <motion.figure
            variants={slideLeft}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="m-0 aspect-[4/3] overflow-hidden rounded-[14px] border border-line bg-surface-2 sm:aspect-auto sm:w-40 sm:flex-none"
          >
            <img
              src={profileImage}
              alt="Argie profile"
              className="block h-full w-full object-cover"
            />
          </motion.figure>

          <motion.dl
            variants={slideRight}
            className="flex flex-1 flex-col justify-center gap-3.5 rounded-[14px] border border-line bg-surface-2 px-5 py-4.5"
          >
            {profileFields.map((field) => (
              <div
                className="flex flex-wrap items-baseline gap-2.5"
                key={field.label}
              >
                <dt className="basis-[70px] flex-none font-mono text-[0.7rem] tracking-[0.1em] text-cyan uppercase">
                  {field.label}
                </dt>
                <dd className="m-0 text-[0.92rem] text-text">{field.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <div className="mb-9">
          <h3 className="mb-4 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
            Background
          </h3>
          <p className="mb-4 max-w-[1200px] text-base leading-[1.7] text-text">
            I'm a Computer Engineering student at the University of Cebu – Main
            Campus. The course covers both hardware and software, but I keep
            gravitating toward the software side — especially building things
            people actually use.
          </p>
          <p className="mb-0 max-w-[1200px] text-base leading-[1.7] text-text">
            I like turning ideas into working projects, whether that means
            designing a website, writing front-end code, or figuring out how
            hardware and software should talk to each other. Right now I'm
            sharpening my React, JavaScript, Python, and design skills, and
            looking for freelance or junior opportunities where I can
            contribute, keep learning, and grow with real projects.
          </p>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
            How I work
          </h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {strengthDetails.map((strength) => (
              <motion.div
                variants={scaleIn}
                whileHover={{
                  y: -6,
                  borderColor: "#22d3ee",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="rounded-xl border border-line bg-surface-2 p-4.5"
                key={strength.name}
              >
                <p className="mb-1.5 font-semibold text-accent">
                  {strength.name}
                </p>
                <p className="text-[0.88rem] leading-[1.55] text-muted">
                  {strength.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
            Toolbox
          </h3>
          <div className="grid gap-5">
            {toolbox.map((group) => (
              <div key={group.category}>
                <p className="mb-2.5 font-mono text-[0.72rem] tracking-[0.08em] text-cyan uppercase">
                  {group.category}
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  aria-label={`${group.category} skills`}
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
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
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap flex-col gap-3 pt-7 md:flex-row md:justify-end"
        >
          <motion.a
            whileHover={{
              y: -4,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-flex items-center rounded-lg border border-line px-[1.15rem] py-2.5 text-[0.9rem] font-semibold text-muted no-underline transition duration-150 hover:border-accent hover:text-white focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 justify-center"
            href="https://github.com/Error-404-me"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </motion.a>
          <Link
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-[1.15rem] py-2.5 text-[0.9rem] font-semibold text-canvas no-underline transition duration-150 hover:-translate-y-0.5 hover:bg-cyan focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 justify-center"
            to="/#contact"
          >
            Get in touch
            <i className="bi bi-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MoreAbout;
