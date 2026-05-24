# Development Guide

## Getting Started with Development

### Prerequisites
- Node.js 18.17+
- npm or yarn
- Code editor (VS Code recommended)
- Git

### Initial Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start dev server
npm run dev
```

The site will be available at `http://localhost:3000` with hot reload enabled.

## Development Workflow

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add scroll navigation in `Navbar.tsx`
3. Import and add to `src/app/page.tsx`

Example section template:
```typescript
'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/effects/Animations';

export default function NewSection() {
  return (
    <section id="section-id" className="relative py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold">Your Section Title</h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

### Adding New Components

UI components go in `src/components/ui/` and should:
- Be fully typed with TypeScript
- Accept motion props for animations
- Follow Tailwind conventions
- Export as default or named exports

### Animation Patterns

**Scroll Reveal:**
```typescript
<ScrollReveal delay={0.2}>
  <h2>Content that reveals on scroll</h2>
</ScrollReveal>
```

**Stagger Items:**
```typescript
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

**Floating Element:**
```typescript
<FloatingElement delay={0.1} duration={6}>
  <div>Floating content</div>
</FloatingElement>
```

## Code Style & Standards

### TypeScript
- Use strict typing
- Avoid `any` type
- Use interfaces for props
- Export types from components

### Component Structure
```typescript
interface ComponentProps {
  // Define all props with types
  title: string;
  onClick?: () => void;
}

export default function Component({ title, onClick }: ComponentProps) {
  // Component logic
  return <div>{title}</div>;
}
```

### Tailwind Classes
- Use semantic class names
- Apply responsive prefixes: `md:`, `lg:`
- Use custom colors from `tailwind.config.ts`
- Combine with `cn()` utility for dynamic classes

### Naming Conventions
- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`cn.ts`)
- Sections: PascalCase (`Hero.tsx`)
- CSS classes: kebab-case (`glow-effect`)

## Performance Tips

### Image Optimization
- Use Next.js Image component
- Provide proper dimensions
- Use WebP format when possible

### Component Optimization
- Use `memo` for expensive components
- Implement proper dependency arrays
- Lazy load heavy sections

### Animation Performance
- Use `will-change` CSS sparingly
- Optimize transition durations
- Reduce particle count on mobile
- Use GPU-accelerated properties

## Testing

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Build Testing
```bash
npm run build
npm run start
```

## Common Tasks

### Update Social Links
Edit social links array in respective components:
```typescript
{
  icon: Github,
  href: 'https://github.com/yourusername',
  label: 'GitHub',
}
```

### Change Color Theme
Modify `tailwind.config.ts`:
```typescript
backgroundImage: {
  'glow-gradient': 'radial-gradient(circle, rgba(YOUR_COLOR,0.3) 0%, transparent 70%)',
}
```

### Adjust Animation Speed
In component files:
```typescript
animate={{ y: [0, -20, 0] }}
transition={{ duration: 6 }} // Change this value
```

### Add New Skill Category
Edit `Skills.tsx` and add to `skillCategories` array:
```typescript
{
  title: 'New Category',
  icon: '🎯',
  skills: ['Skill 1', 'Skill 2'],
  color: 'from-color1-500/20 to-color2-500/20',
}
```

## Debugging

### Enable Debug Logging
Add to component:
```typescript
useEffect(() => {
  console.log('Component mounted', props);
}, []);
```

### Check Animations
Use Framer Motion DevTools in browser for motion analysis.

### Performance Profiling
Use Chrome DevTools:
1. Open DevTools (F12)
2. Go to Performance tab
3. Record and analyze

## Building & Deploying

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Add to `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Deploy Command
Most platforms run:
```bash
npm run build
```

Ensure build succeeds before deploying.

## Troubleshooting

### Hydration Mismatch
Ensure client components use `'use client'` directive and don't render server-only content.

### Module Not Found
Check import paths match file location and use `@/` alias from `tsconfig.json`.

### Animation Stuttering
- Reduce active animations
- Optimize component re-renders
- Check browser DevTools performance tab

### Build Fails
```bash
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

## Support

For issues or questions:
1. Check existing GitHub issues
2. Review documentation
3. Test in minimal reproduction
4. Create detailed bug report
