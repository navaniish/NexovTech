import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onProjectsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onProjectsClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 py-16 sm:py-24">

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90vw',
          maxWidth: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-16 sm:pt-24">

        {/* Badge */}
        <div className="badge mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-[10px] sm:text-xs">
          <Zap className="w-3 h-3" />
          SOFTWARE ENGINEERING &amp; AI STUDIO
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.08] mb-5 sm:mb-7 px-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
          style={{ color: '#0f172a' }}
        >
          Building Software That
          <br />
          <span className="text-gradient">Moves Ideas Forward.</span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-2xl text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed px-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
          style={{ color: '#64748b' }}
        >
          We engineer high-performance web applications, practical AI systems, and cloud architecture for ambitious, world-class teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-16 w-full sm:w-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <button onClick={onExploreClick} className="btn-primary w-full sm:w-auto justify-center">
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onProjectsClick} className="btn-ghost w-full sm:w-auto justify-center">
            <span>View Case Studies</span>
            <ChevronRight className="w-4 h-4" style={{ color: '#4f46e5' }} />
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-3 gap-4 sm:gap-12 w-full max-w-lg mx-auto animate-in fade-in duration-500 delay-500 px-2"
        >
          {[
            { val: '40+',   label: 'PROJECTS SHIPPED' },
            { val: '99.9%', label: 'UPTIME SLA' },
            { val: '100',   label: 'PERF SCORE' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-3xl font-bold font-heading text-gradient">{s.val}</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest mt-1" style={{ color: '#94a3b8' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-12 sm:mt-16 flex items-center gap-3 sm:gap-4 animate-in fade-in duration-500 delay-700">
          <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.3))' }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#4f46e5', boxShadow: '0 0 10px rgba(79,70,229,0.5)' }}
          />
          <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, rgba(79,70,229,0.3), transparent)' }} />
        </div>
      </div>
    </section>
  );
};
