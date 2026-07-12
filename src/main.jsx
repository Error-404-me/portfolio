import { StrictMode } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import MoreProjects from "./pages/MoreProjects.jsx";
import MoreAbout from "./pages/MoreAbout.jsx";
import CursorFX from "./components/CursorFX.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CursorFX />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moreAbout" element={<MoreAbout />} />
        <Route path="/projects" element={<MoreProjects />} />
        <Route path="project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
