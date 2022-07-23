---
layout: '@/layouts/BaseLayout.astro'
title: 'Example poem'
class: container
setup: |
  import { setupMd } from '@/features/utils/setupMd';
  const { t, Image, Link } = setupMd(Astro);
---

# Poem

<Image src="./image.png" />