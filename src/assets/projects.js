import { href } from "react-router-dom";
import PortfolioImg from "../assets/portfoilioImage/portfolioImage-removebg.png";
import PortfolioImgPng from "../assets/img/portfolio.png";
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
      eggJournalScreen,
      darkModePreview,
    ],
    summary:
      "A mobile application that lets users remotely monitor temperature and humidity and control actuators such as the incandescent bulb, fan, and humidifier. Along with this app is the prototype which is the incubator for animal eggs specifically chicken. This application is written purely python only using the flet framework which is for mobile application development framework.",
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
