import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = join(root, 'public', 'images');

let converted = 0;
for (let i = 1; i <= 13; i++) {
  const src = join(imgDir, `${i}.jfif`);
  const out = join(imgDir, `${i}.webp`);
  if (!existsSync(src)) {
    console.warn(`skip: ${i}.jfif not found`);
    continue;
  }
  const info = await sharp(src)
    .rotate() // respect EXIF orientation
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(`${i}.jfif -> ${i}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB)`);
  converted++;
}
console.log(`\nDone: ${converted} images converted.`);
