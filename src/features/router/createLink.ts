import { AstroGlobal } from 'astro';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { doesPageExists } from '@/features/router/doesPageExists';


export const createLink = async (url: string, context: AstroGlobal) => {
  const isExternal = url.startsWith('http');
  if (isExternal) {
    return url;
  }

  const lang = getLangFromContext(context);
  const slug = url.slice(1) || undefined;

  if (!doesPageExists(lang, slug)) {
    throw new Error(`Page ${url} (${lang}) does not exists.`)
  };

  if (!slug) {
    return `/${lang}`;
  }

  return `/${lang}/${slug}`;
};

