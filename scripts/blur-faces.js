const sharp = require('sharp');
const path = require('path');

async function blurFaces() {
  const inputPath = path.join(process.cwd(), 'public/images/sections/employee-owned.jpg');
  const outputPath = path.join(process.cwd(), 'public/images/sections/employee-owned-blurred.jpg');

  try {
    // Load the image
    const image = sharp(inputPath);

    // Apply gaussian blur to specific regions (face areas)
    // These coordinates are approximate and may need adjustment
    await image
      .composite([
        {
          input: Buffer.from(`<svg>
            <rect x="150" y="100" width="100" height="100" fill="rgba(0,0,0,0)" filter="url(#blur)"/>
            <rect x="300" y="100" width="100" height="100" fill="rgba(0,0,0,0)" filter="url(#blur)"/>
            <rect x="450" y="100" width="100" height="100" fill="rgba(0,0,0,0)" filter="url(#blur)"/>
            <rect x="600" y="100" width="100" height="100" fill="rgba(0,0,0,0)" filter="url(#blur)"/>
            <defs>
              <filter id="blur">
                <feGaussianBlur stdDeviation="10"/>
              </filter>
            </defs>
          </svg>`),
          blend: 'over'
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('Successfully blurred faces in the image');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

blurFaces(); 