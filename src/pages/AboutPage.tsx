import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Server, Terminal, ArrowUpRight, Award, CheckCircle2, Compass, Layout, Code, Rocket } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'frontend' | 'backend' | 'motion' | 'tools'>('frontend');

  const timelineEvents = [
    {
      year: '2024 — PRESENT',
      role: 'Frontend & Full-Stack Developer',
      company: 'Hamza Nasir Engineering (Consulting)',
      desc: 'Building responsive Next.js web applications, custom news publishing platforms, and digital agency client portals. Delivering full lifecycle frontend & backend engineering.',
    },
    {
      year: '2023 — 2024',
      role: 'Frontend & Creative Developer',
      company: 'Grovia & Digital Projects',
      desc: 'Led creative frontend development for digital clients, building smooth WebGL shader experiences, Three.js 3D viewers, and GSAP animation engines.',
    },
    {
      year: '2022 — 2023',
      role: 'PHP & Full-Stack Software Developer',
      company: 'Pulse Media Platform',
      desc: 'Engineered PHP 8/Laravel REST endpoints, MySQL database schemas, and dynamic publishing dashboards for news editors.',
    },
    {
      year: '2021 — 2022',
      role: 'Technical Instructor & Frontend Specialist',
      company: 'Software & Tech Education',
      desc: 'Taught frontend development fundamentals, React design systems, accessible Web WCAG interfaces, and core programming principles to students.',
    },
  ];

  const skillCategories = {
    frontend: [
      { name: 'React 19 / Next.js 14 (App Router)', level: 98 },
      { name: 'TypeScript & Strict Design Patterns', level: 95 },
      { name: 'Tailwind CSS v4 & Native CSS Systems', level: 98 },
      { name: 'GSAP & Lenis Smooth Scroll Motion', level: 94 },
      { name: 'Web Accessibility (WCAG 2.1 AA)', level: 90 },
    ],
    backend: [
      { name: 'Node.js & Express / Fastify', level: 92 },
      { name: 'PHP 8.3 REST & GraphQL APIs', level: 90 },
      { name: 'Python FastAPI Microservices', level: 88 },
      { name: 'PostgreSQL, MySQL 8 & MongoDB', level: 91 },
      { name: 'Redis Cache & Vector DBs', level: 86 },
    ],
    motion: [
      { name: 'GSAP (ScrollTrigger, Inertia, Text)', level: 98 },
      { name: 'Framer Motion & Layout Orchestration', level: 95 },
      { name: 'Three.js / WebGL Shader Basics', level: 85 },
      { name: 'Canvas 2D Particle Engines', level: 92 },
    ],
    tools: [
      { name: 'Git & GitHub Version Control', level: 96 },
      { name: 'Vercel, AWS & CI/CD Pipelines', level: 94 },
      { name: 'Figma UI/UX & Design Systems', level: 90 },
      { name: 'Docker & Microservice Containers', level: 88 },
    ],
  };

  return (
    <>
      <SEOHead
        title="About Hamza Nasir — 1.5 yrs Frontend Dev / 3 yrs Tech Field"
        description="Learn about Hamza Nasir: 1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction)."
        canonicalUrl="https://hamza-nasir-portfolio.vercel.app/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://hamza-nasir-portfolio.vercel.app/' },
          { name: 'About', url: 'https://hamza-nasir-portfolio.vercel.app/about' },
        ]}
      />

      <main className="min-h-screen bg-[#08080a] text-slate-100 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-20 max-w-4xl space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
            // ABOUT & EXPERIENCE
          </span>
          <LineClipReveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.02] font-heading">
              HAMZA NASIR — CRAFTSMANSHIP & PRECISION.
            </h1>
          </LineClipReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-zinc-400 text-base sm:text-xl font-sans leading-relaxed pt-2">
              1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction).
            </p>
          </ScrollReveal>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" aria-label="Personal Narrative">
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                <img
                  src="/images/developer-portrait.jpg"
                  alt="Hamza Nasir — Full-Stack Software Architect & Digital Product Engineer"
                  width={500}
                  height={625}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="font-bold text-white text-sm font-heading">Hamza Nasir</div>
                  <div className="text-xs font-mono text-purple-400">San Francisco, CA — Full-Stack Engineer</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
                <Terminal className="w-3.5 h-3.5" />
                <span>1.5 YRS DEV / 3 YRS TECH FIELD</span>
              </div>
            </ScrollReveal>

            <LineClipReveal delay={0.2}>
              <h2 className="text-3xl font-bold text-white tracking-tight font-heading">
                Engineering from First Principles
              </h2>
            </LineClipReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-sans">
                I have 1.5 years of professional frontend development experience, and 3 years total in the tech/software field across development and technical instruction. My work spans the full technology stack: from defining database schemas in PHP/MySQL or MongoDB to crafting responsive UI components in Next.js and Tailwind CSS.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base font-sans">
                Whether building an institutional course catalog or crafting a cinematic agency site, my baseline is pixel perfection, fast load times, and clean code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-xs block font-heading">End-to-End Ownership</span>
                    <span className="text-[11px] text-zinc-400">From Figma wireframes to Vercel/AWS deployment.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white text-xs block font-heading">Full-Stack CMS & Web</span>
                    <span className="text-[11px] text-zinc-400">PHP 8 REST APIs, Next.js ISR & GSAP Motion.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4-STEP CLIENT DEVELOPMENT WORKFLOW PROCESS */}
        <section className="py-16 border-t border-zinc-800/80 mb-20" aria-label="Development Process">
          <div className="mb-12">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // DEVELOPMENT METHODOLOGY
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading">
                THE 4-STEP WORKFLOW
              </h2>
            </LineClipReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono text-purple-400 font-bold">01</span>
                  <Compass className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Discovery</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Understanding client goals, scope definition, and technical architecture specification.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono text-purple-400 font-bold">02</span>
                  <Layout className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Design</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Figma wireframing, UI/UX component design systems, and visual hierarchy creation.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono text-purple-400 font-bold">03</span>
                  <Code className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Development</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Clean React/Next.js & PHP implementation built with strict performance standards.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono text-purple-400 font-bold">04</span>
                  <Rocket className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Deployment & Support</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Server launch, SEO optimization, and ongoing technical maintenance support.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* TIMELINE / CAREER JOURNEY */}
        <section className="py-16 border-t border-zinc-800/80" aria-label="Career Timeline">
          <div className="mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // CAREER CHRONOLOGY
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading">
                3 YEARS TECH FIELD (1.5 YRS DEV)
              </h2>
            </LineClipReveal>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-zinc-800">
            {timelineEvents.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <article
                  className={`relative flex flex-col md:flex-row items-start ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#08080a] z-10" />

                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 transition-colors space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-purple-400 font-bold">
                        <span>{item.year}</span>
                        <Award className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight font-heading">{item.role}</h3>
                      <div className="text-xs font-mono text-zinc-400">{item.company}</div>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SKILLS BREAKDOWN MATRIX */}
        <section className="py-24 border-t border-zinc-800/80" aria-label="Skills Matrix">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                // TECHNICAL PROFICIENCY
              </span>
              <LineClipReveal>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading">
                  SKILLS MATRIX
                </h2>
              </LineClipReveal>
            </div>

            <div className="flex flex-wrap gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800">
              {(['frontend', 'backend', 'motion', 'tools'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeSkillCategory === cat
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
              {skillCategories[activeSkillCategory].map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                      className="h-full bg-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* PHILOSOPHY CARDS */}
        <section className="py-16 border-t border-zinc-800/80" aria-label="Core Principles">
          <div className="mb-12">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // ENGINEERING ETHOS
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
                CORE PRINCIPLES
              </h2>
            </LineClipReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <span className="text-2xl font-mono text-purple-400 font-bold">01</span>
                <h3 className="text-xl font-bold text-white font-heading">Performance First</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  No bloated libraries or unoptimized assets. Every frame and kilobyte is audited to ensure lightning-fast sub-second load times worldwide.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <span className="text-2xl font-mono text-purple-400 font-bold">02</span>
                <h3 className="text-xl font-bold text-white font-heading">Intentional Motion</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Animations should serve clarity and delight, not distract. Smooth spring physics and subtle scroll cues elevate user confidence.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <span className="text-2xl font-mono text-purple-400 font-bold">03</span>
                <h3 className="text-xl font-bold text-white font-heading">Pragmatic Architecture</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Choosing the right tool for the right problem — whether that's PHP 8 for CMS APIs, Next.js for SSR, or React 19 for interactive views.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-16 border-t border-zinc-800 flex justify-between items-center flex-wrap gap-4">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold text-white font-heading">Ready to start a project?</h2>
              <p className="text-xs font-mono text-zinc-400">Let's discuss architecture and timeline.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
};
