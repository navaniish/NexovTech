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
  <footer
    className="border-t pt-16 pb-10 px-4 md:px-8"
    style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}
  >
    <div className="max-w-7xl mx-auto">

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12" style={{ borderBottom: '1px solid #f1f5f9' }}>

        {/* Brand — spans 5 cols */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shadow-md shadow-indigo-500/20 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-white flex items-center justify-center">
                <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl tracking-wide" style={{ color: '#0f172a' }}>
              NEXOV<span style={{ color: '#4f46e5' }}>TECH</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#64748b' }}>
            NexovTech creates high-performance web applications, practical AI integrations, and scalable cloud platforms for ambitious teams worldwide.
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
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#64748b' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#4f46e5';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,70,229,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#64748b';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e2e8f0';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation — 3 cols */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-5" style={{ color: '#4f46e5' }}>
            NAVIGATION
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="text-sm transition-colors duration-150 text-left"
                  style={{ color: '#64748b' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4f46e5')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — 4 cols */}
        <div className="md:col-span-4">
          <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-5" style={{ color: '#4f46e5' }}>
            GET IN TOUCH
          </h4>
          <div className="space-y-4">
            <a
              href="tel:+917075708980"
              className="flex items-center gap-2 text-sm font-mono font-semibold transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4f46e5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <Phone className="w-4 h-4 shrink-0" style={{ color: '#4f46e5' }} />
              +91 7075708980
            </a>
            <a
              href="mailto:contact@nexovtech.com"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4f46e5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <Mail className="w-4 h-4 shrink-0" style={{ color: '#4f46e5' }} />
              contact@nexovtech.com
            </a>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#64748b' }}>
              <MapPin className="w-4 h-4 shrink-0" style={{ color: '#4f46e5' }} />
              Global Distributed Team
            </div>

            {/* CTA */}
            <button
              onClick={() => onNavigate('contact')}
              className="mt-4 flex items-center gap-2 text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 px-4 py-2.5 rounded-xl"
              style={{
                background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(79,70,229,0.3)',
              }}
            >
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Compact Founder Showcase Badge (In Last) ───────────── */}
      <div className="my-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-left">
          {/* Founder Logo Avatar */}
          <div className="relative w-11 h-11 rounded-xl p-0.5 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shrink-0 shadow-sm">
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
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono" style={{ color: '#94a3b8' }}>
        <div>© {new Date().getFullYear()} NexovTech. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span style={{ color: '#4f46e5', fontWeight: 600 }}>Turning Complex Challenges Into Scalable Digital Products.</span>
          <span>·</span>
          <span>NexovTech Studio</span>
        </div>
      </div>
    </div>
  </footer>
);
