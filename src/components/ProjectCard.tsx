import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Briefcase, Sparkles, Clock } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Scroll Parallax Image Depth inside Card Frame
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const isClient = project.projectType === 'Client Project';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        data-cursor="view"
        data-cursor-text="EXPLORE"
        className="group relative rounded-3xl overflow-hidden bg-zinc-900/80 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between h-full shadow-xl"
      >
        {/* Project Thumbnail Image Container with Parallax Depth */}
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src={project.image}
            alt={`${project.title} — ${project.category} developed by Hamza Nasir`}
            width={600}
            height={375}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-120 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
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

            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay Action */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
            <Link
              to={`/work/${project.slug}`}
              className="px-5 py-2.5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-xl hover:bg-purple-500 transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card Content Footer */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <Link to={`/work/${project.slug}`}>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight font-heading">
                  {project.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 shrink-0">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-purple-300 hover:text-white transition-colors"
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : project.statusNote ? (
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-[10px] font-mono text-amber-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.statusNote}</span>
                  </span>
                ) : null}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-6 font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-zinc-800/40 text-zinc-400 text-[10px] font-mono tracking-wide border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
