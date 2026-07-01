# SaasItUp Landing Page

A premium AI Automation & Software Development Agency landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism, gradients, and smooth animations
- **AI-Powered Showcase**: Interactive AI dashboard mockup with real-time visualizations
- **Fully Responsive**: Mobile-first design that scales perfectly from phones to desktop
- **SEO Optimized**: Built-in metadata, structured data, sitemap, and robots.txt
- **Performance**: Optimized with Next.js App Router and Framer Motion
- **Type-Safe**: Full TypeScript implementation

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn installed

### Installation Steps

1. **Clone repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment to Vercel

### Option 1: Deploy from Git Repository

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Login to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - click "Deploy"

### Option 2: Direct Upload with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   vercel --prod
   ```

### Deployment Variables (Optional)

If you want to customize deployment settings, set these in Vercel dashboard:

- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://saasitup.com)
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics ID
- `NEXT_PUBLIC_CALENLDY_USER`: Calendly username for booking

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # Robots directive
│
├── components/
│   ├── ui/                  # Base UI components
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Badge.tsx
│   │
│   ├── sections/            # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── FAQSection.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   └── hero-mockup/         # Hero visual mockups
│       ├── AIDashboardMockup.tsx
│       └── AIInterface.tsx
│
└── lib/
    ├── utils.ts             # Utility functions
    ├── constants.ts         # Static content
    ├── cn.ts               # Tailwind class utilities
    ├── schema.ts           # SEO structured data
    └── metadata.ts         # Page metadata
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  dark: {
    900: "#0a0a0e",  // Background
    // ... other colors
  },
  primary: {
    500: "#6366f1",  // Primary accent
    // ... other colors
  }
}
```

### Typography

Fonts are loaded as local fonts in `src/app/layout.tsx`. Replace with your preferred fonts or use Google Fonts.

### Content

All static content is centralized in `src/lib/constants.ts`. Edit the arrays to update:

- Navigation items
- Services
- Project data
- Testimonials
- FAQ items
- Social links

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## ✨ Key Features Explained

### AI Dashboard Mockup

The Hero section features an interactive AI dashboard demonstration with:
- Animated charts and graphs
- Floating AI interface
- Real-time status indicators
- Smooth animations using Framer Motion

### SEO Optimization

- Automatic sitemap generation
- Robots.txt configuration
- OpenGraph and Twitter Card support
- JSON-LD structured data ready (extensible)
- Mobile-first responsive meta tags

### Performance

- Code splitting with Next.js App Router
- Image optimization with Next.js Image component
- Reduced bundle size with proper imports
- CSR (Client-Side Rendering) for animations only

## 📊 Analytics

To add analytics, follow these steps:

1. Get your tracking ID from Google Analytics or analytics provider
2. Add it to Vercel dashboard under "Environment Variables"
3. Use it in your components:

```bash
NEXT_PUBLIC_ANALYTICS_ID
```

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-ga-id
NEXT_PUBLIC_CALENLDY_USER=your-calendly-username
```

## 📱 Responsive Breakpoints

Screens are optimized for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# or
killall -9 node
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript errors

```bash
# TsoCheck
npm run typecheck
```

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For questions and support, please contact:
- **Email**: hello@saasitup.com
- **Phone**: +1 (555) 123-4567

---

Built with ❤️ using Next.js 15 and modern web technologies.