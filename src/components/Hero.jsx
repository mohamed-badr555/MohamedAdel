import { useState, useEffect } from 'react';
import {styles} from '../styles'
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 640px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] lg:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='z-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohamed Adel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack Web Developer <br className='sm:block hidden' />
            specializing in building exceptional digital experiences
          </p>

          {/* Mobile-only CTA and tech stack */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-col gap-5 xs:mt-12 xs:gap-6"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#915EFF] hover:bg-[#7a4edb] py-3 px-8 rounded-xl text-white font-bold text-[16px] shadow-lg shadow-[#915EFF]/30 w-fit transition-all duration-300 xs:text-[14px] xs:px-4 xs:py-2"
              >
                Get In Touch
              </button>

              <div className="flex gap-3 mt-2 xs:gap-2 xs:mt-4">
                {['React', 'Next', 'Asp.net', 'SQL'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                    className="px-3 py-1 text-[11px] font-medium text-white bg-tertiary rounded-full border border-[#915EFF]/30 xs:px-2 xs:py-0.5 xs:text-[10px]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Desktop: 3D Canvas | Mobile: Animated background */}
      {!isMobile ? (
        <ComputersCanvas />
      ) : (
        <div className="absolute inset-0 overflow-hidden xs:pt-28">
          {/* Floating animated orbs */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] right-[10%] w-44 h-44 rounded-full bg-[#915EFF] opacity-[0.07] blur-3xl"
          />
          <motion.div
            animate={{ y: [15, -25, 15], x: [5, -15, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[5%] w-56 h-56 rounded-full bg-[#6d28d9] opacity-[0.05] blur-3xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[20%] w-32 h-32 rounded-full bg-[#a855f7] opacity-[0.06] blur-2xl"
          />

          {/* Decorative code-like elements */}
          <div className="absolute bottom-[25%] left-0 right-0 flex justify-center xs:bottom-[10%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative"
            >
              {/* Terminal-style card */}
              <div className="bg-[#1d1836]/80 backdrop-blur-sm rounded-2xl p-5 border border-[#915EFF]/20 shadow-xl shadow-[#915EFF]/5 mx-6 max-w-[320px] xs:p-2 xs:max-w-[220px]">
                <div className="flex gap-2 mb-3 xs:mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70 xs:w-2 xs:h-2" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70 xs:w-2 xs:h-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70 xs:w-2 xs:h-2" />
                </div>
                <div className="font-mono text-[12px] leading-6 xs:text-[10px] xs:leading-5">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-[#915EFF]"
                  >
                    {'const'} <span className="text-green-400">developer</span> = {'{'}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-white/80 pl-4"
                  >
                    name: <span className="text-orange-300">"Mohamed Adel"</span>,
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-white/80 pl-4"
                  >
                    role: <span className="text-orange-300">"Full Stack Dev"</span>,
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                    className="text-white/80 pl-4"
                  >
                    passion: <span className="text-orange-300">"Building UIs"</span>,
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="text-[#915EFF]"
                  >
                    {'}'};
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      
    {!isMobile && ( <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center z-10">
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
            className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary mb-1'
          />
        </div>

        
      </div>)
      }
    </section>
  )
}

export default Hero