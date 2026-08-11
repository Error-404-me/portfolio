// src/components/Home.jsx
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Home() {
  function downloadResume() {
    const cv = document.createElement("a");
    cv.href = "../resume.pdf";
    cv.download = "Argie_Pasuquin_Resume.pdf";
    cv.click();
  }

  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="shell grid min-h-[calc(100svh_-_76px)] grid-cols-1 items-center gap-9 px-6 py-14 md:px-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
    >
      <div className="min-w-0 text-left">
        <motion.p variants={fadeUp} className="eyebrow-label text-accent">
          Hi, I am
        </motion.p>
        <motion.h1
          id="home-title"
          variants={fadeUp}
          className="m-0 max-w-[760px] text-[2.35rem] leading-[1.04] font-black text-white sm:text-[2.7rem] lg:text-[4.25rem]"
        >
          Argie C. Pasuquin
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-[650px] text-[1.16rem] text-muted"
        >
          Building practical web, mobile, and IoT solutions for real-world
          problems.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
          <motion.span
            className="chip"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
          >
            Software Developer
          </motion.span>
          <motion.span
            className="chip"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
          >
            Front-End Developer
          </motion.span>
          <motion.span
            className="chip"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
          >
            IoT / Embedded Systems
          </motion.span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <motion.a
            href="#projects"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="btn-primary w-full sm:w-auto"
          >
            View Projects
          </motion.a>
          <motion.button
            onClick={downloadResume}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="btn-secondary w-full sm:w-auto"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeScale}
        className="relative mx-auto w-full max-w-[380px] min-w-0 lg:mx-0 lg:max-w-[340px]"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mask-portrait mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg border border-cyan/35 bg-accent sm:max-w-[300px]"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="mt-3 grid gap-1 rounded-2xl border border-line bg-surface-2 p-4"
        >
          <span className="mb-0.5 block font-mono text-[0.62rem] tracking-[0.14em] text-cyan">
            STATUS
          </span>
          <strong>Open to opportunities</strong>
          <span className="text-[0.9rem] text-muted">
            Available for web applications, freelance work, internships, and select
            IoT/embedded projects.
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
