# 🚀 Quick Start Guide

## Installation (2 minutes)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: [http://localhost:3000](http://localhost:3000)

## 📱 What you'll see

Your premium landing page with:

- ✨ Animated AI dashboard hero
- 🏢 Trust logos and metrics
- 🛠️ 6 service cards with animations
- ⭐ 5 reasons to choose us
- 📋 5-step process timeline
- 🤖 AI automation showcase
- 💼 3 featured projects
- 💬 3 client testimonials
- ❓ FAQ with 5 questions
- 📞 Final CTA section
- 🔗 Footer with all links

## 🎨 Customize Content

Edit content in this file:
```bash
src/lib/constants.ts
```

Customize colors in:
```bash
tailwind.config.ts
```

## 🚢 Deploy to Vercel

### Via Dashboard (Easiest)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Start"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com/new)
3. Import your repo
4. Click **Deploy**

### Via CLI

```bash
npm install -g vercel
vercel --prod
```

## 📋 Available Scripts

- `npm run dev` - Development server (http://localhost:3000)
- `npm run build` - Production build
- `npm run start` - Run production server
- `npm run lint` - Check code quality
- `npm run typecheck` - Run TypeScript checks

## 🎯 Next Steps

1. **Add fonts** (optional):
   - Download Inter and Outfit from Google Fonts
   - Create `public/fonts/` folder
   - Update `layout.tsx` to import fonts

2. **Add real images**:
   - Replace placeholder images with real project screenshots
   - Update `src/lib/constants.ts` → `PROJECTS` array

3. **Add analytics** (recommended):
   - Get Google Analytics ID
   - Add to Vercel environment variables
   - Set `NEXT_PUBLIC_ANALYTICS_ID` in `.env.local`

4. **Update contact info**:
   - Edit `src/lib/constants.ts` → `CONTACT_ITEMS`
   - Update phone, email, and location

## ⚡ Performance

The project is optimized for:
- **90+ Lighthouse score**
- **Core Web Vitals: Good**
- **Fast page loads**
- **Smooth animations**

## 🐛 Problems?

**Development won't start:**
```bash
# Fix permissions
chmod +x deploy.sh

# Clear cache
rm -rf .next node_modules
npm install
npm run dev
```

**TypeScript errors:**
```bash
npm run typecheck
```

**Build fails:**
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

## 💡 Pro Tips

1. **Test on mobile**: Use browser dev tools → Responsive Design
2. **Animation performance**: Use `prefers-reduced-motion` media query
3. **SEO**: Update `layout.tsx` metadata for your brand
4. **Backup**: Commit changes regularly

---

**Need help?** Check out the full README.md for detailed documentation.