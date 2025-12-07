import { ExperienceItem, Project, SkillCategory } from './types';
import { 
  Code, 
  Server, 
  Database, 
  ShieldCheck, 
  Activity, 
  Terminal 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "Software Engineer | QoS Specialist",
  tagline: "Engineering Reliability. Architecting Performance.",
  email: "alex.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "San Francisco, CA",
  stats: [
    { label: "Years Exp", value: "3+" },
    { label: "Projects", value: "25+" },
    { label: "Uptime Avg", value: "99.9%" },
  ]
};

export const SKILL_CATEGORIES: (SkillCategory & { icon: any })[] = [
  {
    title: "Core Engineering",
    icon: Code,
    skills: [
      { name: "TypeScript / JavaScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go (Golang)", level: 85 },
      { name: "Java", level: 80 },
    ]
  },
  {
    title: "QoS & Testing",
    icon: ShieldCheck,
    skills: [
      { name: "Load Testing (k6, JMeter)", level: 95 },
      { name: "E2E Testing (Playwright)", level: 90 },
      { name: "Chaos Engineering", level: 80 },
      { name: "SLA/SLO Monitoring", level: 85 },
    ]
  },
  {
    title: "Backend & Infra",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "AWS (EC2, Lambda, S3)", level: 80 },
      { name: "Nginx / Load Balancing", level: 85 },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis (Caching)", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "InfluxDB (TimeSeries)", level: 75 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "High-Throughput Message Queue",
    description: "A distributed message broker capable of handling 10k req/sec with guaranteed delivery logic.",
    tags: ["Go", "gRPC", "Redis", "Distributed Systems"],
    category: "QoS",
    githubUrl: "#",
    metrics: "10k req/s @ <50ms"
  },
  {
    id: "2",
    title: "E-commerce Microservices",
    description: "Full-stack e-commerce platform built with microservices architecture, focusing on fault tolerance.",
    tags: ["Node.js", "React", "Docker", "RabbitMQ"],
    category: "Web",
    githubUrl: "#",
    liveUrl: "#",
    metrics: "99.95% Availability"
  },
  {
    id: "3",
    title: "Real-time Network Monitor",
    description: "Dashboard for visualizing network packet loss and latency in real-time using WebSockets.",
    tags: ["Next.js", "D3.js", "WebSockets", "SNMP"],
    category: "QoS",
    githubUrl: "#",
    metrics: "Real-time (<10ms lag)"
  },
  {
    id: "4",
    title: "Academic Thesis: Adaptive Bitrate",
    description: "Research on adaptive bitrate streaming algorithms to minimize buffering events in low-bandwidth networks.",
    tags: ["Python", "Machine Learning", "Networking"],
    category: "Academic",
    githubUrl: "#",
    metrics: "Published Paper"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineer (QoS Focus)",
    company: "TechStream Solutions",
    duration: "2023 - Present",
    description: "Leading the reliability engineering initiatives for the core streaming platform.",
    achievements: [
      "Reduced API latency by 40% through aggressive caching strategies.",
      "Implemented automated load testing pipelines using k6.",
      "Designed a circuit breaker pattern that prevented 3 major outages."
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer Intern",
    company: "Innovate Labs",
    duration: "2022 - 2023",
    description: "Developed internal tools for the QA department to track bug regression.",
    achievements: [
      "Built a dashboard using React and Express used by 20+ engineers.",
      "Optimized database queries reducing report generation time by 60%.",
      "Assisted in migration from Monolith to Microservices."
    ]
  }
];