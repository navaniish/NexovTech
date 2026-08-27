import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { id: 'hero',         label: 'Home' },
    { id: 'capabilities', label: 'What We Build' },
    { id: 'projects',     label: 'Projects' },
    { id: 'technology',   label: 'Technology' },
    { id: 'labs',         label: 'Labs' },
    { id: 'about',        label: 'About' },
  ];

  const click = (id: string) => { onNavigate(id); setMobileOpen(false); };

  return (
    <header className="fixed top-0 left-0 right-0 z-[5000] px-4 md:px-8 pt-4">
      <div
        className="max-w-7xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(248,250,252,0.90)' : 'rgba(255,255,255,0.70)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(226,232,240,0.8)',
          boxShadow: scrolled
            ? '0 4px 24px rgba(79,70,229,0.08), 0 1px 4px rgba(15,23,42,0.06)'
            : '0 2px 8px rgba(15,23,42,0.04)',
        }}
      >
        {/* Logo */}
        <button onClick={() => click('hero')} className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl p-0.5 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shadow-sm shadow-indigo-500/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-[10px] overflow-hidden bg-white flex items-center justify-center">
              <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="font-heading font-bold text-lg tracking-wide" style={{ color: '#0f172a' }}>
            NEXOV<span style={{ color: '#4f46e5' }}>TECH</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5 px-2 py-1.5 rounded-xl"
          style={{ background: 'rgba(241,245,249,0.8)', border: '1px solid rgba(226,232,240,0.6)' }}
        >
          {navLinks.map(link => {
            const active = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => click(link.id)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200"
                style={{
                  color: active ? '#4f46e5' : '#64748b',
                  background: active ? '#ffffff' : 'transparent',
                  fontWeight: active ? '600' : '500',
                  boxShadow: active ? '0 1px 4px rgba(79,70,229,0.1)' : 'none',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => click('contact')}
            className="hidden sm:flex btn-primary !py-2 !px-4 !text-xs"
          >
            <span>WORK WITH US</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-colors"
            style={{ color: '#64748b', background: '#f1f5f9', border: '1px solid #e2e8f0' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-x-4 top-24 z-[4999] rounded-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            background: 'rgba(255,255,255,0.97)',
            border: '1px solid #e2e8f0',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(79,70,229,0.12), 0 4px 16px rgba(15,23,42,0.08)',
          }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => click(link.id)}
                className="text-left px-4 py-3 rounded-xl font-heading font-semibold text-sm transition-colors"
                style={{
                  color: activeSection === link.id ? '#4f46e5' : '#475569',
                  background: activeSection === link.id ? 'rgba(79,70,229,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => click('contact')}
              className="mt-3 btn-primary w-full justify-center"
            >
              Work With Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
