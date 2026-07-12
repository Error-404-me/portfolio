import { href } from "react-router-dom";
import PortfolioImg from "../assets/portfoilioImage/portfolioImage-removebg.png";
import PortfolioImgPng from "../assets/img/portfolio.png";
import TravelGuideImg from "../assets/img/travel_guide.png";
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

export const projects = [
  {
    id: "lakwatserong-pinoy",
    title: "Lakwatserong Pinoy",
    type: "Travel guide project",
    image: TravelGuideImg,
    summary:
      "A software design project that helps travelers explore local destinations with useful place information.",
    tags: ["Software Design", "Travel", "Team Project", ".NET", "SSMS"],
    highlights: [
      "Destination-focused presentation",
      "Built for a Computer Engineering course project",
      "Organizes travel ideas into a browsable guide",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "eggCubator",
    title: "EggCubator App",
    type: "IoT Based",
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
      exportScreen,
      darkModePreview,
    ],
    summary:
      "A mobile application that lets users remotely monitor temperature and humidity and control actuators such as the incandescent bulb, fan, and humidifier.",
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
  },
  {
    id: "greenValley",
    title: "Green Valley",
    type: "Mobile Application",
    image: PortfolioImgPng,
    summary:
      "Built a digital-twin, e-commerce-style platform for agricultural products connecting farmers directly with buyers and sponsors. Designed to cut out the middleman between farmer and buyer, helping farmers maximize their profit. ",
    tags: ["Flet", "UI Design", "Python", "Supabase"],
    highlights: [
      "Digital Twin mobile application",
      "Buyers can support the farmers by sponsoring.",
      "Users can register as a farmer or buyer/sponsor.",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "Personal portfolio",
    image: PortfolioImg,
    summary:
      "A responsive personal website that presents profile details, projects, contact options, and a printable resume.",
    tags: ["React", "Vite", "CSS"],
    highlights: [
      "Single-page navigation with mobile support",
      "Project details and contact workflow",
      "Printable resume overlay",
    ],
    links: [
      { label: "Open section", href: "#home" },
      { label: "GitHub profile", href: "https://github.com/Error-404-me" },
    ],
  },
  {
    id: "to-do-app",
    title: "To-do App",
    type: "Productivity UI",
    image: PortfolioImgPng,
    summary:
      "A task-management interface concept focused on simple task entry, completion states, and clear daily priorities.",
    tags: ["JavaScript", "UI Design", "CSS"],
    highlights: [
      "Task-focused layout",
      "Reusable interface pattern",
      "Good practice for state and list rendering",
    ],
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "expensesTracker",
    title: "Expenses Tracker",
    type: "Productivity UI",
    image: PortfolioImgPng,
    summary:
      'This is the project I made for our "Enhancement Course" where we are going to make a web application that showcasing the ELT and ETL pipeline.',
    tags: ["UI Design", "Python (Flet)", "Sqlite3"],
    highlights: [
      "User can add expenses they did and choose the category",
      "With visualiztion graph and analysis",
      "Can view the anylis of selected month",
    ],
    links: [
      { label: "Discuss this project", href: "#contact" },
      { label: "Live link", href: "https://myexpensestracker.up.railway.app/" },
    ],
  },
];
