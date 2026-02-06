import { Skill } from './skill.model';

export const SKILLS_DATA: Skill[] = [
  // Frontend Skills
  {
    id: 1,
    name: 'Angular',
    icon: 'assets/skills/angular_gradient.png',
    level: 'Advanced',
    description: 'Components, services, routing, reactive forms',
    category: 'Frontend'
  },
  {
    id: 2,
    name: 'HTML5',
    icon: 'assets/skills/HTML5.png',
    level: 'Advanced',
    description: 'Semantic markup, accessibility, responsive design',
    category: 'Frontend'
  },
  {
    id: 3,
    name: 'CSS3',
    icon: 'assets/skills/CSS3.png',
    level: 'Advanced',
    description: 'Flexbox, Grid, animations, responsive layouts',
    category: 'Frontend'
  },
  {
    id: 4,
    name: 'JavaScript',
    icon: 'assets/skills/JavaScript.png',
    level: 'Advanced',
    description: 'ES6+, DOM manipulation, async programming, frameworks',
    category: 'Frontend'
  },
  {
    id: 5,
    name: 'TypeScript',
    icon: 'assets/skills/TypeScript.png',
    level: 'Advanced',
    description: 'Type safety, interfaces, generics, Angular development',
    category: 'Frontend'
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: 'assets/skills/tailwind.png',
    level: 'Intermediate',
    description: 'Utility-first CSS, responsive design, custom components',
    category: 'Frontend'
  },
  // Backend Skills
  {
    id: 7,
    name: 'Java',
    icon: 'assets/skills/java.png',
    level: 'Advanced',
    description: 'Strong knowledge of Core Java, OOP, collections, multithreading',
    category: 'Backend'
  },
  {
    id: 8,
    name: 'Spring Boot',
    icon: 'assets/skills/springboot.png',
    level: 'Advanced',
    description: 'REST APIs, JPA, Hibernate, JWT, layered architecture',
    category: 'Backend'
  },
  {
    id: 9,
    name: 'Hibernate',
    icon: 'assets/skills/Hibernate.png',
    level: 'Advanced',
    description: 'ORM, HQL, caching, transaction management',
    category: 'Backend'
  },
  {
    id: 10,
    name: 'ASP.NET Core',
    icon: 'assets/skills/dotnet.png',
    level: 'Intermediate',
    description: 'Web APIs, Dapper, middleware, authentication',
    category: 'Backend'
  },
  {
    id: 11,
    name: 'Dapper',
    icon: 'assets/skills/dapper.png',
    level: 'Intermediate',
    description: 'Lightweight ORM, SQL queries, performance optimization',
    category: 'Backend'
  },
  {
    id: 12,
    name: 'EF Core',
    icon: 'assets/skills/entityframeworkcore.png',
    level: 'Intermediate',
    description: 'Code-first, migrations, LINQ queries, relationships',
    category: 'Backend'
  },
  {
    id: 13,
    name: 'C#',
    icon: 'assets/skills/csharp.png',
    level: 'Intermediate',
    description: 'OOP, LINQ, async/await, .NET development',
    category: 'Backend'
  },
  // Database Skills
  {
    id: 14,
    name: 'MySQL',
    icon: 'assets/skills/mysql.png',
    level: 'Intermediate',
    description: 'Joins, subqueries, stored procedures, optimization',
    category: 'Databases'
  },
  {
    id: 15,
    name: 'SQL Server',
    icon: 'assets/skills/sql-server.png',
    level: 'Intermediate',
    description: 'T-SQL, stored procedures, indexing, query optimization',
    category: 'Databases'
  },
  // Tools & Version Control
  {
    id: 16,
    name: 'Git',
    icon: 'assets/skills/Git.png',
    level: 'Advanced',
    description: 'Version control, branching, merging, collaboration',
    category: 'Tools'
  },
  {
    id: 17,
    name: 'GitHub',
    icon: 'assets/skills/GitHub.png',
    level: 'Advanced',
    description: 'Repository management, CI/CD, collaboration tools',
    category: 'Tools'
  },
  {
    id: 18,
    name: 'BitBucket',
    icon: 'assets/skills/BitBucket.png',
    level: 'Intermediate',
    description: 'Git repository hosting, CI/CD pipelines, team collaboration',
    category: 'Tools'
  },
  // Testing & API Tools
  {
    id: 19,
    name: 'Postman',
    icon: 'assets/skills/Postman.png',
    level: 'Advanced',
    description: 'API testing, collections, environments, automation',
    category: 'Testing & APIs'
  },
  {
    id: 20,
    name: 'Swagger',
    icon: 'assets/skills/Swagger.png',
    level: 'Intermediate',
    description: 'API documentation, OpenAPI specification, testing',
    category: 'Testing & APIs'
  }
];
