export const parseLink = (url: string, lang?: string) => {
  const isEmail = url.startsWith('mailto');
  const isExternal = url.startsWith('http');
  const isHash = url.startsWith('#');

  if (isEmail || isExternal || isHash) {
    return url;
  }

  if (!lang) {
    throw new Error('local link needs lang param');
  }

  const path = url.startsWith('/') ? url.slice(1) : url;

  if (!path) {
    return `/${lang}`;
  }

  return `/${lang}/${path}`;
};
