import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import sv from './locales/sv/translation.json';

const STORAGE_KEY = 'bojeng.language';

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'sv' || saved === 'en') return saved;
  // Default language should be English.
  return 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sv: { translation: sv },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (lng === 'sv' || lng === 'en') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
