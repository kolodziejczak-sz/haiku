export const defaultLanguage = 'en';

export const supportedLanguages = {
  en: 'English',
  pl: 'Polski'
} as const;

export const supportedLanguagesArray = Object.keys(supportedLanguages);

// https://stackoverflow.com/questions/3657614/how-to-rewrite-location-in-nginx-depending-on-the-client-browsers-language
// https://www.nginx.com/resources/wiki/modules/accept_language/