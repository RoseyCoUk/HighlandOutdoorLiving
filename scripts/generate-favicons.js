#!/usr/bin/env node

/**
 * Favicon Generation Script for Highland Outdoor Living
 * 
 * This script will help generate all the required favicon files
 * from the existing logo.png file.
 * 
 * Requirements:
 * - Install sharp: npm install sharp
 * - Run: node scripts/generate-favicons.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const logoPath = 'public/logo.png';
const outputDir = 'public';

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Logo file not found:', logoPath);
  process.exit(1);
}

console.log('🎨 Generating favicon files from', logoPath);

// Create a simple favicon generator
async function generateFavicons() {
  try {
    // Read the logo
    const logoBuffer = fs.readFileSync(logoPath);
    
    // Generate favicon.ico (16x16 and 32x32 combined)
    console.log('📱 Generating favicon.ico...');
    await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));
    
    await sharp(logoBuffer)
      .resize(16, 16, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
    
    // Generate apple-touch-icon
    console.log('🍎 Generating apple-touch-icon...');
    await sharp(logoBuffer)
      .resize(180, 180, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    // Generate Android Chrome icons
    console.log('🤖 Generating Android Chrome icons...');
    await sharp(logoBuffer)
      .resize(192, 192, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));
    
    await sharp(logoBuffer)
      .resize(512, 512, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
    
    // Create a simple favicon.ico (this is a simplified version)
    console.log('🔗 Creating favicon.ico...');
    await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 197, g: 184, b: 171, alpha: 1 } })
      .png()
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✅ All favicon files generated successfully!');
    console.log('📁 Files created:');
    console.log('   - favicon.ico');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - apple-touch-icon.png');
    console.log('   - android-chrome-192x192.png');
    console.log('   - android-chrome-512x512.png');
    console.log('   - site.webmanifest');
    
    console.log('\n🚀 Next steps:');
    console.log('1. Deploy these files to your website');
    console.log('2. Submit to Google Search Console');
    console.log('3. Wait 24-48 hours for Google to update');
    console.log('4. Check search results for updated favicon');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateFavicons();
