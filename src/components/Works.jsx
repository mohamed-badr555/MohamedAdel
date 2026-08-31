import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { github, liveDemo } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const filters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" },
];

const INITIAL_COUNT = 6;

const ProjectCard = ({ id, name, description, tags, image, source_code_link, LiveDemo, isPrivate }) => {
  const navigate = useNavigate();
  const projectSlug = id || name.toLowerCase().replace(/\s+/g, '-');

  const handleOpenDetails = () => {
    navigate(`/project/${projectSlug}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="w-full group"
    >
      <div 
        onClick={handleOpenDetails}
        className="bg-tertiary rounded-2xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-[#915EFF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#915EFF]/15 cursor-pointer"
      >
        {/* Image */}
        <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[250px] overflow-hidden bg-black/40">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-[#915EFF]/90 backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
              <span>View Full Details</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
            {isPrivate ? (
              <div
                className="relative w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm flex justify-center items-center cursor-default border border-white/10"
                title="Private repository"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={github} alt="github" className="w-4 h-4 object-contain opacity-40" />
                <svg className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              </div>
            ) : (
              <div
                className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-black/90 transition-colors border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, '_blank');
                }}
                title="View Source Code"
              >
                <img src={github} alt="github" className="w-4 h-4 object-contain" />
              </div>
            )}
            <div
              className="w-9 h-9 rounded-full bg-[#915EFF]/90 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-colors border border-white/10 shadow-lg shadow-[#915EFF]/30"
              onClick={(e) => {
                e.stopPropagation();
                window.open(LiveDemo, '_blank');
              }}
              title="Open Live Demo"
            >
              <img src={liveDemo} alt="live demo" className="w-4 h-4 object-contain" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-white text-[18px] sm:text-[19px] leading-snug group-hover:text-[#915EFF] transition-colors">
              {name}
            </h3>
          </div>

          <p className="mt-2.5 text-secondary text-[13px] sm:text-[14px] leading-[22px] line-clamp-3">
            {description}
          </p>

          <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#915EFF] group-hover:translate-x-1 transition-transform">
            <span>Explore Case Study & Architecture</span>
            <span>→</span>
          </div>

          <div className="flex mt-auto pt-4 flex-wrap gap-1.5 border-t border-white/5">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2.5 py-1 text-[11px] sm:text-[12px] font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <div>
      {/* Header */}
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]">
          Real-world projects showcasing my skills across frontend and full-stack
          development. Each project includes links to code repositories and live demos.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center sm:justify-start">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => { setActiveFilter(f.key); setShowAll(false); }}
            className={`relative px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${
              activeFilter === f.key
                ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/25"
                : "bg-tertiary text-secondary hover:text-white border border-white/10 hover:border-[#915EFF]/40"
            }`}
          >
            {f.label}
            {activeFilter === f.key && (
              <span className="ml-2 text-[11px] bg-white/20 px-2 py-0.5 rounded-full">
                {filtered.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 w-full"
          >
            {visible.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Show More / Show Less */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-[#915EFF]/40 text-white text-[14px] font-medium hover:bg-[#915EFF]/10 hover:border-[#915EFF] transition-all duration-300"
          >
            {showAll ? "Show Less" : `Show All Projects (${filtered.length})`}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Works, "work");