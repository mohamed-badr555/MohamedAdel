import {Tilt} from  'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { github, liveDemo } from '../assets'; // Updated import
import {SectionWrapper} from '../hoc';
import {projects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';


const ProjectCard =({index , name, description,tags,image,source_code_link,LiveDemo}) =>{
  return (
    <div className="w-full">
     <div className="bg-tertiary p-5 
      rounded-2xl w-full h-full flex flex-col justify-between">
       
        <div className="relative w-full h-[230px] lg:h-[280px]">
          <div className="w-full h-full">
            <img 
              src={image} 
              alt={name} 
              className='w-full h-full object-fill rounded-2xl' 
            />
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className='black-gradient mx-3 w-10 h-10 rounded-full flex justify-center 
            items-center cursor-pointer' onClick={ ()=> window.open(source_code_link,'_blank')}>
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center 
            items-center cursor-pointer' onClick={ ()=> window.open(LiveDemo,'_blank')}>
                <img src={liveDemo} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <h3 className='font-bold text-white text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="flex mt-4 flex-wrap gap-2">
          {tags.map((tag)=> (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
   


 const Works = () => {
  return (
    <div>
<div >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className='w-full flex'>
        <p
          
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 w-full max-w-[1400px]">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>



    </div>
  )
}

export default  SectionWrapper( Works,"");