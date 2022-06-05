import { AstroGlobal } from 'astro';
import { useTranslation } from '@/features/i18n/useTranslation';

export const translateObject = <T = Record<string, any>>(
  object: T,
  context: AstroGlobal
) => {
  const t = useTranslation(context);

  return Object.entries(object).reduce<T>((acc, [key, value]) => {
    if (typeof value === 'string' && value.startsWith('t.')) {
      acc[key] = t(value.slice(2));
    }

    return acc;
  }, { ...object });
};
