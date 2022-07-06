import { AstroGlobal } from 'astro';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';
import { doesPageExists } from '@/features/router/doesPageExists';
import { error } from '@/features/utils/error';

export const createLink = (context: AstroGlobal, url: string, forceLang?: string) => {
  const isEmail = url.startsWith('mailto');
  const isExternal = url.startsWith('http');
  const isHash = url.startsWith('#');
  if (isEmail || isExternal || isHash) {
    return url;
  }

  const lang = forceLang || getLangFromContext(context);
  const slug = url.slice(1) || undefined;

  if (!doesPageExists(lang, slug)) {
    error(`Page ${url} (${lang}) does not exists.`);
  };

  if (!slug) {
    return `/${lang}`;
  }

  return `/${lang}/${slug}`;
};
