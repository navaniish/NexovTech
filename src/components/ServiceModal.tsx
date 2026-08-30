import React from 'react';
import { X, CheckCircle2, ArrowRight, Clock, ShieldCheck, Cpu, Layers } from 'lucide-react';
import type { ServiceCategory } from '../types/portfolio';

interface ServiceModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onContactClick: () => void;
}

const SERVICE_DETAILS: Record<string, {
  process: string[];
  timeline: string;
  deliverables: string[];
  technologies: string[];
  longDescription: string;
}> = {
  'product-dev': {
    timeline: '4 - 8 Weeks',
    longDescription: 'End-to-end product engineering from strategic discovery and interactive prototyping to scalable full-stack web architectures. Built for venture-backed startups and growth enterprises.',
    process: ['Strategic Product Scoping', 'Interactive UX Wireframing', 'Agile Sprint Engineering', 'Automated QA & Deployment'],
    deliverables: ['Production Web Application', 'Scalable Backend API Infrastructure', 'CI/CD Deployment Pipelines', 'Full Technical Documentation'],
    technologies: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'AWS / Vercel', 'Docker'],
  },
  'web-dev': {
    timeline: '2 - 5 Weeks',
    longDescription: 'State-of-the-art web applications featuring high-performance rendering, 3D WebGL experiences, responsive design, and 100/100 Core Web Vitals optimization.',
    process: ['Architecture & Performance Audit', 'WebGL & Component Engineering', 'SEO & Accessibility Pass', 'Global Edge Deployment'],
    deliverables: ['Ultra-Fast Responsive Web App', 'Interactive 3D / Motion Components', 'Lighthouse 100/100 Audit Report', 'Edge-CDN Hosting Setup'],
    technologies: ['React 18', 'TypeScript', 'Three.js / WebGL', 'Tailwind CSS', 'Framer Motion'],
  },
  'ai-solutions': {
    timeline: '3 - 6 Weeks',
    longDescription: 'Practical AI implementations including custom LLM agent workflows, enterprise RAG knowledge search, automated document intelligence, and multi-agent coordination.',
    process: ['Use Case & Data Privacy Audit', 'Vector DB & Embedding Pipeline', 'Prompt & Guardrail Engineering', 'Integration & Monitoring'],
    deliverables: ['Custom RAG Knowledge Search', 'Automated LLM Workflow Pipeline', 'Vector Database Infrastructure', 'Evaluation & Safety Suite'],
    technologies: ['Python / FastAPI', 'LangChain / LlamaIndex', 'Pinecone / Qdrant', 'OpenAI / Claude API', 'PyTorch'],
  },
  'cloud-eng': {
    timeline: '2 - 4 Weeks',
    longDescription: 'Battle-tested multi-cloud architecture, Infrastructure as Code, zero-downtime Kubernetes deployments, and automated failover monitoring.',
    process: ['Infrastructure & Cost Review', 'Terraform IaC Scripting', 'Kubernetes / Container Setup', 'Observability & Security Suite'],
    deliverables: ['Automated Terraform IaC Codebase', 'Kubernetes Cluster Setup', 'CI/CD GitHub Actions Pipeline', '24/7 Monitoring Dashboard'],
    technologies: ['AWS / GCP', 'Kubernetes / Helm', 'Terraform', 'Docker', 'Prometheus / Grafana'],
  },
  'automation-eng': {
    timeline: '1 - 3 Weeks',
    longDescription: 'Custom workflow automation, event-driven webhooks, and microservice integrations that remove manual data entry and connect disconnected enterprise software.',
    process: ['Workflow Mapping & Bottleneck Audit', 'API Connector Development', 'Error Handling & Retry Logic', 'Uptime & Event Logging'],
    deliverables: ['Custom Webhook & API Connectors', 'Real-Time Event Notification Engine', 'Automated Data Sync Pipelines', 'Operations Dashboard'],
    technologies: ['Node.js / Python', 'RabbitMQ / Kafka', 'REST / GraphQL / gRPC', 'Webhooks', 'Redis'],
  },
  'ui-ux': {
    timeline: '2 - 4 Weeks',
    longDescription: 'Human-centered digital design systems, spatial computing dashboards, and intuitive user interfaces built for maximum clarity, engagement, and conversion.',
    process: ['User Journey Mapping', 'Figma Tokenized Design System', 'High-Fidelity Interactive Prototype', 'Design-to-Code Handoff'],
    deliverables: ['Comprehensive Figma Design System', 'Component UI Token Specs', 'Interactive Motion Prototypes', 'WCAG 2.1 Accessibility Audit'],
    technologies: ['Figma', 'Design Systems', 'Tailwind Tokens', 'WCAG A11y', 'Framer'],
  },
};

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onContactClick }) => {
  if (!service) return null;

  const details = SERVICE_DETAILS[service.id] || {
    timeline: '2 - 6 Weeks',
    longDescription: service.description,
    process: ['Discovery & Scoping', 'Architecture & Design', 'Sprint Engineering', 'QA & Delivery'],
    deliverables: ['Production Ready Codebase', 'Technical Documentation', 'Deployment Pipelines'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Cloud Infrastructure'],
  };

  return (
    <div
      className="fixed inset-0 z-[7000] flex justify-end animate-in fade-in duration-200"
      style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(10px)' }}
    >
      <div
        className="relative w-full max-w-2xl h-full p-5 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between"
        style={{
          background: '#ffffff',
          borderLeft: '1px solid #e2e8f0',
          boxShadow: '-20px 0 80px rgba(79,70,229,0.12), -4px 0 24px rgba(15,23,42,0.06)',
        }}
      >
        <div>
          {/* Top Bar */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="badge mb-2 inline-block text-[10px]">SERVICE DEEP DIVE</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl transition-colors shrink-0 ml-2"
              style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0' }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Overview Block */}
          <div className="p-4 sm:p-5 rounded-2xl mb-6 bg-slate-50 border border-slate-200">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-2 text-slate-400">
              01 SERVICE OVERVIEW
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
              {details.longDescription}
            </p>
          </div>

          {/* Timeline & Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase mb-1">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>TYPICAL TIMELINE</span>
              </div>
              <div className="text-xl font-bold font-heading text-slate-900">{details.timeline}</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>GUARANTEE</span>
              </div>
              <div className="text-xs font-semibold text-slate-800">100% Production Ready & Tested</div>
            </div>
          </div>

          {/* Included Capabilities */}
          <div className="mb-6">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>02 CORE CAPABILITIES</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Process */}
          <div className="mb-6">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>03 EXECUTION METHODOLOGY</span>
            </h3>
            <div className="space-y-2">
              {details.process.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="mb-6">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 text-slate-400">
              04 TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-slate-100 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold font-heading text-slate-900">Ready to start this service?</h4>
              <p className="text-xs text-slate-500">Book a 30-min call with our engineering team.</p>
            </div>
            <button
              onClick={() => { onClose(); onContactClick(); }}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
