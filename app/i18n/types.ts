export type Language = 'en' | 'pt' | 'es';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'pt', 'es'];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

export const LANGUAGE_CODES: Record<Language, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
};

// Detect browser language
export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';
  
  return 'en';
}
