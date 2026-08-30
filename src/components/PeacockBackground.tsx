import React from 'react';

export const PeacockBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: '#f8fafc' }}>

      {/* ── Prominent Company Office Background Image ───────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25] transition-opacity duration-1000"
        style={{
          backgroundImage: 'url("/office.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(1.05) saturate(1.1) brightness(0.98)',
        }}
      />

      {/* ── Soft Tint Overlay for Perfect Contrast ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(248,250,252,0.65) 0%, rgba(248,250,252,0.50) 50%, rgba(248,250,252,0.70) 100%)',
        }}
      />

      {/* ── Peacock Luminous Aurora Blurs ────────────────────────────────── */}
      
      {/* 1. Deep Royal Sapphire & Peacock Teal Main Feather Hub (Top-Center) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-18%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1100px',
          height: '750px',
          background: `
            radial-gradient(ellipse 60% 50% at 50% 30%, rgba(13,148,136,0.15) 0%, transparent 70%),
            radial-gradient(circle 450px at 35% 45%, rgba(37,99,235,0.12) 0%, transparent 65%),
            radial-gradient(circle 400px at 65% 55%, rgba(124,58,237,0.10) 0%, transparent 65%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* 2. Emerald & Iridescent Cyan Plume Wave (Top-Right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          right: '-10%',
          width: '800px',
          height: '800px',
          background: `
            radial-gradient(circle at center, rgba(16,185,129,0.10) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* 3. Imperial Royal Blue & Deep Violet Feather Aura (Mid-Left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '42%',
          left: '-12%',
          width: '850px',
          height: '850px',
          background: `
            radial-gradient(circle at center, rgba(79,70,229,0.10) 0%, rgba(13,148,136,0.08) 45%, transparent 70%)
          `,
          filter: 'blur(90px)',
        }}
      />

      {/* 4. Golden Peacock Crown Accent (Mid-Right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '65%',
          right: '-8%',
          width: '750px',
          height: '750px',
          background: `
            radial-gradient(circle at center, rgba(245,158,11,0.08) 0%, rgba(124,58,237,0.08) 45%, transparent 70%)
          `,
          filter: 'blur(85px)',
        }}
      />

      {/* 5. Luminous Peacock Tail Flare (Bottom-Center) */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-15%',
          left: '30%',
          width: '900px',
          height: '700px',
          background: `
            radial-gradient(ellipse at center, rgba(13,148,136,0.12) 0%, rgba(37,99,235,0.08) 50%, transparent 75%)
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* ── Fluid Organic Peacock Wave Linework SVG ──────────── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="peacockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="peacockGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path
          d="M300,-50 C650,150 950,50 1480,220 C1480,450 1200,600 850,420 C500,240 250,500 -100,320 Z"
          fill="url(#peacockGrad1)"
          style={{ filter: 'blur(35px)' }}
        />

        <path
          d="M-100,450 C350,300 700,650 1100,500 C1450,370 1550,750 1250,900 C950,1050 400,800 -100,750 Z"
          fill="url(#peacockGrad2)"
          style={{ filter: 'blur(45px)' }}
        />

        <path
          d="M500,700 C900,600 1200,850 1550,750 C1550,1050 1100,1250 700,1100 C300,950 100,1150 -100,1050 Z"
          fill="url(#goldGrad)"
          style={{ filter: 'blur(50px)' }}
        />
      </svg>
    </div>
  );
};
