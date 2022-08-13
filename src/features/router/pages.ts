type Page = {
  file: string;
}

export const allPages = import.meta.glob<true, string, Page>('/src/pages/**/*.mdx', { eager: true });

export const universalPages = Object.assign(
  import.meta.glob<true, string, Page>('/src/pages/_*.mdx', { eager: true }),
  import.meta.glob<true, string, Page>('/src/pages/_*/index.mdx', { eager: true }),
);
