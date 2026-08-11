const CATEGORY_MAP = {
  Frontend: [
    "React",
    "React + Vite",
    "Vite",
    "TailwindCSS",
    "Tailwind CSS",
    "React Router",
    "Bootstrap",
  ],

  "Backend & Language": [
    "FastApi", 
    "Python", 
    ".NET"
  ],

  Database: [
    "SQLite", 
    "Sqlite3", 
    "SSMS", 
    "Firebase", 
    "Supabase", 
    "Neon"
  ],

  "Mobile & Desktop": [
    "Flet",
    "Python (Flet)",
    "Mobile App Development",
    "Kivy",
    "KivyMD",
    "React Native",
  ],

  "Hardware / IoT": [
    "Embedded System",
     "C++",
      "IoT"
    ],

  Libraries: ["Axios", "Recharts", "Leaflet"],
  "Design & Process": [
    "UI Design",
    "Software and Hardware Design",
    "Software Design",
    "Team Project",
    "Thesis Project",
    "Travel",
  ],
};

export function categorizeTechnologies(tags = []) {
  const usedTags = new Set();
  const groups = [];

  for (const [category, knownTags] of Object.entries(CATEGORY_MAP)) {
    const matches = tags.filter((tag) => knownTags.includes(tag));
    if (matches.length > 0) {
      groups.push({ category, items: matches });
      matches.forEach((tag) => usedTags.add(tag));
    }
  }

  const remaining = tags.filter((tag) => !usedTags.has(tag));
  if (remaining.length > 0) {
    groups.push({ category: "Other", items: remaining });
  }

  return groups;
}
