import React, { useState } from 'react';
import { LABS_DATA } from '../data/portfolioData';
import {
  BrainCircuit, Music, Code2, ShieldCheck,
  ArrowUpRight, GitBranch, Cpu, FlaskConical
} from 'lucide-react';

/* Per-lab colour identity + icon */
const labMeta: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode; pulse: string }> = {
  'lab-1': {
    color: '#7c3aed', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)',
    pulse: '#7c3aed',
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  'lab-2': {
    color: '#0ea5e9', bg: 'rgba(14,165,233,0.07)', border: 'rgba(14,165,233,0.18)',
    pulse: '#0ea5e9',
    icon: <Music className="w-6 h-6" />,
  },
  'lab-3': {
    color: '#f59e0b', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.18)',
    pulse: '#f59e0b',
    icon: <Code2 className="w-6 h-6" />,
  },
  'lab-4': {
    color: '#10b981', bg: 'rgba(16,185,129,0.07)', border: 'rgba(16,185,129,0.18)',
    pulse: '#10b981',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
};

const statusStyle = (status: string): { color: string; bg: string; border: string } => {
  if (status === 'Active Prototype') return { color: '#7c3aed', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.2)' };
  if (status === 'Experimental')     return { color: '#0ea5e9', bg: 'rgba(14,165,233,0.07)',  border: 'rgba(14,165,233,0.2)' };
  if (status === 'Research Paper')   return { color: '#f59e0b', bg: 'rgba(245,158,11,0.07)',  border: 'rgba(245,158,11,0.2)' };
  if (status === 'Beta Testing')     return { color: '#10b981', bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.2)' };
  return { color: '#64748b', bg: '#f8fafc', border: '#e2e8f0' };
};

export const LabsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="labs" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

      {/* ── Outer wrapper ─────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #faf5ff 0%, #f5f3ff 40%, #ede9fe 100%)',
          border: '1px solid rgba(124,58,237,0.15)',
          boxShadow: '0 8px 40px rgba(124,58,237,0.08), 0 2px 8px rgba(15,23,42,0.04)',
        }}
      >
        {/* Top gradient stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)' }}
        />

        {/* BG decoration blobs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 65%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
            filter: 'blur(20px)',
          }}
        />

        <div className="relative z-10 p-5 sm:p-8 md:p-12">

          {/* ── Header ───────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
                >
                  <FlaskConical className="w-4 h-4 sm:w-4.5 sm:h-4.5" style={{ color: '#7c3aed' }} />
                </div>
                <span className="badge text-[10px] sm:text-xs">NEXOV LABS</span>
              </div>
              <h2
                className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 sm:mb-5"
                style={{ color: '#0f172a' }}
              >
                Research &amp;{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Open Prototypes.
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#64748b' }}>
                Our internal research division — where we test emerging ideas, build open-source prototypes,
                and push the boundaries of what software can do.
              </p>
            </div>

            {/* Live stats */}
            <div
              className="flex justify-around gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl shrink-0"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,58,237,0.12)', backdropFilter: 'blur(10px)' }}
            >
              {[
                { val: '4',     label: 'ACTIVE LABS' },
                { val: '3',     label: 'OPEN SOURCE' },
                { val: '100%',  label: 'EXPLORATORY' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-xl sm:text-2xl font-bold font-heading"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono tracking-widest mt-0.5" style={{ color: '#94a3b8' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Lab Cards ─────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LABS_DATA.map(lab => {
              const meta   = labMeta[lab.id] || labMeta['lab-1'];
              const ss     = statusStyle(lab.status);
              const hovered = hoveredId === lab.id;

              return (
                <div
                  key={lab.id}
                  className="relative rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-default"
                  style={{
                    background: hovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    border: `1px solid ${hovered ? meta.border : 'rgba(255,255,255,0.8)'}`,
                    boxShadow: hovered
                      ? `0 12px 40px ${meta.bg}, 0 4px 16px rgba(15,23,42,0.06)`
                      : '0 2px 8px rgba(15,23,42,0.03)',
                    transform: hovered ? 'translateY(-3px)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredId(lab.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300"
                    style={{ background: hovered ? meta.color : 'transparent' }}
                  />

                  {/* Top row */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: hovered ? meta.bg : '#f8fafc',
                        border: `1px solid ${hovered ? meta.border : '#e2e8f0'}`,
                        color: meta.color,
                      }}
                    >
                      {meta.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Live pulse */}
                      <div className="relative w-2 h-2">
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ background: meta.color, opacity: 0.3, transform: 'scale(2)' }}
                        />
                        <div className="w-2 h-2 rounded-full" style={{ background: meta.color }} />
                      </div>
                      <span
                        className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: ss.bg, color: ss.color, border: `1px solid ${ss.border}` }}
                      >
                        {lab.status}
                      </span>
                    </div>
                  </div>

                  {/* Category + Title */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Cpu className="w-3 h-3" style={{ color: meta.color }} />
                      <span
                        className="text-[10px] font-mono font-bold tracking-widest uppercase"
                        style={{ color: meta.color }}
                      >
                        {lab.category}
                      </span>
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold font-heading mb-2 transition-colors duration-200"
                      style={{ color: hovered ? meta.color : '#0f172a' }}
                    >
                      {lab.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#64748b' }}>
                      {lab.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 mt-auto" style={{ borderTop: '1px solid #f1f5f9' }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {lab.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-mono rounded-lg transition-all duration-200"
                            style={{
                              background: hovered ? meta.bg : '#f8fafc',
                              color:      hovered ? meta.color : '#64748b',
                              border:     `1px solid ${hovered ? meta.border : '#e2e8f0'}`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Badge pill */}
                      <span
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl shrink-0"
                        style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
                      >
                        {lab.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA ────────────────────────────── */}
          <div
            className="mt-8 sm:mt-10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(124,58,237,0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}
              >
                <GitBranch className="w-5 h-5" style={{ color: '#7c3aed' }} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold font-heading mb-1" style={{ color: '#0f172a' }}>
                  Interested in collaborating on a prototype?
                </h4>
                <p className="text-xs sm:text-sm" style={{ color: '#64748b' }}>
                  Labs work is open to contributors, partners, and curious engineers.
                </p>
              </div>
            </div>
            <button
              className="btn-primary shrink-0 w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Involved <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
