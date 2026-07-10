import PortfolioImg from '../assets/Screenshot 2025-07-14 155635.png'
import PortfolioImgPng from '../assets/portfolio.png'
import TravelGuideImg from '../assets/travel_guide.png'

export const projects = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    type: 'Personal portfolio',
    image: PortfolioImg,
    summary:
      'A responsive personal website that presents profile details, projects, contact options, and a printable resume.',
    tags: ['React', 'Vite', 'CSS'],
    highlights: [
      'Single-page navigation with mobile support',
      'Project details and contact workflow',
      'Printable resume overlay',
    ],
    links: [
      { label: 'Open section', href: '#home' },
      { label: 'GitHub profile', href: 'https://github.com/Error-404-me' },
    ],
  },
  {
    id: 'to-do-app',
    title: 'To-do App',
    type: 'Productivity UI',
    image: PortfolioImgPng,
    summary:
      'A task-management interface concept focused on simple task entry, completion states, and clear daily priorities.',
    tags: ['JavaScript', 'UI Design', 'CSS'],
    highlights: [
      'Task-focused layout',
      'Reusable interface pattern',
      'Good practice for state and list rendering',
    ],
    links: [{ label: 'Discuss this project', href: '#contact' }],
  },
  {
    id: 'lakwatserong-pinoy',
    title: 'Lakwatserong Pinoy',
    type: 'Travel guide project',
    image: TravelGuideImg,
    summary:
      'A software design project that helps travelers explore local destinations with useful place information.',
    tags: ['Software Design', 'Travel', 'Team Project'],
    highlights: [
      'Destination-focused presentation',
      'Built for a Computer Engineering course project',
      'Organizes travel ideas into a browsable guide',
    ],
    links: [{ label: 'Discuss this project', href: '#contact' }],
  },
]