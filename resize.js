import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'public/projects/smell-food-mobile',
  'public/projects/t-expo',
  'public/projects/smell-food'
];

async function resizeImages() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, 'temp-' + file);
        
        try {
          const metadata = await sharp(inputPath).metadata();
          if (metadata.width > 1200) {
            await sharp(inputPath)
              .resize({ width: 1200 })
              .webp({ quality: 80 })
              .toFile(outputPath);
              
            fs.renameSync(outputPath, inputPath);
            console.log(`Resized ${file} from ${metadata.width}px to 1200px`);
          } else {
            console.log(`${file} is already ${metadata.width}px (skipped)`);
          }
        } catch (err) {
          console.error(`Error resizing ${file}:`, err);
        }
      }
    }
  }
}

resizeImages();
