import { AstroGlobal } from 'astro';

export const getProps = <T>(context: AstroGlobal): T => {
  return context.props as T;
};
