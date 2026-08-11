// src/App.jsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logo from "./assets/img/logo.svg";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import facebook from "./assets/img/facebook.svg";
import instagram from "./assets/img/instagram.svg";
import google from "./assets/img/google.svg";
import github from "./assets/img/github.svg";
import linkedin from "./assets/img/linkedin.svg";
import list from "./assets/img/list.svg";
import PdfPreview from "./components/PdfPreview";
import { motion } from "motion/react";

const contactEmail = "pasuquinargie29@gmail.com";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/argie.pasuquin.2025",
    icon: facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/implicit_declaration",
    icon: instagram,
  },
  { label: "Email", href: `mailto:${contactEmail}`, icon: google },
  { label: "GitHub", href: "https://github.com/Error-404-me", icon: github },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/argie-pasuquin-06752a356",
    icon: linkedin,
  },
];

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

      setActiveSection(current);
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

  const closeMenu = () => setIsMenuOpen(false);

  const openResume = () => {
    setIsResumeOpen(true);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinkClass = (id) =>
    `inline-flex w-full min-h-10 items-center justify-start rounded-lg border border-transparent px-3.5 text-[0.94rem] no-underline transition-colors md:w-auto md:justify-center ${
      activeSection === id
        ? "border-cyan/35 bg-accent/10 text-white"
        : "text-muted hover:border-cyan/35 hover:bg-accent/10 hover:text-white"
    }`;

  return (
    <div className="relative min-h-svh text-text bg-canvas [background-image:linear-gradient(180deg,rgba(255,255,255,.035),transparent_360px),radial-gradient(var(--color-line)_1px,transparent_1px)] [background-repeat:no-repeat,repeat] [background-size:auto,22px_22px]">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="sticky top-0 z-50 flex min-h-[76px] items-center justify-between border-b border-line bg-canvas/90 px-7 backdrop-blur-xl"
      >
        <motion.a
          href="#home"
          onClick={closeMenu}
          aria-label="Go to home"
          className="group inline-flex items-center gap-3 font-extrabold text-white no-underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-white transition-transform duration-300 group-hover:-rotate-[8deg] group-hover:scale-[1.06]">
            <img
              src={logo}
              alt="Argie Pasuquin logo"
              className="h-full w-full object-cover bg-accent"
            />
          </span>
          <span className="text-accent">Pasuquin</span>
        </motion.a>

        <button
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-line bg-surface md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <img
            src={list}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 invert"
          />
        </button>

        <motion.nav
          id="main-menu"
          variants={navContainer}
          initial="hidden"
          animate="show"
          className={`absolute inset-x-4 top-[calc(100%+8px)] z-40 grid gap-1.5 overflow-hidden rounded-lg border bg-surface shadow-card transition-[max-height,opacity,padding] duration-200
  md:static md:flex md:max-h-none md:items-center md:gap-2 md:overflow-visible
  md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto
  md:shadow-none md:transition-none
  ${
    isMenuOpen
      ? "max-h-[380px] border-line p-2 pointer-events-auto opacity-100"
      : "pointer-events-none max-h-0 border-transparent p-0 opacity-0"
  }`}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              variants={navItem}
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className={navLinkClass(item.id)}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            variants={navItem}
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={openResume}
            className={`${navLinkClass("").replace(
              "text-muted",
              "",
            )} cursor-pointer bg-accent text-[#121416] hover:bg-cyan`}
          >
            View Resume
          </motion.button>
        </motion.nav>
      </motion.header>

      <Home />
      <Projects />
      <About />
      <ContactMe />

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-line bg-[#0b0c0f] px-6 pt-11 pb-7"
      >
        <div className="shell grid grid-cols-1 items-center gap-6 text-left lg:grid-cols-[minmax(0,1fr)_auto_minmax(180px,auto)]">
          <div>
            <h2 className="m-0 text-xl text-white">Argie C. Pasuquin</h2>
            <p className="mt-1.5 text-muted">
              Software Developer — front-end, mobile, and IoT projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5" aria-label="Social links">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-line bg-surface-2"
              >
                <img
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 invert"
                />
              </motion.a>
            ))}
          </div>

          <div>
            <a
              href={`mailto:${contactEmail}`}
              className="text-accent no-underline break-words"
            >
              {contactEmail}
            </a>
          </div>
        </div>
        <div className="shell mt-7 text-left font-mono text-[0.8rem] tracking-[0.02em] text-muted">
          <p>
            &copy; {new Date().getFullYear()} Argie C. Pasuquin. All rights
            reserved.
          </p>
        </div>
      </motion.footer>

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
