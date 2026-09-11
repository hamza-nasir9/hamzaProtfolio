import React from 'react';
import { motion } from 'framer-motion';

interface LineClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const LineClipReveal: React.FC<LineClipRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1], // Custom Awwwards power4.out cubic-bezier
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
