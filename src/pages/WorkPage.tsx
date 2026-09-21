import React, { useState } from 'react';
import { Search, Filter, Sparkles, RefreshCw } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { SEOHead } from '../components/SEOHead';
import { LineClipReveal } from '../components/LineClipReveal';

export const WorkPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All Tech');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    'All',
    'Client Projects',
    'Personal Projects',
  ];

  const techTags = [
    'All Tech',
    'Next.js',
    'React.js',
    'PHP',
    'MongoDB',
    'MySQL',
    'GSAP',
    'Tailwind CSS',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesType =
      selectedType === 'All' ||
      (selectedType === 'Client Projects' && project.projectType === 'Client Project') ||
      (selectedType === 'Personal Projects' && project.projectType === 'Personal Project');

    const matchesTech =
      selectedTech === 'All Tech' ||
      project.tags.some((tag) => tag.toLowerCase() === selectedTech.toLowerCase());

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesType && matchesTech && matchesSearch;
  });

  const handleResetFilters = () => {
    setSelectedType('All');
    setSelectedTech('All Tech');
    setSearchQuery('');
  };

  return (
    <>
      <SEOHead
        title="Selected Works & Case Studies — Hamza Nasir Portfolio"
        description="Explore real freelance client projects and personal software projects built with Next.js, React, PHP, MySQL, MongoDB, and GSAP by Hamza Nasir."
        canonicalUrl="https://hamzanasir.vercel.app/work"
        breadcrumbs={[
          { name: 'Home', url: 'https://hamzanasir.vercel.app/' },
          { name: 'Work', url: 'https://hamzanasir.vercel.app/work' },
        ]}
      />

      <main className="min-h-screen bg-[#08080a] text-slate-100 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-16 max-w-4xl space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
            // CLIENT & PERSONAL PROJECT ARCHIVE
          </span>
          <LineClipReveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.02] font-heading">
              SELECTED WORKS
            </h1>
          </LineClipReveal>
          <p className="text-zinc-400 text-base sm:text-xl font-sans leading-relaxed pt-2">
            An archive of real freelance client deliveries and self-initiated software engineering projects built by Hamza Nasir.
          </p>
        </header>

        {/* Search & Double Filter Bar */}
        <section className="p-4 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4 mb-12" aria-label="Project Search & Filters">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedType(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                    selectedType === tab
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white bg-zinc-800/40 hover:bg-zinc-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search stack or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:border-purple-500 outline-none"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider shrink-0 mr-1">FILTER BY TECH:</span>
            {techTags.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer border ${
                  selectedTech === tech
                    ? 'bg-purple-500/20 border-purple-500 text-purple-300 font-bold'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </section>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-8 pb-4 border-b border-zinc-800">
          <div>
            SHOWING <span className="text-purple-400 font-bold">{filteredProjects.length}</span> OF {PROJECTS_DATA.length} PROJECTS
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            <span>PROJECT ARCHIVE</span>
          </div>
        </div>

        {/* Projects Grid or Clean Empty State Card */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 px-6 text-center space-y-4 rounded-3xl bg-zinc-900/40 border border-zinc-800 max-w-xl mx-auto">
            <Sparkles className="w-10 h-10 text-purple-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white tracking-tight font-heading">No Matching Projects Found</h2>
            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              There are no projects matching your current combination of category, technology filter, or search query.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Projects Grid">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};
