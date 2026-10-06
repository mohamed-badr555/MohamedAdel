import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    _honey: '', // for honeypot
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const isRtl = (i18n.language || 'en') === 'ar';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('_honey', form._honey);
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/mohamedb.555dr@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '', _honey: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(t('contact.error'));
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn(isRtl ? 'right' : 'left', 'tween', 0.2, 1)} 
        className="flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl border border-white/5"
      >
        <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('contact.title')}</h2>
        
        {submitted && (
          <div className="mt-8 bg-green-500/20 border border-green-500/40 text-green-300 p-4 rounded-xl">
            <p className="font-medium text-sm leading-relaxed">{t('contact.success')}</p>
          </div>
        )}
        {error && (
          <div className="mt-8 bg-red-500/20 border border-red-500/40 text-red-300 p-4 rounded-xl">
            <p className="font-medium text-sm leading-relaxed">{error}</p>
          </div>
        )}
        {!submitted && (
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <input type="text" name="_honey" style={{ display: "none" }} value={form._honey} onChange={handleChange} />
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 text-sm">{t('contact.nameLabel')}</span>
              <input 
                type="text" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')} 
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-[#915EFF]/50 font-medium text-sm transition-colors"
                required 
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 text-sm">{t('contact.emailLabel')}</span>
              <input 
                type="email" 
                name="email" 
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')} 
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-[#915EFF]/50 font-medium text-sm transition-colors"
                required 
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 text-sm">{t('contact.messageLabel')}</span>
              <textarea 
                rows="6" 
                name="message" 
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')} 
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-xl outline-none border border-white/5 focus:border-[#915EFF]/50 font-medium text-sm transition-colors resize-none"
                required 
              />
            </label>
            <button 
              type="submit" 
              className="bg-[#915EFF] hover:bg-[#804dee] py-3.5 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-[#915EFF]/30 rounded-xl transition-all duration-300 disabled:opacity-50 text-sm"
              disabled={loading}
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        )}
      </motion.div>
      <motion.div 
        variants={slideIn(isRtl ? 'left' : 'right', 'tween', 0.2, 1)} 
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");