import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Zap,
  Sparkles,
  CheckCircle2,
  FileText,
  Briefcase,
  Layers,
  Wrench,
  Hammer,
  Compass,
  ArrowRight,
  Download,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ParticleBackground } from '../components/ParticleBackground';
import { HorizontalProjectScroll } from '../components/HorizontalProjectScroll';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { MagneticButton } from '../components/MagneticButton';
import { LineClipReveal } from '../components/LineClipReveal';
import { SectionDivider } from '../components/SectionDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  const marqueeTech = [
    'Next.js',
    'React.js',
    'TypeScript',
    'PHP 8',
    'MySQL',
    'MongoDB',
    'Tailwind CSS',
    'GSAP Motion',
    'Lenis Scroll',
    'Vercel',
    'Figma',
  ];

  return (
    <>
      <SEOHead
        title="Hamza Nasir — Full-Stack Developer & Digital Product Engineer"
        description="I build high-performance web applications, SaaS platforms, CRM systems, and digital products that solve real business problems."
        canonicalUrl="https://hamzanasir.vercel.app/"
        breadcrumbs={[{ name: 'Home', url: 'https://hamzanasir.vercel.app/' }]}
      />

      <div className="min-h-screen bg-[#08080a] text-slate-100 relative overflow-hidden">
        {/* 1. CINEMATIC HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
          <ParticleBackground />

          <motion.div
            style={{ y: heroTextY }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] radial-glow pointer-events-none opacity-70 z-0"
          />

          {/* Top Status & Availability Badges */}
          <div className="relative z-10 space-y-4">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md text-xs font-mono text-zinc-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AVAILABLE FOR FREELANCE & FULL-STACK ROLES</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-purple-400 font-bold">1.5 YRS DEV / 3 YRS TECH</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  <span>Open to: Freelance • Full-Time • Collaborations</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Central Headline */}
          <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="my-auto relative z-10 space-y-6 max-w-5xl">
            <LineClipReveal delay={0.15}>
              <h1 className="text-6xl sm:text-8xl lg:text-[9.5rem] font-bold tracking-tight text-white leading-[0.9] mb-4 font-heading">
                HAMZA NASIR
              </h1>
            </LineClipReveal>

            <LineClipReveal delay={0.25}>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-300 tracking-tight leading-tight">
                FULL-STACK DEVELOPER & <br />
                <span className="text-purple-400">DIGITAL PRODUCT ENGINEER</span>
              </div>
            </LineClipReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-sans leading-relaxed pt-2">
                I build high-performance web applications, SaaS platforms, CRM systems, and digital products that solve real business problems.
              </p>
            </ScrollReveal>

            {/* CTAs: Direct PDF Download + Preview CV Modal + Explore Projects */}
            <ScrollReveal delay={0.45}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton>
                  <Link
                    to="/work"
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg shadow-purple-600/25"
                  >
                    <span>EXPLORE PROJECTS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </MagneticButton>

                {/* Direct Download PDF Button */}
                <MagneticButton>
                  <a
                    href="/assets/Hamza_Nasir_Resume.pdf"
                    download="Hamza_Nasir_Resume.pdf"
                    className="px-8 py-4 bg-purple-950/80 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD RESUME (PDF)</span>
                  </a>
                </MagneticButton>

                {/* Interactive Modal Preview Button */}
                <MagneticButton>
                  <button
                    onClick={onOpenResume}
                    className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-purple-400" />
                    <span>PREVIEW CV</span>
                  </button>
                </MagneticButton>

                {/* LET'S WORK TOGETHER CTA Link */}
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer"
                  >
                    LET'S WORK TOGETHER
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </motion.div>

          <ScrollReveal delay={0.55}>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-zinc-800/80 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-6">
                <div>LOCATION: KARACHI, PAKISTAN</div>
                <div>SPECIALTY: NEXT.JS / REACT / PHP / CMS</div>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="animate-bounce">↓</span>
                <span>SCROLL TO DISCOVER</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. TECH STACK MARQUEE TICKER */}
        <section className="py-6 bg-zinc-950 border-y border-zinc-800/80 overflow-hidden" aria-label="Technology Ticker">
          <div className="flex animate-marquee space-x-8 items-center">
            {[...marqueeTech, ...marqueeTech].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2 rounded-full bg-zinc-900/60 border border-zinc-800 text-sm font-mono text-zinc-300 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CURRENTLY BUILDING BANNER */}
        <section className="py-10 px-6 md:px-12 max-w-7xl mx-auto" aria-label="Currently Building Status">
          <ScrollReveal>
            <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <Hammer className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest block font-bold">
                    // CURRENTLY BUILDING
                  </span>
                  <p className="text-sm md:text-base font-bold text-white tracking-tight">
                    Architecting Bakrey CRM — an enterprise business management system with Next.js 14, Node.js & MongoDB.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-8 text-center font-mono">
                <div>
                  <AnimatedCounter value="1.5" className="text-2xl md:text-3xl font-bold text-purple-400 block" />
                  <span className="text-[10px] text-zinc-400 uppercase block">Yrs Frontend Dev</span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <AnimatedCounter value="03" className="text-2xl md:text-3xl font-bold text-purple-400 block" />
                  <span className="text-[10px] text-zinc-400 uppercase block">Yrs Tech Field</span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <AnimatedCounter value="06" className="text-2xl md:text-3xl font-bold text-purple-400 block" />
                  <span className="text-[10px] text-zinc-400 uppercase block">Projects Built</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. PINNED GSAP HORIZONTAL SCROLL SHOWCASE */}
        <HorizontalProjectScroll />

        <SectionDivider className="max-w-7xl mx-auto my-12" />

        {/* 5. EXPANDED CATEGORIZED TECH STACK SECTION */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" aria-label="Technical Capabilities">
          <div className="mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // TECHNICAL TOOLING
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
                CATEGORIZED STACK & CAPABILITIES
              </h2>
            </LineClipReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <LineClipReveal>
                    <h3 className="text-xl font-bold text-white font-heading">Frontend Architecture</h3>
                  </LineClipReveal>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Next.js (App Router)</span>
                    <span className="text-purple-400">SSR / ISR</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">React.js 19</span>
                    <span className="text-purple-400">State / Hooks</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">GSAP & Lenis</span>
                    <span className="text-purple-400">Cinematic Motion</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Tailwind CSS v4</span>
                    <span className="text-purple-400">Responsive UI</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <LineClipReveal>
                    <h3 className="text-xl font-bold text-white font-heading">Backend & CMS</h3>
                  </LineClipReveal>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">PHP 8.3 REST API</span>
                    <span className="text-purple-400">Core Engine</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Node.js & Express</span>
                    <span className="text-purple-400">Microservices</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">MySQL & MongoDB</span>
                    <span className="text-purple-400">Relational & NoSQL</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">REST Services</span>
                    <span className="text-purple-400">API Endpoints</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <article className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <LineClipReveal>
                    <h3 className="text-xl font-bold text-white font-heading">Tools & Cloud</h3>
                  </LineClipReveal>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Git & GitHub</span>
                    <span className="text-purple-400">Version Control</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Vercel & AWS</span>
                    <span className="text-purple-400">Edge Hosting</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">Figma</span>
                    <span className="text-purple-400">UI/UX Systems</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-white font-bold">SEO & Web Vitals</span>
                    <span className="text-purple-400">Lighthouse 95+</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* CLIENT REVIEWS & TESTIMONIALS */}
        <TestimonialsSection />

        <SectionDivider className="max-w-7xl mx-auto my-12" />

        {/* 6. ACCURATE REAL STATS & INTRO STATEMENT */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" aria-label="Real Experience Metrics">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                // REAL EXPERIENCE & HONEST METRICS
              </span>
              <LineClipReveal>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-heading">
                  PROVEN RESULTS FOR REAL CLIENTS.
                </h2>
              </LineClipReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Hamza Nasir brings 1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction) to every client project — delivering scalable web applications, dynamic publishing portals, enterprise CRMs, and modern agency UI experiences.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-2">
                  <AnimatedCounter value="1.5 Yrs" className="text-3xl font-bold text-purple-400 font-mono block" />
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Frontend Dev</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-2">
                  <AnimatedCounter value="03 Yrs" className="text-3xl font-bold text-purple-400 font-mono block" />
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Tech Field</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-2">
                  <AnimatedCounter value="04" className="text-3xl font-bold text-purple-400 font-mono block" />
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Client Deliveries</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-2">
                  <AnimatedCounter value="100%" className="text-3xl font-bold text-purple-400 font-mono block" />
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Delivered Early</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 7. VALUE PROPOSITIONS */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800/80" aria-label="Why Work With Me">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // ENGINEERING CAPABILITIES
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
                WHY WORK WITH ME
              </h2>
            </LineClipReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-colors space-y-4">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <LineClipReveal>
                  <h3 className="text-xl font-bold text-white font-heading">Pixel-Perfect Engineering</h3>
                </LineClipReveal>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Clean, modular Next.js, React, and PHP code structured for maintainability, high performance, and effortless scalability.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-colors space-y-4">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <LineClipReveal>
                  <h3 className="text-xl font-bold text-white font-heading">Custom CMS Architectures</h3>
                </LineClipReveal>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  From administrative news CRUD platforms to institutional course catalogs with MongoDB & MySQL databases built to scale.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-colors space-y-4">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
                <LineClipReveal>
                  <h3 className="text-xl font-bold text-white font-heading">Cinematic Motion & GSAP</h3>
                </LineClipReveal>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Fluid 60fps animations using Lenis smooth scroll and GSAP ScrollTrigger timelines that leave lasting impressions on users.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* 8. NEW "HOW I BUILD" / ENGINEERING PHILOSOPHY SECTION */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" aria-label="Engineering Philosophy">
          <ScrollReveal>
            <div className="bg-[#0b0c10] border border-zinc-800 rounded-3xl p-6 md:p-12 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
                    <Compass className="w-3.5 h-3.5" />
                    <span>// HOW I BUILD</span>
                  </div>

                  <LineClipReveal>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-heading">
                      Code That's Built to Last, Not Just to Ship
                    </h2>
                  </LineClipReveal>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    Every project is built with clean, maintainable code, thoughtful architecture, and attention to detail — so it stays fast, reliable, and easy to grow as the business grows.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-sans">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Clean, well-organized code that's easy to maintain and scale</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-sans">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Fast load times and smooth performance on every device</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-sans">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Reliable, secure systems built to handle real-world traffic</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <MagneticButton>
                      <Link
                        to="/about"
                        className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
                      >
                        <span>View My Process</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>

                {/* CODE WINDOW MOCKUP WITH EXACT USER CODE */}
                <div className="lg:col-span-6 bg-black/90 rounded-2xl p-6 border border-zinc-800 font-mono text-xs overflow-x-auto text-zinc-300 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-zinc-400">SmoothExperience.tsx</span>
                    </div>
                    <span className="text-purple-400">React + JavaScript</span>
                  </div>

                  <pre className="space-y-1 text-slate-300 leading-relaxed">
                    <code>
                      <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-300">"react"</span>;{'\n'}
                      <span className="text-purple-400">import</span> &#123; motion &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">"framer-motion"</span>;{'\n'}
                      <br />
                      <span className="text-purple-400">const</span> Hamza = &#123;{'\n'}
                      {'  '}name: <span className="text-emerald-300">"Hamza Nasir"</span>,{'\n'}
                      {'  '}role: <span className="text-emerald-300">"Full-Stack Developer"</span>,{'\n'}
                      {'  '}expertise: <span className="text-emerald-300">"React, JavaScript &amp; Modern Web"</span>,{'\n'}
                      {'  '}mindset: <span className="text-emerald-300">"Build. Refine. Deliver."</span>,{'\n'}
                      &#125;;{'\n'}
                      <br />
                      <span className="text-purple-400">export default function</span> <span className="text-blue-400">Developer</span>() &#123;{'\n'}
                      {'  '}<span className="text-purple-400">return</span> ({'\n'}
                      {'    '}&lt;<span className="text-blue-400">motion.div</span> animate=&#123;&#123; opacity: <span className="text-purple-300">1</span> &#125;&#125;&gt;{'\n'}
                      {'      '}&lt;<span className="text-blue-400">h1</span>&gt;&#123;Hamza.name&#125;&lt;/<span className="text-blue-400">h1</span>&gt;{'\n'}
                      {'      '}&lt;<span className="text-blue-400">p</span>&gt;&#123Hamza.role&#125;&lt;/<span className="text-blue-400">p</span>&gt;{'\n'}
                      {'    '}&lt;/<span className="text-blue-400">motion.div</span>&gt;{'\n'}
                      {'  '});{'\n'}
                      &#125;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};
