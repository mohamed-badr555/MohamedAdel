import { useState } from 'react';
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

const ProjectCard = ({ name, description, tags, image, source_code_link, LiveDemo }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="w-full group"
    >
      <div className="bg-tertiary rounded-2xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-[#915EFF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#915EFF]/10">
        {/* Image */}
        <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[260px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-black/80 transition-colors border border-white/10"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img src={github} alt="github" className="w-5 h-5 object-contain" />
            </div>
            <div
              className="w-10 h-10 rounded-full bg-[#915EFF]/80 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-colors border border-white/10"
              onClick={() => window.open(LiveDemo, '_blank')}
            >
              <img src={liveDemo} alt="live demo" className="w-5 h-5 object-contain" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="font-bold text-white text-[18px] sm:text-[20px] leading-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-[22px] flex-1 line-clamp-3">
            {description}
          </p>
          <div className="flex mt-4 flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2.5 py-1 text-[11px] sm:text-[12px] font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {tag.name}
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

export default SectionWrapper(Works, "");