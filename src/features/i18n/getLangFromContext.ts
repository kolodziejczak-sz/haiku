import { AstroGlobal } from 'astro';
import { supportedLanguagesArray } from '@/features/i18n/supportedLanguages';

export const getLangFromContext = ({
  canonicalURL: { pathname },
}: AstroGlobal) => {
  const [lang] = pathname.slice(1).split('/');

  if (!supportedLanguagesArray.includes(lang)) {
    throw new Error(`Failed to retrieve language from ctx. Found ${lang}`);
  }

  return lang;
};
