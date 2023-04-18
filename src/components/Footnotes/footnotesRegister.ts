export type RegisterEntry = {
  id: string;
  content?: string;
}

const register: Record<string, RegisterEntry[]> = {};

export const clearPageEntries = (pageId: string): void => {
  register[pageId] = [];
}

export const getPageEntries = (pageId: string): RegisterEntry[] | undefined => {
  return register[pageId];
}

export const registerFootnote = (pageId: string, entry: RegisterEntry): number => {
  register[pageId] = register[pageId] || [];

  const pageEntries = register[pageId];
  const pageEntryIndex = pageEntries.findIndex(({ id }) => id === entry.id);
  const pageEntry = pageEntries[pageEntryIndex];

  if (pageEntry) {
    pageEntry.content = pageEntry.content || entry.content;

    return pageEntryIndex + 1;
  }
  
  return pageEntries.push(entry);
};
