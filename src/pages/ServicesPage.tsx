import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Zap,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  Minus,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full-Stack Web Architecture & SaaS Engineering',
      subtitle: 'Production-ready web applications built on Next.js, React 19, TypeScript, and Node/PHP APIs.',
      deliverables: [
        'Scalable REST & GraphQL API Schema Design',
        'Authentication, Session & RBAC Roles',
        'Database Optimization (PostgreSQL, MySQL, MongoDB, Redis)',
        'Stripe & Third-Party Webhook Integrations',
        'CI/CD Automated Deployment Pipelines',
      ],
    },
    {
      id: 'motion',
      icon: Zap,
      title: 'Creative Frontend & Motion Systems',
      subtitle: 'Award-caliber web experiences driven by Framer Motion, GSAP, and Lenis smooth scroll engines.',
      deliverables: [
        '60 FPS Smooth Scroll & Inertia Effects',
        'Micro-Interactions & Cursor Followers',
        'Responsive Fluid Layouts & WCAG 2.1 AA',
        'High Lighthouse Score Performance Optimization',
      ],
    },
    {
      id: 'cms',
      icon: Layers,
      title: 'Enterprise CMS & Platform Engineering',
      subtitle: 'High-throughput headless publishing platforms handling dynamic news editorial workflows.',
      deliverables: [
        'PHP 8.3 / Laravel REST & GraphQL Core Engines',
        'Next.js Incremental Static Regeneration (ISR)',
        'Custom Drag-and-Drop Block Editors',
        'Multi-Tenant News Content Workflows',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How long does a typical project take to complete?',
      a: "Timelines depend on scope, but a standard multi-page website typically takes 2-4 weeks from initial planning to launch, while more complex platforms with custom backend/CMS functionality can take 4-8 weeks. I'll always provide a clear timeline estimate after understanding your project requirements.",
    },
    {
      q: 'What happens after the project launches?',
      a: "I provide post-launch support to fix any issues that arise and ensure everything runs smoothly. I'm also available for ongoing maintenance, feature additions, or updates on a separate arrangement if needed.",
    },
    {
      q: 'Do you handle domain, hosting, and deployment setup?',
      a: 'Yes, I can assist with domain configuration, hosting setup, and deployment (Vercel, traditional hosting, or your preferred platform), or work alongside your existing IT/hosting provider if you already have one in place.',
    },
    {
      q: 'How do payments and project milestones work?',
      a: 'Projects are typically split into milestones (e.g. design approval, development phase, final delivery) with payment tied to each stage. This keeps things transparent and gives you checkpoints to review progress before moving forward.',
    },
    {
      q: 'Can you work with an existing design or codebase, or does it have to start from scratch?',
      a: 'Both — I can build a project from the ground up based on your requirements, or work within an existing codebase/design system to add features, fix issues, or extend functionality.',
    },
    {
      q: 'Do you offer ongoing support or maintenance after the project is delivered?',
      a: "Yes, I offer flexible maintenance and support arrangements after launch, whether that's monthly retainer-based support or as-needed fixes and updates.",
    },
    {
      q: 'What technologies do you specialize in?',
      a: 'I specialize in modern full-stack development — React, Next.js, and JavaScript for frontend, along with PHP/MySQL and MongoDB for backend and database work, plus GSAP for advanced animation and motion design.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Services & Engineering Capabilities — Hamza Nasir"
        description="Full-stack Web Architecture, Next.js / React Frontend Development, PHP 8 CMS Platforms, and GSAP Cinematic UI engineering."
        canonicalUrl="https://hamzanasir.vercel.app/services"
        breadcrumbs={[
          { name: 'Home', url: 'https://hamzanasir.vercel.app/' },
          { name: 'Services', url: 'https://hamzanasir.vercel.app/services' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        }}
      />

      <main className="min-h-screen bg-[#08080a] text-slate-100 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-20 max-w-4xl space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
            // CAPABILITIES & SERVICE OFFERINGS
          </span>
          <LineClipReveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.02] font-heading">
              ENGINEERING CAPABILITIES.
            </h1>
          </LineClipReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-zinc-400 text-base sm:text-xl font-sans leading-relaxed pt-2">
              End-to-end technical execution for founders, digital agencies, and product teams requiring elite design and engineering rigor.
            </p>
          </ScrollReveal>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" aria-label="Services Breakdown">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <ScrollReveal key={srv.id} delay={idx * 0.1}>
                <article
                  className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition-all space-y-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="p-3.5 w-fit rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <LineClipReveal>
                      <h2 className="text-2xl font-bold text-white tracking-tight mb-2 font-heading">{srv.title}</h2>
                    </LineClipReveal>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">{srv.subtitle}</p>

                    <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                      <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">Key Deliverables:</span>
                      {srv.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="pt-6 text-xs font-mono text-purple-400 font-bold tracking-wider uppercase inline-flex items-center gap-2 hover:text-purple-300 transition-colors"
                  >
                    <span>REQUEST THIS CAPABILITY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 border-t border-zinc-800/80" aria-label="Services FAQ">
          <div className="mb-12">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // COMMON INQUIRIES
            </span>
            <LineClipReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </LineClipReveal>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <article className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-white text-base font-sans">{faq.q}</span>
                    {openFaq === idx ? (
                      <Minus className="w-4 h-4 text-purple-400 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-xs text-zinc-400 font-sans leading-relaxed border-t border-zinc-800/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
