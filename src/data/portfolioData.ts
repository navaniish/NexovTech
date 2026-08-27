import type { 
  CapabilityNode, 
  ProjectItem, 
  ServiceCategory, 
  TechItem, 
  LabItem, 
  TimelineMilestone, 
  CompanyValue,
  EcosystemNode
} from '../types/portfolio';

export const CAPABILITIES_DATA: CapabilityNode[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'Intelligent Systems',
    shortDesc: 'Custom AI integration, practical LLM workflows, and intelligent automation built for production.',
    fullDesc: 'We help teams integrate artificial intelligence into their core workflows. From fine-tuning domain models to building reliable retrieval engines and automated assistants, we deliver AI that delivers real business value.',
    icon: 'Cpu',
    accentColor: '#00f0ff',
    features: ['Custom AI Workflow Integration', 'Domain-Specific LLM Fine-Tuning', 'Fast Vector Search & Knowledge Base (RAG)', 'Computer Vision & Visual Inspection']
  },
  {
    id: 'software',
    name: 'Software Engineering',
    category: 'Scalable Web Apps',
    shortDesc: 'Modern web applications and software platforms designed for speed, reliability, and scale.',
    fullDesc: 'We build high-performance web frontends and resilient backend architectures. Our engineering stack guarantees sub-second page loads, clean component design, and zero downtime under heavy traffic.',
    icon: 'Code',
    accentColor: '#3b82f6',
    features: ['High-Performance React & Next.js', 'Real-Time WebSocket Communications', 'Microservices & API Architecture', 'Responsive UI & Mobile Web Apps']
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    category: 'Cloud-Native Systems',
    shortDesc: 'Resilient cloud architecture, automated deployment pipelines, and zero-trust security.',
    fullDesc: 'We design and maintain cloud infrastructure that keeps operations smooth and secure. Using modern Infrastructure as Code, automated deployments, and smart scaling, we ensure your software is always online.',
    icon: 'Cloud',
    accentColor: '#7000ff',
    features: ['Kubernetes & Container Orchestration', 'Multi-Cloud Setup (AWS, GCP, Azure)', 'Automated CI/CD Deployment Pipelines', 'Zero-Trust Security & Access Management']
  },
  {
    id: 'automation',
    name: 'Workflow Automation',
    category: 'Operations & Process',
    shortDesc: 'Eliminate manual bottlenecks with custom automated workflows and API integrations.',
    fullDesc: 'We connect disparate software systems to automate repetitive operational tasks. By streamlining business processes, our solutions free your team to focus on high-impact work.',
    icon: 'Zap',
    accentColor: '#a855f7',
    features: ['Cross-Platform API Integrations', 'Automated Event-Driven Processing', 'Custom Webhook & Data Pipelines', 'Operational Dashboards & Alerts']
  },
  {
    id: 'data',
    name: 'Data Engineering',
    category: 'Analytics & Insights',
    shortDesc: 'Fast data pipelines, real-time analytics, and data warehousing for clear decision making.',
    fullDesc: 'We transform messy data into structured insights. Our team builds streaming data pipelines, scalable analytical databases, and clear visual dashboards that empower confident leadership choices.',
    icon: 'Database',
    accentColor: '#06b6d4',
    features: ['Real-Time Stream Processing', 'Data Warehousing & Lakehouse Setup', 'Interactive Analytics Dashboards', 'Automated Data Cleanliness & Validation']
  },
  {
    id: 'innovation',
    name: 'R&D & Prototyping',
    category: 'Experimental Tech',
    shortDesc: 'Exploring emerging technologies, interactive 3D WebGL interfaces, and spatial web concepts.',
    fullDesc: 'Innovation keeps businesses ahead of the curve. In our research division, we build working prototypes in 3D WebGL graphics, edge computing, spatial web experiences, and next-generation UI paradigms.',
    icon: 'Sparkles',
    accentColor: '#ec4899',
    features: ['Interactive 3D WebGL Shader Effects', 'Edge Computing & Local Processing', 'Spatial & WebXR Prototype Design', 'Experimental UI/UX Research']
  }
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: 'core', label: 'NEXOVTECH', category: 'HQ Core', status: 'Active', connectionCount: 8 },
  { id: 'ai', label: 'AI & Machine Learning', category: 'Intelligence', status: 'Operational', connectionCount: 5 },
  { id: 'cloud', label: 'Cloud Systems', category: 'Infrastructure', status: 'Operational', connectionCount: 6 },
  { id: 'software', label: 'Software Stack', category: 'Applications', status: 'Operational', connectionCount: 7 },
  { id: 'automation', label: 'Workflows', category: 'Operations', status: 'Operational', connectionCount: 4 },
  { id: 'data', label: 'Data Engine', category: 'Analytics', status: 'Operational', connectionCount: 5 },
  { id: 'cyber', label: 'Security', category: 'Protection', status: 'Operational', connectionCount: 4 },
  { id: 'research', label: 'Nexov Labs', category: 'R&D', status: 'Active', connectionCount: 3 },
  { id: 'products', label: 'Client Solutions', category: 'Products', status: 'Operational', connectionCount: 6 }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    category: 'AI & Workflow Automation',
    shortDescription: 'An intelligent automation platform that streamlines complex multi-department operations using automated AI workflows.',
    technologies: ['React', 'Python', 'FastAPI', 'Three.js', 'PostgreSQL', 'Redis'],
    status: 'Production',
    previewColor: '#00f0ff',
    iconName: 'Bot',
    caseStudy: {
      overview: 'Project Alpha is an operations platform built for enterprise teams to coordinate complex engineering workflows smoothly.',
      problem: 'Operations required manual coordination across 14 separate software portals, leading to slow turnaround times and human error.',
      solution: 'NexovTech built a unified control center powered by intelligent task handlers. The platform automatically reviews incoming requests, retrieves context from internal knowledge bases, and securely executes routine tasks.',
      architecture: {
        title: 'Platform Architecture',
        nodes: ['Web Portal UI', 'FastAPI API Gateway', 'Task Manager Engine', 'Knowledge Base Search', 'PostgreSQL Audit Store'],
        description: 'Requests are securely authenticated by the API Gateway and delegated to isolated task handlers with complete audit logging.'
      },
      technologies: ['FastAPI', 'Python 3.12', 'LangChain', 'Pinecone Vector DB', 'React 19', 'Three.js'],
      results: [
        { metric: '94%', label: 'Reduction in Processing Time' },
        { metric: '10M+', label: 'Monthly Operations Executed' },
        { metric: '99.99%', label: 'System Uptime SLA' }
      ],
      learnings: ['Building clear human approval steps into automated flows increases team confidence significantly.', 'Interactive 3D dashboards give managers instant clarity on system health.']
    }
  },
  {
    id: 'nexov-cloud-mesh',
    name: 'Nexov Cloud Mesh',
    category: 'Cloud Engineering',
    shortDescription: 'A multi-cloud monitoring and traffic visualizer providing real-time visibility across global server clusters.',
    technologies: ['Next.js', 'Go', 'Kubernetes', 'AWS', 'GraphQL', 'Tailwind'],
    status: 'Production',
    previewColor: '#7000ff',
    iconName: 'Server',
    caseStudy: {
      overview: 'Nexov Cloud Mesh provides real-time traffic visibility and routing controls across multi-region cloud infrastructures.',
      problem: 'Engineering teams found it difficult to diagnose latency spikes and connection failures scattered across separate cloud providers.',
      solution: 'We developed a unified monitoring dashboard with an interactive 3D map that displays real-time server health and network latency in milliseconds.',
      architecture: {
        title: 'Telemetry & Visualization Architecture',
        nodes: ['Network Probes', 'Go Metric Collector', 'Kafka Stream Engine', 'Next.js 3D Map'],
        description: 'Lightweight server probes collect network metrics continuously and stream them to an interactive browser map.'
      },
      technologies: ['Go', 'Kafka', 'React Three Fiber', 'Next.js', 'Tailwind CSS'],
      results: [
        { metric: '<15ms', label: 'Metric Streaming Latency' },
        { metric: '40%', label: 'Savings in Cloud Bandwidth Costs' },
        { metric: '100%', label: 'Security Standard Compliance' }
      ],
      learnings: ['Visualizing complex network topology on a 3D canvas helps engineers pinpoint root causes during incidents in seconds.', 'Streaming micro-batches reduces browser CPU overhead while maintaining fluid updates.']
    }
  },
  {
    id: 'quantum-data-engine',
    name: 'QuantumData Analytics',
    category: 'Data & Analytics',
    shortDescription: 'Real-time streaming analytics engine that transforms operational metrics into predictive business forecasts.',
    technologies: ['TypeScript', 'Python', 'Apache Kafka', 'DuckDB', 'PyTorch'],
    status: 'Beta',
    previewColor: '#3b82f6',
    iconName: 'Activity',
    caseStudy: {
      overview: 'QuantumData Analytics processes live operational metrics to provide executive teams with real-time financial models.',
      problem: 'Legacy overnight data batch jobs took up to 6 hours to run, forcing managers to make intraday decisions on outdated figures.',
      solution: 'NexovTech built an in-memory streaming analytics pipeline that processes live data events instantly and renders trend projections in real time.',
      architecture: {
        title: 'Streaming Data Architecture',
        nodes: ['Kafka Event Stream', 'DuckDB Processing Core', 'Prediction Model Service', 'Interactive Dashboard'],
        description: 'Events stream into an in-memory DuckDB database and pass through lightweight prediction models for instant visualization.'
      },
      technologies: ['Apache Kafka', 'DuckDB', 'PyTorch', 'TypeScript', 'Web Workers'],
      results: [
        { metric: '500x', label: 'Faster Query Times' },
        { metric: '98.4%', label: 'Model Prediction Accuracy' },
        { metric: '250ms', label: 'End-to-End Data Refresh Rate' }
      ],
      learnings: ['In-memory columnar databases combined with web worker background processing bring desktop-class analytics straight to the browser.']
    }
  },
  {
    id: 'vision-os-agent',
    name: 'Spatial Vision Assistant',
    category: 'Spatial Web & AI',
    shortDescription: 'An augmented visual assistant that provides real-time component diagnostics for industrial maintenance.',
    technologies: ['Three.js', 'WebXR', 'Vision Models', 'WebSockets', 'WebGL'],
    status: 'Lab Experiment',
    previewColor: '#ec4899',
    iconName: 'Glasses',
    caseStudy: {
      overview: 'A spatial web prototype that assists technical field crews by overlaying diagnostic information directly onto equipment.',
      problem: 'Field technicians frequently had to pause work to look up long technical manuals, slowing down urgent hardware maintenance.',
      solution: 'NexovTech designed a hands-free browser visual assistant that analyzes camera video, highlights equipment parts, and displays guidance steps right on screen.',
      architecture: {
        title: 'Spatial Inspection Pipeline',
        nodes: ['Camera Stream', 'Visual Inspection Engine', 'Spatial 3D Renderer', 'Voice Command Unit'],
        description: 'Video frames stream via WebSockets to a visual recognition service, which sends back 3D overlay coordinates.'
      },
      technologies: ['Three.js', 'WebXR API', 'Vision API', 'WebSockets', 'GLSL'],
      results: [
        { metric: '65%', label: 'Faster Repair Times' },
        { metric: '0', label: 'Assembly Errors Reported' },
        { metric: '60 FPS', label: 'Smooth Spatial Rendering' }
      ],
      learnings: ['Low-latency video processing is critical for spatial interfaces to ensure user comfort and visual accuracy.']
    }
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'product-dev',
    title: 'Product Development',
    description: 'We partner with startups and enterprises to build custom software products from initial concept to launch.',
    icon: 'Rocket',
    capabilities: ['Product Architecture & Strategy', 'Full-Stack Web Development', 'MVP Prototyping & Validation', 'Production Scaling']
  },
  {
    id: 'web-dev',
    title: 'Web Engineering',
    description: 'High-performance web applications featuring 3D visuals, smooth animations, and fast loading times.',
    icon: 'Globe',
    capabilities: ['React & Next.js Frontend Architecture', 'Three.js & WebGL Interactive 3D', 'Progressive Web Apps (PWA)', 'Core Web Vitals Optimization']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Integration',
    description: 'Practical artificial intelligence solutions, automated LLM workflows, and custom data processing.',
    icon: 'BrainCircuit',
    capabilities: ['AI Integration into Existing Apps', 'Custom LLM Prompt Engineering', 'Knowledge Base Search (RAG)', 'Computer Vision Solutions']
  },
  {
    id: 'cloud-eng',
    title: 'Cloud & Infrastructure',
    description: 'Reliable multi-cloud environments, automated deployment pipelines, and proactive monitoring.',
    icon: 'CloudLightning',
    capabilities: ['Infrastructure as Code (Terraform)', 'Kubernetes Cluster Management', 'Automated CI/CD Pipelines', 'System Monitoring & Uptime']
  },
  {
    id: 'automation-eng',
    title: 'Workflow Automation',
    description: 'Custom integrations and automated pipelines that remove manual steps from daily work.',
    icon: 'Workflow',
    capabilities: ['API Integration & Webhooks', 'Event-Driven Workflows', 'Business Process Automation', 'Real-Time System Alerts']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Design Systems',
    description: 'Modern, intuitive digital interfaces crafted with care, accessibility, and high visual standards.',
    icon: 'Palette',
    capabilities: ['Design System Architecture', 'Interactive Prototyping & Motion', 'Accessible UI Design (WCAG)', 'User Journey Optimization']
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 98, featured: true },
  { name: 'TypeScript', category: 'Frontend', proficiency: 96, featured: true },
  { name: 'Three.js / WebGL', category: 'Frontend', proficiency: 94, featured: true },
  { name: 'Next.js', category: 'Frontend', proficiency: 92, featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95 },
  { name: 'Motion & Animations', category: 'Frontend', proficiency: 90 },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 95, featured: true },
  { name: 'Python', category: 'Backend', proficiency: 94, featured: true },
  { name: 'FastAPI', category: 'Backend', proficiency: 92, featured: true },
  { name: 'Go', category: 'Backend', proficiency: 88 },
  { name: 'GraphQL & REST APIs', category: 'Backend', proficiency: 95 },

  // AI & ML
  { name: 'LLMs & AI Workflows', category: 'AI', proficiency: 96, featured: true },
  { name: 'PyTorch', category: 'AI', proficiency: 89, featured: true },
  { name: 'Computer Vision', category: 'AI', proficiency: 88, featured: true },
  { name: 'Vector Databases', category: 'AI', proficiency: 92 },
  { name: 'Intelligent AI Assistants', category: 'AI', proficiency: 95, featured: true },

  // Cloud & Infrastructure
  { name: 'AWS & Google Cloud', category: 'Cloud', proficiency: 92, featured: true },
  { name: 'Docker & Kubernetes', category: 'Cloud', proficiency: 90, featured: true },
  { name: 'Terraform', category: 'Cloud', proficiency: 88 },
  { name: 'Vercel & Cloudflare', category: 'Cloud', proficiency: 96 },

  // Data & Databases
  { name: 'PostgreSQL', category: 'Data', proficiency: 94, featured: true },
  { name: 'Apache Kafka', category: 'Data', proficiency: 88, featured: true },
  { name: 'Redis', category: 'Data', proficiency: 92 },
  { name: 'MongoDB', category: 'Data', proficiency: 90 }
];

export const LABS_DATA: LabItem[] = [
  {
    id: 'lab-1',
    title: 'Collaborative AI Workflows',
    category: 'Intelligent Systems',
    description: 'An experimental coordinator where lightweight AI assistants collaborate on complex technical tasks under human oversight.',
    status: 'Active Prototype',
    technologies: ['Python', 'Docker', 'WebSockets', 'React'],
    badge: 'R&D Phase 2'
  },
  {
    id: 'lab-2',
    title: '3D Directional Web Audio',
    category: 'Audio & WebGL',
    description: 'Exploring spatial directional audio that synchronizes with 3D canvas objects in real time using the browser Web Audio API.',
    status: 'Experimental',
    technologies: ['Web Audio API', 'Three.js', 'GLSL'],
    badge: 'Prototype'
  },
  {
    id: 'lab-3',
    title: 'Automated Code Optimization',
    category: 'Developer Tools',
    description: 'Researching automated tools that convert heavy browser JavaScript routines into fast WebAssembly modules.',
    status: 'Research Paper',
    technologies: ['Rust', 'Wasm', 'TypeScript'],
    badge: 'Research'
  },
  {
    id: 'lab-4',
    title: 'Secure Credential Vault',
    category: 'Security',
    description: 'Testing modern post-quantum cryptography algorithms for safe cloud credential management and key rotation.',
    status: 'Beta Testing',
    technologies: ['C++', 'Rust', 'Security Protocols'],
    badge: 'Security Lab'
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    stage: '01',
    year: 'Foundation',
    title: 'NexovTech Founded',
    description: 'Started with a vision to build modern software experiences combining fast web applications, 3D interactive design, and AI.',
    status: 'Completed'
  },
  {
    stage: '02',
    year: 'First Products',
    title: 'Core Engine & Client Products',
    description: 'Delivered our initial production platforms and established our high-performance WebGL & cloud software standards.',
    status: 'Completed'
  },
  {
    stage: '03',
    year: 'Expansion',
    title: 'Enterprise AI & Cloud Practice',
    description: 'Expanded capabilities into multi-cloud architectures, real-time analytics engines, and practical AI integrations.',
    status: 'Completed'
  },
  {
    stage: '04',
    year: 'Nexov Labs',
    title: 'Research & Prototyping Division',
    description: 'Launched Nexov Labs to test spatial computing, open-source web experiments, and modern compiler technologies.',
    status: 'Current'
  },
  {
    stage: '05',
    year: 'Future',
    title: 'Global Product Platform',
    description: 'Building software platforms and partner technology for ambitious companies across the world.',
    status: 'Next Phase'
  }
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: 'Curiosity',
    principle: 'Question the Status Quo',
    description: 'We stay curious, constantly exploring new technology patterns to find better ways to build.'
  },
  {
    title: 'Engineering Quality',
    principle: 'Build Things Properly',
    description: 'No shortcuts. We take pride in clean code, robust architecture, and software that lasts.'
  },
  {
    title: 'Simplicity',
    principle: 'Make Complex Things Simple',
    description: 'Behind complex engineering should be a simple, delightful experience for real people.'
  },
  {
    title: 'Ownership',
    principle: 'Take End-to-End Responsibility',
    description: 'We hold ourselves accountable for performance, reliability, and real-world client results.'
  },
  {
    title: 'Practical Testing',
    principle: 'Validate Before Assuming',
    description: 'We base technical decisions on benchmark data, real user feedback, and hands-on testing.'
  },
  {
    title: 'Real Impact',
    principle: 'Solve Meaningful Problems',
    description: 'Great technology is exciting, but its true value is the tangible difference it makes for people.'
  }
];
