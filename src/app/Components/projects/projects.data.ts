import { Project } from './project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'AeroOps Flight Booking System',
    description:
      'A complete flight booking system with flight search, booking, and admin scheduling.',
    category: 'Full Stack',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
    githubUrl: 'https://github.com/yourname/aeroops'
  },
  {
    id: 2,
    title: 'Invoice Management System',
    description:
      'Invoice listing, search, pagination using stored procedures and DataTables.',
    category: '.NET',
    technologies: ['ASP.NET Core', 'Dapper', 'SQL Server']
  },
  {
    id: 3,
    title: 'Online Laptop Shop',
    description:
      'E-commerce platform for browsing laptops, cart management, and secure checkout.',
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'Bootstrap','Spring Boot','MySQL','Hibernate'],
  },
  {
     id: 4,
    title: 'Online Laptop Shop',
    description:
      'E-commerce platform for browsing laptops, cart management, and secure checkout.',
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'Bootstrap','Spring Boot','MySQL','Hibernate'],
  }
  
];
