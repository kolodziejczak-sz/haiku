export const allPages = import.meta.globEager(`/src/pages/**/*.md`);

export const universalPages = Object.assign(
  import.meta.globEager(`/src/pages/_*.md`),
  import.meta.globEager(`/src/pages/_*/index.md`),
);
