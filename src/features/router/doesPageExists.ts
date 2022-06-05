import { getSlugForFile } from '@/features/router/getSlugForFile';
import { allPages } from '@/features/router/pages';

export const doesPageExists = (lang: string, slug: string = lang) => {
  const pageFiles = Object.keys(allPages);

  return pageFiles.some((filePath) => {
    const fileSlug = getSlugForFile(filePath);
    const isUniversalPage = filePath.includes('_');

    if (isUniversalPage || filePath.includes(`/${lang}/`)) {
      return slug === fileSlug;
    }

    return false;
  });
}