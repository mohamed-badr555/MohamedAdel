import React, { useState } from 'react'
import { styles } from '../styles'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { navLinks } from './../constants/index';
import { menu, close } from '../assets';
import logo from '../assets/logo.png'

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id, title) => {
    setActive(title);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(id);
      }, 120);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' 
        onClick={()=> {
          setActive("")
          window.scrollTo(0,0)
        }}
        >
        <img src={logo} alt="logo" className=' object-contain' style={{height:'36px' , width:'36px'}} />
        <p className='text-white text-[18px] font-bold cursor-pointer'>Mohamed Adel</p>
        </Link>
        
        <ul className="list-none hidden items-center  md:flex  md:flex-row gap-10 ">
          {navLinks.map((link)=> (
            <li key={link.id} className={`${active == link.title ? "text-white" :"text-secondary"}
             hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
             onClick={() => handleNavClick(link.id, link.title)}>
               <span>{link.title}</span>
            </li>
          ))}
            <li className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md cursor-pointer shadow-primary rounded-xl hover:bg-[#915EFF]/20 transition-all`}>
              <a  
                href="https://drive.google.com/file/d/1KaWAI1k9p_szsgzUAiR1SjsQ_aEQFvJX/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </li>

        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
             <img src={toggle ? close : menu} alt="menu"
             className='w-[28px] h-[28px] object-contain cursor-pointer '
             onClick={()=> setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient 
              absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                     <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link)=> (
            <li key={link.id} className={`${active == link.title ? "text-white" :"text-secondary"}
             font-poppins font-medium cursor-pointer text-[16px] `}
             onClick={()=>{
              setToggle(!toggle)
              handleNavClick(link.id, link.title);
              }}>
              <span>{link.title}</span>
            </li>
          ))}
           <li className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md cursor-pointer shadow-primary rounded-xl`}>
             <a
               href="https://drive.google.com/file/d/1KaWAI1k9p_szsgzUAiR1SjsQ_aEQFvJX/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
             >
               Download CV
             </a>
           </li>
        </ul>
              </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar