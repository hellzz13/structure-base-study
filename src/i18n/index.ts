import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationPt, translationEn } from './locales';


const resources = {
  pt: {
    translation: translationPt,
  },
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
export default i18n;