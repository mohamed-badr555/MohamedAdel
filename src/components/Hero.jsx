import { useState, useEffect } from 'react';
import {styles} from '../styles'
// import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// };

const Hero = () => {
  // const [isMobile, setIsMobile] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [canvasLoaded, setCanvasLoaded] = useState(false);

  // // Detect if the device is mobile
  // useEffect(() => {
  //   // Check if device is mobile
  //   const mediaQuery = window.matchMedia('(max-width: 768px)');
  //   setIsMobile(mediaQuery.matches);

  //   // Add listener for changes
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   mediaQuery.addEventListener('change', handleMediaQueryChange);

  //   // Set minimum loading time
  //   const minLoadTimer = setTimeout(() => {
  //     if (canvasLoaded) {
  //       setIsLoading(false);
  //     }
  //   }, isMobile ? 2000 : 1000);

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange);
  //     clearTimeout(minLoadTimer);
  //   };
  // }, [isMobile, canvasLoaded]);

  // // Handle canvas load completion
  // const handleCanvasLoad = () => {
  //   setCanvasLoaded(true);
  //   // Give a small delay after canvas loads to ensure smooth transition
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 100);
  // };

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
        </div>
      </div>

      {/* ComputersCanvas with onLoad callback */}
      {/* <ComputersCanvas onLoad={handleCanvasLoad} /> */}
      
      {/* Show loading state only in Hero */}
      {/* {isLoading && (
        <div className="absolute inset-0 bg-primary flex justify-center items-center z-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-[#915EFF] border-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Welcome! Preparing your experience...</p>
          </div>
        </div>
      )} */}
      
      {/* <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center z-10">
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

        
      </div> */}
    </section>
  )
}

export default Hero