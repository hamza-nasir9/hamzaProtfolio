import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const cvContent = `
================================================================================
HAMZA NASIR — FULL-STACK DEVELOPER & DIGITAL PRODUCT ENGINEER
================================================================================
Email: hn626309@gmail.com
Phone: +92 316-2013553
Location: Karachi, Pakistan (Remote / Hybrid)
LinkedIn: https://www.linkedin.com/in/hamzanasir093/
GitHub: https://github.com/hamza-nasir9/
Portfolio: https://hamza-nasir-portfolio.vercel.app

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
1.5 years of professional frontend development experience, 3 years total in the
tech/software field (development + instruction). Building responsive web
applications, custom news publishing CMS platforms, and digital agency websites
with Next.js, React, PHP 8, MySQL, MongoDB, Tailwind CSS, and GSAP motion.

--------------------------------------------------------------------------------
CORE TECHNICAL SKILLS
--------------------------------------------------------------------------------
- Frontend: Next.js (App Router), React.js 19, TypeScript, Tailwind CSS, GSAP, Lenis
- Backend & DB: PHP 8.3 REST API, Node.js, Express, MySQL, MongoDB
- Tools & Hosting: Git, GitHub, Vercel, Figma, Docker, AWS

--------------------------------------------------------------------------------
REAL FREELANCE CLIENT DELIVERIES
--------------------------------------------------------------------------------
1. Global Computer Institute Website (Next.js, MongoDB)
   Live URL: https://globalcomputer-lac.vercel.app/
   - Multi-page institutional website with course catalogs, inquiry forms, and Google Maps integration.

2. Pulse News Platform (PHP, MySQL, Tailwind CSS)
   Status: Delivered — Going Live Soon
   - Dynamic news publishing CMS with secure admin authentication, full CRUD, and category search.

3. Grovia Digital Agency Website (React.js, Next.js, MongoDB, GSAP, Lenis)
   Live URL: https://groviacom.vercel.app/
   - Premium agency portfolio with cinematic GSAP animations, responsive layouts, and performance optimization.

--------------------------------------------------------------------------------
WORK EXPERIENCE & CHRONOLOGY
--------------------------------------------------------------------------------
- Full-Stack Developer & Technical Consultant (2021 – Present)
  1.5 years of professional frontend development experience, 3 years total in the
  tech/software field (development + instruction). Delivered end-to-end web
  architectures, CMS engines, and responsive digital products for clients.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
- B.Sc. Computer Science — 2023–Ongoing, Metropolitan University Karachi
- Diploma in Electrical Engineering — Apr 2018–Apr 2021, Government Monotechnic Institute

--------------------------------------------------------------------------------
AVAILABILITY
--------------------------------------------------------------------------------
- Open to: Freelance Projects | Full-Time Roles | Technical Collaborations
================================================================================
`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hamza_Nasir_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md"
          />

          {/* Printable Document Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-3xl max-h-[92vh] bg-[#0d0e14] border border-zinc-800 rounded-3xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto text-slate-200 shadow-2xl print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
          >
            {/* Header Controls (Hidden during print) */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 print:hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Hamza Nasir — Complete Resume / CV</h2>
                  <p className="text-xs font-mono text-zinc-400">Printable PDF & Text Download Format</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-purple-600/20"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT / SAVE PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="space-y-6 font-sans text-xs print:text-black print:space-y-4">
              {/* Header Title Block */}
              <div className="border-b border-zinc-800 pb-4 print:border-black space-y-2">
                <h1 className="text-2xl font-bold text-white tracking-tight print:text-black">
                  HAMZA NASIR
                </h1>
                <div className="text-purple-400 font-mono text-xs font-bold print:text-purple-700">
                  Full-Stack Software Engineer & Digital Product Engineer
                </div>
                
                {/* Complete Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400 print:text-zinc-800 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-400 print:text-black shrink-0" />
                    <span>EMAIL: hn626309@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-400 print:text-black shrink-0" />
                    <span>PHONE: +92 316-2013553</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 print:text-black shrink-0" />
                    <span>LOCATION: Karachi, Pakistan (Remote / Hybrid)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-purple-400 print:text-black shrink-0" />
                    <a href="https://www.linkedin.com/in/hamzanasir093/" target="_blank" rel="noreferrer" className="underline hover:text-white">
                      linkedin.com/in/hamzanasir093
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-1 sm:col-span-2">
                    <Github className="w-3.5 h-3.5 text-purple-400 print:text-black shrink-0" />
                    <a href="https://github.com/hamza-nasir9/" target="_blank" rel="noreferrer" className="underline hover:text-white">
                      github.com/hamza-nasir9
                    </a>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest print:text-purple-700">
                  // PROFESSIONAL SUMMARY
                </h3>
                <p className="text-zinc-300 leading-relaxed font-sans print:text-zinc-800">
                  1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction). Building responsive web applications, custom news publishing CMS platforms, and digital agency websites with Next.js, React, PHP 8, MySQL, MongoDB, Tailwind CSS, and GSAP motion design.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest print:text-purple-700">
                  // TECHNICAL SKILLS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 print:bg-zinc-100 print:border-zinc-300 print:text-black">
                    <span className="font-bold text-white block mb-1 print:text-black">Frontend</span>
                    <span className="text-zinc-400 print:text-zinc-700">Next.js, React 19, TypeScript, Tailwind CSS, GSAP</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 print:bg-zinc-100 print:border-zinc-300 print:text-black">
                    <span className="font-bold text-white block mb-1 print:text-black">Backend & DB</span>
                    <span className="text-zinc-400 print:text-zinc-700">PHP 8.3 REST API, Node.js, MySQL, MongoDB</span>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 print:bg-zinc-100 print:border-zinc-300 print:text-black">
                    <span className="font-bold text-white block mb-1 print:text-black">Tools & Hosting</span>
                    <span className="text-zinc-400 print:text-zinc-700">Git, Vercel, Figma, Docker, AWS</span>
                  </div>
                </div>
              </div>

              {/* Client Deliveries */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest print:text-purple-700">
                  // REAL CLIENT DELIVERIES
                </h3>
                <div className="space-y-2 font-mono">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex justify-between items-center print:bg-zinc-100 print:border-zinc-300">
                    <div>
                      <span className="text-white font-bold block print:text-black">1. Global Computer Institute Website</span>
                      <span className="text-zinc-400 text-[11px] print:text-zinc-700">Next.js, MongoDB • https://globalcomputer-lac.vercel.app/</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 print:text-emerald-700" />
                  </div>

                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex justify-between items-center print:bg-zinc-100 print:border-zinc-300">
                    <div>
                      <span className="text-white font-bold block print:text-black">2. Pulse News Platform</span>
                      <span className="text-zinc-400 text-[11px] print:text-zinc-700">PHP, MySQL, Tailwind • Delivered — Going Live Soon</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 print:text-emerald-700" />
                  </div>

                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex justify-between items-center print:bg-zinc-100 print:border-zinc-300">
                    <div>
                      <span className="text-white font-bold block print:text-black">3. Grovia Digital Agency Website</span>
                      <span className="text-zinc-400 text-[11px] print:text-zinc-700">React, Next.js, GSAP, Lenis • https://groviacom.vercel.app/</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 print:text-emerald-700" />
                  </div>
                </div>
              </div>

              {/* Work Chronology */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest print:text-purple-700">
                  // CHRONOLOGY & EXPERIENCE
                </h3>
                <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300 font-mono text-[11px] leading-relaxed print:bg-zinc-100 print:border-zinc-300 print:text-black">
                  <div>• 1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction).</div>
                  <div>• Open to: Freelance Projects | Full-Time Roles | Technical Collaborations</div>
                </div>
              </div>

              {/* Exact Education Entries */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest print:text-purple-700 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> // EDUCATION
                </h3>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300 leading-relaxed print:bg-zinc-100 print:border-zinc-300 print:text-black">
                    <div className="font-bold text-white print:text-black text-xs">B.Sc. Computer Science — 2023–Ongoing</div>
                    <div className="text-purple-400 print:text-purple-700">Metropolitan University Karachi</div>
                  </div>

                  <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300 leading-relaxed print:bg-zinc-100 print:border-zinc-300 print:text-black">
                    <div className="font-bold text-white print:text-black text-xs">Diploma in Electrical Engineering — Apr 2018–Apr 2021</div>
                    <div className="text-purple-400 print:text-purple-700">Government Monotechnic Institute</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal Actions (Hidden during print) */}
            <div className="pt-6 border-t border-zinc-800 mt-6 flex flex-col sm:flex-row gap-3 print:hidden">
              <button
                onClick={handlePrint}
                className="py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE AS PDF</span>
              </button>

              <button
                onClick={handleDownload}
                className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>DOWNLOAD FILE (.TXT)</span>
              </button>

              <a
                href="mailto:hn626309@gmail.com"
                className="py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>EMAIL HAMZA</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
