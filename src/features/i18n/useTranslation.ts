import { AstroGlobal } from 'astro';
import get from 'dlv';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { translations } from '@/features/i18n/translations';

export const useTranslation = (context: AstroGlobal) => {
  const lang = getLangFromContext(context);

  return (path: string) => {
    const fullPath = `${lang}.${path}`;
    const message = get(translations, fullPath);

    if (!message) {
      throw new Error(`Missing translations for ${fullPath}`);
    }

    return message;
  }
}

