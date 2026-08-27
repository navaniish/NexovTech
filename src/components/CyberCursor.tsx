import React, { useEffect, useState } from 'react';

export const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'drag' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect fine pointer support (e.g., mouse)
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [data-cursor]');
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (cursorAttr === 'view' || cursorAttr === 'drag') {
        setCursorState(cursorAttr);
      } else if (interactive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for outer reticle
    const updateTrailer = () => {
      setTrailerPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      animFrame = requestAnimationFrame(updateTrailer);
    };
    animFrame = requestAnimationFrame(updateTrailer);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-[#00f0ff] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00f0ff]"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />

      {/* Outer Cyber Reticle */}
      <div
        className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00f0ff]/50 transition-all duration-150 flex items-center justify-center ${
          cursorState === 'hover'
            ? 'w-12 h-12 border-[#00f0ff] bg-[#00f0ff]/10 scale-110'
            : cursorState === 'view'
            ? 'w-16 h-16 border-[#7000ff] bg-[#7000ff]/20 scale-125'
            : 'w-8 h-8'
        }`}
        style={{ transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0)` }}
      >
        {cursorState === 'view' && (
          <span className="text-[9px] font-bold tracking-widest text-[#00f0ff] uppercase">VIEW</span>
        )}
      </div>
    </>
  );
};
