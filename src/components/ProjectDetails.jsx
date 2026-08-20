import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { github, liveDemo, logo } from '../assets';
import { StarsCanvas } from './canvas';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find project by id or fallback to index/slug match
  const currentIndex = projects.findIndex(
    (p) => p.id === id || p.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  const project = currentIndex !== -1 ? projects[currentIndex] : projects[0];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBackToWorks = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!project) return null;

  return (
    <div className="relative z-0 bg-primary min-h-screen text-white overflow-x-hidden">
      {/* 3D Background Stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarsCanvas />
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-primary/80 border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={handleBackToWorks}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#915EFF]/20 border border-white/10 hover:border-[#915EFF]/50 text-secondary hover:text-white transition-all text-xs sm:text-sm font-medium group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Projects</span>
          </button>

          {/* Center Brand/Breadcrumb */}
          <Link to="/" className="hidden sm:flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
            <span className="text-white text-sm font-semibold tracking-wide">Mohamed Adel</span>
          </Link>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {project.isPrivate ? (
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-medium cursor-default"
                title="Private enterprise repository"
              >
                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden md:inline">Private Code</span>
              </div>
            ) : (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-all"
              >
                <img src={github} alt="github" className="w-4 h-4 object-contain" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            )}

            <a
              href={project.LiveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#915EFF] to-[#804dee] hover:from-[#804dee] hover:to-[#915EFF] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 transition-all hover:scale-105"
            >
              <span>Live Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <button onClick={handleBackToWorks} className="hover:text-white transition-colors">Works</button>
          <span>/</span>
          <span className="text-[#915EFF] font-medium truncate max-w-[200px] sm:max-w-none">{project.name}</span>
        </div>

        {/* Project Header Hero */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              project.category === 'frontend'
                ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                : 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
            }`}>
              {project.category === 'frontend' ? 'Frontend Project' : 'Full-Stack Platform'}
            </span>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Live</span>
            </div>

            {project.year && (
              <span className="text-xs text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {project.year}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {project.name}
          </h1>

          {project.tagline && (
            <p className="text-secondary text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Browser Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-tertiary/90 shadow-2xl shadow-[#915EFF]/10 group"
        >
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1d1836] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            <div className="hidden sm:flex items-center justify-center px-4 py-1 rounded-md bg-black/40 border border-white/10 text-xs text-secondary font-mono max-w-md w-full truncate">
              <span className="text-emerald-400 mr-1.5">https://</span>
              <span className="text-white/80">{project.LiveDemo ? project.LiveDemo.replace('https://', '') : 'project-demo'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="text-xs text-secondary hover:text-white px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
                title="Copy Page Link"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-h-[550px] min-h-[260px] sm:min-h-[400px] overflow-hidden bg-black/30 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Launch Floating Badge */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-3">
              <a
                href={project.LiveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#915EFF] hover:bg-[#804dee] text-white text-sm font-semibold shadow-xl shadow-[#915EFF]/40 hover:scale-105 transition-all"
              >
                <span>Launch Live Site</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Details 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Columns: Story, Features & Architecture */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-tertiary/70 border border-white/10 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2.5 text-[#915EFF]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Project Overview</h2>
              </div>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features Grid */}
            {project.features && project.features.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-tertiary/70 border border-white/10 backdrop-blur-sm space-y-6">
                <div className="flex items-center gap-2.5 text-[#915EFF]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Key Features & Capabilities</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#915EFF]/30 hover:bg-[#915EFF]/5 transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#915EFF]/20 border border-[#915EFF]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#915EFF] text-xs font-bold">
                        ✓
                      </div>
                      <p className="text-white/90 text-sm font-medium leading-snug">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Architecture & Implementation */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-tertiary/70 border border-white/10 backdrop-blur-sm space-y-6">
                <div className="flex items-center gap-2.5 text-[#915EFF]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Technical Architecture & Stack</h2>
                </div>

                <div className="space-y-3">
                  {project.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-secondary text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#915EFF]" />
                      <span className="text-white/85 font-medium">{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Project Metadata & Tech Stack Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack Box */}
            <div className="p-6 rounded-2xl bg-tertiary/70 border border-white/10 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Specifications Card */}
            <div className="p-6 rounded-2xl bg-tertiary/70 border border-white/10 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Project Specifications</h3>

              <div className="space-y-3 text-sm">
                {project.role && (
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-secondary">Role</span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                )}

                {project.client && (
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-secondary">Client / Entity</span>
                    <span className="text-white font-medium">{project.client}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-secondary">Category</span>
                  <span className="text-white font-medium capitalize">{project.category}</span>
                </div>

                {project.year && (
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-secondary">Timeline</span>
                    <span className="text-white font-medium">{project.year}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-secondary">Repository</span>
                  <span className="text-white font-medium">
                    {project.isPrivate ? '🔒 Private Enterprise' : '🔓 Public Open Source'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-secondary">Live Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Online & Active
                  </span>
                </div>
              </div>
            </div>

            {/* Inquire / Direct Contact CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#915EFF]/20 via-tertiary to-tertiary border border-[#915EFF]/30 space-y-4">
              <h3 className="text-lg font-bold text-white">Need a similar solution?</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Looking to build high-performance web applications, enterprise dashboards, or modern SaaS systems?
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/201157983376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
                >
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation Footer (Prev / Next Project) */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Project */}
            <Link
              to={`/project/${prevProject.id || prevProject.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-5 rounded-2xl bg-tertiary/60 hover:bg-[#915EFF]/10 border border-white/10 hover:border-[#915EFF]/40 transition-all group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:text-white group-hover:-translate-x-1 transition-all shrink-0">
                ←
              </div>
              <div className="truncate">
                <span className="text-xs text-secondary uppercase tracking-wider block">Previous Project</span>
                <span className="text-white font-bold text-base truncate block group-hover:text-[#915EFF] transition-colors">
                  {prevProject.name}
                </span>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              to={`/project/${nextProject.id || nextProject.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-5 rounded-2xl bg-tertiary/60 hover:bg-[#915EFF]/10 border border-white/10 hover:border-[#915EFF]/40 transition-all group flex items-center justify-between gap-4 text-right"
            >
              <div className="truncate flex-1">
                <span className="text-xs text-secondary uppercase tracking-wider block">Next Project</span>
                <span className="text-white font-bold text-base truncate block group-hover:text-[#915EFF] transition-colors">
                  {nextProject.name}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                →
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
