import {
  Code2,
  Database,
  Layout,
  Terminal,
  Server,
  Globe
} from "lucide-react";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Alfathalif Dewa Listyoka",
    role: "Software Engineer",
    tagline: "Kukira nge-bug, ternyata Backburner",
    bio: "I am a passionate software engineer focused on building robust, scalable, and visually appealing web applications. I enjoy tackling complex problems, learning new technologies, and continuously improving my craft.",
    avatarUrl: "/images/ProfilePicLogo.png", // Profile photo
    contactEmail: "alfathalifdewa02@gmail.com",
  },
  skills: {
    categories: [
      {
        title: "Frontend",
        icon: Layout,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      },
      {
        title: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "Python", "REST APIs", ".NET"],
      },
      {
        title: "Database",
        icon: Database,
        items: ["PostgreSQL", "MongoDB", "MySQL"],
      },
      {
        title: "Tools",
        icon: Terminal,
        items: ["Git", "Docker", "AWS", "Canva", "Ms. Office"],
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, secure payment integration, and a comprehensive admin dashboard.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool featuring real-time updates, kanban boards, and team workspaces.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "A modern chat interface integrated with OpenAI API, featuring markdown support and conversation history.",
      techStack: ["React", "Tailwind CSS", "OpenAI API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Ministry of Culture of Republic Indonesia",
      role: "Operational Services Officer",
      duration: "2025 - 2026",
      achievements: [
        "Handle podcast production process for the Directorate of Film, Music, and Animation.",
        "Create short films and promotional videos for events such as Festival Film Indonesia (FFI) and Asia Pacific Screen Awards (APSA).",
        "Manage and document film synopses, broadcast data, and staff administrative data.",
      ],
    },
    {
      id: 2,
      company: "PT Educa Sisfomedia Indonesia",
      role: "Web Backend Developer",
      duration: "Feb 2023 - Agu 2023",
      achievements: [
        "Developed and maintained backend systems using Node.js and Express.js.",
        "Designed and implemented RESTful APIs for client applications.",
        "Integrated third-party services and payment gateways.",
      ],
    },
    {
      id: 3,
      company: "CV Virus Digital Indonesia",
      role: "Web Developer",
      duration: "Jan 2020 - Mar 2020",
      achievements: [
        "Maintain and optimized website.   ",
        "Add feature to the website.",
        "Integrated third-party services and payment gateways.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      institution: "Universitas Indraprasta PGRI",
      degree: "Bachelor of Informatics Engineering",
      duration: "2021 - 2025",
    },
    {
      id: 2,
      institution: "SMKN 1 Cibinong",
      degree: "Software Engineering",
      duration: "2018-2021",
    },
  ],
  socialLinks: {
    github: "https://github.com/alfathalifdewa",
    linkedin: "https://www.linkedin.com/in/alfathalif-dewa/",
    twitter: "https://x.com/needpancake",
    instagram: "https://www.instagram.com/alfathalifdewa/",
    tiktok: "https://www.tiktok.com/@needpancake",
  },
};
