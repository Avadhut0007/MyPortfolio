export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  // New enhanced fields
  keyFeatures?: string[]; // Core features of the project
  role?: string; // Developer's role in the project
  learnings?: string[]; // Key learnings from the project
  outcome?: string; // Project outcome or result
  githubUrl?: string;
  liveUrl?: string;
}
