import React, { useState } from 'react';
import { COMPANY_VALUES, TIMELINE_DATA } from '../data/portfolioData';
import {
  ShieldCheck, Compass, Code2, Feather, Target, Lightbulb,
  Users, Globe, Zap, ArrowRight, CheckCircle2, Quote, Mail, Cpu
} from 'lucide-react';

/* Value colour + icon identity */
const valueMeta: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  'Curiosity': {
    color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)',
    icon: <Compass className="w-5 h-5" />,
  },
  'Engineering Quality': {
    color: '#4f46e5', bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.18)',
    icon: <Code2 className="w-5 h-5" />,
  },
  'Simplicity': {
    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.18)',
    icon: <Feather className="w-5 h-5" />,
  },
  'Ownership': {
    color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.18)',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  'Practical Testing': {
    color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  'Real Impact': {
    color: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.18)',
    icon: <Target className="w-5 h-5" />,
  },
};

const timelineStatusStyle = (status: string) => {
  if (status === 'Completed')  return { color: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)' };
  if (status === 'Current')    return { color: '#4f46e5', bg: 'rgba(79,70,229,0.08)',   border: 'rgba(79,70,229,0.2)' };
  return                              { color: '#a855f7', bg: 'rgba(168,85,247,0.08)',  border: 'rgba(168,85,237,0.2)' };
};

export const AboutSection: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

      {/* ── Mission Block ─────────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16 p-5 sm:p-8 md:p-14"
        style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 50%, #ede9fe 100%)',
          border: '1px solid rgba(99,102,241,0.15)',
          boxShadow: '0 8px 40px rgba(79,70,229,0.08)',
        }}
      >
        {/* Top gradient stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #a855f7)' }}
        />

        {/* Decorative blob */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', filter: 'blur(20px)' }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Left: text */}
          <div>
            <span className="badge mb-4 sm:mb-5 inline-block">ABOUT NEXOVTECH</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 sm:mb-6" style={{ color: '#0f172a' }}>
              We Build Beyond{' '}
              <span className="text-gradient">the Obvious.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#475569' }}>
              NexovTech is an engineering studio dedicated to crafting digital software beyond the ordinary — web products and practical AI systems designed to endure, scale, and deliver lasting value for ambitious teams worldwide.
            </p>

            {/* Process pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {['Discover', 'Design', 'Build', 'Launch', 'Scale'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span
                    className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl font-semibold text-[11px] sm:text-xs"
                    style={
                      step === 'Build'
                        ? { background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff', fontWeight: 700 }
                        : { background: 'rgba(255,255,255,0.7)', color: '#64748b', border: '1px solid rgba(99,102,241,0.15)' }
                    }
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-3 h-3 shrink-0" style={{ color: '#cbd5e1' }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, val: '40+', label: 'Projects Shipped', color: '#4f46e5', bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.15)' },
              { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, val: '20+', label: 'Happy Clients', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.15)' },
              { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, val: '8+', label: 'Countries Served', color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.15)' },
              { icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />, val: '99.9%', label: 'Uptime Delivered', color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.15)' },
            ].map((s, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(79,70,229,0.06)' }}
              >
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center mb-2.5 sm:mb-3"
                  style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading mb-0.5" style={{ color: s.color }}>{s.val}</div>
                <div className="text-[11px] sm:text-xs" style={{ color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Founder Spotlight Card ───────────────────────── */}
      <div
        className="rounded-3xl p-6 sm:p-10 md:p-12 mb-12 sm:mb-16 relative overflow-hidden"
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 8px 32px rgba(79,70,229,0.06)',
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #4f46e5, #0ea5e9, #7c3aed)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Founder Avatar / Logo Crest — 4 cols */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-400 shadow-xl shadow-indigo-500/20 mb-5">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                <img src="/logo.jpeg" alt="Founder Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-mono font-bold shadow-md">
                FOUNDER &amp; CTO
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-1">
              Navaneeswar Daggupati
            </h3>
            <p className="text-xs font-mono text-indigo-600 font-semibold mb-4">
              Founder &amp; Lead Systems Architect
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/navaniish"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                title="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:contact@nexovtech.com"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                title="Email Founder"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Founder Bio & Philosophy — 8 cols */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="badge mb-3 inline-block">ENGINEERING LEADERSHIP</span>
              <h4 className="text-xl sm:text-3xl font-bold font-heading text-slate-900 mb-3">
                Crafting Enduring Systems with Human Precision.
              </h4>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-body">
                Navaneeswar founded NexovTech with a clear conviction: modern software should be fast, reliable, and fundamentally humanized. With hands-on expertise in full-stack architecture, machine learning integration, and cloud infrastructure, he oversees engineering execution across every client engagement.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 relative">
              <Quote className="w-8 h-8 text-indigo-300 absolute top-3 right-4 opacity-50 pointer-events-none" />
              <p className="text-xs sm:text-sm font-medium italic text-slate-800 leading-relaxed mb-2">
                "We don't believe in generic templates or artificial bloat. Every line of code, database schema, and interface layout is built with intention, speed, and real-world durability."
              </p>
              <div className="text-[11px] font-mono font-bold text-indigo-700">— Navaneeswar D.</div>
            </div>

            {/* Core Competencies */}
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                <span>LEADERSHIP TECHNICAL FOCUS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Architecture', 'LLM Agents & RAG', 'Cloud & Kubernetes', '3D WebGL Systems', 'Performance Engineering'].map((focus, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ───────────────────────────────────── */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center mb-10 sm:mb-12">
          <span className="badge mb-4 inline-block">OUR PRINCIPLES</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-2 sm:mb-3" style={{ color: '#0f172a' }}>
            The Values That Guide Us
          </h3>
          <p className="text-sm sm:text-base" style={{ color: '#64748b' }}>
            How we think, build, and partner with every client.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {COMPANY_VALUES.map((val, i) => {
            const meta = valueMeta[val.title] || { color: '#4f46e5', bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.18)', icon: <CheckCircle2 className="w-5 h-5" /> };
            const hovered = hoveredValue === val.title;
            return (
              <div
                key={i}
                className="relative rounded-2xl p-5 sm:p-7 transition-all duration-300 cursor-default"
                style={{
                  background: hovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  border: `1px solid ${hovered ? meta.border : '#f1f5f9'}`,
                  boxShadow: hovered ? `0 12px 40px ${meta.bg}, 0 4px 16px rgba(15,23,42,0.04)` : '0 2px 8px rgba(15,23,42,0.03)',
                  transform: hovered ? 'translateY(-4px)' : 'none',
                }}
                onMouseEnter={() => setHoveredValue(val.title)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300"
                  style={{ background: hovered ? meta.color : 'transparent' }}
                />

                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: hovered ? meta.bg : '#f8fafc',
                    border: `1px solid ${hovered ? meta.border : '#e2e8f0'}`,
                    color: meta.color,
                  }}
                >
                  {meta.icon}
                </div>

                <span
                  className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-1 transition-colors duration-200"
                  style={{ color: hovered ? meta.color : '#94a3b8' }}
                >
                  {val.principle}
                </span>
                <h4
                  className="text-base sm:text-lg font-bold font-heading mb-2 transition-colors duration-200"
                  style={{ color: hovered ? meta.color : '#0f172a' }}
                >
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Journey Timeline ──────────────────────────────── */}
      <div
        className="rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 24px rgba(79,70,229,0.06)',
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899, #f59e0b, #10b981)' }}
        />

        <div className="text-center mb-8 sm:mb-12">
          <span className="badge mb-4 inline-block">COMPANY MILESTONES</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading" style={{ color: '#0f172a' }}>
            The Journey of NexovTech
          </h3>
        </div>

        {/* Desktop horizontal timeline & Mobile vertical */}
        <div className="relative">

          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #e2e8f0, #c7d2fe, #e2e8f0, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {TIMELINE_DATA.map((m, idx) => {
              const ss = timelineStatusStyle(m.status);
              const isCurrent = m.status === 'Current';
              return (
                <div key={idx} className="flex flex-col items-center text-center p-3 rounded-2xl sm:p-0 bg-slate-50/50 sm:bg-transparent border sm:border-none border-slate-100">

                  {/* Circle node on the connector */}
                  <div
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center mb-4 sm:mb-5 shrink-0 transition-all duration-300"
                    style={{
                      background: isCurrent ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : ss.bg,
                      border: `2px solid ${isCurrent ? '#4f46e5' : ss.border}`,
                      boxShadow: isCurrent ? '0 8px 24px rgba(79,70,229,0.25)' : 'none',
                    }}
                  >
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: isCurrent ? '#fff' : ss.color }}
                    >
                      {m.stage}
                    </span>
                    {isCurrent && (
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                        style={{ background: '#4f46e5', boxShadow: '0 0 8px rgba(79,70,229,0.6)' }}
                      />
                    )}
                  </div>

                  {/* Status chip */}
                  <span
                    className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full mb-2.5"
                    style={{ background: ss.bg, color: ss.color, border: `1px solid ${ss.border}` }}
                  >
                    {m.status.toUpperCase()}
                  </span>

                  {/* Year */}
                  <span className="text-[10px] font-mono mb-1" style={{ color: '#94a3b8' }}>{m.year}</span>

                  {/* Title */}
                  <h4 className="text-sm font-bold font-heading mb-1.5" style={{ color: '#0f172a' }}>{m.title}</h4>

                  {/* Description */}
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{m.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
