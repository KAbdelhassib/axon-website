# Contributing to AXON AI Assistant

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Quick Start

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/axon-website.git
   cd axon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-blog-section`)
- `fix/` - Bug fixes (e.g., `fix/header-mobile-menu`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-hero`)
- `style/` - Style/design changes (e.g., `style/update-colors`)

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or tooling changes

**Examples:**
```bash
git commit -m "feat(header): add mega-dropdown navigation"
git commit -m "fix(hero): resolve hydration error in FloatingElements"
git commit -m "docs(readme): update deployment instructions"
```

## 🎨 Code Style

### TypeScript
- Use TypeScript for all components
- Define proper interfaces for props
- Avoid `any` type

```tsx
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost';
  onClick: () => void;
}

// ❌ Bad
function Button(props: any) { ... }
```

### Components
- Use functional components with hooks
- Follow the existing component structure
- Keep components focused and reusable

```tsx
// Component structure:
'use client'; // Only if using hooks

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
}

export function MyComponent({ title }: Props) {
  const [state, setState] = useState(false);
  
  return (
    <section className="section-padding">
      {/* component content */}
    </section>
  );
}
```

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Use `cn()` utility for conditional classes

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  variant === 'primary' && 'primary-classes'
)} />
```

## 🧪 Testing

### Before Submitting

1. **Build successfully**
   ```bash
   npm run build
   ```

2. **No lint errors**
   ```bash
   npm run lint
   ```

3. **Test in browser**
   - Check desktop, tablet, mobile views
   - Test all interactive elements
   - Verify no console errors

### Common Issues

**Hydration Errors:**
- Don't use `Math.random()` in render (use deterministic values)
- Don't use `new Date()` or `Date.now()` in components
- Never nest `<button>` inside `<a>` (use styled `<Link>`)

**Performance:**
- Optimize images (use WebP, proper sizes)
- Lazy load heavy components
- Use `loading="lazy"` on images

## 📋 Pull Request Process

1. **Update documentation** if needed (README, comments)

2. **Test thoroughly**
   ```bash
   npm run build
   npm run lint
   ```

3. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template:
     - **Title:** Clear, concise description
     - **Description:** What changed and why
     - **Screenshots:** If UI changes
     - **Testing:** How to test the changes

5. **Wait for review**
   - Address any feedback
   - Make requested changes
   - Push updates to the same branch

## 🐛 Bug Reports

Found a bug? Please create an issue:

1. **Check existing issues** first
2. **Create new issue** with:
   - Clear title
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots/videos if applicable
   - Browser/OS information

## 💡 Feature Requests

Have an idea? Create an issue with:
- Clear description of the feature
- Use case / why it's needed
- Mockups or examples (if applicable)

## 🔒 Security

Found a security issue? **DO NOT** open a public issue.
Email: security@quantorx.com

## 📄 Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project

## ❓ Questions?

- **Documentation:** Check the [README](README.md)
- **Issues:** Browse [existing issues](https://github.com/KAbdelhassib/axon-website/issues)
- **Discussions:** Start a [discussion](https://github.com/KAbdelhassib/axon-website/discussions)

## 🎉 Recognition

Contributors will be:
- Listed in the contributor section
- Acknowledged in release notes
- Appreciated by the community!

---

Thank you for contributing to AXON AI Assistant! 🚀
