import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Home from "./components/Home";
import PdfPreview from "./components/PdfPreview";
import { motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 100;
      let current = navItems[0].id;

      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= headerOffset) {
          current = id;
        }
      });

      // setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("resume-open", isResumeOpen);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsResumeOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("resume-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-svh text-text bg-canvas max-[767px]:min-h-0 [background-image:linear-gradient(180deg,rgba(255,255,255,.035),transparent_360px),radial-gradient(var(--color-line)_1px,transparent_1px)] [background-repeat:no-repeat,repeat] [background-size:auto,22px_22px]">
      <Home />

      <PdfPreview
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        fileUrl="/resume.pdf"
        fileName="Argie-Resume.pdf"
      />

      {createPortal(
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showBackTop ? 1 : 0,
            scale: showBackTop ? 1 : 0.8,
            y: showBackTop ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{ pointerEvents: showBackTop ? "auto" : "none" }}
          className="fixed right-[22px] bottom-[22px] z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-accent/55 bg-accent text-[#121416]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 15l8-8 8 8" />
          </svg>
        </motion.button>,
        document.body,
      )}
    </div>
  );
}

export default App;
