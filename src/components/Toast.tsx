import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[120] flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900 border border-purple-500/50 text-white font-mono text-xs shadow-2xl backdrop-blur-xl"
        >
          <div className="p-1 rounded-full bg-purple-500/20 text-purple-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
