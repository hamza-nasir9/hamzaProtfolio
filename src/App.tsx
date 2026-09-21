import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PageCurtainTransition } from './components/PageCurtainTransition';

// Code-Splitting Routes with React.lazy
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Route Loading Fallback
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#08080a]">
    <div className="flex items-center gap-3 text-purple-400 font-mono text-xs">
      <span className="h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      <span>HYDRATING VIEWPORT...</span>
    </div>
  </div>
);

// Scroll To Top Component on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageCurtainTransition>
                <HomePage onOpenResume={onOpenResume} />
              </PageCurtainTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageCurtainTransition>
                <AboutPage />
              </PageCurtainTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageCurtainTransition>
                <WorkPage />
              </PageCurtainTransition>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <PageCurtainTransition>
                <ProjectDetailPage />
              </PageCurtainTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageCurtainTransition>
                <ServicesPage />
              </PageCurtainTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageCurtainTransition>
                <ContactPage />
              </PageCurtainTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageCurtainTransition>
                <NotFoundPage />
              </PageCurtainTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export function App() {
  const [loading, setLoading] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={`min-h-screen bg-[#08080a] text-slate-100 ${cursorEnabled ? 'custom-cursor-active' : ''}`}>
        {/* Preloader */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Custom Animated Magnetic Cursor */}
        <CustomCursor enabled={cursorEnabled} />

        {/* Navigation Header */}
        <Navbar
          cursorEnabled={cursorEnabled}
          onToggleCursor={() => setCursorEnabled(!cursorEnabled)}
          onOpenResume={() => setResumeOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(!soundEnabled)}
        />

        {/* Scroll Reset */}
        <ScrollToTop />

        {/* Main Routed Page Content */}
        <main className="min-h-screen">
          <AnimatedRoutes
            onOpenResume={() => setResumeOpen(true)}
          />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Resume Printable Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
