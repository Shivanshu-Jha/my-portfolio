/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  category: string; // e.g., "Full-Stack AI", "Social Media", "Frontend Utility"
  technologies: string[];
  description: string[];
  links: {
    github: string;
    live?: string;
  };
  demoCreds?: string;
  highlighted: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}
