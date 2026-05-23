import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'public/projects/smell-food-mobile',
  'public/projects/t-expo',
  'public/projects/smell-food'
];

async function convert() {
  for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        const input = path.join(dir, file);
        const output = path.join(dir, file.replace(/\.(png|jpg)$/, '.webp'));
        await sharp(input).webp({ quality: 80 }).toFile(output);
        console.log(`Converted ${file} to .webp`);
        
        // delete original to save space
        fs.unlinkSync(input);
      }
    }
  }
}

convert().catch(console.error);
