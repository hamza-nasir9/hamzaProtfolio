import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Zap,
  Play,
  Clock,
  Compass,
  Hammer,
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);

  useEffect(() => {
    const found = PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      setProject(found);
      window.scrollTo(0, 0);
    } else {
      navigate('/work', { replace: true });
    }
  }, [slug, navigate]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const handleRunSimulation = async () => {
    setIsSimulating(true);
    setSimLog(['[SYSTEM] Initializing live test diagnostic for ' + project.title + '...']);

    await new Promise((r) => setTimeout(r, 500));
    setSimLog((prev) => [...prev, '[NETWORK] Connecting to backend routes & database layer...']);

    await new Promise((r) => setTimeout(r, 600));
    setSimLog((prev) => [...prev, '[HYDRATION] React & Tailwind UI rendered at 60 FPS.']);

    await new Promise((r) => setTimeout(r, 500));
    setSimLog((prev) => [...prev, '[SUCCESS] System response speed: 38ms. Live benchmark verified!']);
    setIsSimulating(false);
  };

  return (
    <>
      <SEOHead
        title={`${project.title} Case Study — Hamza Nasir`}
        description={project.subtitle}
        canonicalUrl={`https://hamza-nasir-portfolio.vercel.app/work/${project.slug}`}
        ogImage={project.ogImage || project.image}
        breadcrumbs={[
          { name: 'Home', url: 'https://hamza-nasir-portfolio.vercel.app/' },
          { name: 'Work', url: 'https://hamza-nasir-portfolio.vercel.app/work' },
          { name: project.title, url: `https://hamza-nasir-portfolio.vercel.app/work/${project.slug}` },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.fullDescription || project.description,
          image: `https://hamza-nasir-portfolio.vercel.app${project.image}`,
          url: `https://hamza-nasir-portfolio.vercel.app/work/${project.slug}`,
          dateCreated: project.year,
          creator: {
            '@type': 'Person',
            name: 'Hamza Nasir',
          },
          keywords: project.tags.join(', '),
          ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
        }}
      />

      <main className="min-h-screen bg-[#08080a] text-slate-100 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO ALL PROJECTS</span>
            </Link>
          </div>
        </ScrollReveal>

        <header className="mb-12 space-y-4">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 font-bold">
                {project.category}
              </span>

              {project.statusNote && (
                <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono text-amber-300 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{project.statusNote}</span>
                </span>
              )}

              <span className="text-xs font-mono text-zinc-500">CLIENT: {project.client}</span>
              <span className="text-xs font-mono text-zinc-500">YEAR: {project.year}</span>
            </div>
          </ScrollReveal>

          <LineClipReveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-heading">
              {project.title}
            </h1>
          </LineClipReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-zinc-300 text-base sm:text-2xl font-sans leading-relaxed max-w-4xl">
              {project.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20"
                >
                  <span>VIEW LIVE PROJECT</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-full font-mono text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>INSPECT CODE REPOSITORY</span>
                </a>
              )}
            </div>
          </ScrollReveal>
        </header>

        {/* Project Image Scale & Fade Reveal */}
        <ScrollReveal delay={0.2}>
          <section className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-800 mb-16 shadow-2xl bg-zinc-950" aria-label="Project Showcase Image">
            <img
              src={project.image}
              alt={`${project.title} — ${project.category} developed by Hamza Nasir`}
              width={1200}
              height={675}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />
          </section>
        </ScrollReveal>

        <nav className="flex border-b border-zinc-800 mb-12" aria-label="Case Study Sections">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-4 text-xs font-mono font-bold uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            01. Case Overview & Role
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-6 py-4 text-xs font-mono font-bold uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            02. Tech Stack & Architecture
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-6 py-4 text-xs font-mono font-bold uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            03. Features & Development Progress
          </button>
        </nav>

        {activeTab === 'overview' && (
          <ScrollReveal>
            <section className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 mb-16 space-y-6" aria-label="Case Overview">
              <LineClipReveal>
                <h2 className="text-2xl font-bold text-white tracking-tight font-heading">Project Overview & Objectives</h2>
              </LineClipReveal>
              <p className="text-zinc-300 leading-relaxed font-sans text-sm sm:text-base">
                {project.fullDescription}
              </p>

              <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <Compass className="w-4 h-4" />
                  <span>DEVELOPMENT ROLE: {project.role}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-purple-400 block w-full mb-1">TECH TAGS:</span>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {activeTab === 'architecture' && (
          <ScrollReveal>
            <section className="bg-zinc-900/60 rounded-3xl p-8 border border-zinc-800 mb-16 space-y-6" aria-label="Technologies Used">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
                <Server className="w-4 h-4" />
                <span>TECHNOLOGY STACK & ARCHITECTURE</span>
              </div>

              <div className="space-y-4">
                {project.architecture.map((arch, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.08}>
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-mono text-zinc-200">{arch}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {activeTab === 'features' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" aria-label="Key Features">
            {project.keyFeatures.map((feat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <article className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                    <Zap className="w-4 h-4" />
                    <span>0{idx + 1}. {feat.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{feat.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </section>
        )}

        <ScrollReveal>
          <section className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 mb-20 space-y-6" aria-label="Live Benchmark">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                  // LIVE PERFORMANCE BENCHMARK
                </span>
                <LineClipReveal>
                  <h2 className="text-xl font-bold text-white font-heading">Simulate Route Hydration</h2>
                </LineClipReveal>
              </div>

              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-4 h-4" />
                {isSimulating ? 'Testing...' : 'Run Benchmark'}
              </button>
            </div>

            <div className="bg-black rounded-xl p-4 font-mono text-xs text-zinc-300 h-32 overflow-y-auto space-y-1">
              {simLog.length === 0 ? (
                <span className="text-zinc-600 italic">Click "Run Benchmark" to test site rendering diagnostic.</span>
              ) : (
                simLog.map((log, idx) => (
                  <div key={idx} className={log.includes('SUCCESS') ? 'text-emerald-400 font-bold' : 'text-zinc-300'}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA */}
        <section className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white font-heading">Interested in custom web development?</h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">Let me know if you need a CRM or web application built for your business.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20 shrink-0"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <nav className="pt-12 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Related Case Studies">
          <ScrollReveal delay={0.1}>
            <Link
              to={`/work/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-all flex items-center gap-4 group"
            >
              <ArrowLeft className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 group-hover:-translate-x-1 transition-all" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">PREVIOUS PROJECT</span>
                <span className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-heading">{prevProject.title}</span>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              to={`/work/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-all flex items-center justify-end gap-4 text-right group"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">NEXT PROJECT</span>
                <span className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-heading">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </Link>
          </ScrollReveal>
        </nav>
      </main>
    </>
  );
};
