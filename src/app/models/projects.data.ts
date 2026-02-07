import { Project } from './project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Portfolio Dashboard',
    description:
      'Interactive personal portfolio with animations and responsive design.',
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Tailwind CSS'],
    keyFeatures: [
      'Designed and developed a high-performance personal portfolio website showcasing projects, technical skills, and experience with a strong focus on clarity, visual hierarchy, and professional storytelling.',
      'Implemented responsive, accessible UI and optimized performance to ensure fast load times, cross-device compatibility, and a polished user experience that reflects real-world frontend best practices.',
      'Project showcase',
      'Contact integration'
    ],
    role: 'UI/UX Developer',
    learnings: [
      'Modern CSS techniques',
      'Animation performance',
      'Responsive design patterns'
    ],
    outcome: 'Enhanced recruiter engagement',
    githubUrl: 'https://github.com/Avadhut0007/MyPortfolio'
  },
  {
    id: 2,
    title: 'Online Laptop Shop',
    description:
      'E-commerce platform for browsing laptops, cart management, and secure checkout.',
    category: 'Full Stack',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Spring Boot', 'MySQL', 'Hibernate'],
    keyFeatures: [
      'Developed a responsive e-commerce web application for managing laptop listings, shopping cart, and customer orders using Angular and Spring Boot.',
      'Implemented RESTful APIs for product management and order processing, ensuring smooth communication between frontend and backend.',
      'Designed a user-friendly UI with Angular Material, featuring search, filtering, and cart functionalities for a seamless experience.',
      'Order tracking'
    ],
    role: 'Full Stack Developer',
    learnings: [
      'E-commerce best practices',
      'User experience optimization',
      'Security in payment processing'
    ],
    outcome: 'Processed 500+ transactions',
    githubUrl: 'https://github.com/Avadhut0007/LaptopShop'
  },
  {
    id: 3,
    title: 'AeroOps Flight Booking System',
    description:
      'A complete flight booking system with flight search, booking, and admin scheduling.',
    category: 'Full Stack',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
    keyFeatures: [
      'Designed and implemented an end-to-end flight booking system (AeroOps) handling flight search, real-time availability, seat selection, booking management, and payment workflow with a scalable, modular architecture.',
      'Built airline-grade operational logic including fare calculation, booking lifecycle states (hold, confirm, cancel), role-based access (admin/agent/customer), and optimized database queries to ensure performance and data integrity.',
      'Secure booking process',
      'Admin dashboard'
    ],
    role: 'Full Stack Developer',
    learnings: [
      'RESTful API design',
      'JWT authentication',
      'Database optimization'
    ],
    outcome: 'Successfully deployed with 100+ users',
    githubUrl: 'https://github.com/yourname/aeroops'
  },
  {
    id: 4,
    title: 'Invoice Management System',
    description:
      'Invoice listing, search, pagination using stored procedures and DataTables.',
    category: '.NET',
    technologies: ['ASP.NET Core', 'Dapper', 'SQL Server'],
    keyFeatures: [
      'Advanced search and filtering',
      'Pagination with DataTables',
      'Invoice generation',
      'Export to PDF'
    ],
    role: 'Backend Developer',
    learnings: [
      'Stored procedures optimization',
      'ORM patterns with Dapper',
      'Enterprise architecture'
    ],
    outcome: 'Reduced query time by 60%'
  },
  
  
  
];
