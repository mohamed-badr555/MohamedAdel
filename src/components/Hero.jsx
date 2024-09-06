
import { useState } from 'react';
import {styles} from '../styles'
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
   <div
        className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohamed Adel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          A passionate Front End Developer committed <br className='sm:block hidden' />
          to creating user-centric and responsive web applications
          </p>
        </div>
      </div>
    

      {/* <ComputersCanvas /> */}
     
{/*       
<div className="absolute  xs:-bottom-9 bottom-5 w-full flex justify-center items-center z-10">
  <div
    className="w-[28px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 cursor-pointer"
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
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
  </div>
</div>  */}



    </section>
  )
}

export default Hero