import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Initializing Core Modules...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const phases = [
      { threshold: 15, text: 'Initializing Core Motion Engine...' },
      { threshold: 35, text: 'Loading WebGL Shaders & Canvas Pipelines...' },
      { threshold: 60, text: 'Verifying SMTP Communications for hn626309@gmail.com...' },
      { threshold: 85, text: 'Syncing Asset Dependencies...' },
      { threshold: 100, text: 'System Operational — Welcome.' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 2;
        const currentPhase = phases.find((p) => next <= p.threshold);
        if (currentPhase) {
          setPhase(currentPhase.text);
        }
        return next > 100 ? 100 : next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070709] p-8 md:p-16 text-white overflow-hidden select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>HAMZA NASIR // DIGITAL SYSTEMS</span>
            </div>
            <div>EST. 2021</div>
          </div>

          {/* Middle Content */}
          <div className="my-auto max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 text-purple-400 font-mono text-sm mb-4">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM BOOTSTRAP</span>
            </div>

            {/* Flat Solid Typography — NO GRADIENT */}
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8">
              HAMZA NASIR
            </h1>

            <div className="space-y-3">
              <div className="flex justify-between items-end font-mono text-xs md:text-sm">
                <span className="text-zinc-400">{phase}</span>
                <span className="text-purple-400 font-bold text-2xl md:text-4xl">
                  {progress}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-500" />
              <span>SMTP HANDSHAKE: hn626309@gmail.com</span>
            </div>
            <button
              onClick={() => {
                setIsDone(true);
                onComplete();
              }}
              className="text-zinc-400 hover:text-white underline cursor-pointer transition-colors"
            >
              SKIP INTRO [ESC]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
