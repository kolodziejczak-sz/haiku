import { join } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync } from 'fs';
import { ImageMetadata } from 'astro';
import imageSize from 'image-size';

const isProd = import.meta.env.PROD;

const getCwd = () => {
  const selfPath = fileURLToPath(import.meta.url);

  if (isProd) {
    return selfPath.slice(0, selfPath.indexOf('dist'))
  } 
  
  return selfPath.slice(0, selfPath.indexOf('src'))
}

export const getImageMetadata = (assetFullName: string): ImageMetadata => {
  const cwd = getCwd();
  const assetsDirectoryPath = join(cwd, 'src/assets');
  const assetFullPath = join(assetsDirectoryPath, assetFullName);

  const { type, height, width } = imageSize(assetFullPath);
  if (!type || !height || !width) {
    throw new Error('image-size couldnt load metadata')
  }

  const devPath = '/' + assetFullPath.slice(cwd.length);
  const productionPath = '/_astro/' + assetFullName;
  const metadataSrc = isProd ? productionPath : devPath;

  if (isProd) {
    copyFileSync(
      assetFullPath,
      join(cwd, 'dist/_astro/' + assetFullName)
    );
  }

  const imageMetadata: ImageMetadata = {
    src: metadataSrc,
    width,
    height,
    format: type as any,
  };

  return imageMetadata;
}