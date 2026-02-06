import { Project } from './project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'AeroOps Flight Booking System',
    description:
      'A complete flight booking system with flight search, booking, and admin scheduling.',
    category: 'Full Stack',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
    keyFeatures: [
      'Flight search and filtering',
      'Real-time availability',
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
    id: 2,
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
  {
    id: 3,
    title: 'Online Laptop Shop',
    description:
      'E-commerce platform for browsing laptops, cart management, and secure checkout.',
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Spring Boot', 'MySQL', 'Hibernate'],
    keyFeatures: [
      'Product catalog with filtering',
      'Shopping cart functionality',
      'Secure payment gateway',
      'Order tracking'
    ],
    role: 'Full Stack Developer',
    learnings: [
      'E-commerce best practices',
      'User experience optimization',
      'Security in payment processing'
    ],
    outcome: 'Processed 500+ transactions'
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description:
      'Interactive personal portfolio with animations and responsive design.',
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Tailwind CSS'],
    keyFeatures: [
      'Responsive design',
      'Smooth animations',
      'Project showcase',
      'Contact integration'
    ],
    role: 'UI/UX Developer',
    learnings: [
      'Modern CSS techniques',
      'Animation performance',
      'Responsive design patterns'
    ],
    outcome: 'Enhanced recruiter engagement'
  }
  
];
