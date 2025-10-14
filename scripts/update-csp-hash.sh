#!/bin/bash
# Script to calculate and update CSP hash for JSON-LD structured data

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Calculating CSP hash for JSON-LD structured data...${NC}"

# Calculate the hash
HASH=$(sed -n '127,163p' index.html | sed '1d;$d' | openssl dgst -sha256 -binary | openssl base64)

echo -e "${GREEN}Calculated hash: sha256-${HASH}${NC}"
echo ""
echo "To update vercel.json, replace the existing hash in script-src with:"
echo -e "${YELLOW}'sha256-${HASH}'${NC}"
echo ""
echo "Current CSP in vercel.json:"
grep -A 1 "Content-Security-Policy" vercel.json | grep "value"

echo ""
echo -e "${YELLOW}Would you like to update vercel.json automatically? (y/n)${NC}"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    # Backup current file
    cp vercel.json vercel.json.backup
    echo -e "${GREEN}Created backup: vercel.json.backup${NC}"
    
    # Update the hash in vercel.json (macOS compatible)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS sed requires empty string after -i
        sed -i '' "s/sha256-[A-Za-z0-9+/=]*/sha256-${HASH}/g" vercel.json
    else
        # Linux sed
        sed -i "s/sha256-[A-Za-z0-9+/=]*/sha256-${HASH}/g" vercel.json
    fi
    
    echo -e "${GREEN}✅ Updated vercel.json with new hash${NC}"
    echo ""
    echo "New CSP in vercel.json:"
    grep -A 1 "Content-Security-Policy" vercel.json | grep "value"
else
    echo "Update skipped. Please update manually."
fi

echo ""
echo -e "${GREEN}Done!${NC}"

