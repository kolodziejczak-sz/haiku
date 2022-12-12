export const defaultLanguage = 'en';

export const supportedLanguages = {
  en: 'English',
  pl: 'Polski',
  ja: '日本語',
  es: 'Español'
} as const;

export const supportedLanguagesArray = Object.keys(supportedLanguages);

// https://stackoverflow.com/questions/3657614/how-to-rewrite-location-in-nginx-depending-on-the-client-browsers-language
// https://www.nginx.com/resources/wiki/modules/accept_language/