import React from 'react';
import { Mail, MapPin, Activity, Globe, Share2, Code2, ArrowUpRight, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: 'hero',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'capabilities', label: 'What We Build' },
  { id: 'projects',     label: 'Projects' },
  { id: 'services',     label: 'Services' },
  { id: 'technology',   label: 'Technology' },
  { id: 'labs',         label: 'Labs' },
  { id: 'contact',      label: 'Contact' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="relative overflow-hidden bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 px-4 sm:px-6 md:px-8">
    
    {/* ── Background Design (Silver Waves & Golden Ribbon Arc from coverly) ── */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft silver-metallic gradient light */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-transparent blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-amber-100/30 via-teal-100/20 to-transparent blur-3xl" />
      
      {/* Golden ribbon horizon curve at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(245,158,11,0.15) 0%, rgba(99,102,241,0.08) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.2) 20%, rgba(245,158,11,0.6) 50%, rgba(6,182,212,0.3) 80%, transparent 100%)',
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">

      {/* ── Core Brand Design Header (Recreating coverly layout & vision statement) ── */}
      <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-indigo-50/30 border border-slate-200/90 shadow-sm backdrop-blur-md relative overflow-hidden">
        
        {/* Decorative Floating Pixel Cubes (from coverly) */}
        <div className="absolute top-4 right-6 sm:top-6 sm:right-10 flex items-center gap-1.5 opacity-80">
          <div className="w-3 h-3 rounded-[3px] bg-amber-400 shadow-sm shadow-amber-400/50 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 shadow-sm shadow-cyan-400/50 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-[2px] bg-purple-500 shadow-sm shadow-purple-500/50 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.4s' }} />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left: Brand Emblem + Identity */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-400 shadow-lg shadow-indigo-500/25 shrink-0">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900">
                  NEXOV<span style={{ color: '#4f46e5' }}>TECH</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wider">
                  STUDIO
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-500 tracking-wider uppercase mt-1">
                TECHNOLOGY FOR A BETTER TOMORROW
              </p>
            </div>
          </div>

          {/* Right: Signature Headline from coverly */}
          <div className="text-left lg:text-right">
            <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
              PEOPLE POWER A{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent font-extrabold">
                BRIGHTER
              </span>{' '}
              TOMORROW
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-body mt-1 max-w-md lg:ml-auto">
              Building scalable web applications, practical AI systems, and cloud architecture for ambitious teams worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">

        {/* Brand details — spans 5 cols */}
        <div className="md:col-span-5 space-y-5">
          <p className="text-sm leading-relaxed max-w-sm text-slate-600 font-body">
            NexovTech turns complex technical challenges into scalable, production-grade web applications, AI models, and cloud infrastructure.
          </p>

          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            SYSTEMS OPERATIONAL
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 pt-1">
            {[
              { href: 'https://github.com/navaniish',   icon: <Code2  className="w-4 h-4" />, label: 'GitHub'   },
              { href: 'https://twitter.com',  icon: <Share2 className="w-4 h-4" />, label: 'Twitter'  },
              { href: 'https://linkedin.com', icon: <Globe  className="w-4 h-4" />, label: 'LinkedIn' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation — 3 cols */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-5 text-indigo-600">
            NAVIGATION
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="text-sm transition-colors duration-150 text-left text-slate-600 hover:text-indigo-600"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — 4 cols */}
        <div className="md:col-span-4">
          <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-5 text-indigo-600">
            GET IN TOUCH
          </h4>
          <div className="space-y-4">
            <a
              href="tel:+917075708980"
              className="flex items-center gap-2 text-sm font-mono font-semibold transition-colors text-slate-600 hover:text-indigo-600"
            >
              <Phone className="w-4 h-4 shrink-0 text-indigo-600" />
              +91 7075708980
            </a>
            <a
              href="mailto:contact@nexovtech.com"
              className="flex items-center gap-2 text-sm transition-colors text-slate-600 hover:text-indigo-600"
            >
              <Mail className="w-4 h-4 shrink-0 text-indigo-600" />
              contact@nexovtech.com
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 shrink-0 text-indigo-600" />
              Global Distributed Team
            </div>

            {/* CTA button */}
            <button
              onClick={() => onNavigate('contact')}
              className="mt-4 flex items-center gap-2 text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 px-4 py-2.5 rounded-xl text-white shadow-md shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Compact Founder Showcase Badge ───────────── */}
      <div className="my-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-left">
          <div className="relative w-11 h-11 rounded-xl p-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-400 shrink-0 shadow-sm">
            <div className="w-full h-full rounded-[10px] overflow-hidden bg-slate-900 flex items-center justify-center">
              <img src="/logo.jpeg" alt="Navaneeswar Daggupati" className="w-full h-full object-cover" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h5 className="font-heading font-bold text-sm text-slate-900">Navaneeswar Daggupati</h5>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
                FOUNDER &amp; CTO
              </span>
            </div>
            <p className="text-xs text-slate-500 font-body mt-0.5">
              Engineering high-performance web products, practical AI systems &amp; cloud infrastructure.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/navaniish"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div>© {new Date().getFullYear()} NexovTech. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span className="text-indigo-600 font-semibold">Turning Complex Challenges Into Scalable Digital Products.</span>
          <span>·</span>
          <span>NexovTech Studio</span>
        </div>
      </div>
    </div>
  </footer>
);
