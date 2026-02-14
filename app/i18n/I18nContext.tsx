'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, detectBrowserLanguage, SUPPORTED_LANGUAGES } from './types';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detected = detectBrowserLanguage();
    setLanguageState(detected);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    async function loadTranslations(lang: Language) {
      const modules = await import('./locales');
      const localeData = modules.default[lang];
      setTranslations(localeData);
    }

    loadTranslations(language);
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
    }
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
