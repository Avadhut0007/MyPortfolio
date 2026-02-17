import { Experience } from './experience.model';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'CARE Analytics and Advisory Pvt. Ltd.',
    duration: 'Jan 2026 – Present',
    location: 'India',
    description: [
      'Worked on enterprise-level web applications using .Net Core and Angular.',
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
      'Assisted senior developers in building and maintaining CRUD-based RESTful APIs using ASP.NET Core Web API, following basic SDLC and clean code practices.',
      'Performed data access tasks using Dapper, Entity Framework Core, LINQ, and SQL Server, including writing and optimizing stored procedures.',
      'Debugged and tested application features under guidance, contributing to stable and maintainable code.',
      'Worked with multiple data formats such as JSON and supported API integrations with frontend modules.',
      'Gained exposure to clean coding practices, Git workflows, and cross-team communication in an Agile environment.'
    ],
    technologies: ['ASP.NET Core Web API', 'Dapper', 'SQL Server', 'Entity Framework Core', 'LINQ','Cron Jobs', 'Git','Pusher','Swagger']
  }
];
