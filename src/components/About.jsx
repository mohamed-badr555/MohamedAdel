import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { getLocalizedServices } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='service-icon'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const localizedServices = getLocalizedServices(currentLang);

  return (
    <div className='mt-2'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[32px]"
      >
        {t('about.description')}
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {localizedServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");