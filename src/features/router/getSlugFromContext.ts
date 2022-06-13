import { AstroGlobal } from 'astro';

export const getSlugFromContext = ({
  canonicalURL: { pathname },
}: AstroGlobal) => {
  const [_leadingSlash, _oldLang, ...rest] = pathname.split('/');
  const slug = rest.join('/').slice(0, -1);

  return slug;
};
