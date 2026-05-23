import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'public/projects/smell-food-mobile',
  'public/projects/t-expo',
  'public/projects/smell-food'
];

async function recompress() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('-400w.webp') || file.endsWith('-800w.webp')) {
        const inputPath = path.join(dir, file);
        const buffer = fs.readFileSync(inputPath);
        
        try {
          await sharp(buffer)
            .webp({ quality: 60, effort: 6 })
            .toFile(inputPath);
          console.log(`Re-compressed ${file} to 60% quality`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
}

recompress();
