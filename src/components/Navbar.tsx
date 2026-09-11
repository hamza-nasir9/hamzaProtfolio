import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, MousePointer, Menu, X, ArrowUpRight, FileText, MessageSquare, Download } from 'lucide-react';

interface NavbarProps {
  cursorEnabled: boolean;
  onToggleCursor: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cursorEnabled,
  onToggleCursor,
  onOpenResume,
  soundEnabled,
  onToggleSound,
}) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context ignored
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#08080a]/80 backdrop-blur-md border-b border-zinc-800/80 py-4' : 'bg-transparent py-6'
        }`}
        style={{ WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            onClick={playClickSound}
            className="flex items-center gap-3 group"
          >
            <div className="h-9 w-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-mono font-bold text-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
              HN
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base md:text-lg block leading-none font-heading">
                HAMZA NASIR
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase block mt-1">
                Full-Stack & Product
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={playClickSound}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-purple-600 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 uppercase tracking-wider">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Download PDF Button (Instant Direct File Download) */}
            <a
              href="/assets/Hamza_Nasir_Resume.pdf"
              download="Hamza_Nasir_Resume.pdf"
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-mono font-bold transition-all cursor-pointer shadow-lg shadow-purple-600/20"
              title="Direct Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Preview Resume Modal Trigger */}
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] font-mono font-bold text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Preview Interactive Resume"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Preview CV</span>
            </button>

            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/923162013553"
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-500 text-[11px] font-mono font-bold text-emerald-300 hover:text-white transition-all cursor-pointer"
              title="Message Hamza on WhatsApp (+92 316-2013553)"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Custom Cursor Toggle */}
            <button
              onClick={() => {
                playClickSound();
                onToggleCursor();
              }}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                cursorEnabled
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white'
              }`}
              title={cursorEnabled ? 'Custom Cursor Enabled' : 'Custom Cursor Disabled'}
            >
              <MousePointer className="w-4 h-4" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white'
              }`}
              title={soundEnabled ? 'UI Sound Effects On' : 'UI Sound Effects Muted'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/assets/Hamza_Nasir_Resume.pdf"
              download="Hamza_Nasir_Resume.pdf"
              className="p-2 rounded-lg bg-purple-600 text-white text-xs font-mono font-bold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> PDF
            </a>

            <button
              onClick={() => {
                playClickSound();
                setMobileOpen(!mobileOpen);
              }}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#08080a]/95 backdrop-blur-xl pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
            style={{ WebkitBackdropFilter: 'blur(16px)' }}
          >
            <div className="space-y-6">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block border-b border-zinc-800 pb-2">
                // Navigation
              </span>
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      playClickSound();
                      setMobileOpen(false);
                    }}
                    className="flex items-center justify-between text-3xl font-bold tracking-tight text-white hover:text-purple-400 transition-colors py-2 border-b border-zinc-900 font-heading"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 text-zinc-600" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <a
                href="/assets/Hamza_Nasir_Resume.pdf"
                download="Hamza_Nasir_Resume.pdf"
                className="w-full py-3 bg-purple-600 text-white rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> DIRECT DOWNLOAD RESUME (PDF)
              </a>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" /> PREVIEW INTERACTIVE CV
              </button>

              <div className="text-center font-mono text-[11px] text-zinc-500 pt-2">
                Hamza Nasir © 2025 — All Rights Reserved
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
