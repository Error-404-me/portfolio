import logo from "../assets/img/logo.svg";
import { motion, useReducedMotion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import House from "lucide-react/icons/house";
import Layers2 from "lucide-react/icons/layers-2";
import Send from "lucide-react/icons/send";
import UserRound from "lucide-react/icons/user-round";
import Braces from "lucide-react/icons/braces";
import BriefcaseBusiness from "lucide-react/icons/briefcase-business";
import PanelLeftClose from "lucide-react/icons/panel-left-close";
import PanelLeftOpen from "lucide-react/icons/panel-left-open";

function SideBar({ isCollapsed, onToggleCollapse }) {
  const location = useLocation();
  const activePath = location.pathname;
  const prefersReducedMotion = useReducedMotion();
  const activeIndicatorTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 420, damping: 34, mass: 0.7 };

  const sideBarNames = [
    { name: "Home", path: "/", icon: House },
    { name: "About", path: "/about", icon: UserRound },
    { name: "Skills", path: "/skills", icon: Braces },
    {
      name: "Projects",
      path: "/projects",
      icon: Layers2,
    },
    { name: "Experience", path: "/experience", icon: BriefcaseBusiness },
    { name: "Contact", path: "/contact", icon: Send },
  ];

  return (
    <aside
      className={`sidebar relative flex h-screen shrink-0 flex-col gap-4 border-r-[0.5px] border-accent/20 p-2 transition-[width] duration-300 ease-in-out [background-image:linear-gradient(180deg,rgba(255,255,255,.035),transparent_360px),radial-gradient(var(--color-line)_1px,transparent_1px)] [background-repeat:no-repeat,repeat] [background-size:auto,22px_22px] max-[767px]:fixed max-[767px]:inset-x-0 max-[767px]:bottom-0 max-[767px]:z-50 max-[767px]:h-[calc(64px+env(safe-area-inset-bottom))] max-[767px]:w-full max-[767px]:flex-row max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-0 max-[767px]:border-r-0 max-[767px]:border-t max-[767px]:border-line max-[767px]:bg-surface/90 max-[767px]:p-0 max-[767px]:pb-[env(safe-area-inset-bottom)] max-[767px]:shadow-[0_-8px_24px_rgba(0,0,0,0.25)] max-[767px]:backdrop-blur-xl ${
        isCollapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      <div
        className={`flex items-center pt-2 ${
          isCollapsed ? "justify-center" : "justify-between"
        } max-[767px]:hidden`}
      >
        {!isCollapsed && (
          <motion.a
            href="#home"
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
        )}
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
          aria-controls="sidebar-navigation"
          className="rounded-md p-1 text-white hover:bg-accent/15 hover:text-accent"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-6 w-6" aria-hidden="true" />
          ) : (
            <PanelLeftClose className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="sidebar-navigation"
        aria-label="Main navigation"
        className="flex flex-col gap-4 max-[767px]:h-full max-[767px]:w-full max-[767px]:flex-row max-[767px]:items-center max-[767px]:justify-around max-[767px]:gap-0 max-[767px]:px-1"
      >
        {sideBarNames.map((item, index) => {
          const isActive =
            activePath === item.path ||
            (item.path === "/projects" && activePath.startsWith("/project/"));

          return (
            <Link
              key={index}
              to={item.path}
              aria-label={isCollapsed ? item.name : undefined}
              aria-current={isActive ? "page" : undefined}
              title={isCollapsed ? item.name : undefined}
              className={`sidebar-link group relative isolate flex h-[32px] items-center rounded-md px-2 font-light transition-[color,transform] duration-200 ease-out active:scale-[0.97] max-[767px]:h-full max-[767px]:min-w-0 max-[767px]:flex-1 max-[767px]:flex-col max-[767px]:justify-center max-[767px]:gap-1 max-[767px]:rounded-xl max-[767px]:px-1 max-[767px]:text-[0.5625rem] max-[767px]:hover:bg-white/5 ${
                isCollapsed ? "justify-center" : "gap-4"
              } ${
                isActive
                  ? "text-black"
                  : "text-white hover:text-accent"
              } ${
                isActive
                  ? "max-[767px]:bg-transparent max-[767px]:text-accent"
                  : "max-[767px]:bg-transparent max-[767px]:text-muted"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active-desktop"
                  transition={activeIndicatorTransition}
                  className="pointer-events-none absolute inset-0 rounded-md bg-accent max-[767px]:hidden"
                  aria-hidden="true"
                />
              )}
              <span
                className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors max-[767px]:h-7 max-[767px]:w-12"
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-mobile"
                    transition={activeIndicatorTransition}
                    className="pointer-events-none absolute inset-0 hidden rounded-full bg-accent/15 max-[767px]:block"
                    aria-hidden="true"
                  />
                )}
                <item.icon
                  className="relative z-10 h-5 w-5 max-[767px]:h-[18px] max-[767px]:w-[18px]"
                  aria-hidden="true"
                />
              </span>
              <span
                className={`max-[767px]:max-w-full max-[767px]:truncate ${
                  isCollapsed
                    ? "hidden max-[767px]:inline"
                    : "relative z-10"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="shell mt-auto text-left font-mono text-[0.8rem] tracking-[0.02em] text-muted max-[767px]:hidden">
          <p>&copy; {new Date().getFullYear()} Argie C. Pasuquin</p>
        </div>
      )}
    </aside>
  );
}

export default SideBar;
