#!/bin/bash

# SaasItup Deployment Script
# This script helps you deploy your Next.js application

set -e

echo "🚀 Starting SaasItup Deployment..."

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if build directory exists
if [ -d ".next" ]; then
    echo "🗑️  Cleaning previous build..."
    rm -rf .next
fi

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Build successful!"
echo "📦 Build output: .next/"
echo ""
echo "To deploy to Vercel:"
echo "1. Push your code to GitHub"
echo "2. Go to [vercel.com](https://vercel.com)"
echo "3. Import your repository"
echo "4. Click Deploy"
echo ""
echo "Or use the Vercel CLI:"
echo "vercel --prod"