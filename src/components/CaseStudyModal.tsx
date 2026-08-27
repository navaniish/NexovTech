import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, BarChart3, Lightbulb } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';

interface Props { project: ProjectItem | null; onClose: () => void; onContactClick: () => void; }

export const CaseStudyModal: React.FC<Props> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-[7000] flex justify-end animate-in fade-in duration-200"
      style={{ background: 'rgba(15,23,42,0.35)', backdropFilter: 'blur(10px)' }}
    >
      <div
        className="relative w-full max-w-3xl h-full p-4 sm:p-6 md:p-10 overflow-y-auto flex flex-col justify-between"
        style={{
          background: '#ffffff',
          borderLeft: '1px solid #e2e8f0',
          boxShadow: '-20px 0 80px rgba(79,70,229,0.1), -4px 0 24px rgba(15,23,42,0.06)',
        }}
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="badge mb-2 inline-block text-[10px]">{project.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading" style={{ color: '#0f172a' }}>{project.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl transition-colors shrink-0 ml-2"
              style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0' }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <Block num="01" title="OVERVIEW" bg="#f8fafc" border="#e2e8f0">
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#475569' }}>{caseStudy.overview}</p>
          </Block>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5">
            <Block num="02" title="THE CHALLENGE" bg="#fff5f5" border="#fecaca">
              <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{caseStudy.problem}</p>
            </Block>
            <Block num="03" title="OUR SOLUTION" bg="#f0fdf4" border="#bbf7d0">
              <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{caseStudy.solution}</p>
            </Block>
          </div>

          <Block num="04" title="SYSTEM ARCHITECTURE" bg="#f5f3ff" border="#e9d5ff" icon={<Layers className="w-4 h-4" style={{ color: '#7c3aed' }} />}>
            <p className="text-xs mb-3 sm:mb-4" style={{ color: '#64748b' }}>{caseStudy.architecture.description}</p>
            <div className="flex flex-wrap items-center gap-2 p-2.5 sm:p-3 rounded-xl" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
              {caseStudy.architecture.nodes.map((node, i) => (
                <React.Fragment key={i}>
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold" style={{ background: 'rgba(79,70,229,0.08)', color: '#4f46e5', border: '1px solid rgba(79,70,229,0.15)' }}>
                    {node}
                  </div>
                  {i < caseStudy.architecture.nodes.length - 1 && <ArrowRight className="w-3 h-3 shrink-0" style={{ color: '#cbd5e1' }} />}
                </React.Fragment>
              ))}
            </div>
          </Block>

          <div className="mb-5">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: '#94a3b8' }}>
              <Cpu className="w-4 h-4" style={{ color: '#4f46e5' }} />
              <span style={{ color: '#0f172a' }}>05</span> TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {caseStudy.technologies.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-[11px] font-mono rounded-lg" style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: '#94a3b8' }}>
              <BarChart3 className="w-4 h-4" style={{ color: '#4f46e5' }} />
              <span style={{ color: '#0f172a' }}>06</span> KEY RESULTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="p-3.5 sm:p-4 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)', border: '1px solid rgba(79,70,229,0.15)' }}>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-gradient">{res.metric}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: '#64748b' }}>{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Block num="07" title="WHAT WE LEARNED" bg="#fffbeb" border="#fde68a" icon={<Lightbulb className="w-4 h-4" style={{ color: '#d97706' }} />}>
            <div className="space-y-2">
              {caseStudy.learnings.map((learn, i) => (
                <div key={i} className="flex items-start gap-2 text-xs" style={{ color: '#475569' }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4f46e5' }} />
                  {learn}
                </div>
              ))}
            </div>
          </Block>
        </div>

        <div className="pt-5 sm:pt-6 mt-5 sm:mt-6" style={{ borderTop: '1px solid #f1f5f9' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold font-heading" style={{ color: '#0f172a' }}>Facing a similar challenge?</h4>
              <p className="text-xs" style={{ color: '#64748b' }}>Let's build a solution tailored to your goals.</p>
            </div>
            <button onClick={() => { onClose(); onContactClick(); }} className="btn-primary w-full sm:w-auto justify-center">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Block: React.FC<{ num: string; title: string; bg: string; border: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ num, title, bg, border, icon, children }) => (
  <div className="p-4 sm:p-5 rounded-2xl mb-4 sm:mb-5" style={{ background: bg, border: `1px solid ${border}` }}>
    <h3 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-2.5 flex items-center gap-2" style={{ color: '#94a3b8' }}>
      {icon}
      <span style={{ color: '#0f172a' }}>{num}</span> {title}
    </h3>
    {children}
  </div>
);
