import { motion, useReducedMotion } from "motion/react";

function PageTransition({ children }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: prefersReducedMotion ? 1 : 0,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)",
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.24,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
