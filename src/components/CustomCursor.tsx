import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices
    const touchQuery = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(touchQuery);
  }, []);

  useEffect(() => {
    if (!enabled || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor], a, button, input, textarea, select, [role="button"]');
      if (interactive) {
        const customType = interactive.getAttribute('data-cursor');
        const customLabel = interactive.getAttribute('data-cursor-text');

        if (customType === 'view') {
          setCursorState('project');
          setCursorText(customLabel || 'VIEW');
        } else if (customType === 'drag') {
          setCursorState('drag');
          setCursorText('SWIPE');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled, isVisible, isTouchDevice]);

  if (!enabled || !isVisible || isTouchDevice) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-purple-400 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: cursorState === 'default' ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 8, height: 8 }}
      />

      {/* Outer Magnetic Ring / Expanded Label Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/10 backdrop-blur-[2px]"
        animate={{
          x: position.x - (cursorState === 'project' ? 40 : cursorState === 'hover' ? 24 : 16),
          y: position.y - (cursorState === 'project' ? 40 : cursorState === 'hover' ? 24 : 16),
          width: cursorState === 'project' ? 80 : cursorState === 'hover' ? 48 : 32,
          height: cursorState === 'project' ? 80 : cursorState === 'hover' ? 48 : 32,
          borderColor: cursorState === 'project' ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.4)',
          backgroundColor: cursorState === 'project' ? 'rgba(168, 85, 247, 0.25)' : 'rgba(168, 85, 247, 0.08)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white drop-shadow">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
