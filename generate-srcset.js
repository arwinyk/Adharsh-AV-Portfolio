import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'public/projects/smell-food-mobile',
  'public/projects/t-expo',
  'public/projects/smell-food'
];

async function generateSrcset() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.webp') && !file.includes('-400w') && !file.includes('-800w')) {
        const inputPath = path.join(dir, file);
        const name = path.basename(file, '.webp');
        const out400 = path.join(dir, `${name}-400w.webp`);
        const out800 = path.join(dir, `${name}-800w.webp`);
        
        try {
          const metadata = await sharp(inputPath).metadata();
          
          if (!fs.existsSync(out400)) {
            await sharp(inputPath).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out400);
            console.log(`Generated ${out400}`);
          }
          if (!fs.existsSync(out800)) {
            await sharp(inputPath).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out800);
            console.log(`Generated ${out800}`);
          }
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
}

generateSrcset();
