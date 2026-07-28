import { StrictMode } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/PageTransition";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import MoreProjects from "./pages/MoreProjects.jsx";
import MoreAbout from "./pages/MoreAbout.jsx";
import CursorFX from "./components/CursorFX.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <App />
            </PageTransition>
          }
        />

        <Route
          path="/moreAbout"
          element={
            <PageTransition>
              <MoreAbout />
            </PageTransition>
          }
        />

        <Route
          path="/projects"
          element={
            <PageTransition>
              <MoreProjects />
            </PageTransition>
          }
        />

        <Route
          path="/project/:id"
          element={
            <PageTransition>
              <ProjectDetails />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CursorFX />
      <AnimatedRoutes />
    </BrowserRouter>

    <Analytics />
  </StrictMode>,
);
