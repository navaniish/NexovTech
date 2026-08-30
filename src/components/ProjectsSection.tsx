import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Bot, Server, Activity, Glasses } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Bot:      <Bot      className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#4f46e5' }} />,
  Server:   <Server   className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#7c3aed' }} />,
  Activity: <Activity className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#0ea5e9' }} />,
  Glasses:  <Glasses  className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#ec4899' }} />,
};

interface Props { onContactClick: () => void; }

export const ProjectsSection: React.FC<Props> = ({ onContactClick }) => {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="badge mb-4 sm:mb-5 inline-block">CASE STUDIES</span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-4" style={{ color: '#0f172a' }}>
          Turning Ideas Into <span className="text-gradient">Reality.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg" style={{ color: '#64748b' }}>
          Real case studies of web platforms, AI workflows, and multi-cloud systems engineered by NexovTech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS_DATA.map(project => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="card-3d group relative p-6 sm:p-8 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <div
                  className="p-3 sm:p-3.5 rounded-2xl"
                  style={{ background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.12)' }}
                >
                  {iconMap[project.iconName] || <Bot className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#4f46e5' }} />}
                </div>
                <span
                  className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 sm:px-3 py-1 rounded-full"
                  style={{
                    background: project.status === 'Production' ? '#f0fdf4' : project.status === 'Beta' ? '#eff6ff' : '#faf5ff',
                    color:      project.status === 'Production' ? '#16a34a' : project.status === 'Beta' ? '#2563eb' : '#7c3aed',
                    border:     `1px solid ${project.status === 'Production' ? '#bbf7d0' : project.status === 'Beta' ? '#bfdbfe' : '#e9d5ff'}`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <span className="section-label block mb-1">{project.category}</span>
              <h3
                className="text-xl sm:text-2xl font-bold font-heading mt-1 mb-3 flex items-center gap-2 transition-colors group-hover:text-indigo-600"
                style={{ color: '#0f172a' }}
              >
                {project.name}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>
                {project.shortDescription}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] sm:text-[11px] font-mono rounded-md"
                    style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className="w-full py-3 font-heading font-bold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"
                style={{ background: '#f8fafc', color: '#4f46e5', border: '1px solid rgba(79,70,229,0.2)' }}
              >
                EXPLORE CASE STUDY <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CaseStudyModal project={selected} onClose={() => setSelected(null)} onContactClick={onContactClick} />
    </section>
  );
};
