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
  highlights: string[];
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
    company: 'TUTIMI',
    title: 'Full Stack Developer',
    period: '03/2025 — Present',
    description: 'TuTiMi is an FnB company using technology to optimize operations and enable data-driven decisions across its food and beverage ecosystem.',
    highlights: [
      'Spearheaded the end-to-end development of the company\'s comprehensive project suite (ERP, POS, HRM, CRM, E-Commerce, E-Learning), scaling the digital ecosystem to support 50+ store locations and 1000+ active employees.',
      'Identified sequential bottlenecks in financial data processing and redesigned using parallel task execution and concurrency-safe aggregation, achieving 24x+ speedup without compromising data accuracy.',
      'Collaborated directly with the CFO to architect a centralized internal synchronization application, automating multi-platform data reconciliation and slashing manual accounting time by 70%.',
      'Built and mentored a high-performing engineering team (4+ interns converted to full-time), establishing strong coding standards, fostering Agile (Scrum/Kanban) culture, and translating technical decisions for stakeholders in business terms.',
      'Established standardized engineering practices based on SOLID principles and DDD, implementing CI/CD pipelines and TDD that reduced production bugs by 30%.',
      'Implemented full-stack observability using Sentry and Posthog, enabling continuous error monitoring and user behavior analysis which reduced average debugging time by 40%.',
      'Designed and implemented event-driven microservices with fan-out patterns using AWS (SQS, SNS, Lambda, API Gateway, RDS, S3, CloudWatch), ensuring high availability and cost-efficiency.',
    ],
    technologies: ['Node.js', 'NestJS', 'TypeScript', 'React', 'Astro', 'Next.js', 'Python', 'Django', 'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Jest'],
  },
  {
    id: 2,
    company: 'XGPT Enterprise - Private AI',
    title: 'Backend Developer',
    period: '09/2024 — 04/2025',
    description: 'An AI-powered online learning startup delivering personalized education through intelligent content recommendation, adaptive learning paths, and data-driven student insights.',
    highlights: [
      'Engineered scalable microservices and RESTful APIs using Java and Node.js, supporting complex AI-driven recruitment workflows and high-volume data ingestion.',
      'Designed and optimized complex graph data models using Neo4j for intelligent candidate matching, alongside PostgreSQL and MongoDB for hybrid structured/unstructured data needs.',
      'Architected a resilient cloud infrastructure on AWS (EC2, S3, SES), implementing optimized Redis caching layers that ensured sub-second response times for critical search features.',
      'Optimized asynchronous communication by integrating RabbitMQ and Google APIs, managing high-throughput notification pipelines and cross-service data synchronization.',
    ],
    technologies: ['Node.js', 'NestJS', 'Java', 'Neo4j', 'PostgreSQL', 'MySQL', 'MongoDB', 'RabbitMQ', 'AWS', 'Redis'],
  },
  {
    id: 3,
    company: 'TISOHA SOFTWARE SOLUTIONS',
    title: 'Full Stack Engineer',
    period: '05/2024 — 09/2024',
    description: 'Developed scalable solutions for Tico (a multi-tenant headless commerce engine) and IYYARA (a global Halal verification platform) serving international markets.',
    highlights: [
      'Led a large-scale backend migration from Express to NestJS, establishing a microservices-based enterprise-grade architecture with Dependency Injection, centralized error handling, and structured logging.',
      'Architected high-concurrency solutions including asynchronous request batching and multi-level Redis caching, successfully slashing API latency by 50% and significantly increasing database throughput.',
      'Engineered an automated i18n (Internationalization) engine and optimized server-side rendering (SSR) with Next.js, improving search engine indexing and simplifying localization for 5+ languages.',
      'Integrated Stripe for multi-currency payments and leveraged WebSockets for real-time communication modules, ensuring secure and low-latency financial transactions.',
      'Standardized DevOps workflows using Docker, NGINX, and GitLab CI/CD, automating multi-environment deployments and ensuring high availability via robust SSL/DNS management.',
      'Collaborated with international clients to gather technical requirements, proposed scalable architectural solutions, and ensured alignment between implementation and business objectives.',
    ],
    technologies: ['Node.js', 'NestJS', 'React', 'Next.js', 'Python', 'Django', 'Prisma', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS'],
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
