import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { getLocalizedExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience, isRtl }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    date={experience.date} 
    iconStyle={{ background: experience.iconBg }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-[60%] h-[60%] object-contain" 
        />
      </div>
    }
  >
    <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'text-right' : 'text-left'}>
      <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">
        <bdi>{experience.title}</bdi>
      </h3>
      <p className="text-secondary text-[15px] sm:text-[16px] font-semibold mt-1" style={{ margin: 0 }}>
        <bdi>{experience.company_name}</bdi>
      </p>
      <ul className={`mt-5 list-disc ${isRtl ? 'mr-5 pr-1 pl-0' : 'ml-5 pl-1'} space-y-2.5`}>
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`} 
            className="text-white-100 sm:text-[14px] text-[12px] leading-relaxed tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isRtl = currentLang === 'ar';
  const localizedExperiences = getLocalizedExperiences(currentLang);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experience.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.title')}</h2>
      </motion.div>

      {/* Maintain balanced alternating timeline layout across all languages */}
      <div dir="ltr" className="mt-20 flex flex-col w-full">
        <VerticalTimeline animate={true}>
          {localizedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} isRtl={isRtl} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, '');