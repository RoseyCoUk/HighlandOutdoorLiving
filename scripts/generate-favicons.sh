#!/bin/bash

# Favicon Generation Script for NMG Outdoor Living
# This script generates all required favicon files from ngmlogo.jpg

echo "🎨 Generating favicon files for NMG Outdoor Living..."

# Check if logo exists
if [ ! -f "public/ngmlogo.jpg" ]; then
    echo "❌ Logo file not found: public/ngmlogo.jpg"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt-get install imagemagick"
    exit 1
fi

echo "📱 Generating favicon files..."

# Generate favicon.ico (32x32)
convert public/ngmlogo.jpg -resize 32x32 -background '#C5B8AB' -gravity center -extent 32x32 public/favicon-32x32.png

# Generate favicon-16x16.png
convert public/ngmlogo.jpg -resize 16x16 -background '#C5B8AB' -gravity center -extent 16x16 public/favicon-16x16.png

# Generate apple-touch-icon.png (180x180)
convert public/ngmlogo.jpg -resize 180x180 -background '#C5B8AB' -gravity center -extent 180x180 public/apple-touch-icon.png

# Generate android-chrome-192x192.png
convert public/ngmlogo.jpg -resize 192x192 -background '#C5B8AB' -gravity center -extent 192x192 public/android-chrome-192x192.png

# Generate android-chrome-512x512.png
convert public/ngmlogo.jpg -resize 512x512 -background '#C5B8AB' -gravity center -extent 512x512 public/android-chrome-512x512.png

# Create favicon.ico (combine 16x16 and 32x32)
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico

echo "✅ All favicon files generated successfully!"
echo "📁 Files created:"
echo "   - favicon.ico"
echo "   - favicon-16x16.png"
echo "   - favicon-32x32.png"
echo "   - apple-touch-icon.png"
echo "   - android-chrome-192x192.png"
echo "   - android-chrome-512x512.png"
echo "   - site.webmanifest"

echo ""
echo "🚀 Next steps:"
echo "1. Deploy these files to your website"
echo "2. Submit to Google Search Console"
echo "3. Wait 24-48 hours for Google to update"
echo "4. Check search results for updated favicon"
