const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectImagesDir = path.join(process.cwd(), 'public', 'images', 'projects');

// Optimization settings for project images
const settings = {
  width: 800,
  height: 600,
  fit: 'cover',
  quality: 85,
  withMetadata: false
};

async function optimizeImage(filename) {
  const inputPath = path.join(projectImagesDir, filename);
  const outputPath = path.join(projectImagesDir, `optimized-${filename}`);

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
    console.log(`Optimized ${filename}: ${(stats.size / 1024).toFixed(2)}KB`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectImagesDir)) {
    fs.mkdirSync(projectImagesDir, { recursive: true });
  }

  const files = fs.readdirSync(projectImagesDir)
    .filter(file => file.endsWith('.jpg'));

  console.log('Starting project image optimization...');
  
  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('Project image optimization complete!');
}

optimizeAllImages(); 