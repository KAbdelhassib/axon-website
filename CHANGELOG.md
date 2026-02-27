# Changelog

All notable changes to AXON AI Assistant will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions CI/CD workflows
- Comprehensive README documentation
- Contributing guidelines
- Issue and PR templates

## [1.0.0] - 2026-02-26

### Added
- Initial release of AXON AI Assistant website
- Dark-themed Carto.com-inspired design
- 4-tab mega-dropdown navigation (Platform, Solutions, Customers, Resources)
- 8 main pages: Home, Platform, Solutions, Company, Demo, Resources, Pricing, Contact
- 14 sections on homepage with parallax effects
- Framer Motion animations throughout
- Mobile-responsive design
- Real images and branding assets
- "Powered by QuantorX" branding

### Features
- **Hero Section:** Parallax background with animated geometric elements
- **Navigation:** Mega-dropdown menus with icon-based items
- **Video Showcase:** Embedded YouTube videos
- **Parallax Sections:** Full-screen parallax scrolling
- **Tabbed Platform:** Interactive tabbed content showcase
- **Statistics:** Animated stats section
- **Testimonials:** Customer testimonials carousel
- **Resources:** Featured resource cards with downloads
- **CTA Sections:** Multiple call-to-action sections

### Components
- Reusable UI components (Button, Card, Accordion, Tabs, Modal)
- Section components (Hero, TrustBar, VideoShowcase, etc.)
- Layout components (Header, Footer)
- Utility components (ScrollToTop, FloatingElements, ScrollProgress)

### Fixed
- Hydration errors from `<Link>` wrapping `<Button>` elements
- Hydration errors from `Math.random()` in FloatingElements
- Mobile navigation accordion animations
- Spacing consistency across all pages

### Technical
- Next.js 16.1.6 with Turbopack
- React 19.2.3
- TypeScript 5.x
- Tailwind CSS 4.0
- Framer Motion animations
- Deployed to Vercel

---

## Release Notes

### How to Release

1. Update version in `package.json`
2. Update this CHANGELOG.md
3. Commit changes: `git commit -m "chore: release v1.x.x"`
4. Create tag: `git tag v1.x.x`
5. Push: `git push origin master --tags`
6. GitHub Actions will automatically deploy

### Version History

- **v1.0.0** (2026-02-26) - Initial release
