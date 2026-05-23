import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('-400w.webp')) results.push(file);
    }
  });
  return results;
}

async function compressMobile() {
  const files = [...walk('public'), ...walk('src/assets')];
  for (const file of files) {
    try {
      const buffer = fs.readFileSync(file);
      await sharp(buffer)
        .webp({ quality: 40, effort: 6 })
        .toFile(file);
      console.log(`Crushed mobile variant to 40%: ${file}`);
    } catch (err) {
      console.error(`Failed ${file}:`, err);
    }
  }
}

compressMobile();
