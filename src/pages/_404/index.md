---
layout: '@/layouts/BaseLayout.astro'
class: 'container'
title: 't.404.notFound'
setup: |
  import { setupMd } from '@/features/utils/setupMd';
  const { t, Message, Link } = setupMd(Astro);

---
# {t`404.notFound`}

<Link to='/'>{t`404.takeMeHome`}</Link>
