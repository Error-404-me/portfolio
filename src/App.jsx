import { useEffect, useState } from "react";
import logo from "./assets/img/logo.svg";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";
import facebook from "./assets/img/facebook.svg";
import instagram from "./assets/img/instagram.svg";
import google from "./assets/img/google.svg";
import github from "./assets/img/github.svg";
import list from "./assets/img/list.svg";
import "./App.css";
import PdfPreview from "./components/PdfPreview";

const contactEmail = "pasuquinargie29@gmail.com";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
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
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
    icon: google,
  },
  {
    label: "GitHub",
    href: "https://github.com/Error-404-me",
    icon: github,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Effect 1 — back to top button
  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect 2 — active nav
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

  // Effect 3 — resume dialog (scroll-lock + Escape). PdfPreview is used in
  // controlled mode below, so this is the single source of truth for both.
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="parent" id="parent">
      <header className="header">
        <a
          href="#home"
          className="logo-name"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <span className="logo">
            <img src={logo} alt="Argie Pasuquin logo" />
          </span>
          <span>Pasuquin</span>
        </a>

        <button
          className="menu"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <img src={list} alt="" aria-hidden="true" />
        </button>

        <nav
          className={`dropdown ${isMenuOpen ? "is-open" : ""}`}
          id="main-menu"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="nav-link nav-button"
            onClick={openResume}
          >
            View Resume
          </button>
        </nav>
      </header>

      <Home />
      <About />
      <Projects />
      <ContactMe />

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Argie C. Pasuquin</h2>
            <p>
              Programmer, front-end developer, and Computer Engineering student.
            </p>
          </div>

          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <img src={link.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="footer-contact">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Argie C. Pasuquin. All rights
            reserved.
          </p>
        </div>
      </footer>

      <button
        type="button"
        className={`back-top ${showBackTop ? "is-visible" : ""}`}
        aria-label="Back to top"
        onClick={scrollToTop}
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
      </button>

      <PdfPreview
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        fileUrl="/resume.pdf"
        fileName="Argie-Resume.pdf"
      />
    </div>
  );
}

export default App;
