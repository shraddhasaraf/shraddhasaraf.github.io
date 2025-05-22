const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
    const inputSvg = path.join(__dirname, '../src/assets/logo.svg');
    const publicDir = path.join(__dirname, '../public');
    
    // Read the SVG file
    const svgBuffer = await fs.readFile(inputSvg);
    
    // Generate different sizes
    const sizes = [16, 32, 48, 64, 192, 512];
    
    for (const size of sizes) {
        await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(path.join(publicDir, size === 192 ? 'logo192.png' : 
                                        size === 512 ? 'logo512.png' :
                                        `favicon-${size}x${size}.png`));
    }
    
    // Generate favicon.ico (combines 16x16, 32x32, and 48x48)
    await sharp(svgBuffer)
        .resize(32, 32)
        .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);
