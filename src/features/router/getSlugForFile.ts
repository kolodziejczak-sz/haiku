export const getSlugForFile = (filePath: string) => {
  const pathParts = filePath.split('/');
  const fileName = pathParts.at(-1);
  const dirName = pathParts.at(-2);

  const pageName = fileName.startsWith('index') ? dirName : fileName;
  const slug = pageName.split('.').at(0).replace('_', '');

  return slug;
};
