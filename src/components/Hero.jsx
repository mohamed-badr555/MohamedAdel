import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 640px)').matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const isAr = (i18n.language || 'en') === 'ar';

  return (
    <section className="relative w-full min-h-[100svh] sm:h-screen mx-auto flex flex-col justify-start sm:block overflow-hidden">
      {/* Background Floating Orbs (Mobile) */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] right-[10%] w-44 h-44 rounded-full bg-[#915EFF] opacity-[0.08] blur-3xl"
          />
          <motion.div
            animate={{ y: [15, -25, 15], x: [5, -15, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[5%] w-56 h-56 rounded-full bg-[#6d28d9] opacity-[0.06] blur-3xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[20%] w-32 h-32 rounded-full bg-[#a855f7] opacity-[0.07] blur-2xl"
          />
        </div>
      )}

      {/* Main Content Container */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-16 pt-24 xs:pt-28 sm:pt-0 sm:absolute sm:inset-0 sm:top-[120px] flex flex-col justify-start"
      >
        {/* Intro Top Row: Line Marker + Headings & Actions */}
        <div className="flex flex-row items-start gap-3 xs:gap-4 sm:gap-5 w-full">
          {/* Timeline Dot & Gradient Line */}
          <div className="flex flex-col justify-center items-center mt-1.5 xs:mt-2.5 sm:mt-5 shrink-0">
            <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF] shadow-sm shadow-[#915EFF]/50" />
            <div className="w-0.5 xs:w-1 h-28 xs:h-36 sm:h-80 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="z-10 max-w-4xl flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              {t('hero.greeting')}{' '}
              <span className="text-[#915EFF]">{t('hero.name')}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 xs:mt-3 text-white-100/90 leading-relaxed max-w-2xl`}>
              <bdi>{t('hero.subText1')}</bdi>{' '}
              <br className="sm:block hidden" />
              <bdi>{t('hero.subText2')}</bdi>
            </p>

            {/* Mobile-only CTA and tech stack (In-flow) */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 xs:mt-6 flex flex-col gap-3 xs:gap-4"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#915EFF] hover:bg-[#7a4edb] active:scale-95 py-2.5 px-6 xs:py-3 xs:px-8 rounded-xl text-white font-bold text-[13px] xs:text-[14px] shadow-lg shadow-[#915EFF]/30 w-fit transition-all duration-300"
                >
                  {t('hero.getInTouch')}
                </button>

                <div className="flex gap-1.5 xs:gap-2 flex-wrap items-center mt-0.5">
                  {['React', 'Next.js', 'ASP.NET', 'SQL Server'].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      className="px-2.5 py-1 text-[10px] xs:text-[11px] font-medium text-white/95 bg-[#151030]/90 backdrop-blur-sm rounded-full border border-[#915EFF]/30 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Terminal Code Card (In-flow below tags, zero collision) */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-full flex justify-center mt-5 xs:mt-7 pb-6 z-10"
          >
            <div 
              dir="ltr"
              className="w-full max-w-[310px] xs:max-w-[340px] bg-[#1d1836]/90 backdrop-blur-md rounded-2xl p-3.5 xs:p-4 border border-[#915EFF]/25 shadow-xl shadow-[#915EFF]/10"
            >
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono text-[#aaa6c3]/70 tracking-wider">profile.js</span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-[11px] leading-5 xs:text-[12px] xs:leading-6">
                <p className="text-[#915EFF]">
                  {'const'} <span className="text-green-400">developer</span> = {'{'}
                </p>
                <p className="text-white/85 pl-3 xs:pl-4">
                  name: <span className="text-orange-300">&quot;{t('hero.terminal.name')}&quot;</span>,
                </p>
                <p className="text-white/85 pl-3 xs:pl-4">
                  role: <span className="text-orange-300">&quot;{t('hero.terminal.role')}&quot;</span>,
                </p>
                <p className="text-white/85 pl-3 xs:pl-4">
                  passion: <span className="text-orange-300 break-words">&quot;{t('hero.terminal.passion')}&quot;</span>,
                </p>
                <p className="text-[#915EFF]">
                  {'}'};
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Desktop: 3D Three.js Canvas */}
      {!isMobile && <ComputersCanvas />}
      
      {/* Desktop: Scroll Mouse Indicator */}
      {!isMobile && (
        <div className="hidden sm:flex absolute bottom-4 w-full justify-center items-center z-10">
          <div
            className="w-[35px] h-[64px] md:w-[40px] md:h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer mb-2"
            onClick={() => scrollToSection('about')}  
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;