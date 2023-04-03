import { AstroGlobal } from 'astro';
import { getLangFromContext } from '@/features/i18n/getLangFromContext';

export const parseLink = (context: AstroGlobal, url: string, lang?: string) => {
  const isEmail = url.startsWith('mailto');
  const isExternal = url.startsWith('http');
  const isHash = url.startsWith('#');

  if (isEmail || isExternal || isHash) {
    return url;
  }

  const targetLang = lang || getLangFromContext(context);
  const path = url.startsWith('/') ? url.slice(1) : url;

  if (!path) {
    return `/${targetLang}`;
  }

  return `/${targetLang}/${path}`;
};
