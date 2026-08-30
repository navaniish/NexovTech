import React from 'react';
import { Cpu, Code, Cloud, Zap, Database, ArrowRight } from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Cpu:      <Cpu      className="w-6 h-6" style={{ color: '#4f46e5' }} />,
  Code:     <Code     className="w-6 h-6" style={{ color: '#7c3aed' }} />,
  Cloud:    <Cloud    className="w-6 h-6" style={{ color: '#0ea5e9' }} />,
  Zap:      <Zap      className="w-6 h-6" style={{ color: '#a855f7' }} />,
  Database: <Database className="w-6 h-6" style={{ color: '#06b6d4' }} />,
  Sparkles: <Cpu      className="w-6 h-6" style={{ color: '#ec4899' }} />,
};

export const CapabilitiesSection: React.FC = () => (
  <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <span className="badge mb-4 sm:mb-5 inline-block">WHAT WE BUILD</span>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-4" style={{ color: '#0f172a' }}>
        Engineering Capabilities <br />
        <span className="text-gradient">Built for Scale.</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg" style={{ color: '#64748b' }}>
        We combine modern web architecture, ML integration, and cloud infrastructure to solve hard problems at scale.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {CAPABILITIES_DATA.map((cap, idx) => (
        <div key={cap.id} className="card-surface group p-6 sm:p-8 flex flex-col justify-between cursor-default">
          <div>
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <div
                className="p-3 sm:p-3.5 rounded-xl"
                style={{ background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.12)' }}
              >
                {iconMap[cap.icon] || <Cpu className="w-6 h-6" style={{ color: '#4f46e5' }} />}
              </div>
              <span className="text-[10px] font-mono font-bold" style={{ color: '#cbd5e1' }}>0{idx + 1}</span>
            </div>

            <span className="section-label block mb-1">{cap.category}</span>
            <h3
              className="text-lg sm:text-xl font-bold font-heading mt-1 mb-3 transition-colors group-hover:text-indigo-600"
              style={{ color: '#0f172a' }}
            >
              {cap.name}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>{cap.shortDesc}</p>
          </div>

          <div>
            <div
              className="space-y-2 mb-5 pt-4"
              style={{ borderTop: '1px solid #f1f5f9' }}
            >
              {cap.features.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#4f46e5' }} />
                  {feat}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest transition-all group-hover:translate-x-1 duration-200" style={{ color: '#4f46e5' }}>
              EXPLORE <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
