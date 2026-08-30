import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { id: 'hero',         label: 'Home' },
    { id: 'about',        label: 'About' },
    { id: 'capabilities', label: 'What We Build' },
    { id: 'projects',     label: 'Projects' },
    { id: 'services',     label: 'Services' },
    { id: 'technology',   label: 'Technology' },
    { id: 'labs',         label: 'Labs' },
  ];

  const click = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[5000] px-2.5 sm:px-6 md:px-8 pt-2 sm:pt-4 pointer-events-none">
        <div
          className="max-w-7xl mx-auto rounded-2xl px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,232,240,0.9)',
            boxShadow: scrolled
              ? '0 8px 24px rgba(79,70,229,0.08), 0 2px 6px rgba(15,23,42,0.05)'
              : '0 2px 8px rgba(15,23,42,0.04)',
          }}
        >
          {/* Compact Mobile Logo */}
          <button onClick={() => click('hero')} className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl p-0.5 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shadow-sm shadow-indigo-500/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[9px] sm:rounded-[10px] overflow-hidden bg-white flex items-center justify-center">
                <img src="/logo.jpeg" alt="NexovTech Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-heading font-bold text-sm sm:text-lg tracking-tight text-slate-900">
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <button
                onClick={() => click('contact')}
                className="btn-primary !py-2 !px-4 !text-xs shrink-0"
              >
                <span>WORK WITH US</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Compact Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none"
              style={{
                color: '#475569',
                background: mobileOpen ? '#e2e8f0' : '#f1f5f9',
                border: '1px solid #cbd5e1',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-[4998] bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-200"
        />
      )}

      {/* Compact Mobile Navigation Drawer Sheet */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed top-16 inset-x-3 sm:inset-x-6 z-[5000] rounded-2xl p-4 sm:p-6 bg-white border border-slate-200 shadow-2xl shadow-indigo-500/20 overflow-hidden animate-in zoom-in-95 slide-in-from-top-3 duration-250"
        >
          {/* Top Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400" />

          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg overflow-hidden border border-indigo-200">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider">NAVIGATION</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              STUDIO ONLINE
            </span>
          </div>

          {/* Compact 2-Column Grid on Mobile */}
          <nav className="grid grid-cols-2 gap-1.5 mb-3">
            {navLinks.map(link => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => click(link.id)}
                  className="flex items-center justify-between text-left px-3 py-2 rounded-xl font-heading font-bold text-xs transition-all"
                  style={{
                    color: active ? '#4f46e5' : '#334155',
                    background: active ? 'rgba(79,70,229,0.08)' : '#f8fafc',
                    border: `1px solid ${active ? 'rgba(79,70,229,0.2)' : '#f1f5f9'}`,
                  }}
                >
                  <span className="truncate">{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 ml-1" />}
                </button>
              );
            })}
          </nav>

          {/* Compact Direct Contact & Work With Us Buttons */}
          <div className="pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href="tel:+917075708980"
              className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold text-slate-800 truncate"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>+91 7075708980</span>
            </a>

            <button
              onClick={() => click('contact')}
              className="btn-primary w-full justify-center !py-2 !px-3 !text-[11px]"
            >
              <span>WORK WITH US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
