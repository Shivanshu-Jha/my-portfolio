/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Education, SkillCategory } from "./types";

export const developerInfo = {
  name: "Shivanshu Shekhar Jha",
  title: "Full-Stack Software Developer",
  subTitle: "Building intelligent, scalable web platforms",
  email: "shivanshu1221@gmail.com",
  phone: "+91 7903985646",
  location: "Bhagalpur, Bihar, India",
  github: "https://github.com/Shivanshu-Jha",
  linkedin: "https://www.linkedin.com/in/shivanshu-jha",
  bio: "I am a methodical and resilient full-stack developer with a proclivity for architecting scalable, modular web applications. My technical repertoire encompasses React, MongoDB, Express, and context-driven state orchestration. I specialize in diagnosing and resolving intricate anomalies across the frontend-backend continuum, often delving into schema mismatches, payload inconsistencies, and asynchronous logic failures.My recent undertakings include engineering a blogging platform with fortified backend integration, secure API workflows, and a compartmentalized codebase.I have leveraged Git recovery techniques—reflog traversal, commit resurrection, and submodule purging—to restore compromised repositories and sanitize version histories.I maintain a vigilant posture toward codebase hygiene, routinely auditing .gitignore configurations and mitigating sensitive file exposure.I thrive in collaborative ecosystems, value constructive feedback, and pursue iterative refinement with intellectual rigor.",
};

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Terminal",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    iconName: "Layers",
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & Cloud",
    iconName: "Database",
    skills: ["MongoDB", "MySQL", "Firebase", "Node.js Admin SDK"],
  },
  {
    title: "Interactions & AI Dev",
    iconName: "Cpu",
    skills: ["Gemini AI SDK", "Vapi Voice Agent", "Clerk Authentication", "ImageKit API", "Brevo / SMTP"],
  },
  {
    title: "Data Science & Other",
    iconName: "Binary",
    skills: ["Data Structures & Algorithms", "NumPy", "Pandas", "Matplotlib"],
  },
];

export const projectsData: Project[] = [
  {
    title: "Imaginify",
    category: "Full-Stack AI",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Cloudinary AI", "Stripe", "TypeScript", "Clerk"],
    description: [
      "Built a full-stack AI SaaS image editor with features like restore, generative fill, object remove/recolor and background remove.",
      "Integrated Cloudinary AI for transformations and Zod for schema validation.",
      "Implemented Clerk authentication and Stripe powered credit system with secure webhooks.",
      "Designed a responsive UI using Next.Js app router, Shadcn UI , and Tailwind CSS.",
      "Used MongoDB for scalable storage of users, transactions, and image history.",
    ],
    links: {
      github: "https://github.com/Shivanshu-Jha/Imaginify",
      live: "https://imaginify-opal-kappa.vercel.app/",
    },
    highlighted: true,
  },
  {
    title: "PrepWise",
    category: "Full-Stack AI",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Gemini API", "Vapi Voice Agent", "TypeScript"],
    description: [
      "Developed a full-stack AI interview platform simulating real behavioral & general interview technical scenarios to evaluate candidates.",
      "Engineered structured grading & feedback generation powered by Google Gemini AI, leveraging strong Zod verification schemas for valid outputs.",
      "Integrated realistic voice conversational loops using the Vapi AI Voice Agent SDK to drive conversational engagement.",
      "Designed secure database structures and user-profile schemas protected by Firebase Security Rules and Client Admin flows.",
    ],
    links: {
      github: "https://github.com/Shivanshu-Jha/prepwise_ai_mock_interview",
      live: "https://prepwise-ai-mock-interview-one.vercel.app/sign-in",
    },
    highlighted: true,
  },
  {
    title: "PingUp",
    category: "Social Platform",
    technologies: ["React.js", "MongoDB", "Express.js", "Redux", "Tailwind CSS", "Clerk", "ImageKit", "Brevo"],
    description: [
      "Developed a comprehensive full-stack social media network enabling real-time connection, content management, and interactivity.",
      "Implemented seamless multi-factor signups and session state controls via Clerk alongside React Redux state sync.",
      "Designed customized RESTful API routing inside Express to control feeds, posts, likes, follows, visual notification dispatches, and real-time interactions.",
      "Partnered with ImageKit APIs to handle secure user uploads with transformations, and Brevo for delivering responsive welcome emails.",
    ],
    links: {
      github: "https://github.com/Shivanshu-Jha/PingUp",
      live: "https://ping-up-ruddy.vercel.app",
    },
    highlighted: true,
  },
  {
    title: "QuickBlog",
    category: "AI Blogging Platform",
    technologies: ["React.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API", "JWT", "Node.js"],
    description: [
      "Authored a full-stack content composition suite driven by modern AI text assistants to draft, edit, and expand custom blogs.",
      "Configured robust CRUD controllers mapping to flexible MongoDB schemas handling multi-category items and comments securely.",
      "Integrated the Gemini API directly into rich text workflows, supporting automatic prompt engineering blocks, draft correction, and context styling.",
      "Bound custom JSON Web Token (JWT) strategies in middleware to prevent resource leaks and defend sensitive edit routes.",
    ],
    demoCreds: "Demo Login - Email: admin@example.com | Password: admin123",
    links: {
      github: "https://github.com/Shivanshu-Jha/SJBlog",
      live: "https://quickblog-ai.vercel.app",
    },
    highlighted: true,
  },
  {
    title: "Sorting Visualizer",
    category: "Frontend Utility",
    technologies: ["React.js", "Tailwind CSS"],
    description: [
      "Assembled a clean, beautiful web utility demonstrating six critical desktop algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap) in real time.",
      "Utilized custom asynchronous state intervals allowing recruiters to adjust playback speed, array sizes, element scaling, and playback states.",
      "Drafted high-contrast indicator bars mirroring sorting access patterns, comparisons, and sorted states fluidly.",
    ],
    links: {
      github: "https://github.com/Shivanshu-Jha/SortingVisualizer",
      live: "https://sorting-visualizer-zib2.vercel.app",
    },
    highlighted: false,
  },
  {
    title: "Awards",
    category: "Frontend Utility",
    technologies: ["React.js", "Tailwind CSS", "GSAP"],
    description: [
      "A high-performance, visually stunning landing page inspired by the Zentry website. This project showcases advanced frontend techniques, including complex GSAP scroll-triggered animations, a custom Bento Grid layout, and seamless video integration. Built with React and Tailwind CSS v4, it focuses on providing a triple-A gaming aesthetic with fluid user interactions.",
    ],
    links: {
      github: "https://github.com/Shivanshu-Jha/awards",
      live: "https://awards-puce.vercel.app/",
    },
    highlighted: true,
  }
];

export const educationData: Education[] = [
  {
    institution: "Raajdhani Engineering College",
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    duration: "2022 - 2026",
    location: "Bhubaneswar, Odisha",
    highlights: [
      "Focusing on Core Computer Architecture, Data Structures, Algorithms, Databases, and Software Engineering Principles.",


    ],
  },
  {
    institution: "DAV Public School",
    degree: "Class XII (CBSE Senior School Certificate Examination)",
    duration: "2020 - 2022",
    location: "Bhagalpur, Bihar",
    highlights: [
      "Specialized in Physics, Chemistry, Mathematics, and Computer Science.",
      "Secured excellent academic metrics across board examinations.",
    ],
  },
  {
    institution: "DAV Public School",
    degree: "Class X (CBSE Secondary School Certificate Examination)",
    duration: "2019 - 2020",
    location: "Bhagalpur, Bihar",
    highlights: [
      "Comprehensive STEM curriculum and language studies.",
      "Maintained structured excellence in science exhibitions.",
    ],
  },
];
