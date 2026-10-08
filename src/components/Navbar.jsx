import React, { useState } from 'react';
import { styles } from '../styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLocalizedNavLinks } from '../constants';
import { menu, close } from '../assets';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language || 'en';
  const isAr = currentLang === 'ar';
  const localizedNavLinks = getLocalizedNavLinks(currentLang);

  const toggleLanguage = () => {
    const nextLang = isAr ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };

  const handleNavClick = (id) => {
    setActive(id);
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
    <nav className="px-4 xs:px-6 sm:px-16 w-full flex items-center py-4 xs:py-5 fixed top-0 z-20 bg-primary/95 backdrop-blur-md border-b border-white/5">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand */}
        <div 
          className='flex items-center gap-2 xs:gap-2.5 cursor-pointer group shrink-0' 
          onClick={() => {
            setActive("");
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src={logo} alt="logo" className='object-contain w-8 h-8 xs:w-9 xs:h-9 transition-transform group-hover:scale-105' />
          <p className='text-white text-[16px] xs:text-[18px] font-bold cursor-pointer group-hover:text-[#915EFF] transition-colors'>
            {t('nav.logoTitle')}
          </p>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="list-none hidden items-center md:flex md:flex-row gap-7 lg:gap-9">
          {localizedNavLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.id ? "text-white font-semibold" : "text-secondary"}
               hover:text-white text-[17px] font-medium cursor-pointer transition-colors`}
              onClick={() => handleNavClick(link.id)}
            >
              <span>{link.title}</span>
            </li>
          ))}

          {/* Language Switcher Pill */}
          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#915EFF]/20 border border-white/10 hover:border-[#915EFF]/50 text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:scale-105"
              aria-label={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
              title={isAr ? "Switch to English" : "التبديل إلى العربية"}
            >
              <svg className="w-4 h-4 text-[#915EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="tracking-wide">{isAr ? "EN" : "عربي"}</span>
            </button>
          </li>

          {/* Download CV CTA */}
          <li className="bg-tertiary py-2.5 px-6 outline-none w-fit text-white font-bold shadow-md cursor-pointer shadow-primary rounded-xl hover:bg-[#915EFF]/25 hover:border-[#915EFF]/50 border border-white/10 transition-all text-sm">
            <a  
              href="https://drive.google.com/file/d/1EXL_Wtw4v1yR3AWg52wRz-EW8b9U-BbW/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav.downloadCV')}
            </a>
          </li>
        </ul>

        {/* Mobile Navigation Drawer */}
        <div className='md:hidden flex flex-1 justify-end items-center gap-3'>
          {/* Quick Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold"
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
          >
            <span className="text-[#915EFF]">🌐</span>
            <span>{isAr ? "EN" : "عربي"}</span>
          </button>

          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-5 xs:p-6 black-gradient 
            absolute top-16 xs:top-20 end-0 mx-3 xs:mx-4 my-2 min-w-[180px] xs:min-w-[200px] z-20 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {localizedNavLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${active === link.id ? "text-white font-bold text-[#915EFF]" : "text-secondary"}
                   font-medium cursor-pointer text-[16px] w-full py-1 hover:text-white transition-colors`}
                  onClick={() => {
                    setToggle(false);
                    handleNavClick(link.id);
                  }}
                >
                  <span>{link.title}</span>
                </li>
              ))}

              <li className="w-full pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setToggle(false);
                  }}
                  className="w-full text-center py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>🌐</span>
                  <span>{isAr ? "Switch to English" : "التبديل إلى العربية"}</span>
                </button>
              </li>

              <li className="bg-[#915EFF] py-2.5 px-6 outline-none w-full text-center text-white font-bold shadow-md cursor-pointer rounded-xl text-sm">
                <a
                  href="https://drive.google.com/file/d/1EXL_Wtw4v1yR3AWg52wRz-EW8b9U-BbW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {t('nav.downloadCV')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;