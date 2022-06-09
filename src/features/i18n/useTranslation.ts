import { AstroGlobal } from 'astro';
import get from 'dlv';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { translations } from '@/features/i18n/translations';

export const useTranslation = (context: AstroGlobal) => {
  const lang = getLangFromContext(context);

  return (path: string | TemplateStringsArray) => {
    const fullPath = `${lang}.${path}`;
    const message = get(translations, fullPath);

    return message || path;
  }
}

