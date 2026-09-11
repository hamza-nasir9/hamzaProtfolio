import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string; // e.g. "1.5", "03", "06", "100%"
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Extract numeric match
    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[0]);
    const prefix = value.substring(0, match.index || 0);
    const suffix = value.substring((match.index || 0) + match[0].length);
    const isDecimal = value.includes('.');
    const isPadded = value.startsWith('0') && value.length === 2;

    let startTime: number | null = null;
    const duration = 1200; // 1.2s count up

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const current = targetNumber * easeOutQuad;

      let formattedNumber = isDecimal ? current.toFixed(1) : Math.floor(current).toString();
      if (isPadded && Math.floor(current) < 10) {
        formattedNumber = '0' + formattedNumber;
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
