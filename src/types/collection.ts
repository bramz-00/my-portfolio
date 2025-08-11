export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: 'completed' | 'in-progress' | 'planned' | 'archived';
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  logo_url: string;
  url: string;
  level: number;


}