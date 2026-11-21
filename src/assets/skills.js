import {
  CodeXml,
  Server,
  Database,
  Smartphone,
  Cpu,
  Wrench,
} from "lucide-react";

export const skillCategories = [
  {
    category: "Web Development",
    items: [
      "HTML",
      "CSS",
      "React.JS",
      "Bootstrap",
      "TailwindCSS",
      "WordPress",
      "Javascript",
    ],
    icon: CodeXml,
  },
  {
    category: "Backend & Programming",
    items: ["Python", "C++", "FastAPI"],
    icon: Server,
  },
  {
    category: "Databases & Cloud Services",
    items: ["Firebase", "Supabase", "Neon", "PostgresSQL"],
    icon: Database,
  },
  {
    category: "Embedded Systems",
    items: ["Embedded System", "C++"],
    icon: Cpu,
  },
  {
    category: "Mobile App Development",
    items: ["React Native", "Flet", "Kivy", "KivyMD"],
    icon: Smartphone,
  },
  {
    category: "Development Tools & AI",
    items: ["Git/GitHub", "GitHub Actions", "WordPress", "ChatGPT", "Claude"],
    icon: Wrench,
  },
];
