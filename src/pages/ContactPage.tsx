import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  Plus,
  Minus,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Institutional Site',
    budget: '$5,000 – $10,000',
    message: '',
  });

  const [isSubmitting, setIsSimulating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Please detail your project (min 10 chars)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSimulating(true);

    await new Promise((r) => setTimeout(r, 1200));

    setIsSimulating(false);
    setIsSuccess(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#38bdf8', '#34d399'],
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('hn626309@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Contact Hamza Nasir — Initiate Project Inquiries & Contracting"
        description="Get in touch with Hamza Nasir for freelance project inquiries, full-stack software development, and technical consulting. Email: hn626309@gmail.com, Phone: +92 316-2013553."
        canonicalUrl="https://hamza-nasir-portfolio.vercel.app/contact"
        breadcrumbs={[
          { name: 'Home', url: 'https://hamza-nasir-portfolio.vercel.app/' },
          { name: 'Contact', url: 'https://hamza-nasir-portfolio.vercel.app/contact' },
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
        <header className="mb-16 max-w-4xl space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
            // INITIATE COMMUNICATIONS
          </span>
          <LineClipReveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.02] font-heading">
              LET'S BUILD SOMETHING EXCEPTIONAL.
            </h1>
          </LineClipReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-zinc-400 text-base sm:text-xl font-sans leading-relaxed pt-2">
              Have a project in mind, need technical architecture advice, or want to discuss full-stack opportunities? Reach out below.
            </p>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <section className="bg-zinc-900/60 p-8 md:p-12 rounded-3xl border border-zinc-800 relative" aria-label="Contact Form">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white tracking-tight font-heading">MESSAGE DISPATCHED</h2>
                      <p className="text-xs font-mono text-zinc-400 max-w-md mx-auto leading-relaxed">
                        Your project inquiry has been submitted. Hamza Nasir will respond within 12 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs font-mono text-emerald-300 max-w-md mx-auto text-left space-y-1">
                      <div>[STATUS]: Inquiry Received</div>
                      <div>[PROJECT TYPE]: {formData.projectType}</div>
                      <div>[BUDGET]: {formData.budget}</div>
                      <div>[TARGET]: hn626309@gmail.com</div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', projectType: 'Institutional Site', budget: '$5,000 – $10,000', message: '' });
                      }}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-mono font-bold cursor-pointer transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-2">
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase">
                        // DIRECT MESSAGE FORM
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <a
                          href="https://wa.me/923162013553"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 hover:border-emerald-500 transition-all cursor-pointer font-bold"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-400" />
                          <span>WhatsApp Me</span>
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <ScrollReveal delay={0.15}>
                        <div>
                          <label className="block text-xs font-mono text-zinc-400 mb-2">
                            YOUR NAME <span className="text-purple-400">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors ${
                              errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                            }`}
                          />
                          {errors.name && <span className="text-[10px] font-mono text-red-400 mt-1 block">{errors.name}</span>}
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={0.2}>
                        <div>
                          <label className="block text-xs font-mono text-zinc-400 mb-2">
                            EMAIL ADDRESS <span className="text-purple-400">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="sarah@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors ${
                              errors.email ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                            }`}
                          />
                          {errors.email && <span className="text-[10px] font-mono text-red-400 mt-1 block">{errors.email}</span>}
                        </div>
                      </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <ScrollReveal delay={0.25}>
                        <div>
                          <label className="block text-xs font-mono text-zinc-400 mb-2">PROJECT TYPE</label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="Institutional Site">Institutional / Educational Website</option>
                            <option value="News CMS Platform">Dynamic News Publishing CMS</option>
                            <option value="Agency Cinematic UI">Agency Website / Cinematic UI</option>
                            <option value="SaaS / Web Application">Full-Stack SaaS Web Application</option>
                            <option value="Custom Technical Consulting">Technical Consulting / Full-Time Role</option>
                          </select>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={0.3}>
                        <div>
                          <label className="block text-xs font-mono text-zinc-400 mb-2">BUDGET RANGE</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="<$5,000">&lt; $5,000</option>
                            <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                            <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                            <option value="$25,000+">$25,000+</option>
                          </select>
                        </div>
                      </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.35}>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-mono text-zinc-400">
                            PROJECT DETAILS <span className="text-purple-400">*</span>
                          </label>
                          <span className="text-[10px] font-mono text-zinc-500">{formData.message.length} chars</span>
                        </div>
                        <textarea
                          rows={5}
                          placeholder="Tell me about your product goals, timelines, or technology requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full bg-zinc-950 border rounded-xl p-4 text-sm font-sans text-white focus:outline-none transition-colors ${
                            errors.message ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
                          }`}
                        />
                        {errors.message && <span className="text-[10px] font-mono text-red-400 mt-1 block">{errors.message}</span>}
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-purple-600/25"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>DISPATCHING MESSAGE...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>SEND MESSAGE</span>
                          </>
                        )}
                      </button>
                    </ScrollReveal>
                  </form>
                )}
              </AnimatePresence>
            </section>
          </ScrollReveal>

          <aside className="lg:col-span-5 space-y-8" aria-label="Direct Contact Details">
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                  // DIRECT ACTIONS
                </span>

                <div className="space-y-3">
                  <a
                    href="mailto:hn626309@gmail.com"
                    className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-mono text-xs font-bold transition-all flex items-center justify-between cursor-pointer shadow-lg shadow-purple-600/20"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Send an Email
                    </span>
                    <span className="text-purple-200">hn626309@gmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/923162013553"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-emerald-950/80 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 rounded-2xl font-mono text-xs font-bold transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                    </span>
                    <span>+92 316-2013553</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Copy email to clipboard:</span>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                  // LOCATION & TIMEZONE
                </span>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-sans text-zinc-300">
                    <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>Karachi, Pakistan (Remote / Hybrid)</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-sans text-zinc-300">
                    <Clock className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>PKT / UTC+5 (Active Business Hours)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 text-xs font-mono text-emerald-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Status: Accepting Freelance & Full-Time Roles</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                  // CONNECT ONLINE
                </span>
                <div className="flex flex-col space-y-2 text-sm font-mono text-zinc-300">
                  <a
                    href="https://github.com/hamza-nasir9/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-colors"
                  >
                    <span className="flex items-center gap-2"><Github className="w-4 h-4 text-purple-400" /> github.com/hamza-nasir9</span>
                    <span className="text-xs text-zinc-500">→</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hamzanasir093/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-colors"
                  >
                    <span className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-purple-400" /> linkedin.com/in/hamzanasir093</span>
                    <span className="text-xs text-zinc-500">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        <section className="pt-16 border-t border-zinc-800/80" aria-label="Contact FAQ">
          <div className="mb-12">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              // CLIENT INQUIRIES & FAQ
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
