import React from 'react';
import { Cpu, Globe, BrainCircuit, CloudLightning, Database, Layers, ShieldCheck } from 'lucide-react';

interface EcosystemModule {
  name: string;
  description: string;
}

interface EcosystemDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  modules: EcosystemModule[];
}

const DOMAINS: EcosystemDomain[] = [
  {
    id: 'web',
    title: 'Web Engineering',
    subtitle: 'React, Next.js, WebGL & interactive web platforms',
    icon: <Globe className="w-5 h-5" />,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.2)',
    modules: [
      { name: '3D Knowledge Atlas', description: 'Explore interconnected information through an interactive 3D knowledge space.' },
      { name: 'Real-Time Collaboration OS', description: 'Browser-based workspace where multiple users manipulate the same live environment.' },
      { name: 'Spatial Data Explorer', description: 'Transform complex datasets into an interactive WebGL environment.' },
      { name: 'Virtual Product Studio', description: 'Interactive 3D product configurator with real-time customization.' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Intelligence',
    subtitle: 'LLM agents, RAG search & automated pipelines',
    icon: <BrainCircuit className="w-5 h-5" />,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.2)',
    modules: [
      { name: 'Autonomous Research Network', description: 'Multiple AI agents independently research, verify, compare, and synthesize information.' },
      { name: 'Enterprise Memory Engine', description: 'RAG system that creates a searchable long-term memory from organizational knowledge.' },
      { name: 'Decision Intelligence Agent', description: 'Converts business data and documents into evidence-backed recommendations.' },
      { name: 'Multi-Agent Workflow Brain', description: 'AI agents dynamically divide and execute complex tasks between themselves.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    subtitle: 'AWS, GCP, Kubernetes & Terraform IaC',
    icon: <CloudLightning className="w-5 h-5" />,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.2)',
    modules: [
      { name: 'Cloud Replica', description: 'Live visual representation of an application\'s entire cloud infrastructure.' },
      { name: 'Zero-Touch Deployment Engine', description: 'Converts application configuration into reproducible Kubernetes deployments.' },
      { name: 'Resilient Cloud Fabric', description: 'Automatically detects infrastructure failures and redistributes workloads.' },
      { name: 'Infrastructure Simulator', description: 'Test cloud architecture changes virtually before deploying them.' },
    ],
  },
  {
    id: 'data',
    title: 'Data Platforms',
    subtitle: 'PostgreSQL, Kafka streams & Redis caching',
    icon: <Database className="w-5 h-5" />,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.2)',
    modules: [
      { name: 'Event Universe', description: 'Real-time visualization of millions of streaming events as they move through a data system.' },
      { name: 'Temporal Data Engine', description: 'Travel backward through dataset history and reconstruct previous states.' },
      { name: 'Real-Time Signal Platform', description: 'Detect patterns and anomalies from continuously arriving data.' },
      { name: 'Data Flow Observatory', description: 'Visualize how data moves between services, databases, caches, and consumers.' },
    ],
  },
  {
    id: 'design',
    title: 'Product Design',
    subtitle: 'UX architecture, design systems & prototyping',
    icon: <Layers className="w-5 h-5" />,
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.06)',
    border: 'rgba(168,85,247,0.2)',
    modules: [
      { name: 'Adaptive Interface', description: 'UI that changes its information hierarchy based on the user\'s task and context.' },
      { name: 'Spatial Dashboard System', description: 'Replace conventional dashboards with a spatial information architecture.' },
      { name: 'Zero-Learning Interface', description: 'Product interface designed to guide users without tutorials or complex menus.' },
      { name: 'Generative Design System', description: 'A design system capable of automatically generating consistent product interfaces.' },
    ],
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    subtitle: 'Event-driven, custom APIs & microservices',
    icon: <Cpu className="w-5 h-5" />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.2)',
    modules: [
      { name: 'EventMesh', description: 'Connect applications through intelligent event-driven workflows.' },
      { name: 'Process Compiler', description: 'Convert a natural-language business process into executable workflows.' },
      { name: 'Autonomous Operations Grid', description: 'Detect an event, determine the required action, call APIs, and complete the workflow automatically.' },
      { name: 'API Orchestrator', description: 'Coordinate multiple APIs and microservices into a single intelligent business process.' },
    ],
  },
];

export const NexovNeuralNetwork: React.FC = () => {
  return (
    <div
      className="w-full rounded-3xl overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        boxShadow: '0 8px 32px rgba(79,70,229,0.07)',
      }}
    >
      {/* Rainbow gradient stripe */}
      <div
        className="h-1"
        style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #0ea5e9, #a855f7, #ec4899, #f59e0b)' }}
      />

      <div className="p-4 sm:p-6 md:p-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Integrated Systems Architecture
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Explore specialized product modules and platform capabilities engineered across our ecosystem.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold self-start sm:self-auto shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>24 ARCHITECTURAL MODULES</span>
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {DOMAINS.map(domain => {
            return (
              <div
                key={domain.id}
                className="rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
                style={{
                  background: domain.bg,
                  border: `1px solid ${domain.border}`,
                }}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: '#ffffff', border: `1px solid ${domain.border}`, color: domain.color }}
                    >
                      {domain.icon}
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase"
                      style={{ background: '#ffffff', color: domain.color, border: `1px solid ${domain.border}` }}
                    >
                      {domain.modules.length} MODULES
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-lg font-bold font-heading text-slate-900 mb-1">
                    {domain.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mb-5 leading-relaxed">
                    {domain.subtitle}
                  </p>

                  {/* Module Bullets */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-200/60">
                    {domain.modules.map((mod, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: domain.color }}
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-800 group-hover/item:text-indigo-600 transition-colors block">
                              {mod.name}
                            </span>
                            <p className="text-[11px] text-slate-600 leading-normal mt-0.5">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer bar */}
        <div
          className="mt-8 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ background: '#f8fafc', border: '1px solid #f1f5f9' }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>All modules can be deployed standalone or interconnected via secure event streams and APIs.</span>
          </div>
          <button
            className="text-xs font-heading font-bold text-indigo-600 uppercase tracking-wider hover:text-indigo-800 transition-colors shrink-0"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Architecture Consultation →
          </button>
        </div>
      </div>
    </div>
  );
};
