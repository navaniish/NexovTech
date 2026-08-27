import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#f8fafc] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Clean Brand Logo */}
      <div className="relative mb-8 flex flex-col items-center">
        <div className="w-16 h-16 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-indigo-600/10 border border-indigo-200 animate-spin" style={{ animationDuration: '10s' }} />
          <div className="w-7 h-7 bg-indigo-600 rounded-lg rotate-45 shadow-lg shadow-indigo-500/20" />
        </div>
        <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wider font-heading text-slate-900">
          NEXOV<span className="text-indigo-600">TECH</span>
        </h1>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-2">
          Software & AI Studio
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 space-y-3">
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden p-0.5 border border-slate-300/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-slate-500">
          <span>LOADING</span>
          <span className="text-indigo-600 font-bold">{progress}%</span>
        </div>
      </div>

      {/* Enter Action Button */}
      {isReady && (
        <button
          onClick={handleEnter}
          className="mt-10 px-8 py-3 bg-indigo-600 text-white font-heading font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-slate-900 shadow-lg shadow-indigo-500/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          ENTER PORTFOLIO
        </button>
      )}
    </div>
  );
};
