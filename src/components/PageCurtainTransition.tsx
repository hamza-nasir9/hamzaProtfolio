import React from 'react';
import { motion } from 'framer-motion';

interface PageCurtainTransitionProps {
  children: React.ReactNode;
}

export const PageCurtainTransition: React.FC<PageCurtainTransitionProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Entry / Exit Curtain Overlay */}
      <motion.div
        key="curtain-enter"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'top' }}
        className="fixed inset-0 z-[99] bg-[#08080a] border-b-2 border-purple-500 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
