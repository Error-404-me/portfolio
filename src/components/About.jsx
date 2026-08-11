// src/components/About.jsx
import { Link } from "react-router-dom";
import profileImage from "../assets/img/5f10c3cf-1a72-4049-802e-2a5ef6c7e4bc_removalai_preview.png";
import { skillCategories } from "../assets/skills";
import { motion } from "motion/react";

const strengths = [
  "Adaptable",
  "Detail-focused",
  "Curious",
  "Reliable",
  "Resourceful",
];

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

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="px-6 py-23 md:px-4 md:py-16"
      id="about"
    >
      <div className="shell">
        <motion.div variants={fadeUp} className="section-heading">
          <p className="eyebrow-label">About Me</p>
          <h2 className="heading-lg">
            Building useful things while learning deeply.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1fr)]">
          <motion.figure
            variants={slideLeft}
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="m-0 overflow-hidden rounded-lg border border-line bg-surface"
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full min-h-[320px] w-full object-cover object-top md:min-h-[420px]"
              src={profileImage}
              alt="Argie Pasuquin working on a development project"
            />
          </motion.figure>

          <motion.div variants={slideRight} className="min-w-0 text-left">
            <h3 className="m-0 text-[1.55rem] text-white">Get to know me</h3>
            <p className="mt-4.5 text-muted">
              I like turning ideas into working projects, whether that means
              designing a website, writing front-end code, or connecting
              software and hardware so they can work together.
            </p>
            <p className="mt-4.5 text-muted">
              I'm currently sharpening my React, JavaScript, Python, and
              UI/design skills across full-stack and IoT projects, and I'm open
              to freelance or junior opportunities where I can contribute, keep
              learning, and grow with real projects.
            </p>

            <ul
              className="my-6.5 flex list-none flex-wrap gap-2.5 p-0"
              aria-label="Personal strengths"
            >
              {strengths.map((strength) => (
                <motion.li
                  key={strength}
                  className="chip"
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
                >
                  {strength}
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeUp} className="w-[100%]">
              <Link className="btn-primary w-[100%] md:w-auto" to="/moreAbout">
                More About Me
                <i className="bi bi-arrow-right ml-2.5"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 pt-9">
          <motion.div variants={fadeUp} className="mb-6 text-left">
            <p className="eyebrow-label">My Skills</p>
            <h3 className="heading-lg">Tools I am building with</h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <p className="mb-2.5 font-mono text-[0.72rem] tracking-[0.08em] text-cyan uppercase">
                  {group.category}
                </p>
                <ul
                  className="flex list-none flex-wrap gap-2 p-0"
                  aria-label={`${group.category} skills`}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      className="chip"
                      whileHover={{
                        y: -4,
                        scale: 1.06,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
