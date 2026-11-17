export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  techStatusNote?: string; // For projects requiring technology confirmation
  githubUrl: string;
  demoUrl?: string;
  image: string;
  highlights: string[];
  keyFeatures: string[];
  architecture?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillItem {
  name: string;
  category: 'Technical Skills' | 'Data Analysis' | 'Tools & Design' | 'Core Concepts';
  description?: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  type?: string;
  description?: string;
  credentialUrl?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  college: string;
  degree: string;
  graduationYear: string;
}

