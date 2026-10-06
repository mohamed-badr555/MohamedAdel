import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { ar } from './locales/ar';

const STORAGE_KEY = 'portfolio_lang';
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
const initialLanguage = savedLanguage === 'ar' || savedLanguage === 'en' ? savedLanguage : 'en';

export const syncDocumentDirection = (lang) => {
  if (typeof document === 'undefined') return;
  const isRtl = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  if (isRtl) {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes XSS
    },
  });

// Apply document direction immediately
syncDocumentDirection(i18n.language);

// Keep direction & storage synchronized on any language change
i18n.on('languageChanged', (lng) => {
  syncDocumentDirection(lng);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
