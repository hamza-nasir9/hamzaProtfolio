import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/projectsData';
import { LineClipReveal } from './LineClipReveal';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800/80 relative" aria-label="Client Testimonials">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <MessageSquareCode className="w-3.5 h-3.5" />
            // CLIENT FEEDBACK & REVIEWS
          </span>
          <LineClipReveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading">
              WHAT CLIENTS SAY
            </h2>
          </LineClipReveal>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs text-zinc-500">
            0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
          </span>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grounded Natural Testimonial Card */}
      <div className="relative bg-zinc-900/60 rounded-3xl p-8 sm:p-12 border border-zinc-800 overflow-hidden shadow-2xl">
        <Quote className="w-16 h-16 text-purple-500/10 absolute top-6 right-6 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 relative z-10"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Natural Conversational Quote */}
            <blockquote className="text-lg sm:text-2xl font-sans text-zinc-200 leading-relaxed italic">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Reviewer Details with Initials Badge Placeholder (No Stock Photos) */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
              <div className="h-12 w-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-mono font-bold text-sm shrink-0">
                {activeTestimonial.initials}
              </div>
              <div>
                <div className="font-bold text-white text-base tracking-tight font-heading">{activeTestimonial.name}</div>
                <div className="text-xs font-mono text-purple-400">
                  {activeTestimonial.role} — <span className="text-zinc-400">{activeTestimonial.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
