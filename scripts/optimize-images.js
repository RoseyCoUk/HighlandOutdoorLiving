#!/usr/bin/env node

/**
 * Image Optimization Script for NMG Outdoor Living
 * 
 * This script helps optimize images for the website by:
 * 1. Converting images to WebP format
 * 2. Creating multiple sizes for responsive images
 * 3. Generating optimized image paths
 * 
 * Usage: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  inputDir: './public',
  outputDir: './public/optimized',
  sizes: [300, 600, 900, 1200, 1800],
  quality: 80,
  formats: ['webp', 'jpg']
};

// Image directories to process
const imageDirs = [
  'landing pages',
  'Nigel Grill Pod'
];

// File extensions to process
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

function findImages(dir) {
  const images = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (imageExtensions.some(ext => item.toLowerCase().endsWith(ext))) {
        images.push({
          path: fullPath,
          relativePath: path.relative(config.inputDir, fullPath),
          name: path.basename(item, path.extname(item)),
          extension: path.extname(item)
        });
      }
    });
  }
  
  scanDirectory(dir);
  return images;
}

function generateOptimizedPaths(image) {
  const paths = [];
  
  config.sizes.forEach(size => {
    config.formats.forEach(format => {
      const optimizedPath = path.join(
        config.outputDir,
        path.dirname(image.relativePath),
        `${image.name}-${size}.${format}`
      );
      
      paths.push({
        original: image.path,
        optimized: optimizedPath,
        size,
        format,
        relativePath: path.relative(config.outputDir, optimizedPath)
      });
    });
  });
  
  return paths;
}

function createOptimizationScript() {
  const images = findImages(config.inputDir);
  const optimizationTasks = [];
  
  images.forEach(image => {
    const paths = generateOptimizedPaths(image);
    optimizationTasks.push(...paths);
  });
  
  // Generate shell script for image optimization
  let script = `#!/bin/bash

# Image Optimization Script for NMG Outdoor Living
# Generated on ${new Date().toISOString()}

echo "Starting image optimization..."

# Create output directory
mkdir -p ${config.outputDir}

# Install sharp if not already installed
if ! command -v npx &> /dev/null; then
    echo "npx not found. Please install Node.js and npm."
    exit 1
fi

# Install sharp for image processing
npx sharp --version > /dev/null 2>&1 || npm install sharp

echo "Processing ${optimizationTasks.length} image variations..."

`;

  optimizationTasks.forEach(task => {
    script += `# Optimizing ${task.original} -> ${task.optimized}
mkdir -p "$(dirname "${task.optimized}")"
npx sharp "${task.original}" --resize ${task.size} --format ${task.format} --quality ${config.quality} --output "${task.optimized}"

`;
  });
  
  script += `
echo "Image optimization complete!"
echo "Optimized images saved to: ${config.outputDir}"
echo "Total variations created: ${optimizationTasks.length}"
`;

  // Write the script
  const scriptPath = path.join(__dirname, 'optimize-images.sh');
  fs.writeFileSync(scriptPath, script);
  fs.chmodSync(scriptPath, '755');
  
  console.log(`✅ Optimization script created: ${scriptPath}`);
  console.log(`📊 Found ${images.length} images to optimize`);
  console.log(`🔄 Will create ${optimizationTasks.length} optimized variations`);
  console.log(`📁 Output directory: ${config.outputDir}`);
  
  return optimizationTasks;
}

function generateImageComponent() {
  let component = `// Auto-generated image optimization component
// Generated on ${new Date().toISOString()}

export const optimizedImages = {
`;

  const images = findImages(config.inputDir);
  
  images.forEach(image => {
    const paths = generateOptimizedPaths(image);
    const key = image.relativePath.replace(/[^a-zA-Z0-9]/g, '_');
    
    component += `  "${key}": {
    original: "${image.relativePath}",
    optimized: {
`;
    
    config.sizes.forEach(size => {
      component += `      ${size}: {
`;
      config.formats.forEach(format => {
        const optimizedPath = paths.find(p => p.size === size && p.format === format);
        component += `        ${format}: "${optimizedPath.relativePath}",\n`;
      });
      component += `      },\n`;
    });
    
    component += `    }
  },\n`;
  });
  
  component += `};

export default optimizedImages;
`;

  const componentPath = path.join(__dirname, '..', 'src', 'data', 'optimizedImages.ts');
  const componentDir = path.dirname(componentPath);
  
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  fs.writeFileSync(componentPath, component);
  console.log(`✅ Image component generated: ${componentPath}`);
}

// Main execution
console.log('🚀 NMG Outdoor Living - Image Optimization Script');
console.log('================================================\n');

try {
  const tasks = createOptimizationScript();
  generateImageComponent();
  
  console.log('\n📋 Next Steps:');
  console.log('1. Run: chmod +x scripts/optimize-images.sh');
  console.log('2. Run: ./scripts/optimize-images.sh');
  console.log('3. Update components to use OptimizedImage component');
  console.log('4. Test performance improvements');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
} 