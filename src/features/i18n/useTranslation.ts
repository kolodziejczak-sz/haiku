import { AstroGlobal } from 'astro';
import get from 'dlv';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import messages from '@/features/i18n/messages.json';

export const useTranslation = (context: AstroGlobal) => {
  const lang = getLangFromContext(context);

  return (path: string | TemplateStringsArray) => {
    const fullPath = `${lang}.${path}`;
    const message = get(messages, fullPath);

    return message || path;
  }
}

