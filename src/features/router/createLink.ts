import { AstroGlobal } from 'astro';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { doesPageExists } from '@/features/router/doesPageExists';
import { error } from '@/features/utils/error';

export const createLink = (url: string, context: AstroGlobal) => {
  const isExternal = url.startsWith('http');
  if (isExternal) {
    return url;
  }

  const lang = getLangFromContext(context);
  const slug = url.slice(1) || undefined;

  if (!doesPageExists(lang, slug)) {
    error(`Page ${url} (${lang}) does not exists.`);
  };

  if (!slug) {
    return `/${lang}`;
  }

  return `/${lang}/${slug}`;
};
