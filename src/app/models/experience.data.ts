import { Experience } from './experience.model';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: 'Java Full-Stack Developer Intern',
    company: 'CARE Analytics and Advisory Pvt. Ltd.',
    duration: 'Mar 2024 – Oct 2024',
    location: 'India',
    description: [
      'Worked on enterprise-level web applications using Java and Angular.',
      'Developed REST APIs and integrated frontend with backend services.',
      'Collaborated with senior developers and followed clean architecture.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL']
  },
  {
    id: 2,
    role: '.NET Intern',
    company: 'Confidential / Client Project',
    duration: 'Nov 2024 – Present',
    location: 'India',
    description: [
      'Built Web APIs using ASP.NET Core.',
      'Used Dapper with stored procedures for database operations.',
      'Worked on invoice and reporting modules.'
    ],
    technologies: ['ASP.NET Core', 'Dapper', 'SQL Server']
  }
];
