import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-px bg-gradient-to-r from-purple-500/50 via-zinc-800 to-purple-500/20 origin-left"
      />
    </div>
  );
};
