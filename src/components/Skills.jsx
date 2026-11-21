import { motion, useReducedMotion } from "motion/react";
import { skillCategories } from "../assets/skills.js";

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

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const skillCount = skillCategories.reduce(
    (count, group) => count + group.items.length,
    0,
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="px-6 py-23 md:px-4 md:py-16"
    >
      <div className="shell">
        <motion.header
          variants={createRevealVariants(prefersReducedMotion)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 flex flex-col gap-6 border-b border-line pb-7 xl:flex-row xl:items-end xl:justify-between"
        >
          <div className="max-w-2xl">
            <p className="eyebrow-label">Skills</p>
            <h1
              id="skills-title"
              className="text-4xl leading-tight font-bold text-white"
            >
              What I work with.
              <span className="block text-accent">And keep learning.</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              Technologies I have used across web, mobile, data, and embedded
              projects.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { count: skillCategories.length, label: "Categories" },
              { count: skillCount, label: "Listed skills" },
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
            {skillCategories.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.li
                  key={group.category}
                  variants={createRevealVariants(
                    prefersReducedMotion,
                    (index % 3) * 0.08,
                  )}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  className="relative grid grid-cols-[18px_minmax(0,1fr)] items-stretch gap-x-4 md:grid-cols-[100px_24px_minmax(0,1fr)] md:gap-x-5"
                >
                  <p className="hidden pt-5 text-right font-mono text-xs leading-5 text-muted md:block">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="relative z-10 flex justify-center pt-5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent/70 bg-canvas">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                  </div>

                  <motion.article
                    whileHover={{ borderColor: "#c7f464" }}
                    className="min-w-0 rounded-2xl border border-line bg-surface/75 p-4 transition-colors duration-300 sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3.5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h2 className="text-lg leading-snug font-bold text-white sm:text-xl">
                            {group.category}
                          </h2>
                        </div>
                      </div>

                      <span className="rounded-full border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] text-muted">
                        {String(group.items.length).padStart(2, "0")}{" "}
                        {group.items.length === 1 ? "skill" : "skills"}
                      </span>
                    </div>

                    <ul
                      className="mt-4 flex list-none flex-wrap gap-2 border-t border-line pt-4"
                      aria-label={`${group.category} skills`}
                    >
                      {group.items.map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ y: -3, borderColor: "#c7f464" }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="rounded-md border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-text"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
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
