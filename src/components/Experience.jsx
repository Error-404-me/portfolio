import BriefcaseBusiness from "lucide-react/icons/briefcase-business";
import GraduationCap from "lucide-react/icons/graduation-cap";
import { motion, useReducedMotion } from "motion/react";

const experiencesAndEducationBackground = [
  {
    category: "Experience",
    role: "IT Support (OJT)",
    company: "InstallersPH",
    date: "May 2025 - June 2025",
    responsibilities: [
      "Installed and configured CCTV systems and IP cameras, including mounting, alignment, and system integration.",
      "Performed structured network cabling (CAT5e/CAT6), terminated connectors, and labeled runs to ensure reliable connectivity.",
      "Conducted system testing, diagnostics, and quality checks; documented configurations and installation procedures for future maintenance.",
      "Provided end-user training and handover support to improve system adoption and reduce follow-up support needs.",
    ],
  },
  {
    category: "Education",
    role: "Bachelor of Science in Computer Engineering",
    company: "University of Cebu - Main Campus",
    date: "2021 - 2027",
    responsibilities: [],
  },
  {
    category: "Education",
    role: "Senior High School (HUMSS Strand)",
    company: "Madridejos Community College (MCC)",
    date: "2017 - 2019",
    responsibilities: [],
  },
  {
    category: "Education",
    role: "Junior High School",
    company: "Madridejos National High School (MNHS)",
    date: "2013 - 2017",
    responsibilities: [],
  },
  {
    category: "Education",
    role: "Elementary School",
    company: "Balidbid Elementary School",
    date: "2007 - 2013",
    responsibilities: [],
  },
];

const experienceCount = experiencesAndEducationBackground.filter(
  (item) => item.category === "Experience",
).length;
const educationCount = experiencesAndEducationBackground.filter(
  (item) => item.category === "Education",
).length;

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : 18,
    },
    show: (index = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="px-6 py-23 md:px-4 md:py-16"
    >
      <div className="shell">
        <motion.header
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 flex flex-col gap-6 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="eyebrow-label">Journey</p>
            <h1
              id="experience-title"
              className="text-4xl leading-tight font-bold text-white"
            >
              Building experience.
              <span className="block text-accent">
                Growing through learning.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              A timeline of the hands-on work and education shaping my path in
              technology.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { count: experienceCount, label: "Work experience" },
              { count: educationCount, label: "Education milestones" },
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

          <motion.ol className="relative m-0 list-none space-y-4 p-0 md:space-y-5">
            {experiencesAndEducationBackground.map((item, index) => {
              const isExperience = item.category === "Experience";
              const Icon = isExperience ? BriefcaseBusiness : GraduationCap;

              return (
                <motion.li
                  key={`${item.category}-${item.role}`}
                  variants={reveal}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative grid grid-cols-[18px_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[100px_24px_minmax(0,1fr)] md:gap-x-5"
                >
                  <p className="hidden pt-5 text-right font-mono text-xs leading-5 text-muted md:block">
                    {item.date}
                  </p>

                  <div className="relative z-10 flex justify-center pt-5">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        isExperience
                          ? "border-accent bg-canvas shadow-[0_0_14px_rgba(199,244,100,0.28)]"
                          : "border-line bg-surface"
                      }`}
                    >
                      {isExperience && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </span>
                  </div>

                  <motion.article
                    whileHover={{
                      borderColor: "#c7f464",
                    }}
                    className="min-w-0 rounded-2xl border border-line bg-surface/75 p-4 transition-colors duration-300 sm:p-5"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          isExperience
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-line bg-surface-2 text-muted"
                        }`}
                      >
                        <Icon size={20} aria-hidden="true" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            className={`font-mono text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${
                              isExperience ? "text-accent" : "text-muted"
                            }`}
                          >
                            {item.category}
                          </span>
                          <span className="rounded-full border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] text-muted md:hidden">
                            {item.date}
                          </span>
                        </div>

                        <h2 className="mt-1.5 text-lg leading-snug font-bold text-white sm:text-xl">
                          {item.role}
                        </h2>
                        <p className="mt-1 text-sm text-muted">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {item.responsibilities.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                        {item.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-2.5 pl-1"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.article>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
