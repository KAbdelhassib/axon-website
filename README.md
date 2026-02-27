# AXON AI Assistant

**Agentic AI Platform by QuantorX**

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/KAbdelhassib/axon-website)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://axon-website-six.vercel.app)

> AI-powered spatial intelligence platform transforming how teams work with location data.

## 🚀 Live Sites

- **Production:** [axon-website-six.vercel.app](https://axon-website-six.vercel.app)
- **GitHub:** [github.com/KAbdelhassib/axon-website](https://github.com/KAbdelhassib/axon-website)

## 📋 Overview

AXON AI Assistant is a modern, dark-themed marketing website built for QuantorX's agentic AI platform. Features include:

- ✨ **Carto.com-inspired design** with 4-tab mega-dropdown navigation
- 🎬 **Parallax scrolling** and scroll-triggered animations
- 🎨 **Dark theme** with yellow (#fbbf24) primary accent
- 📱 **Fully responsive** mobile/tablet/desktop
- ⚡ **Next.js 16.1.6** with Turbopack for lightning-fast dev experience
- 🎭 **Framer Motion** for smooth animations
- 🔧 **TypeScript** for type safety
- 🎨 **Tailwind CSS 4.0** for styling

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.1.6 | React framework with App Router |
| [React](https://react.dev) | 19.2.3 | UI library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Utility-first CSS |
| [Framer Motion](https://framer.com/motion) | Latest | Animation library |
| [Lucide React](https://lucide.dev) | Latest | Icon library |

## 🎯 Project Structure

```
axon-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage (14 sections)
│   │   ├── platform/          # Platform overview
│   │   ├── solutions/         # Solutions by industry
│   │   ├── company/           # About QuantorX
│   │   ├── demo/              # Interactive demo
│   │   ├── resources/         # Docs & tutorials
│   │   ├── pricing/           # Pricing plans
│   │   ├── contact/           # Contact form
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections (Hero, CTA, etc.)
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── images/                # Static images (hero, logos, etc.)
├── .github/
│   └── workflows/             # CI/CD workflows
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/KAbdelhassib/axon-website.git
cd axon-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Key Features

### Navigation
- **4 mega-dropdown tabs:** Platform, Solutions, Customers, Resources
- Each dropdown has icon-based menu items with descriptions
- Platform tab includes a "Featured" sidebar highlighting AXON AI Assistant
- Mobile: Accordion-style expandable menus

### Hero Section
- Background: `hero-bg.png` with grey overlay + parallax effect
- Badge: "Agentic AI Platform by QuantorX"
- Headline: "AI-POWERED SPATIAL INTELLIGENCE"
- Animated geometric elements + floating dots + yellow glow

### Pages
1. **Homepage** (`/`) - 14 sections with parallax, video showcases, stats, testimonials
2. **Platform** (`/platform`) - Full platform capabilities
3. **Solutions** (`/solutions`) - Industry-specific use cases
4. **Company** (`/company`) - About QuantorX, team, values
5. **Demo** (`/demo`) - Interactive platform demo
6. **Resources** (`/resources`) - Documentation & tutorials
7. **Pricing** (`/pricing`) - Transparent pricing plans
8. **Contact** (`/contact`) - Contact form

### Components

**Layout:**
- `Header.tsx` - Mega-dropdown navigation
- `Footer.tsx` - 4-column links + social icons

**Sections:**
- `HeroSection.tsx` - Parallax hero with CTAs
- `TrustBar.tsx` - Customer logos ticker
- `VideoShowcase.tsx` - Embedded videos
- `FullScreenParallax.tsx` - Full-screen parallax sections
- `TabbedPlatform.tsx` - Tabbed content showcase
- `StatsSection.tsx` - Animated statistics
- `TestimonialsSection.tsx` - Customer testimonials
- `FeaturedResources.tsx` - Resource cards
- `CTASection.tsx` - Call-to-action

**UI:**
- `Button.tsx` - Primary/outline/ghost variants
- `Card.tsx` - Content cards
- `Accordion.tsx` - Collapsible content
- `Tabs.tsx` - Tabbed interface
- `Modal.tsx` - Dialog overlays
- `ScrollToTop.tsx` - Scroll-to-top button
- `FloatingElements.tsx` - Animated background elements

## 🎨 Design System

### Colors
```css
--color-black: #000000
--color-dark: #0a0a0a
--color-darker: #121212
--color-primary: #fbbf24 (yellow)
--color-gray-900: #171717
```

### Typography
- **Font:** Geist Sans (Vercel's font)
- **Headings:** font-black, uppercase, tracking-tight
- **Body:** font-light, leading-relaxed

### Spacing
- Section padding: `py-24` (96px)
- Container: max-w-7xl
- Gap: 8, 12, 16, 24

## 🔧 Development

### Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and test:**
   ```bash
   npm run dev
   ```

3. **Build to verify:**
   ```bash
   npm run build
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request on GitHub**

### Deployment

**Vercel (Production):**
- Automatic deployments on push to `master`
- Preview deployments for PRs
- Live at: [axon-website-six.vercel.app](https://axon-website-six.vercel.app)

**Manual Deploy:**
```bash
npm run build
vercel --prod
```

## 📝 Configuration

### Environment Variables
Create a `.env.local` file:
```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

### Vercel Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Deploy
vercel --prod
```

## 🐛 Troubleshooting

### Hydration Errors
If you see React hydration warnings:
- Avoid `Math.random()` in components (use deterministic values)
- Don't use `new Date()` or `Date.now()` in render
- Never nest `<button>` inside `<a>` (use styled `<Link>` instead)

### Build Errors
```bash
# Clean build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 📄 License

© 2025 QuantorX. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

- **Website:** [axon-website-six.vercel.app](https://axon-website-six.vercel.app)
- **GitHub Issues:** [github.com/KAbdelhassib/axon-website/issues](https://github.com/KAbdelhassib/axon-website/issues)
- **Email:** hello@quantorx.com

---

Built with ❤️ by QuantorX
