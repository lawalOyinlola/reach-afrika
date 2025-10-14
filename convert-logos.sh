#!/bin/bash

# Script to convert logo PNGs to WebP format
# Run this after installing webp tools: brew install webp

echo "Converting logo PNGs to WebP..."

cd public/logo

# Convert logo images to WebP
for file in logo-icon.png logo-icon-dark-removebg.png logo-words.png logo-words-dark-removebg.png; do
  if [ -f "$file" ]; then
    output="${file%.png}.webp"
    echo "Converting $file to $output..."
    cwebp -q 90 "$file" -o "$output"
  fi
done

echo "✅ Conversion complete!"
echo "WebP files created in public/logo/"
ls -lh *.webp

