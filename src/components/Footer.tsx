import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Copy, Check, ArrowUp, Mail, Github, Linkedin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onShowToast?: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hn626309@gmail.com');
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-800/80 pt-20 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 border-b border-zinc-800/80 pb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-4">
            // NEXT STEPS & COLLABORATION
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] font-heading">
            HAVE A VISION? <br />
            LET'S BUILD IT.
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <span>INITIATE CONTACT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="https://wa.me/923162013553"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-emerald-950/80 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>hn626309@gmail.com</span>
              {copied ? <Check className="w-4 h-4 text-emerald-400 ml-2" /> : <Copy className="w-3.5 h-3.5 text-zinc-500 ml-2" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="font-bold text-white tracking-wider text-lg font-heading">HAMZA NASIR</div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
              Full-Stack Software Engineer & Digital Product Engineer. Crafting high-performance web systems with cinematic precision.
            </p>

            <div className="pt-2 space-y-1">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Karachi, Pakistan (PKT)</div>
              <div className="text-sm font-mono text-purple-300 font-medium">{time || '03:42 PM PKT'}</div>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>+92 316-2013553</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm font-mono text-zinc-300">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">/ Home</Link></li>
              <li><Link to="/work" className="hover:text-purple-400 transition-colors">/ Selected Work</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">/ Experience & Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">/ Engineering Capabilities</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">/ Contact Gateway</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Network</h3>
            <ul className="space-y-2 text-sm font-mono text-zinc-300">
              <li>
                <a href="https://github.com/hamza-nasir9/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <Github className="w-4 h-4 text-zinc-500" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hamzanasir093/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <Linkedin className="w-4 h-4 text-zinc-500" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Quick Box */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Direct Contact</h3>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <a
                href="mailto:hn626309@gmail.com"
                className="w-full py-2 px-3 bg-purple-600/10 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send an Email</span>
              </a>

              <a
                href="https://wa.me/923162013553"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 bg-emerald-950/60 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2021–2025 HAMZA NASIR. Engineered with precision.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for Freelance & Roles
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-purple-600 text-zinc-400 hover:text-white border border-zinc-800 transition-all cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
