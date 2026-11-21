import { StrictMode, useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/PageTransition";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLayout from "./components/MainLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <MainLayout
      isSidebarCollapsed={isSidebarCollapsed}
      onToggleSidebar={() =>
        setIsSidebarCollapsed((isCollapsed) => !isCollapsed)
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<App />} />

            <Route path="/about" element={<About />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/experience" element={<Experience />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </MainLayout>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>

    <Analytics />
  </StrictMode>,
);
