import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import profileImage from "../assets/img/1-8r.png";
import { socialLinks } from "../data/socialLinks";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const fadeScale = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="home"
      variants={container}
      initial={prefersReducedMotion ? false : "hidden"}
      animate="show"
      className="shell relative flex h-[calc(100svh_-_64px_-_env(safe-area-inset-bottom))] flex-col items-center justify-center gap-2 overflow-hidden px-4 py-2 md:h-[100svh] md:justify-start md:flex-row md:items-end md:gap-0 md:py-0"
    >
      <div className="relative z-10 min-w-0 text-left md:flex-1 md:self-center md:pr-4">
        <motion.p variants={fadeUp} className="eyebrow-label text-accent">
          Hi, I am
        </motion.p>
        <motion.h1
          id="home-title"
          variants={fadeUp}
          className="m-0 max-w-[760px] text-[2.35rem] leading-[1.04] font-black text-white max-[767px]:text-[2rem] sm:text-[2.7rem] lg:text-[4.25rem]"
        >
          Argie C. <span className="text-accent">Pasuquin</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-[650px] text-[1.16rem] text-muted max-[767px]:mt-3 max-[767px]:text-base"
        >
          I am committed to continuously enhancing my technical skills,
          exploring emerging technologies, and transforming innovative ideas
          into practical and meaningful solutions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-wrap gap-2.5 max-[767px]:mt-3 max-[767px]:gap-2"
        >
          <span className="chip max-[767px]:px-2 max-[767px]:py-1 max-[767px]:text-[0.65rem]">
            Software Developer
          </span>
          <span className="chip max-[767px]:px-2 max-[767px]:py-1 max-[767px]:text-[0.65rem]">
            Front-End Developer
          </span>
          <span className="chip max-[767px]:px-2 max-[767px]:py-1 max-[767px]:text-[0.65rem]">
            IoT / Embedded Systems
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row max-[767px]:mt-3 max-[767px]:flex-row max-[767px]:gap-2"
        >
          <Link
            to="/projects"
            className="btn-primary w-full max-[767px]:w-auto max-[767px]:flex-1 max-[767px]:px-2 max-[767px]:text-[0.7rem] sm:w-auto"
          >
            View my work
          </Link>
          <a
            href="/resume.pdf"
            download="Argie_Pasuquin_Resume.pdf"
            className="btn-secondary w-full max-[767px]:w-auto max-[767px]:flex-1 max-[767px]:px-2 max-[767px]:text-[0.7rem] sm:w-auto"
          >
            Download resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={fadeScale}
        className="relative mx-auto flex w-full max-w-[420px] min-w-0 flex-col items-center md:-ml-8 md:mx-0 md:min-h-[100svh] md:w-[42%] md:flex-none md:items-end lg:w-auto lg:flex-1"
      >
        <figure
          className="m-0 md:absolute md:right-0 md:bottom-0"
          style={{ perspective: "900px" }}
        >
          <img
            src={profileImage}
            alt="Argie Pasuquin"
            className="relative z-0 block h-auto max-h-[40svh] w-full max-w-[420px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] [@media(max-height:700px)]:max-h-[32svh] md:h-[42svh] md:max-h-none md:w-auto md:max-w-none md:[transform:rotateY(-9deg)_rotateX(2deg)] md:[transform-origin:center_bottom] md:[transform-style:preserve-3d] lg:h-[60svh] xl:h-[88svh] xl:max-h-[820px]"
          />
        </figure>
        <nav
          aria-label="Social links"
          className="absolute right-0 bottom-3 z-20 flex w-auto items-center justify-end gap-2.5 pr-0 md:right-0 md:bottom-8 md:pr-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-line bg-surface-2 transition-colors hover:border-accent/45"
            >
              <img
                src={link.icon}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 invert"
              />
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.section>
  );
}

export default Home;
