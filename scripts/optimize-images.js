const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroImagesDir = path.join(process.cwd(), 'public', 'images', 'hero');

// Optimization settings
const settings = {
  width: 1920,
  height: 1080,
  fit: 'cover',
  quality: 80,
  withMetadata: false
};

async function optimizeImage(filename) {
  const inputPath = path.join(heroImagesDir, filename);
  const outputPath = path.join(heroImagesDir, `optimized-${filename}`);

  try {
    await sharp(inputPath)
      .resize(settings.width, settings.height, {
        fit: settings.fit,
        position: 'center'
      })
      .jpeg({
        quality: settings.quality,
        mozjpeg: true,
        chromaSubsampling: '4:4:4'
      })
      .withMetadata(settings.withMetadata)
      .toFile(outputPath);

    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);

    const stats = fs.statSync(inputPath);
    console.log(`Optimized ${filename}: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(heroImagesDir)
    .filter(file => file.endsWith('.jpg'));

  console.log('Starting image optimization...');
  
  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('Image optimization complete!');
}

optimizeAllImages(); 