export const mdxProvider = () => {
  return {
    name: "mdx-astro-provider",
    enforce: "post",
    transform(code, id) {
      if (!id.endsWith(".mdx")) return;
      code = `import { components } from '@/features/utils/mdxComponents';\n${code}`;
      code = `import { addTranslations } from '@/features/i18n/translations';\n${code}`;
      code = `import { getSlugForFile } from '@/features/router/getSlugForFile';\n${code}`;

      const isUniversalPage = id.includes('_');
      const newDefaultExport = `
        export default function (props) {
          ${isUniversalPage && (
            `if (messages) {
              const slug = getSlugForFile(file);
              addTranslations(messages, slug);
            }`
          )}

          const newProps = {
            ...props,
            components
          }
          return MDXContent(newProps);
        };
      `
      code = code.replace(
        'export default MDXContent;',
        newDefaultExport
      );

      return code;
    },
  }
};
