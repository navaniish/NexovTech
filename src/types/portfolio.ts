export interface CapabilityNode {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  accentColor: string;
  features: string[];
}

export interface CaseStudyData {
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    nodes: string[];
    description: string;
  };
  technologies: string[];
  results: { metric: string; label: string }[];
  learnings: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  status: 'Production' | 'Beta' | 'Lab Experiment';
  previewColor: string;
  iconName: string;
  caseStudy: CaseStudyData;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI' | 'Cloud' | 'Data';
  proficiency: number;
  featured?: boolean;
}

export interface LabItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  technologies: string[];
  badge: string;
}

export interface TimelineMilestone {
  stage: string;
  year: string;
  title: string;
  description: string;
  status: 'Completed' | 'Current' | 'Next Phase';
}

export interface CompanyValue {
  title: string;
  principle: string;
  description: string;
}

export interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  status: string;
  connectionCount: number;
}
