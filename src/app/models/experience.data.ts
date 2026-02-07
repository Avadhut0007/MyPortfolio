import { Experience } from './experience.model';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: 'Software Developer Trainee',
    company: 'CARE Analytics and Advisory Pvt. Ltd.',
    duration: 'Jan 2026 – Present',
    location: 'India',
    description: [
      'Worked on enterprise-level web applications using Java and Angular.',
      'Developed REST APIs and integrated frontend with backend services.',
      'Collaborated with senior developers and followed clean architecture.'
    ],
    technologies: ['.Net', 'ASP .Net Core Web API', 'Angular', 'Oracle']
  },
  {
    id: 2,
    role: 'Software Developement Intern',
    company: 'SpidronTech LLP',
    duration: 'Mar 2025 – Oct 2025',
    location: 'India',
    description: [
      'Built Web APIs using ASP.NET Core.',
      'Used Dapper with stored procedures for database operations.',
      'Worked on invoice and reporting modules.'
    ],
    technologies: ['ASP.NET Core', 'Dapper', 'SQL Server']
  }
];
