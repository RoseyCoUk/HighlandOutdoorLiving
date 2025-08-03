#!/bin/bash

# Image Optimization Script for NMG Outdoor Living
# Generated on 2025-08-03T23:18:33.761Z

echo "Starting image optimization..."

# Create output directory
mkdir -p ./public/optimized

# Install sharp if not already installed
if ! command -v npx &> /dev/null; then
    echo "npx not found. Please install Node.js and npm."
    exit 1
fi

# Install sharp for image processing
npx sharp --version > /dev/null 2>&1 || npm install sharp

echo "Processing 660 image variations..."

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-300.webp")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/001-300.webp"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-300.jpg")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/001-300.jpg"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-600.webp")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/001-600.webp"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-600.jpg")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/001-600.jpg"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-900.webp")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/001-900.webp"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-900.jpg")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/001-900.jpg"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-1200.webp")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/001-1200.webp"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-1200.jpg")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/001-1200.jpg"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-1800.webp")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/001-1800.webp"

# Optimizing public/Nigel Grill Pod/001.jpg -> public/optimized/Nigel Grill Pod/001-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/001-1800.jpg")"
npx sharp "public/Nigel Grill Pod/001.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/001-1800.jpg"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-300.webp")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/002-300.webp"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-300.jpg")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/002-300.jpg"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-600.webp")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/002-600.webp"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-600.jpg")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/002-600.jpg"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-900.webp")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/002-900.webp"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-900.jpg")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/002-900.jpg"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-1200.webp")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/002-1200.webp"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-1200.jpg")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/002-1200.jpg"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-1800.webp")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/002-1800.webp"

# Optimizing public/Nigel Grill Pod/002.jpg -> public/optimized/Nigel Grill Pod/002-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/002-1800.jpg")"
npx sharp "public/Nigel Grill Pod/002.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/002-1800.jpg"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-300.webp")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/003-300.webp"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-300.jpg")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/003-300.jpg"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-600.webp")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/003-600.webp"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-600.jpg")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/003-600.jpg"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-900.webp")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/003-900.webp"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-900.jpg")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/003-900.jpg"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-1200.webp")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/003-1200.webp"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-1200.jpg")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/003-1200.jpg"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-1800.webp")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/003-1800.webp"

# Optimizing public/Nigel Grill Pod/003.jpg -> public/optimized/Nigel Grill Pod/003-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/003-1800.jpg")"
npx sharp "public/Nigel Grill Pod/003.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/003-1800.jpg"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-300.webp")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/004-300.webp"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-300.jpg")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/004-300.jpg"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-600.webp")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/004-600.webp"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-600.jpg")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/004-600.jpg"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-900.webp")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/004-900.webp"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-900.jpg")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/004-900.jpg"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-1200.webp")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/004-1200.webp"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-1200.jpg")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/004-1200.jpg"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-1800.webp")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/004-1800.webp"

# Optimizing public/Nigel Grill Pod/004.jpg -> public/optimized/Nigel Grill Pod/004-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/004-1800.jpg")"
npx sharp "public/Nigel Grill Pod/004.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/004-1800.jpg"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-300.webp")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/005-300.webp"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-300.jpg")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/005-300.jpg"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-600.webp")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/005-600.webp"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-600.jpg")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/005-600.jpg"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-900.webp")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/005-900.webp"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-900.jpg")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/005-900.jpg"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-1200.webp")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/005-1200.webp"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-1200.jpg")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/005-1200.jpg"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-1800.webp")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/005-1800.webp"

# Optimizing public/Nigel Grill Pod/005.jpg -> public/optimized/Nigel Grill Pod/005-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/005-1800.jpg")"
npx sharp "public/Nigel Grill Pod/005.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/005-1800.jpg"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-300.webp")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/006-300.webp"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-300.jpg")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/006-300.jpg"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-600.webp")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/006-600.webp"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-600.jpg")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/006-600.jpg"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-900.webp")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/006-900.webp"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-900.jpg")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/006-900.jpg"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-1200.webp")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/006-1200.webp"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-1200.jpg")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/006-1200.jpg"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-1800.webp")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/006-1800.webp"

# Optimizing public/Nigel Grill Pod/006.jpg -> public/optimized/Nigel Grill Pod/006-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/006-1800.jpg")"
npx sharp "public/Nigel Grill Pod/006.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/006-1800.jpg"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-300.webp")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/007-300.webp"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-300.jpg")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/007-300.jpg"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-600.webp")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/007-600.webp"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-600.jpg")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/007-600.jpg"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-900.webp")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/007-900.webp"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-900.jpg")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/007-900.jpg"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-1200.webp")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/007-1200.webp"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-1200.jpg")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/007-1200.jpg"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-1800.webp")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/007-1800.webp"

# Optimizing public/Nigel Grill Pod/007.jpg -> public/optimized/Nigel Grill Pod/007-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/007-1800.jpg")"
npx sharp "public/Nigel Grill Pod/007.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/007-1800.jpg"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-300.webp")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/008-300.webp"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-300.jpg")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/008-300.jpg"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-600.webp")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/008-600.webp"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-600.jpg")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/008-600.jpg"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-900.webp")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/008-900.webp"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-900.jpg")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/008-900.jpg"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-1200.webp")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/008-1200.webp"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-1200.jpg")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/008-1200.jpg"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-1800.webp")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/008-1800.webp"

# Optimizing public/Nigel Grill Pod/008.jpg -> public/optimized/Nigel Grill Pod/008-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/008-1800.jpg")"
npx sharp "public/Nigel Grill Pod/008.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/008-1800.jpg"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-300.webp")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/009-300.webp"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-300.jpg")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/009-300.jpg"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-600.webp")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/009-600.webp"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-600.jpg")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/009-600.jpg"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-900.webp")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/009-900.webp"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-900.jpg")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/009-900.jpg"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-1200.webp")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/009-1200.webp"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-1200.jpg")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/009-1200.jpg"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-1800.webp")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/009-1800.webp"

# Optimizing public/Nigel Grill Pod/009.jpg -> public/optimized/Nigel Grill Pod/009-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/009-1800.jpg")"
npx sharp "public/Nigel Grill Pod/009.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/009-1800.jpg"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-300.webp")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/010-300.webp"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-300.jpg")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/010-300.jpg"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-600.webp")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/010-600.webp"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-600.jpg")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/010-600.jpg"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-900.webp")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/010-900.webp"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-900.jpg")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/010-900.jpg"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-1200.webp")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/010-1200.webp"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-1200.jpg")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/010-1200.jpg"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-1800.webp")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/010-1800.webp"

# Optimizing public/Nigel Grill Pod/010.jpg -> public/optimized/Nigel Grill Pod/010-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/010-1800.jpg")"
npx sharp "public/Nigel Grill Pod/010.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/010-1800.jpg"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-300.webp")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/011-300.webp"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-300.jpg")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/011-300.jpg"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-600.webp")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/011-600.webp"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-600.jpg")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/011-600.jpg"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-900.webp")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/011-900.webp"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-900.jpg")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/011-900.jpg"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-1200.webp")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/011-1200.webp"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-1200.jpg")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/011-1200.jpg"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-1800.webp")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/011-1800.webp"

# Optimizing public/Nigel Grill Pod/011.jpg -> public/optimized/Nigel Grill Pod/011-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/011-1800.jpg")"
npx sharp "public/Nigel Grill Pod/011.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/011-1800.jpg"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-300.webp")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/012-300.webp"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-300.jpg")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/012-300.jpg"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-600.webp")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/012-600.webp"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-600.jpg")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/012-600.jpg"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-900.webp")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/012-900.webp"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-900.jpg")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/012-900.jpg"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-1200.webp")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/012-1200.webp"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-1200.jpg")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/012-1200.jpg"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-1800.webp")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/012-1800.webp"

# Optimizing public/Nigel Grill Pod/012.jpg -> public/optimized/Nigel Grill Pod/012-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/012-1800.jpg")"
npx sharp "public/Nigel Grill Pod/012.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/012-1800.jpg"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-300.webp")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/013-300.webp"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-300.jpg")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/013-300.jpg"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-600.webp")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/013-600.webp"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-600.jpg")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/013-600.jpg"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-900.webp")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/013-900.webp"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-900.jpg")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/013-900.jpg"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-1200.webp")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/013-1200.webp"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-1200.jpg")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/013-1200.jpg"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-1800.webp")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/013-1800.webp"

# Optimizing public/Nigel Grill Pod/013.jpg -> public/optimized/Nigel Grill Pod/013-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/013-1800.jpg")"
npx sharp "public/Nigel Grill Pod/013.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/013-1800.jpg"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-300.webp")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/014-300.webp"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-300.jpg")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/014-300.jpg"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-600.webp")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/014-600.webp"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-600.jpg")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/014-600.jpg"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-900.webp")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/014-900.webp"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-900.jpg")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/014-900.jpg"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-1200.webp")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/014-1200.webp"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-1200.jpg")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/014-1200.jpg"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-1800.webp")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/014-1800.webp"

# Optimizing public/Nigel Grill Pod/014.jpg -> public/optimized/Nigel Grill Pod/014-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/014-1800.jpg")"
npx sharp "public/Nigel Grill Pod/014.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/014-1800.jpg"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-300.webp")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/015-300.webp"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-300.jpg")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/015-300.jpg"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-600.webp")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/015-600.webp"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-600.jpg")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/015-600.jpg"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-900.webp")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/015-900.webp"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-900.jpg")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/015-900.jpg"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-1200.webp")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/015-1200.webp"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-1200.jpg")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/015-1200.jpg"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-1800.webp")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/015-1800.webp"

# Optimizing public/Nigel Grill Pod/015.jpg -> public/optimized/Nigel Grill Pod/015-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/015-1800.jpg")"
npx sharp "public/Nigel Grill Pod/015.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/015-1800.jpg"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-300.webp")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/016-300.webp"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-300.jpg")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/016-300.jpg"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-600.webp")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/016-600.webp"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-600.jpg")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/016-600.jpg"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-900.webp")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/016-900.webp"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-900.jpg")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/016-900.jpg"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-1200.webp")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/016-1200.webp"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-1200.jpg")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/016-1200.jpg"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-1800.webp")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/016-1800.webp"

# Optimizing public/Nigel Grill Pod/016.jpg -> public/optimized/Nigel Grill Pod/016-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/016-1800.jpg")"
npx sharp "public/Nigel Grill Pod/016.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/016-1800.jpg"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-300.webp")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/017-300.webp"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-300.jpg")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/017-300.jpg"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-600.webp")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/017-600.webp"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-600.jpg")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/017-600.jpg"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-900.webp")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/017-900.webp"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-900.jpg")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/017-900.jpg"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-1200.webp")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/017-1200.webp"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-1200.jpg")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/017-1200.jpg"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-1800.webp")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/017-1800.webp"

# Optimizing public/Nigel Grill Pod/017.jpg -> public/optimized/Nigel Grill Pod/017-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/017-1800.jpg")"
npx sharp "public/Nigel Grill Pod/017.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/017-1800.jpg"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-300.webp")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/018-300.webp"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-300.jpg")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/018-300.jpg"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-600.webp")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/018-600.webp"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-600.jpg")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/018-600.jpg"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-900.webp")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/018-900.webp"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-900.jpg")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/018-900.jpg"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-1200.webp")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/018-1200.webp"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-1200.jpg")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/018-1200.jpg"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-1800.webp")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/018-1800.webp"

# Optimizing public/Nigel Grill Pod/018.jpg -> public/optimized/Nigel Grill Pod/018-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/018-1800.jpg")"
npx sharp "public/Nigel Grill Pod/018.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/018-1800.jpg"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-300.webp")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/019-300.webp"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-300.jpg")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/019-300.jpg"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-600.webp")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/019-600.webp"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-600.jpg")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/019-600.jpg"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-900.webp")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/019-900.webp"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-900.jpg")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/019-900.jpg"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-1200.webp")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/019-1200.webp"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-1200.jpg")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/019-1200.jpg"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-1800.webp")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/019-1800.webp"

# Optimizing public/Nigel Grill Pod/019.jpg -> public/optimized/Nigel Grill Pod/019-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/019-1800.jpg")"
npx sharp "public/Nigel Grill Pod/019.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/019-1800.jpg"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-300.webp")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/020-300.webp"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-300.jpg")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/020-300.jpg"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-600.webp")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/020-600.webp"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-600.jpg")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/020-600.jpg"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-900.webp")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/020-900.webp"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-900.jpg")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/020-900.jpg"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-1200.webp")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/020-1200.webp"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-1200.jpg")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/020-1200.jpg"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-1800.webp")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/020-1800.webp"

# Optimizing public/Nigel Grill Pod/020.jpg -> public/optimized/Nigel Grill Pod/020-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/020-1800.jpg")"
npx sharp "public/Nigel Grill Pod/020.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/020-1800.jpg"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-300.webp")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/021-300.webp"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-300.jpg")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/021-300.jpg"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-600.webp")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/021-600.webp"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-600.jpg")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/021-600.jpg"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-900.webp")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/021-900.webp"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-900.jpg")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/021-900.jpg"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-1200.webp")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/021-1200.webp"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-1200.jpg")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/021-1200.jpg"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-1800.webp")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/021-1800.webp"

# Optimizing public/Nigel Grill Pod/021.jpg -> public/optimized/Nigel Grill Pod/021-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/021-1800.jpg")"
npx sharp "public/Nigel Grill Pod/021.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/021-1800.jpg"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-300.webp")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-300.webp"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-300.jpg")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-300.jpg"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-600.webp")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-600.webp"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-600.jpg")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-600.jpg"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-900.webp")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-900.webp"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-900.jpg")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-900.jpg"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-1200.webp")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-1200.webp"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-1200.jpg")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-1200.jpg"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-1800.webp")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-1800.webp"

# Optimizing public/Nigel Grill Pod/022 HiRes.jpg -> public/optimized/Nigel Grill Pod/022 HiRes-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022 HiRes-1800.jpg")"
npx sharp "public/Nigel Grill Pod/022 HiRes.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022 HiRes-1800.jpg"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-300.webp")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022-300.webp"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-300.jpg")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022-300.jpg"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-600.webp")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022-600.webp"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-600.jpg")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022-600.jpg"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-900.webp")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022-900.webp"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-900.jpg")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022-900.jpg"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-1200.webp")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022-1200.webp"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-1200.jpg")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022-1200.jpg"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-1800.webp")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/022-1800.webp"

# Optimizing public/Nigel Grill Pod/022.jpg -> public/optimized/Nigel Grill Pod/022-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/022-1800.jpg")"
npx sharp "public/Nigel Grill Pod/022.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/022-1800.jpg"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-300.webp")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/023-300.webp"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-300.jpg")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/023-300.jpg"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-600.webp")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/023-600.webp"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-600.jpg")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/023-600.jpg"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-900.webp")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/023-900.webp"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-900.jpg")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/023-900.jpg"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-1200.webp")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/023-1200.webp"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-1200.jpg")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/023-1200.jpg"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-1800.webp")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/023-1800.webp"

# Optimizing public/Nigel Grill Pod/023.jpg -> public/optimized/Nigel Grill Pod/023-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/023-1800.jpg")"
npx sharp "public/Nigel Grill Pod/023.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/023-1800.jpg"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-300.webp")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/024-300.webp"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-300.jpg")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/024-300.jpg"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-600.webp")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/024-600.webp"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-600.jpg")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/024-600.jpg"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-900.webp")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/024-900.webp"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-900.jpg")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/024-900.jpg"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-1200.webp")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/024-1200.webp"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-1200.jpg")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/024-1200.jpg"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-1800.webp")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/024-1800.webp"

# Optimizing public/Nigel Grill Pod/024.jpg -> public/optimized/Nigel Grill Pod/024-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/024-1800.jpg")"
npx sharp "public/Nigel Grill Pod/024.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/024-1800.jpg"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-300.webp")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/025-300.webp"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-300.jpg")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/025-300.jpg"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-600.webp")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/025-600.webp"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-600.jpg")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/025-600.jpg"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-900.webp")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/025-900.webp"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-900.jpg")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/025-900.jpg"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-1200.webp")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/025-1200.webp"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-1200.jpg")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/025-1200.jpg"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-1800.webp")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/025-1800.webp"

# Optimizing public/Nigel Grill Pod/025.jpg -> public/optimized/Nigel Grill Pod/025-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/025-1800.jpg")"
npx sharp "public/Nigel Grill Pod/025.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/025-1800.jpg"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-300.webp")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/026-300.webp"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-300.jpg")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/026-300.jpg"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-600.webp")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/026-600.webp"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-600.jpg")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/026-600.jpg"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-900.webp")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/026-900.webp"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-900.jpg")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/026-900.jpg"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-1200.webp")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/026-1200.webp"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-1200.jpg")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/026-1200.jpg"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-1800.webp")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/026-1800.webp"

# Optimizing public/Nigel Grill Pod/026.jpg -> public/optimized/Nigel Grill Pod/026-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/026-1800.jpg")"
npx sharp "public/Nigel Grill Pod/026.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/026-1800.jpg"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-300.webp")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/027-300.webp"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-300.jpg")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/027-300.jpg"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-600.webp")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/027-600.webp"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-600.jpg")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/027-600.jpg"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-900.webp")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/027-900.webp"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-900.jpg")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/027-900.jpg"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-1200.webp")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/027-1200.webp"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-1200.jpg")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/027-1200.jpg"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-1800.webp")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/027-1800.webp"

# Optimizing public/Nigel Grill Pod/027.jpg -> public/optimized/Nigel Grill Pod/027-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/027-1800.jpg")"
npx sharp "public/Nigel Grill Pod/027.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/027-1800.jpg"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-300.webp")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/028-300.webp"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-300.jpg")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/028-300.jpg"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-600.webp")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/028-600.webp"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-600.jpg")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/028-600.jpg"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-900.webp")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/028-900.webp"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-900.jpg")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/028-900.jpg"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-1200.webp")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/028-1200.webp"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-1200.jpg")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/028-1200.jpg"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-1800.webp")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/028-1800.webp"

# Optimizing public/Nigel Grill Pod/028.jpg -> public/optimized/Nigel Grill Pod/028-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/028-1800.jpg")"
npx sharp "public/Nigel Grill Pod/028.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/028-1800.jpg"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-300.webp")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/029-300.webp"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-300.jpg")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/029-300.jpg"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-600.webp")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/029-600.webp"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-600.jpg")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/029-600.jpg"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-900.webp")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/029-900.webp"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-900.jpg")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/029-900.jpg"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-1200.webp")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/029-1200.webp"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-1200.jpg")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/029-1200.jpg"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-1800.webp")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/029-1800.webp"

# Optimizing public/Nigel Grill Pod/029.jpg -> public/optimized/Nigel Grill Pod/029-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/029-1800.jpg")"
npx sharp "public/Nigel Grill Pod/029.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/029-1800.jpg"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-300.webp")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/030-300.webp"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-300.jpg")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/030-300.jpg"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-600.webp")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/030-600.webp"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-600.jpg")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/030-600.jpg"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-900.webp")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/030-900.webp"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-900.jpg")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/030-900.jpg"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-1200.webp")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/030-1200.webp"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-1200.jpg")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/030-1200.jpg"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-1800.webp")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/030-1800.webp"

# Optimizing public/Nigel Grill Pod/030.jpg -> public/optimized/Nigel Grill Pod/030-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/030-1800.jpg")"
npx sharp "public/Nigel Grill Pod/030.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/030-1800.jpg"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-300.webp")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/031-300.webp"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-300.jpg")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/031-300.jpg"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-600.webp")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/031-600.webp"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-600.jpg")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/031-600.jpg"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-900.webp")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/031-900.webp"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-900.jpg")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/031-900.jpg"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-1200.webp")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/031-1200.webp"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-1200.jpg")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/031-1200.jpg"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-1800.webp")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/031-1800.webp"

# Optimizing public/Nigel Grill Pod/031.jpg -> public/optimized/Nigel Grill Pod/031-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/031-1800.jpg")"
npx sharp "public/Nigel Grill Pod/031.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/031-1800.jpg"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-300.webp")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/032-300.webp"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-300.jpg")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/032-300.jpg"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-600.webp")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/032-600.webp"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-600.jpg")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/032-600.jpg"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-900.webp")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/032-900.webp"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-900.jpg")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/032-900.jpg"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-1200.webp")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/032-1200.webp"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-1200.jpg")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/032-1200.jpg"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-1800.webp")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/032-1800.webp"

# Optimizing public/Nigel Grill Pod/032.jpg -> public/optimized/Nigel Grill Pod/032-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/032-1800.jpg")"
npx sharp "public/Nigel Grill Pod/032.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/032-1800.jpg"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-300.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-300.webp")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/033-300.webp"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-300.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-300.jpg")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/033-300.jpg"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-600.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-600.webp")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/033-600.webp"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-600.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-600.jpg")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/033-600.jpg"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-900.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-900.webp")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/033-900.webp"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-900.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-900.jpg")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/033-900.jpg"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-1200.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-1200.webp")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/033-1200.webp"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-1200.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-1200.jpg")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/033-1200.jpg"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-1800.webp
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-1800.webp")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/Nigel Grill Pod/033-1800.webp"

# Optimizing public/Nigel Grill Pod/033.jpg -> public/optimized/Nigel Grill Pod/033-1800.jpg
mkdir -p "$(dirname "public/optimized/Nigel Grill Pod/033-1800.jpg")"
npx sharp "public/Nigel Grill Pod/033.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/Nigel Grill Pod/033-1800.jpg"

# Optimizing public/Shed1.png -> public/optimized/Shed1-300.webp
mkdir -p "$(dirname "public/optimized/Shed1-300.webp")"
npx sharp "public/Shed1.png" --resize 300 --format webp --quality 80 --output "public/optimized/Shed1-300.webp"

# Optimizing public/Shed1.png -> public/optimized/Shed1-300.jpg
mkdir -p "$(dirname "public/optimized/Shed1-300.jpg")"
npx sharp "public/Shed1.png" --resize 300 --format jpg --quality 80 --output "public/optimized/Shed1-300.jpg"

# Optimizing public/Shed1.png -> public/optimized/Shed1-600.webp
mkdir -p "$(dirname "public/optimized/Shed1-600.webp")"
npx sharp "public/Shed1.png" --resize 600 --format webp --quality 80 --output "public/optimized/Shed1-600.webp"

# Optimizing public/Shed1.png -> public/optimized/Shed1-600.jpg
mkdir -p "$(dirname "public/optimized/Shed1-600.jpg")"
npx sharp "public/Shed1.png" --resize 600 --format jpg --quality 80 --output "public/optimized/Shed1-600.jpg"

# Optimizing public/Shed1.png -> public/optimized/Shed1-900.webp
mkdir -p "$(dirname "public/optimized/Shed1-900.webp")"
npx sharp "public/Shed1.png" --resize 900 --format webp --quality 80 --output "public/optimized/Shed1-900.webp"

# Optimizing public/Shed1.png -> public/optimized/Shed1-900.jpg
mkdir -p "$(dirname "public/optimized/Shed1-900.jpg")"
npx sharp "public/Shed1.png" --resize 900 --format jpg --quality 80 --output "public/optimized/Shed1-900.jpg"

# Optimizing public/Shed1.png -> public/optimized/Shed1-1200.webp
mkdir -p "$(dirname "public/optimized/Shed1-1200.webp")"
npx sharp "public/Shed1.png" --resize 1200 --format webp --quality 80 --output "public/optimized/Shed1-1200.webp"

# Optimizing public/Shed1.png -> public/optimized/Shed1-1200.jpg
mkdir -p "$(dirname "public/optimized/Shed1-1200.jpg")"
npx sharp "public/Shed1.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/Shed1-1200.jpg"

# Optimizing public/Shed1.png -> public/optimized/Shed1-1800.webp
mkdir -p "$(dirname "public/optimized/Shed1-1800.webp")"
npx sharp "public/Shed1.png" --resize 1800 --format webp --quality 80 --output "public/optimized/Shed1-1800.webp"

# Optimizing public/Shed1.png -> public/optimized/Shed1-1800.jpg
mkdir -p "$(dirname "public/optimized/Shed1-1800.jpg")"
npx sharp "public/Shed1.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/Shed1-1800.jpg"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-300.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-300.webp")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 300 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy copy-300.webp"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-300.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-300.jpg")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy copy-300.jpg"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-600.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-600.webp")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 600 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy copy-600.webp"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-600.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-600.jpg")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy copy-600.jpg"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-900.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-900.webp")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 900 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy copy-900.webp"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-900.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-900.jpg")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy copy-900.jpg"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-1200.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-1200.webp")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy copy-1200.webp"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-1200.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-1200.jpg")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy copy-1200.jpg"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-1800.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-1800.webp")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy copy-1800.webp"

# Optimizing public/image copy copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy copy-1800.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy copy-1800.jpg")"
npx sharp "public/image copy copy copy copy copy copy.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy copy-1800.jpg"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-300.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-300.webp")"
npx sharp "public/image copy copy copy copy copy.png" --resize 300 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy-300.webp"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-300.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-300.jpg")"
npx sharp "public/image copy copy copy copy copy.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy-300.jpg"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-600.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-600.webp")"
npx sharp "public/image copy copy copy copy copy.png" --resize 600 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy-600.webp"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-600.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-600.jpg")"
npx sharp "public/image copy copy copy copy copy.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy-600.jpg"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-900.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-900.webp")"
npx sharp "public/image copy copy copy copy copy.png" --resize 900 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy-900.webp"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-900.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-900.jpg")"
npx sharp "public/image copy copy copy copy copy.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy-900.jpg"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-1200.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-1200.webp")"
npx sharp "public/image copy copy copy copy copy.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy-1200.webp"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-1200.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-1200.jpg")"
npx sharp "public/image copy copy copy copy copy.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy-1200.jpg"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-1800.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-1800.webp")"
npx sharp "public/image copy copy copy copy copy.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image copy copy copy copy copy-1800.webp"

# Optimizing public/image copy copy copy copy copy.png -> public/optimized/image copy copy copy copy copy-1800.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy copy copy-1800.jpg")"
npx sharp "public/image copy copy copy copy copy.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image copy copy copy copy copy-1800.jpg"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-300.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy-300.webp")"
npx sharp "public/image copy copy copy.png" --resize 300 --format webp --quality 80 --output "public/optimized/image copy copy copy-300.webp"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-300.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy-300.jpg")"
npx sharp "public/image copy copy copy.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image copy copy copy-300.jpg"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-600.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy-600.webp")"
npx sharp "public/image copy copy copy.png" --resize 600 --format webp --quality 80 --output "public/optimized/image copy copy copy-600.webp"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-600.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy-600.jpg")"
npx sharp "public/image copy copy copy.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image copy copy copy-600.jpg"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-900.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy-900.webp")"
npx sharp "public/image copy copy copy.png" --resize 900 --format webp --quality 80 --output "public/optimized/image copy copy copy-900.webp"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-900.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy-900.jpg")"
npx sharp "public/image copy copy copy.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image copy copy copy-900.jpg"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-1200.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy-1200.webp")"
npx sharp "public/image copy copy copy.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image copy copy copy-1200.webp"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-1200.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy-1200.jpg")"
npx sharp "public/image copy copy copy.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image copy copy copy-1200.jpg"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-1800.webp
mkdir -p "$(dirname "public/optimized/image copy copy copy-1800.webp")"
npx sharp "public/image copy copy copy.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image copy copy copy-1800.webp"

# Optimizing public/image copy copy copy.png -> public/optimized/image copy copy copy-1800.jpg
mkdir -p "$(dirname "public/optimized/image copy copy copy-1800.jpg")"
npx sharp "public/image copy copy copy.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image copy copy copy-1800.jpg"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-300.webp
mkdir -p "$(dirname "public/optimized/image copy copy-300.webp")"
npx sharp "public/image copy copy.png" --resize 300 --format webp --quality 80 --output "public/optimized/image copy copy-300.webp"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-300.jpg
mkdir -p "$(dirname "public/optimized/image copy copy-300.jpg")"
npx sharp "public/image copy copy.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image copy copy-300.jpg"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-600.webp
mkdir -p "$(dirname "public/optimized/image copy copy-600.webp")"
npx sharp "public/image copy copy.png" --resize 600 --format webp --quality 80 --output "public/optimized/image copy copy-600.webp"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-600.jpg
mkdir -p "$(dirname "public/optimized/image copy copy-600.jpg")"
npx sharp "public/image copy copy.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image copy copy-600.jpg"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-900.webp
mkdir -p "$(dirname "public/optimized/image copy copy-900.webp")"
npx sharp "public/image copy copy.png" --resize 900 --format webp --quality 80 --output "public/optimized/image copy copy-900.webp"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-900.jpg
mkdir -p "$(dirname "public/optimized/image copy copy-900.jpg")"
npx sharp "public/image copy copy.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image copy copy-900.jpg"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-1200.webp
mkdir -p "$(dirname "public/optimized/image copy copy-1200.webp")"
npx sharp "public/image copy copy.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image copy copy-1200.webp"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-1200.jpg
mkdir -p "$(dirname "public/optimized/image copy copy-1200.jpg")"
npx sharp "public/image copy copy.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image copy copy-1200.jpg"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-1800.webp
mkdir -p "$(dirname "public/optimized/image copy copy-1800.webp")"
npx sharp "public/image copy copy.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image copy copy-1800.webp"

# Optimizing public/image copy copy.png -> public/optimized/image copy copy-1800.jpg
mkdir -p "$(dirname "public/optimized/image copy copy-1800.jpg")"
npx sharp "public/image copy copy.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image copy copy-1800.jpg"

# Optimizing public/image copy.png -> public/optimized/image copy-300.webp
mkdir -p "$(dirname "public/optimized/image copy-300.webp")"
npx sharp "public/image copy.png" --resize 300 --format webp --quality 80 --output "public/optimized/image copy-300.webp"

# Optimizing public/image copy.png -> public/optimized/image copy-300.jpg
mkdir -p "$(dirname "public/optimized/image copy-300.jpg")"
npx sharp "public/image copy.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image copy-300.jpg"

# Optimizing public/image copy.png -> public/optimized/image copy-600.webp
mkdir -p "$(dirname "public/optimized/image copy-600.webp")"
npx sharp "public/image copy.png" --resize 600 --format webp --quality 80 --output "public/optimized/image copy-600.webp"

# Optimizing public/image copy.png -> public/optimized/image copy-600.jpg
mkdir -p "$(dirname "public/optimized/image copy-600.jpg")"
npx sharp "public/image copy.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image copy-600.jpg"

# Optimizing public/image copy.png -> public/optimized/image copy-900.webp
mkdir -p "$(dirname "public/optimized/image copy-900.webp")"
npx sharp "public/image copy.png" --resize 900 --format webp --quality 80 --output "public/optimized/image copy-900.webp"

# Optimizing public/image copy.png -> public/optimized/image copy-900.jpg
mkdir -p "$(dirname "public/optimized/image copy-900.jpg")"
npx sharp "public/image copy.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image copy-900.jpg"

# Optimizing public/image copy.png -> public/optimized/image copy-1200.webp
mkdir -p "$(dirname "public/optimized/image copy-1200.webp")"
npx sharp "public/image copy.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image copy-1200.webp"

# Optimizing public/image copy.png -> public/optimized/image copy-1200.jpg
mkdir -p "$(dirname "public/optimized/image copy-1200.jpg")"
npx sharp "public/image copy.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image copy-1200.jpg"

# Optimizing public/image copy.png -> public/optimized/image copy-1800.webp
mkdir -p "$(dirname "public/optimized/image copy-1800.webp")"
npx sharp "public/image copy.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image copy-1800.webp"

# Optimizing public/image copy.png -> public/optimized/image copy-1800.jpg
mkdir -p "$(dirname "public/optimized/image copy-1800.jpg")"
npx sharp "public/image copy.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image copy-1800.jpg"

# Optimizing public/image.png -> public/optimized/image-300.webp
mkdir -p "$(dirname "public/optimized/image-300.webp")"
npx sharp "public/image.png" --resize 300 --format webp --quality 80 --output "public/optimized/image-300.webp"

# Optimizing public/image.png -> public/optimized/image-300.jpg
mkdir -p "$(dirname "public/optimized/image-300.jpg")"
npx sharp "public/image.png" --resize 300 --format jpg --quality 80 --output "public/optimized/image-300.jpg"

# Optimizing public/image.png -> public/optimized/image-600.webp
mkdir -p "$(dirname "public/optimized/image-600.webp")"
npx sharp "public/image.png" --resize 600 --format webp --quality 80 --output "public/optimized/image-600.webp"

# Optimizing public/image.png -> public/optimized/image-600.jpg
mkdir -p "$(dirname "public/optimized/image-600.jpg")"
npx sharp "public/image.png" --resize 600 --format jpg --quality 80 --output "public/optimized/image-600.jpg"

# Optimizing public/image.png -> public/optimized/image-900.webp
mkdir -p "$(dirname "public/optimized/image-900.webp")"
npx sharp "public/image.png" --resize 900 --format webp --quality 80 --output "public/optimized/image-900.webp"

# Optimizing public/image.png -> public/optimized/image-900.jpg
mkdir -p "$(dirname "public/optimized/image-900.jpg")"
npx sharp "public/image.png" --resize 900 --format jpg --quality 80 --output "public/optimized/image-900.jpg"

# Optimizing public/image.png -> public/optimized/image-1200.webp
mkdir -p "$(dirname "public/optimized/image-1200.webp")"
npx sharp "public/image.png" --resize 1200 --format webp --quality 80 --output "public/optimized/image-1200.webp"

# Optimizing public/image.png -> public/optimized/image-1200.jpg
mkdir -p "$(dirname "public/optimized/image-1200.jpg")"
npx sharp "public/image.png" --resize 1200 --format jpg --quality 80 --output "public/optimized/image-1200.jpg"

# Optimizing public/image.png -> public/optimized/image-1800.webp
mkdir -p "$(dirname "public/optimized/image-1800.webp")"
npx sharp "public/image.png" --resize 1800 --format webp --quality 80 --output "public/optimized/image-1800.webp"

# Optimizing public/image.png -> public/optimized/image-1800.jpg
mkdir -p "$(dirname "public/optimized/image-1800.jpg")"
npx sharp "public/image.png" --resize 1800 --format jpg --quality 80 --output "public/optimized/image-1800.jpg"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-300.webp")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod1-300.webp"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-300.jpg")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod1-300.jpg"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-600.webp")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod1-600.webp"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-600.jpg")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod1-600.jpg"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-900.webp")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod1-900.webp"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-900.jpg")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod1-900.jpg"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-1200.webp")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod1-1200.webp"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-1200.jpg")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod1-1200.jpg"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-1800.webp")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod1-1800.webp"

# Optimizing public/landing pages/GrillPod1.JPG -> public/optimized/landing pages/GrillPod1-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod1-1800.jpg")"
npx sharp "public/landing pages/GrillPod1.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod1-1800.jpg"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-300.webp")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod2-300.webp"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-300.jpg")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod2-300.jpg"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-600.webp")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod2-600.webp"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-600.jpg")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod2-600.jpg"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-900.webp")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod2-900.webp"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-900.jpg")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod2-900.jpg"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-1200.webp")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod2-1200.webp"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-1200.jpg")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod2-1200.jpg"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-1800.webp")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod2-1800.webp"

# Optimizing public/landing pages/GrillPod2.JPG -> public/optimized/landing pages/GrillPod2-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod2-1800.jpg")"
npx sharp "public/landing pages/GrillPod2.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod2-1800.jpg"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-300.webp")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod3-300.webp"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-300.jpg")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod3-300.jpg"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-600.webp")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod3-600.webp"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-600.jpg")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod3-600.jpg"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-900.webp")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod3-900.webp"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-900.jpg")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod3-900.jpg"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-1200.webp")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod3-1200.webp"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-1200.jpg")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod3-1200.jpg"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-1800.webp")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod3-1800.webp"

# Optimizing public/landing pages/GrillPod3.JPG -> public/optimized/landing pages/GrillPod3-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod3-1800.jpg")"
npx sharp "public/landing pages/GrillPod3.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod3-1800.jpg"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-300.webp")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod4-300.webp"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-300.jpg")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod4-300.jpg"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-600.webp")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod4-600.webp"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-600.jpg")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod4-600.jpg"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-900.webp")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod4-900.webp"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-900.jpg")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod4-900.jpg"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-1200.webp")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod4-1200.webp"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-1200.jpg")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod4-1200.jpg"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-1800.webp")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod4-1800.webp"

# Optimizing public/landing pages/GrillPod4.JPG -> public/optimized/landing pages/GrillPod4-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod4-1800.jpg")"
npx sharp "public/landing pages/GrillPod4.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod4-1800.jpg"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-300.webp")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod5-300.webp"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-300.jpg")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod5-300.jpg"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-600.webp")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod5-600.webp"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-600.jpg")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod5-600.jpg"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-900.webp")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod5-900.webp"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-900.jpg")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod5-900.jpg"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-1200.webp")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod5-1200.webp"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-1200.jpg")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod5-1200.jpg"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-1800.webp")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/GrillPod5-1800.webp"

# Optimizing public/landing pages/GrillPod5.JPG -> public/optimized/landing pages/GrillPod5-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/GrillPod5-1800.jpg")"
npx sharp "public/landing pages/GrillPod5.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/GrillPod5-1800.jpg"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-300.webp")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna1-300.webp"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-300.jpg")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna1-300.jpg"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-600.webp")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna1-600.webp"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-600.jpg")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna1-600.jpg"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-900.webp")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna1-900.webp"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-900.jpg")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna1-900.jpg"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-1200.webp")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna1-1200.webp"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-1200.jpg")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna1-1200.jpg"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-1800.webp")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna1-1800.webp"

# Optimizing public/landing pages/InsideSauna1.JPG -> public/optimized/landing pages/InsideSauna1-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna1-1800.jpg")"
npx sharp "public/landing pages/InsideSauna1.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna1-1800.jpg"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-300.webp")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna2-300.webp"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-300.jpg")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna2-300.jpg"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-600.webp")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna2-600.webp"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-600.jpg")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna2-600.jpg"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-900.webp")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna2-900.webp"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-900.jpg")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna2-900.jpg"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-1200.webp")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna2-1200.webp"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-1200.jpg")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna2-1200.jpg"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-1800.webp")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna2-1800.webp"

# Optimizing public/landing pages/InsideSauna2.JPG -> public/optimized/landing pages/InsideSauna2-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna2-1800.jpg")"
npx sharp "public/landing pages/InsideSauna2.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna2-1800.jpg"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-300.webp")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna3-300.webp"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-300.jpg")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna3-300.jpg"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-600.webp")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna3-600.webp"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-600.jpg")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna3-600.jpg"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-900.webp")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna3-900.webp"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-900.jpg")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna3-900.jpg"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-1200.webp")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna3-1200.webp"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-1200.jpg")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna3-1200.jpg"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-1800.webp")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna3-1800.webp"

# Optimizing public/landing pages/InsideSauna3.JPG -> public/optimized/landing pages/InsideSauna3-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna3-1800.jpg")"
npx sharp "public/landing pages/InsideSauna3.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna3-1800.jpg"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-300.webp")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna4-300.webp"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-300.jpg")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna4-300.jpg"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-600.webp")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna4-600.webp"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-600.jpg")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna4-600.jpg"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-900.webp")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna4-900.webp"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-900.jpg")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna4-900.jpg"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-1200.webp")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna4-1200.webp"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-1200.jpg")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna4-1200.jpg"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-1800.webp")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna4-1800.webp"

# Optimizing public/landing pages/InsideSauna4.JPG -> public/optimized/landing pages/InsideSauna4-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna4-1800.jpg")"
npx sharp "public/landing pages/InsideSauna4.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna4-1800.jpg"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-300.webp")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna5-300.webp"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-300.jpg")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna5-300.jpg"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-600.webp")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna5-600.webp"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-600.jpg")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna5-600.jpg"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-900.webp")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna5-900.webp"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-900.jpg")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna5-900.jpg"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-1200.webp")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna5-1200.webp"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-1200.jpg")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna5-1200.jpg"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-1800.webp")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna5-1800.webp"

# Optimizing public/landing pages/InsideSauna5.JPG -> public/optimized/landing pages/InsideSauna5-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna5-1800.jpg")"
npx sharp "public/landing pages/InsideSauna5.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna5-1800.jpg"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-300.webp")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna6-300.webp"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-300.jpg")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna6-300.jpg"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-600.webp")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna6-600.webp"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-600.jpg")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna6-600.jpg"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-900.webp")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna6-900.webp"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-900.jpg")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna6-900.jpg"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-1200.webp")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna6-1200.webp"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-1200.jpg")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna6-1200.jpg"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-1800.webp")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna6-1800.webp"

# Optimizing public/landing pages/InsideSauna6.JPG -> public/optimized/landing pages/InsideSauna6-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna6-1800.jpg")"
npx sharp "public/landing pages/InsideSauna6.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna6-1800.jpg"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-300.webp")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna7-300.webp"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-300.jpg")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna7-300.jpg"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-600.webp")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna7-600.webp"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-600.jpg")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna7-600.jpg"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-900.webp")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna7-900.webp"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-900.jpg")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna7-900.jpg"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-1200.webp")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna7-1200.webp"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-1200.jpg")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna7-1200.jpg"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-1800.webp")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna7-1800.webp"

# Optimizing public/landing pages/InsideSauna7.JPG -> public/optimized/landing pages/InsideSauna7-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna7-1800.jpg")"
npx sharp "public/landing pages/InsideSauna7.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna7-1800.jpg"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-300.webp")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna8-300.webp"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-300.jpg")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna8-300.jpg"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-600.webp")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna8-600.webp"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-600.jpg")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna8-600.jpg"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-900.webp")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna8-900.webp"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-900.jpg")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna8-900.jpg"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-1200.webp")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna8-1200.webp"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-1200.jpg")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna8-1200.jpg"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-1800.webp")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/InsideSauna8-1800.webp"

# Optimizing public/landing pages/InsideSauna8.JPG -> public/optimized/landing pages/InsideSauna8-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/InsideSauna8-1800.jpg")"
npx sharp "public/landing pages/InsideSauna8.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/InsideSauna8-1800.jpg"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-300.webp")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna1-300.webp"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-300.jpg")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna1-300.jpg"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-600.webp")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna1-600.webp"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-600.jpg")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna1-600.jpg"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-900.webp")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna1-900.webp"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-900.jpg")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna1-900.jpg"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-1200.webp")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna1-1200.webp"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-1200.jpg")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna1-1200.jpg"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-1800.webp")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna1-1800.webp"

# Optimizing public/landing pages/Sauna1.JPG -> public/optimized/landing pages/Sauna1-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna1-1800.jpg")"
npx sharp "public/landing pages/Sauna1.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna1-1800.jpg"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-300.webp")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna2-300.webp"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-300.jpg")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna2-300.jpg"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-600.webp")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna2-600.webp"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-600.jpg")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna2-600.jpg"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-900.webp")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna2-900.webp"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-900.jpg")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna2-900.jpg"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-1200.webp")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna2-1200.webp"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-1200.jpg")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna2-1200.jpg"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-1800.webp")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna2-1800.webp"

# Optimizing public/landing pages/Sauna2.JPG -> public/optimized/landing pages/Sauna2-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna2-1800.jpg")"
npx sharp "public/landing pages/Sauna2.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna2-1800.jpg"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-300.webp")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna3-300.webp"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-300.jpg")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna3-300.jpg"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-600.webp")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna3-600.webp"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-600.jpg")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna3-600.jpg"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-900.webp")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna3-900.webp"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-900.jpg")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna3-900.jpg"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-1200.webp")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna3-1200.webp"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-1200.jpg")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna3-1200.jpg"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-1800.webp")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna3-1800.webp"

# Optimizing public/landing pages/Sauna3.JPG -> public/optimized/landing pages/Sauna3-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna3-1800.jpg")"
npx sharp "public/landing pages/Sauna3.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna3-1800.jpg"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-300.webp")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna4-300.webp"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-300.jpg")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna4-300.jpg"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-600.webp")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna4-600.webp"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-600.jpg")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna4-600.jpg"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-900.webp")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna4-900.webp"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-900.jpg")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna4-900.jpg"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-1200.webp")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna4-1200.webp"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-1200.jpg")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna4-1200.jpg"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-1800.webp")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna4-1800.webp"

# Optimizing public/landing pages/Sauna4.JPG -> public/optimized/landing pages/Sauna4-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna4-1800.jpg")"
npx sharp "public/landing pages/Sauna4.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna4-1800.jpg"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-300.webp")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna5-300.webp"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-300.jpg")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna5-300.jpg"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-600.webp")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna5-600.webp"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-600.jpg")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna5-600.jpg"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-900.webp")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna5-900.webp"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-900.jpg")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna5-900.jpg"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-1200.webp")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna5-1200.webp"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-1200.jpg")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna5-1200.jpg"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-1800.webp")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna5-1800.webp"

# Optimizing public/landing pages/Sauna5.JPG -> public/optimized/landing pages/Sauna5-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna5-1800.jpg")"
npx sharp "public/landing pages/Sauna5.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna5-1800.jpg"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-300.webp")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna6-300.webp"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-300.jpg")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna6-300.jpg"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-600.webp")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna6-600.webp"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-600.jpg")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna6-600.jpg"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-900.webp")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna6-900.webp"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-900.jpg")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna6-900.jpg"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-1200.webp")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna6-1200.webp"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-1200.jpg")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna6-1200.jpg"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-1800.webp")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna6-1800.webp"

# Optimizing public/landing pages/Sauna6.JPG -> public/optimized/landing pages/Sauna6-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna6-1800.jpg")"
npx sharp "public/landing pages/Sauna6.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna6-1800.jpg"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-300.webp")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna7-300.webp"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-300.jpg")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna7-300.jpg"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-600.webp")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna7-600.webp"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-600.jpg")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna7-600.jpg"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-900.webp")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna7-900.webp"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-900.jpg")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna7-900.jpg"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-1200.webp")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna7-1200.webp"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-1200.jpg")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna7-1200.jpg"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-1800.webp")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna7-1800.webp"

# Optimizing public/landing pages/Sauna7.JPG -> public/optimized/landing pages/Sauna7-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna7-1800.jpg")"
npx sharp "public/landing pages/Sauna7.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna7-1800.jpg"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-300.webp")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna8-300.webp"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-300.jpg")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna8-300.jpg"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-600.webp")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna8-600.webp"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-600.jpg")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna8-600.jpg"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-900.webp")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna8-900.webp"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-900.jpg")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna8-900.jpg"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-1200.webp")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna8-1200.webp"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-1200.jpg")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna8-1200.jpg"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-1800.webp")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna8-1800.webp"

# Optimizing public/landing pages/Sauna8.JPG -> public/optimized/landing pages/Sauna8-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna8-1800.jpg")"
npx sharp "public/landing pages/Sauna8.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna8-1800.jpg"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-300.webp")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/Sauna9-300.webp"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-300.jpg")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna9-300.jpg"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-600.webp")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/Sauna9-600.webp"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-600.jpg")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna9-600.jpg"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-900.webp")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/Sauna9-900.webp"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-900.jpg")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna9-900.jpg"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-1200.webp")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/Sauna9-1200.webp"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-1200.jpg")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna9-1200.jpg"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-1800.webp")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/Sauna9-1800.webp"

# Optimizing public/landing pages/Sauna9.JPG -> public/optimized/landing pages/Sauna9-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/Sauna9-1800.jpg")"
npx sharp "public/landing pages/Sauna9.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/Sauna9-1800.jpg"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-300.webp")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-300.webp"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-300.jpg")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-300.jpg"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-600.webp")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-600.webp"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-600.jpg")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-600.jpg"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-900.webp")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-900.webp"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-900.jpg")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-900.jpg"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-1200.webp")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-1200.webp"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-1200.jpg")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-1200.jpg"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-1800.webp")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-1800.webp"

# Optimizing public/landing pages/outdoor glass room 2.jpg -> public/optimized/landing pages/outdoor glass room 2-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room 2-1800.jpg")"
npx sharp "public/landing pages/outdoor glass room 2.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room 2-1800.jpg"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-300.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-300.webp")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 300 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room-300.webp"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-300.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-300.jpg")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 300 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room-300.jpg"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-600.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-600.webp")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 600 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room-600.webp"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-600.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-600.jpg")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 600 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room-600.jpg"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-900.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-900.webp")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 900 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room-900.webp"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-900.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-900.jpg")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 900 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room-900.jpg"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-1200.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-1200.webp")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 1200 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room-1200.webp"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-1200.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-1200.jpg")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 1200 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room-1200.jpg"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-1800.webp
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-1800.webp")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 1800 --format webp --quality 80 --output "public/optimized/landing pages/outdoor glass room-1800.webp"

# Optimizing public/landing pages/outdoor glass room.JPG -> public/optimized/landing pages/outdoor glass room-1800.jpg
mkdir -p "$(dirname "public/optimized/landing pages/outdoor glass room-1800.jpg")"
npx sharp "public/landing pages/outdoor glass room.JPG" --resize 1800 --format jpg --quality 80 --output "public/optimized/landing pages/outdoor glass room-1800.jpg"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-300.webp
mkdir -p "$(dirname "public/optimized/ngmlogo-300.webp")"
npx sharp "public/ngmlogo.jpg" --resize 300 --format webp --quality 80 --output "public/optimized/ngmlogo-300.webp"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-300.jpg
mkdir -p "$(dirname "public/optimized/ngmlogo-300.jpg")"
npx sharp "public/ngmlogo.jpg" --resize 300 --format jpg --quality 80 --output "public/optimized/ngmlogo-300.jpg"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-600.webp
mkdir -p "$(dirname "public/optimized/ngmlogo-600.webp")"
npx sharp "public/ngmlogo.jpg" --resize 600 --format webp --quality 80 --output "public/optimized/ngmlogo-600.webp"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-600.jpg
mkdir -p "$(dirname "public/optimized/ngmlogo-600.jpg")"
npx sharp "public/ngmlogo.jpg" --resize 600 --format jpg --quality 80 --output "public/optimized/ngmlogo-600.jpg"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-900.webp
mkdir -p "$(dirname "public/optimized/ngmlogo-900.webp")"
npx sharp "public/ngmlogo.jpg" --resize 900 --format webp --quality 80 --output "public/optimized/ngmlogo-900.webp"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-900.jpg
mkdir -p "$(dirname "public/optimized/ngmlogo-900.jpg")"
npx sharp "public/ngmlogo.jpg" --resize 900 --format jpg --quality 80 --output "public/optimized/ngmlogo-900.jpg"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-1200.webp
mkdir -p "$(dirname "public/optimized/ngmlogo-1200.webp")"
npx sharp "public/ngmlogo.jpg" --resize 1200 --format webp --quality 80 --output "public/optimized/ngmlogo-1200.webp"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-1200.jpg
mkdir -p "$(dirname "public/optimized/ngmlogo-1200.jpg")"
npx sharp "public/ngmlogo.jpg" --resize 1200 --format jpg --quality 80 --output "public/optimized/ngmlogo-1200.jpg"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-1800.webp
mkdir -p "$(dirname "public/optimized/ngmlogo-1800.webp")"
npx sharp "public/ngmlogo.jpg" --resize 1800 --format webp --quality 80 --output "public/optimized/ngmlogo-1800.webp"

# Optimizing public/ngmlogo.jpg -> public/optimized/ngmlogo-1800.jpg
mkdir -p "$(dirname "public/optimized/ngmlogo-1800.jpg")"
npx sharp "public/ngmlogo.jpg" --resize 1800 --format jpg --quality 80 --output "public/optimized/ngmlogo-1800.jpg"


echo "Image optimization complete!"
echo "Optimized images saved to: ./public/optimized"
echo "Total variations created: 660"
