import React from 'react';
import { Mail, MapPin, Activity, Globe, Share2, Code2, ArrowUpRight } from 'lucide-react';

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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14" style={{ borderBottom: '1px solid #f1f5f9' }}>

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
              { href: 'https://github.com',   icon: <Code2  className="w-4 h-4" />, label: 'GitHub'   },
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

      {/* Bottom bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono" style={{ color: '#94a3b8' }}>
        <div>© {new Date().getFullYear()} NexovTech. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span style={{ color: '#4f46e5', fontWeight: 600 }}>Building Software That Moves Ideas Forward.</span>
          <span>·</span>
          <span>NexovTech Studio</span>
        </div>
      </div>
    </div>
  </footer>
);
