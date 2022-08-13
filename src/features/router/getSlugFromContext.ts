import { AstroGlobal } from 'astro';

export const getSlugFromContext = ({
  url: { pathname },
}: AstroGlobal) => {
  const [_leadingSlash, _oldLang, ...rest] = pathname.split('/');
  const path = rest.join('/');
  const slug = path.endsWith('/') ?  path.slice(0, -1) : path;

  return slug;
};
