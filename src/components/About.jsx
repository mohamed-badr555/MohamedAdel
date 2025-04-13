import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from './../utils/motion';
import { SectionWrapper } from "../hoc";

 const ServiceCard =({index, title ,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
 }
const About = () => {
  return (
    <div className='mt-2'>
         <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px] ">
   Innovative Full-Stack Developer specializing in React.js, Next.js, and .NET technologies. Passionate about building high-performance,
    SEO-friendly applications with a focus on user experience. Proven expertise in e-commerce, educational platforms, and scalable web solutions.
     Adept at both frontend and back-end development, ensuring seamless integration and optimized functionality.
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10  ">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service}  />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")