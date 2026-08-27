import React from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

const CATEGORY_META: Record<string, { color: string; bg: string; border: string; label: string }> = {
  Frontend: { color: '#0ea5e9', bg: 'rgba(14,165,233,0.07)',  border: 'rgba(14,165,233,0.18)', label: 'Frontend' },
  Backend:  { color: '#7c3aed', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)', label: 'Backend'  },
  AI:       { color: '#a855f7', bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.18)', label: 'AI & ML'  },
  Cloud:    { color: '#06b6d4', bg: 'rgba(6,182,212,0.07)',  border: 'rgba(6,182,212,0.18)',  label: 'Cloud'     },
  Data:     { color: '#ec4899', bg: 'rgba(236,72,153,0.07)', border: 'rgba(236,72,153,0.18)', label: 'Data'      },
};

const CATEGORIES = ['Frontend', 'Backend', 'AI', 'Cloud', 'Data'];

export const TechnologySection: React.FC = () => (
  <section id="technology" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
      <span className="badge mb-4 sm:mb-5 inline-block">TECHNOLOGY WALL</span>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-5" style={{ color: '#0f172a' }}>
        Technologies We <span className="text-gradient">Master.</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg" style={{ color: '#64748b' }}>
        Production-grade frameworks, battle-tested APIs, and infrastructure we use every day across real client projects.
      </p>
    </div>

    {/* Category groups */}
    <div className="space-y-8 sm:space-y-10">
      {CATEGORIES.map(cat => {
        const meta = CATEGORY_META[cat];
        const techs = TECH_STACK.filter(t => t.category === cat);
        const featured = techs.filter(t => t.featured);
        const standard = techs.filter(t => !t.featured);

        return (
          <div key={cat}>
            {/* Category heading row */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}` }}
              />
              <h3 className="text-xs sm:text-sm font-heading font-bold tracking-wide" style={{ color: '#0f172a' }}>
                {meta.label}
              </h3>
              <div className="flex-1 h-px" style={{ background: '#f1f5f9' }} />
              <span className="text-[9px] sm:text-[10px] font-mono shrink-0" style={{ color: '#cbd5e1' }}>
                {techs.length} TECHNOLOGIES
              </span>
            </div>

            {/* Tech cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {[...featured, ...standard].map((tech, i) => (
                <div
                  key={i}
                  className="relative rounded-xl p-3.5 sm:p-5 flex flex-col justify-between gap-2.5 sm:gap-3 transition-all duration-250 cursor-default"
                  style={{
                    background: tech.featured ? meta.bg : '#ffffff',
                    border: `1px solid ${tech.featured ? meta.border : '#f1f5f9'}`,
                    boxShadow: tech.featured
                      ? `0 4px 16px ${meta.bg}`
                      : '0 1px 4px rgba(15,23,42,0.03)',
                  }}
                >
                  {/* Featured dot */}
                  {tech.featured && (
                    <div
                      className="absolute top-3 right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                      style={{ background: meta.color, boxShadow: `0 0 6px ${meta.color}` }}
                    />
                  )}

                  <h4
                    className="text-xs sm:text-sm font-bold font-heading pr-2"
                    style={{ color: tech.featured ? meta.color : '#334155' }}
                  >
                    {tech.name}
                  </h4>

                  {/* Progress bar */}
                  <div>
                    <div className="progress-bar mb-1">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${tech.proficiency}%`,
                          background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`,
                          boxShadow: tech.featured ? `0 0 6px ${meta.color}55` : 'none',
                        }}
                      />
                    </div>
                    <div className="text-[9px] font-mono text-right" style={{ color: '#cbd5e1' }}>
                      {tech.proficiency}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div
      className="mt-10 sm:mt-14 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: 'linear-gradient(135deg,#f0f4ff,#f5f3ff)',
        border: '1px solid rgba(99,102,241,0.15)',
        boxShadow: '0 4px 20px rgba(79,70,229,0.07)',
      }}
    >
      <div>
        <h4 className="text-lg sm:text-xl font-bold font-heading mb-1" style={{ color: '#0f172a' }}>
          Need a specific technology?
        </h4>
        <p className="text-xs sm:text-sm" style={{ color: '#64748b' }}>
          Our team adapts to your stack or recommends the best fit for your project goals.
        </p>
      </div>
      <button
        className="btn-primary shrink-0 w-full sm:w-auto justify-center"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Discuss Your Stack <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);
