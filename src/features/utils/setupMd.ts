import { AstroGlobal } from 'astro';
import { useTranslation } from '@/features/i18n/useTranslation';
import Icon from '@/components/Icon.astro'
import Image from '@/components/Image.astro'
import Link from '@/components/Link.astro'
import Message from '@/components/Message.astro'

export const setupMd = (context: AstroGlobal) => {
  const t = useTranslation(context);

  return {
    Icon,
    Image,
    Link,
    Message,
    t,
  }
};


