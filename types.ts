export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'QoS' | 'Academic';
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string; // e.g., "99.9% Uptime"
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  SKILLS = '/skills',
  PROJECTS = '/projects',
  EXPERIENCE = '/experience',
  CONTACT = '/contact',
}