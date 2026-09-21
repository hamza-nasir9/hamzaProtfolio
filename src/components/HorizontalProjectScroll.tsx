import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Briefcase } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { LineClipReveal } from './LineClipReveal';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalProjectScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(trackWidth - viewportWidth + 64);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true, // TRUE GSAP PINNING: Holds section frozen vertically
          scrub: 1, // 1:1 scroll conversion
          start: 'top top',
          end: () => `+=${Math.abs(getScrollAmount())}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050508] border-y border-zinc-800/80 overflow-hidden flex flex-col justify-between py-10 md:py-12 z-20"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Permanently Fixed Section Header inside Pinned Section */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between shrink-0 z-30 relative">
        <div className="space-y-1">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            // PINNED SHOWCASE (SCROLL TO EXPLORE)
          </span>
          <LineClipReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
              SELECTED PROJECTS
            </h2>
          </LineClipReveal>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-bold tracking-wider uppercase group"
          >
            <span>VIEW ALL PROJECTS →</span>
          </Link>
        </div>
      </div>

      {/* Pinned Horizontal Track Container */}
      <div className="w-full overflow-hidden my-auto py-4 z-20 relative">
        <div
          ref={trackRef}
          className="flex gap-8 pl-6 md:pl-12 w-max pr-16 will-change-transform"
        >
          {PROJECTS_DATA.map((project, index) => (
            <HorizontalCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Permanently Fixed Telemetry Bar at Bottom of Pinned Viewport */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 shrink-0 z-30 relative">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-ping" />
          <span>SCROLL DOWN TO ADVANCE HORIZONTALLY</span>
        </div>
        <div className="hidden sm:block text-zinc-600">
          [BAKREY CRM · CLIENT DELIVERIES · PERSONAL PROJECTS]
        </div>
      </div>
    </section>
  );
};

const HorizontalCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isClient = project.projectType === 'Client Project';

  return (
    <div
      data-cursor="view"
      data-cursor-text="EXPLORE"
      className="w-[85vw] sm:w-[480px] lg:w-[520px] shrink-0 group relative rounded-3xl overflow-hidden bg-zinc-900/90 border border-zinc-800/80 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between shadow-2xl"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          width={600}
          height={375}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 z-10 flex flex-wrap items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full backdrop-blur-md border text-[11px] font-mono font-bold tracking-wide flex items-center gap-1.5 ${
              isClient
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                : 'bg-purple-950/80 border-purple-500/40 text-purple-300'
            }`}
          >
            {isClient ? <Briefcase className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
            <span>{project.projectType}</span>
          </span>

          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
            {project.category}
          </span>
        </div>

        {/* Action Link Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 backdrop-blur-[3px]">
          <Link
            to={`/work/${project.slug}`}
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <Link to={`/work/${project.slug}`}>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight font-heading">
                {project.title}
              </h3>
            </Link>

            <div className="flex items-center gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans mb-4">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
          {project.tags.slice(0, 4).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-zinc-800/60 text-zinc-300 text-[10px] font-mono tracking-wide border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
