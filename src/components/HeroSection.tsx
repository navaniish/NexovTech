import React from 'react';
import { ArrowRight, ChevronRight, Crown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onProjectsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onProjectsClick }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-24">

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
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Royal Crest Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-400/40 shadow-lg shadow-indigo-500/10 backdrop-blur-md mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 group hover:border-amber-400/80 transition-all max-w-[95vw]">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-400 via-indigo-600 to-purple-600 p-0.5 shadow-sm flex items-center justify-center shrink-0">
            <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
          <span className="text-[9px] sm:text-xs font-mono font-bold tracking-[0.12em] sm:tracking-[0.18em] uppercase text-slate-900 truncate">
            SOFTWARE ENGINEERING <span className="text-amber-600 font-extrabold">&amp;</span> AI STUDIO
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-7 px-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
          style={{ color: '#0f172a' }}
        >
          Turn Complex Challenges Into
          <br className="hidden sm:inline" />{' '}
          <span className="text-gradient">Scalable Digital Products.</span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-2xl text-xs sm:text-base md:text-xl mb-6 sm:mb-10 leading-relaxed px-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
          style={{ color: '#64748b' }}
        >
          We engineer high-performance web applications, practical AI systems, and cloud architecture for ambitious, world-class teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-16 w-full sm:w-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <button onClick={onExploreClick} className="btn-primary w-full sm:w-auto justify-center !py-3 !text-xs">
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onProjectsClick} className="btn-ghost w-full sm:w-auto justify-center !py-3 !text-xs">
            <span>View Case Studies</span>
            <ChevronRight className="w-4 h-4" style={{ color: '#4f46e5' }} />
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-3 gap-2 sm:gap-12 w-full max-w-lg mx-auto animate-in fade-in duration-500 delay-500 px-2"
        >
          {[
            { val: '40+',   label: 'PROJECTS' },
            { val: '99.9%', label: 'UPTIME' },
            { val: '100',   label: 'PERFORM' },
          ].map((s, i) => (
            <div key={i} className="text-center p-2 rounded-xl bg-white/60 sm:bg-transparent border border-slate-200/60 sm:border-none">
              <div className="text-lg sm:text-3xl font-bold font-heading text-gradient">{s.val}</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-wider mt-0.5 sm:mt-1 text-slate-500 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-10 sm:mt-16 flex items-center gap-3 sm:gap-4 animate-in fade-in duration-500 delay-700">
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
