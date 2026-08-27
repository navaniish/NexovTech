import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import {
  Rocket, Globe, BrainCircuit, CloudLightning, Workflow, Palette,
  CheckCircle2, ArrowRight
} from 'lucide-react';

const iconMap: Record<string, { icon: React.ReactElement<{ className?: string }>; color: string; bg: string; border: string }> = {
  Rocket: {
    icon: <Rocket className="w-6 h-6" />,
    color: '#4f46e5', bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.18)',
  },
  Globe: {
    icon: <Globe className="w-6 h-6" />,
    color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)',
  },
  BrainCircuit: {
    icon: <BrainCircuit className="w-6 h-6" />,
    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.18)',
  },
  CloudLightning: {
    icon: <CloudLightning className="w-6 h-6" />,
    color: '#06b6d4', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.18)',
  },
  Workflow: {
    icon: <Workflow className="w-6 h-6" />,
    color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.18)',
  },
  Palette: {
    icon: <Palette className="w-6 h-6" />,
    color: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.18)',
  },
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

      {/* ── Section Header ──────────────────────────────── */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
        <span className="badge mb-4 sm:mb-5 inline-block">OUR SERVICES</span>
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-5"
          style={{ color: '#0f172a' }}
        >
          End-to-End Software{' '}
          <span className="text-gradient">Services.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#64748b' }}>
          Six disciplines — from product ideation and design systems to cloud
          deployment and AI integration. We cover the full stack.
        </p>
      </div>

      {/* ── Featured Hero Card (first service) ─────────── */}
      {SERVICES_DATA.slice(0, 1).map(service => {
        const meta = iconMap[service.icon] || iconMap['Rocket'];
        return (
          <div
            key={service.id}
            className="relative mb-6 rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 60%, #ede9fe 100%)',
              border: '1px solid rgba(79,70,229,0.15)',
              boxShadow: '0 8px 40px rgba(79,70,229,0.1), 0 2px 8px rgba(15,23,42,0.05)',
            }}
          >
            {/* Top gradient stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #a855f7)' }}
            />

            <div className="p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left */}
              <div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6"
                  style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color }}
                >
                  {React.cloneElement(meta.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
                </div>
                <span className="section-label block mb-2">FLAGSHIP SERVICE</span>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-3 sm:mb-4"
                  style={{ color: '#0f172a' }}
                >
                  {service.title}
                </h3>
                <p className="text-xs sm:text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
                  {service.description}
                </p>
                <button
                  className="btn-primary !text-xs w-full sm:w-auto justify-center"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right — capabilities */}
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(79,70,229,0.1)' }}
              >
                <p className="text-xs font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: '#94a3b8' }}>
                  WHAT'S INCLUDED
                </p>
                <div className="space-y-3">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: meta.color }} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium" style={{ color: '#334155' }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── 5-card grid (remaining services) ───────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SERVICES_DATA.slice(1).map((service, index) => {
          const meta = iconMap[service.icon] || iconMap['Rocket'];
          return (
            <div
              key={service.id}
              className="card-surface group p-6 sm:p-7 flex flex-col justify-between"
            >
              {/* Top row: icon + index */}
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color }}
                  >
                    {React.cloneElement(meta.icon, { className: 'w-5 h-5' })}
                  </div>
                  <span
                    className="text-[11px] font-mono font-bold"
                    style={{ color: '#cbd5e1' }}
                  >
                    0{index + 2}
                  </span>
                </div>

                <span
                  className="text-[10px] font-mono font-semibold tracking-widest uppercase"
                  style={{ color: '#94a3b8' }}
                >
                  {service.id.replace(/-/g, ' ').toUpperCase()}
                </span>

                <h3
                  className="text-base sm:text-lg font-bold font-heading mt-1 mb-3 group-hover:text-indigo-600 transition-colors duration-200"
                  style={{ color: '#0f172a' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>
                  {service.description}
                </p>
              </div>

              {/* Capabilities list */}
              <div>
                <div
                  className="space-y-2 pt-4 mb-5"
                  style={{ borderTop: '1px solid #f1f5f9' }}
                >
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:bg-indigo-600 bg-slate-300 transition-colors duration-200"
                      />
                      {cap}
                    </div>
                  ))}
                </div>

                {/* Learn more */}
                <div
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase group-hover:translate-x-1 group-hover:text-indigo-600 transition-all duration-200 text-slate-400"
                >
                  LEARN MORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom CTA strip ────────────────────────────── */}
      <div
        className="mt-8 sm:mt-10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(79,70,229,0.06)',
        }}
      >
        <div>
          <h4 className="text-lg sm:text-xl font-bold font-heading mb-1" style={{ color: '#0f172a' }}>
            Not sure which service fits your needs?
          </h4>
          <p className="text-xs sm:text-sm" style={{ color: '#64748b' }}>
            We'll scope your project in a free 30-minute call and propose the right approach.
          </p>
        </div>
        <button
          className="btn-primary shrink-0 w-full sm:w-auto justify-center"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
