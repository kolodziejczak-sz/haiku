import { AstroGlobal } from 'astro';
import get from 'dlv';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { messages } from '@/features/i18n/messages';

export const useTranslation = (context: AstroGlobal) => {
  const lang = getLangFromContext(context);

  return (path: string) => {
    const fullPath = `${lang}.${path}`;
    const message = get(messages, fullPath);

    if (!message) {
      throw new Error(`Missing translations for ${fullPath}`);
    }

    return message;
  }
}

