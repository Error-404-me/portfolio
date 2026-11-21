import { motion, useReducedMotion } from "motion/react";
import profileImage from "../assets/img/1-11r_t.png";

const profileFields = [
  { label: "Currently", value: "Open to opportunities" },
  { label: "Focus", value: "Software development" },
  { label: "Based in", value: "Philippines" },
];

const strengthDetails = [
  {
    name: "Adaptable",
    detail:
      "Comfortable moving between hardware and software, or learning a new stack along the way.",
  },
  {
    name: "Detail-focused",
    detail:
      "I care about the small things—from edge cases to the details that make an interface feel right.",
  },
  {
    name: "Curious",
    detail:
      "When I want to understand how something works, I enjoy exploring it and figuring it out.",
  },
  {
    name: "Reliable",
    detail:
      "I value clear communication and following through on what I take on.",
  },
  {
    name: "Resourceful",
    detail:
      "I work with what is available and look for practical ways forward.",
  },
];

function createRevealVariants(prefersReducedMotion, delay = 0) {
  return {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 12,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  };
}

function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-6 py-23 md:px-4 md:py-16"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <motion.header
          variants={createRevealVariants(prefersReducedMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 border-b border-line pb-7"
        >
          <p className="eyebrow-label">About me</p>
          <h1
            id="about-title"
            className="max-w-3xl text-4xl leading-tight font-bold text-white"
          >
            I like turning ideas into
            <span className="text-accent"> working projects.</span>
          </h1>
        </motion.header>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)] lg:gap-12">
          <motion.div
            variants={createRevealVariants(prefersReducedMotion)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="min-w-0"
          >
            <p className="text-base leading-relaxed text-text">
              I enjoy building things that are useful, whether that means
              creating a website, shaping an interface, or connecting software
              and hardware.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I’m a Computer Engineering student at the University of Cebu,
              currently developing my skills in React, JavaScript, Python, and
              UI design through personal and academic projects. I’m open to
              junior or freelance opportunities where I can contribute and keep
              learning.
            </p>

            <dl className="mt-7 divide-y divide-line border-y rounded-xl border border-line bg-surface/60 p-4">
              {profileFields.map((field) => (
                <div
                  className="flex flex-wrap gap-x-6 gap-y-1 py-3 sm:grid sm:grid-cols-[110px_minmax(0,1fr)] "
                  key={field.label}
                >
                  <dt className="font-mono text-xs text-muted">
                    {field.label}
                  </dt>
                  <dd className="m-0 text-sm text-text">{field.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.figure
            variants={createRevealVariants(prefersReducedMotion, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="m-0 flex h-[min(72svh,680px)] min-h-[320px] items-end justify-center overflow-hidden rounded-2xl border border-line bg-surface/40"
          >
            <img
              className="block h-full w-full object-contain scale-117"
              src={profileImage}
              alt="Argie Pasuquin"
            />
          </motion.figure>
        </div>

        <section className="mt-14" aria-labelledby="working-style-title">
          <motion.header
            variants={createRevealVariants(prefersReducedMotion)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="eyebrow-label">How I work</p>
              <h2
                id="working-style-title"
                className="text-2xl font-bold text-white"
              >
                What you can expect from me.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              A few habits I try to bring to each project and collaboration.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {strengthDetails.map((strength, index) => (
              <motion.article
                key={strength.name}
                variants={createRevealVariants(
                  prefersReducedMotion,
                  (index % 3) * 0.06,
                )}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ borderColor: "#c7f464" }}
                className="rounded-xl border border-line bg-surface/60 p-4 transition-colors duration-300"
              >
                <h3 className="font-semibold text-white">{strength.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {strength.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
