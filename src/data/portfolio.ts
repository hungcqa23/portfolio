export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  madeAt: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

export const skills: Skill[] = [
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Go', level: 70, category: 'backend' },
  { name: 'TypeScript', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Redis', level: 75, category: 'database' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 95, category: 'backend' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Kubernetes', level: 65, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'CI/CD', level: 80, category: 'tools' },
  { name: 'React', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 75, category: 'frontend' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Microservices API Gateway',
    description: 'High-performance API gateway with rate limiting, caching, authentication, and load balancing. Built using Node.js and handles thousands of requests per second.',
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'Kubernetes'],
    year: '2024',
    madeAt: 'TechCorp',
    github: 'https://github.com/anhung/api-gateway',
    link: 'https://api-gateway-demo.com'
  },
  {
    id: 2,
    title: 'Real-time Chat System',
    description: 'Scalable WebSocket-based chat application with message persistence, user presence, and push notifications. Supports 100k+ concurrent connections.',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    year: '2023',
    madeAt: 'Personal',
    github: 'https://github.com/anhung/chat-system'
  },
  {
    id: 3,
    title: 'Task Queue Worker',
    description: 'Distributed task processing system with priority queues, retry logic, and dead letter handling. Integrates with various cloud services.',
    technologies: ['Python', 'Celery', 'RabbitMQ', 'PostgreSQL', 'AWS'],
    year: '2023',
    madeAt: 'StartupXYZ',
    github: 'https://github.com/anhung/task-queue'
  },
  {
    id: 4,
    title: 'GraphQL Server',
    description: 'Production-ready GraphQL server with DataLoader for batch queries, subscription support, and comprehensive error handling.',
    technologies: ['Node.js', 'Apollo', 'PostgreSQL', 'Redis', 'Jest'],
    year: '2022',
    madeAt: 'Personal',
    github: 'https://github.com/anhung/graphql-server'
  },
  {
    id: 5,
    title: 'Database Migration Tool',
    description: 'CLI tool for database schema migrations with rollback support, environment-specific configs, and SQL/NoSQL compatibility.',
    technologies: ['Go', 'PostgreSQL', 'MongoDB', 'Cobra'],
    year: '2022',
    madeAt: 'Freelance',
    github: 'https://github.com/anhung/db-migrator'
  },
  {
    id: 6,
    title: 'Monitoring Dashboard',
    description: 'Application monitoring system with metrics collection, alerting, and beautiful dashboards for visualizing system health.',
    technologies: ['Prometheus', 'Grafana', 'Node.js', 'Docker', 'AWS'],
    year: '2021',
    madeAt: 'AgencyABC',
    github: 'https://github.com/anhung/monitoring'
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TuTiMi Corporation',
    title: 'Software Engineering Manager',
    period: 'Sep 2025 — Present',
    description: 'Leading engineering at TuTiMi’s fast-growing F&B tech ecosystem. Driving technical strategy, architecture decisions, and team execution across ERP, POS, inventory, and operations platforms. Implementing AI-assisted workflows to improve efficiency.',
    technologies: ['Technical Leadership', 'System Architecture', 'AI Workflows', 'ERP/POS', 'Full Stack'],
  },
  {
    id: 2,
    company: 'XGPT Enterprise',
    title: 'Full Stack Engineer',
    period: 'Mar 2025 — May 2025',
    description: 'Freelance work building a scalable backend architecture for an online learning platform. Utilized NestJS, RabbitMQ, and microservices to implement asynchronous workflows for course enrollment and content delivery.',
    technologies: ['NestJS', 'RabbitMQ', 'Microservices', 'Distributed Systems', 'Backend Architecture'],
  },
  {
    id: 3,
    company: 'Accessed',
    title: 'Back End Developer',
    period: 'Dec 2024 — Mar 2025',
    description: 'Worked in a fast-paced startup environment building reliable, data-driven systems. Gained hands-on experience with microservices, databases (PostgreSQL, MongoDB, Neo4j), and AWS infrastructure.',
    technologies: ['Microservices', 'PostgreSQL', 'MongoDB', 'Neo4j', 'AWS'],
  },
  {
    id: 4,
    company: 'TiSoHa Software Solutions',
    title: 'Full Stack Engineer',
    period: 'May 2024 — Dec 2024',
    description: 'Focused on improving front-end fundamentals, SEO, and internationalization. Delivered quality software in an outsourcing environment using modern frameworks like React and Next.js.',
    technologies: ['React', 'Next.js', 'Frontend Optimization', 'SEO', 'Outsourcing'],
  },
];

export const personalInfo = {
  name: 'An Hung',
  title: 'Backend Developer',
  bio: "I'm a backend-focused developer passionate about building scalable systems, robust APIs, and efficient database architectures. I love diving deep into performance optimization and cloud infrastructure.",
  email: 'hungcqa23@gmail.com',
  github: 'https://github.com/hungcqa23',
  linkedin: 'https://www.linkedin.com/in/an-hung/',
};

export interface Book {
  id: number;
  year: string;
  title: string;
  author: string;
  category: string;
  link: string;
}

export const books: Book[] = [
  {
    id: 5,
    year: '2023',
    title: 'Tidy First?',
    author: 'Kent Beck',
    category: 'Engineering',
    link: 'https://www.oreilly.com/library/view/tidy-first/9781098151232/',
  },
  {
    id: 1,
    year: '2024',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Architecture',
    link: 'https://dataintensive.net/',
  },
  {
    id: 2,
    year: '2024',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Engineering',
    link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
  },
  {
    id: 3,
    year: '2023',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    category: 'Mindset',
    link: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/',
  },
  {
    id: 4,
    year: '2023',
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    category: 'Architecture',
    link: 'https://www.domainlanguage.com/ddd/',
  },
];
