import PortfolioImg from "../assets/portfoilioImage/portfolioImage-removebg.png";
import TravelGuideImg from "../assets/img/travel_guide.png";

//Eggcubator images imports
import loadingScreen from "../assets/eggCubatorImages/loadingScreen.jpg";
import homeScreen from "../assets/eggCubatorImages/homeScreen.jpg";
import settingsScreen from "../assets/eggCubatorImages/settingsScreen.jpg";
import guidlinesScreen from "../assets/eggCubatorImages/guidelinesScreen.jpg";
import historyScreen from "../assets/eggCubatorImages/historyScreen.jpg";
import notificationsScreen from "../assets/eggCubatorImages/notificationsScreen.jpg";
import aboutUsScreen from "../assets/eggCubatorImages/aboutUsScreen.jpg";
import batchScreen from "../assets/eggCubatorImages/batchScreen.jpg";
import hatchCalulatorScreen from "../assets/eggCubatorImages/hatchCalculatorScreen.jpg";
import exportScreen from "../assets/eggCubatorImages/exportLog.jpg";
import eggJournalScreen from "../assets/eggCubatorImages/eggJournalScree.jpg";
import darkModePreview from "../assets/eggCubatorImages/darkModePreview.jpg";

//Green Valley images imports
import l1 from "../assets/greenValleyImages/1.jpg";
import l2 from "../assets/greenValleyImages/2.jpg";
import l3 from "../assets/greenValleyImages/3.jpg";
import l4 from "../assets/greenValleyImages/4.jpg";
import b1 from "../assets/greenValleyImages/b1.jpg";
import b2 from "../assets/greenValleyImages/b2.jpg";
import b3 from "../assets/greenValleyImages/b3.jpg";
import b4 from "../assets/greenValleyImages/b4.jpg";
import b5 from "../assets/greenValleyImages/b5.jpg";
import b6 from "../assets/greenValleyImages/b6.jpg";
import b7 from "../assets/greenValleyImages/b7.jpg";
import b8 from "../assets/greenValleyImages/b8.jpg";
import b9 from "../assets/greenValleyImages/b9.jpg";
import b10 from "../assets/greenValleyImages/b10.jpg";
import b11 from "../assets/greenValleyImages/b11.jpg";
import b12 from "../assets/greenValleyImages/b12.jpg";
import b13 from "../assets/greenValleyImages/b13.jpg";
import b14 from "../assets/greenValleyImages/b14.jpg";
import b15 from "../assets/greenValleyImages/b15.jpg";
import b16 from "../assets/greenValleyImages/b16.jpg";
import b17 from "../assets/greenValleyImages/b17.jpg";
import b18 from "../assets/greenValleyImages/b18.jpg";
import b19 from "../assets/greenValleyImages/b19.jpg";
import b20 from "../assets/greenValleyImages/b20.jpg";
import f1 from "../assets/greenValleyImages/f1.jpg";
import f2 from "../assets/greenValleyImages/f2.jpg";
import f3 from "../assets/greenValleyImages/f3.jpg";
import f4 from "../assets/greenValleyImages/f4.jpg";
import f5 from "../assets/greenValleyImages/f5.jpg";
import f6 from "../assets/greenValleyImages/f6.jpg";
import f7 from "../assets/greenValleyImages/f7.jpg";
import f8 from "../assets/greenValleyImages/f8.jpg";
import f9 from "../assets/greenValleyImages/f9.jpg";
import f10 from "../assets/greenValleyImages/f10.jpg";

// SariCart images imports
import o1 from "../assets/saricartyImages/1.png";
import o2 from "../assets/saricartyImages/2.png";
import r3 from "../assets/saricartyImages/3.png";
import o4 from "../assets/saricartyImages/4.png";
import o5 from "../assets/saricartyImages/5.png";
import o6 from "../assets/saricartyImages/6.png";
import o7 from "../assets/saricartyImages/7.png";
import o8 from "../assets/saricartyImages/8.png";
import o9 from "../assets/saricartyImages/9.png";
import c10 from "../assets/saricartyImages/10.png";
import c11 from "../assets/saricartyImages/11.png";
import c12 from "../assets/saricartyImages/12.png";
import c13 from "../assets/saricartyImages/13.png";
import c14 from "../assets/saricartyImages/14.png";
import c15 from "../assets/saricartyImages/15.png";
import c16 from "../assets/saricartyImages/16.png";
import c17 from "../assets/saricartyImages/17.png";

//Expenses Tracker Image/s
import e1 from "../assets/expensesTrackerImage/e1.png";

// ---------------------------------------------------------------------------
//   shortSummary      string   — tight 1-line summary for homepage cards
//   role              string   — e.g. "Full-Stack Developer"
//   projectType       string   — e.g. "Personal Project" | "Team Project"
//   status            string   — e.g. "Production" | "Completed" | "Academic"
//   year              string   — e.g. "2026"
//   features          string[] — capability bullets, separate from highlights
//   responsibilities  string[] — what you personally did
//   challenges        {problem, solution}[]
//   architecture      string[] — ordered pipeline, e.g. ["React Frontend","FastAPI API","SQLite"]
//   githubUrl         string   — public repo link, if any
//   screenshotCaptions string[] — one entry per screenshot, same order as `image`
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "saricart",
    title: "SariCart",
    type: "E-commerce / Retail Platform",
    image: [
      o1,
      o2,
      r3,
      o4,
      o5,
      o6,
      o7,
      o8,
      o9,
      c10,
      c11,
      c12,
      c13,
      c14,
      c15,
      c16,
      c17,
    ],
    summary:
      "SariCart is a full-stack web application that digitizes sari-sari store operations by combining online product browsing, pickup ordering, inventory management, sales analytics, nearby store discovery, customer reviews, and barcode-assisted point-of-sale functionality into a single platform for both store owners and customers.",
    shortSummary:
      "A multi-store retail platform for product browsing, pickup ordering, inventory management, sales tracking, and store operations.",
    tags: [
      "React + Vite",
      "FastApi",
      "TailwindCSS",
      "Axios",
      "SQLite",
      "React Router",
      "Recharts",
      "Leaflet",
    ],
    highlights: [
      "Complete End-to-End E-commerce Workflow",
      "Dual Role-Based Platform",
      "Full Inventory Management",
      "Business Analytics Dashboard",
      "Community Store Discovery",
    ],
    links: [
      { label: "Discuss this project", href: "#contact" },
      { label: "Visit live site", href: "https://saricart.vercel.app" },
    ],
    role: "Full-Stack Developer",
    projectType: "Personal Project",
    status: "Production",
    year: "2026",
    features: [
      "Smart Inventory Management",
      "Customer Pre-orders & Pickup",
      "Responsive & PWA Ready",
      "Sales & Analytics",
      "Barcode Scanning",
      "Store Management",
    ],
    responsibilities: [
      "Developed the frontend and backend of the application, integrating various technologies to create a seamless user experience.",
    ],
    challenges: [
      {
        problem: "Integrating multiple technologies into a cohesive platform",
        solution:
          "Careful planning and modular architecture to ensure smooth communication between frontend, backend, and database",
      },
      {
        problem: "Ensuring responsive design and PWA functionality",
        solution:
          "Utilized TailwindCSS for responsive design and implemented PWA features to enhance user experience across devices.",
      },
      {
        problem: "Implementing real-time inventory management and analytics",
        solution:
          "Developed efficient algorithms and utilized libraries like Recharts for data visualization to provide real-time insights into inventory and sales.",
      },
    ],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },
  {
    id: "eggCubator",
    title: "EggCubator",
    type: "IoT Mobile App",
    image: [
      loadingScreen,
      homeScreen,
      settingsScreen,
      guidlinesScreen,
      historyScreen,
      notificationsScreen,
      batchScreen,
      hatchCalulatorScreen,
      exportScreen,
      aboutUsScreen,
      eggJournalScreen,
      darkModePreview,
    ],
    summary:
      "A mobile application that lets users remotely monitor temperature and humidity and control actuators such as the incandescent bulb, fan, and humidifier. Along with this app is the prototype which is the incubator for animal eggs specifically chicken. This application is written purely python only using the flet framework which is for mobile application development framework.",
    shortSummary:
      "A mobile app for remotely monitoring and controlling a chicken-egg incubator's temperature, humidity, and actuators.",
    tags: [
      "Software and Hardware Design",
      "IoT",
      "Thesis Project",
      "Python (Flet)",
      "Firebase",
    ],
    highlights: [
      "Native application using Flet framework of python",
      "Project and Design final requirements",
      "Allow user to remotely monitor and control the incubator",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
    role: "Developer",
    projectType: "Team Project",
    status: "Complete",
    year: "2025",
    features: [
      "Remote monitoring & control",
      "Gmail notification",
      "Hatch rate calculator",
      "Data Logging",
      "Batch Management",
      "Historical Data",
      "Downloadable CSV Historical Data",
      "Journal",
      "Guidelines",
    ],
    responsibilities: ["Developed the mobile application using Flet framework, integrated Firebase for backend services, and designed the user interface to ensure a seamless experience for users monitoring and controlling the incubator."],
    challenges: [{
      problem:
        "Integrating real-time data and ensuring smooth communication between the mobile app and the incubator's hardware components",
      solution:
        "Implemented efficient data handling and real-time updates using Firebase, ensuring that users receive timely information about temperature, humidity, and actuator status.",
    },
  {
    problem:
      "Designing a user-friendly interface that caters to users with varying levels of technical expertise",
    solution:
      "Conducted user research and iterative design testing to create an intuitive interface that meets the needs of both novice and experienced users, ensuring ease of navigation and accessibility.",
  }],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },

  {
    id: "greenValley",
    title: "Green Valley",
    type: "Mobile Application",
    image: [
      l1,
      l2,
      l3,
      l4,
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10,
      b11,
      b12,
      b13,
      b14,
      b15,
      b16,
      b17,
      b18,
      b19,
      b20,
      f1,
      f2,
      f3,
      f4,
      f5,
      f6,
      f7,
      f8,
      f9,
      f10,
    ],
    summary:
      "Built a digital-twin, e-commerce-style platform for agricultural products connecting farmers directly with buyers and sponsors. Designed to cut out the middleman between farmer and buyer, helping farmers maximize their profit. ",
    shortSummary:
      "A digital-twin, e-commerce-style platform connecting farmers directly with buyers and sponsors.",
    tags: ["Flet", "UI Design", "Python", "Supabase"],
    highlights: [
      "Digital Twin mobile application",
      "Buyers can support the farmers by sponsoring.",
      "Users can register as a farmer or buyer/sponsor.",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
    role: "Developer",
    projectType: "Academic Project",
    status: "Complete",
    year: "2025",
    features: [
      "Digital Twin",
      "E-commerce",
      "Sponsorship",
      "User Registration",
      "Farmer & Buyer Roles",
      "Product Listings",
      "Order Management",
      "Communication between Farmers and Buyers",
      "Analytics for Farmers",
      "Portfolio and Profile Management",
    ],
    responsibilities: [
      "Developed the mobile application using Flet framework, integrated Supabase for backend services, and designed the user interface to ensure a seamless experience for both farmers and buyers.",
    ],
    challenges: [
      {
        problem:
          "Integrating real-time data and ensuring smooth communication between farmers and buyers",
        solution:
          "Implemented efficient data handling and real-time updates using Supabase, ensuring that both farmers and buyers receive timely information about orders, sponsorships, and product availability.",
      },
      {
        problem:
          "Designing a user-friendly interface that caters to both farmers and buyers",
        solution:
          "Conducted user research and iterative design testing to create an intuitive interface that meets the needs of both user groups, ensuring ease of navigation and accessibility.",
      },
    ],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "Personal portfolio",
    image: PortfolioImg,
    summary:
      "A responsive personal website that presents profile details, projects, contact options, and a printable resume.",
    shortSummary:
      "A responsive personal site featuring projects, contact tools, and a downloadable resume.",
    tags: ["React", "Vite", "Tailwind CSS"],
    highlights: [
      "Single-page navigation with mobile support",
      "Project details and contact workflow",
      "Can preview or download resume.",
    ],
    links: [
      { label: "View portfolio homepage", href: "#home" },
      {
        label: "View source on GitHub",
        href: "https://github.com/Error-404-me",
      },
    ],
    role: null,
    projectType: null,
    status: null,
    year: null,
    features: [],
    responsibilities: [],
    challenges: [],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },
  {
    id: "lakwatserong-pinoy",
    title: "Lakwatserong Pinoy",
    type: "Travel guide project",
    image: TravelGuideImg,
    summary:
      "A software design project that helps travelers explore local destinations with useful place information.",
    shortSummary:
      "A software design project helping travelers explore destinations through organized place information.",
    tags: ["Software Design", "Travel", "Team Project", ".NET", "SSMS"],
    highlights: [
      "Destination-focused presentation",
      "Built for a Computer Engineering course project",
      "Organizes travel ideas into a browsable guide",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
    role: null,
    projectType: null,
    status: null,
    year: null,
    features: [],
    responsibilities: [],
    challenges: [],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },
  {
    id: "expensesTracker",
    title: "Expenses Tracker",
    type: "Productivity UI",
    image: e1,
    summary:
      'This is the project I made for our "Enhancement Course" where we are going to make a web application that showcasing the ELT and ETL pipeline.',
    shortSummary:
      "An expense tracker with category tagging and visual monthly spending analysis.",
    tags: ["UI Design", "Python (Flet)", "Sqlite3"],
    highlights: [
      "User can add expenses they did and choose the category",
      "With visualiztion graph and analysis",
      "Can view the anylis of selected month",
    ],
    links: [
      { label: "Discuss this project", href: "#contact" },
      {
        label: "Visit live site",
        href: "https://myexpensestracker.up.railway.app/",
      },
    ],
    role: null,
    projectType: null,
    status: null,
    year: null,
    features: [],
    responsibilities: [],
    challenges: [],
    architecture: [],
    githubUrl: null,
    screenshotCaptions: [],
  },
];
