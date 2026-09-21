import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';
import { ScrollReveal } from '../components/ScrollReveal';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 Page Not Found — Hamza Nasir Portfolio"
        description="The page you are looking for does not exist or has been moved. Return to Hamza Nasir's portfolio homepage."
        canonicalUrl="https://hamzanasir.vercel.app/404"
      />

      <main className="min-h-screen bg-[#08080a] text-slate-100 flex items-center justify-center px-6 md:px-12 py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
              <span>ERROR 404 // ROUTE NOT FOUND</span>
            </div>
          </ScrollReveal>

          <LineClipReveal delay={0.15}>
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white font-heading">
              404
            </h1>
          </LineClipReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-zinc-400 text-base sm:text-lg font-sans leading-relaxed max-w-md mx-auto">
              The page or route you requested does not exist or may have been moved. Return home or explore selected work below.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/"
                className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20"
              >
                <Home className="w-4 h-4" />
                <span>RETURN HOME</span>
              </Link>

              <Link
                to="/work"
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>EXPLORE WORK</span>
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>CONTACT HAMZA</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
};
