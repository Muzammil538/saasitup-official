#!/bin/bash

# SaasItup Quick Start & Deployment Script

set -e

echo "🚀 SaasItup Landing Page Setup"
echo "============================"

# Check Node.js version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20.x first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'ver' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" != "20" ]; then
    echo "⚠️  Warning: Node.js version is $NODE_VERSION. Recommended: 20.18.2"
fi

# Cleanup any previous installations
echo "🧹 Cleaning previous installations..."
rm -rf .next node_modules package-lock.json

# Install dependencies with correct versions
echo "📦 Installing dependencies..."
npm install

# Start development server
echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Opening development server..."
echo "   Local: http://localhost:3000"
echo "   Network: http://192.168.1.8:3000"
echo ""

# Start dev server in background
npm run dev &
DEV_PID=$!

# Wait a moment for server to start
sleep 3

# Check if server started
if kill -0 $DEV_PID 2>/dev/null; then
    echo "✅ Development server is running on http://localhost:3000"
    echo ""
    echo "📚 Available commands:"
    echo "   - Stop server: Press Ctrl+C"
    echo "   - Build: npm run build"
    echo "   - Lint: npm run lint"
    echo "   - Typecheck: npm run typecheck"
    echo ""
    echo "🎨 Customize in:"
    echo "   - Content: src/lib/constants.ts"
    echo "   - Colors: tailwind.config.ts"
    echo "   - Fonts: src/app/layout.tsx"
    echo ""
    echo "🚀 Deploy to Vercel:"
    echo "   - Push to GitHub"
    echo "   - Import repo at vercel.com"
    echo "   - Click Deploy"
    echo ""
    
    # Wait for user input
    trap "kill $DEV_PID; echo 'Server stopped.'; exit" EXIT
    read -p "Press Ctrl+C to stop the server..." keep_alive
else
    echo "❌ Failed to start development server"
    exit 1
fi