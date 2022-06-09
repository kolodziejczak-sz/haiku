import { AstroGlobal } from 'astro';
import { useTranslation } from '@/features/i18n/useTranslation';
import Message from '@/components/Message.astro'
import Link from '@/components/Link.astro'
import Icon from '@/components/Icon.astro'

export const setupMd = (context: AstroGlobal) => {
  const t = useTranslation(context);

  return {
    t,
    Message,
    Link,
    Icon,
  }
};


