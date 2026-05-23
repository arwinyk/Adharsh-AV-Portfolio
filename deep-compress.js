import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.match(/\.(png|jpe?g|webp)$/i)) results.push(file);
    }
  });
  return results;
}

async function compressAll() {
  const files = [...walk('public'), ...walk('src/assets')];
  
  for (const file of files) {
    try {
      const buffer = fs.readFileSync(file);
      const ext = path.extname(file).toLowerCase();
      
      // If it's a variant, just crush it
      if (file.includes('-400w') || file.includes('-800w')) {
        await sharp(buffer).webp({ quality: 60, effort: 6 }).toFile(file);
        console.log(`Crushed variant: ${file}`);
        continue;
      }
      
      // For base images, max width 1200, 80% quality
      const isBaseWebp = ext === '.webp' && !file.includes('-400w') && !file.includes('-800w');
      const isPngJpg = ext === '.png' || ext === '.jpg' || ext === '.jpeg';
      
      if (isBaseWebp || isPngJpg) {
        const outName = isPngJpg ? file.replace(new RegExp(ext + '$', 'i'), '.webp') : file;
        
        await sharp(buffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(outName);
        
        console.log(`Compressed base: ${outName}`);
        
        // If it was png/jpg, we created a new webp, delete old
        if (isPngJpg && outName !== file) {
          fs.unlinkSync(file);
          console.log(`Deleted original: ${file}`);
        }
      }
    } catch (err) {
      console.error(`Failed ${file}:`, err);
    }
  }
}

compressAll();
