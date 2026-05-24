# Quick Reference Guide

Quick lookup for common tasks and commands.

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Lint code
npm run lint

# Build and start
npm run build && npm start
```

## 📝 File Locations

### Content Files
- **Hero**: `src/components/sections/Hero.tsx`
- **About**: `src/components/sections/About.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Skills**: `src/components/sections/Skills.tsx`
- **Projects**: `src/components/sections/Projects.tsx`
- **Hackathon**: `src/components/sections/Hackathon.tsx`
- **Contact**: `src/components/sections/Contact.tsx`

### Configuration Files
- **Styles**: `tailwind.config.ts`
- **Metadata**: `src/app/layout.tsx`
- **Global CSS**: `src/app/globals.css`
- **Package Info**: `package.json`
- **TypeScript**: `tsconfig.json`

## 🎨 Common Customizations

### Update Your Name
**File**: `src/components/sections/Hero.tsx` (line ~50)
```typescript
<span className="text-gradient">Your Name</span>
```

### Update Social Links
**Pattern**: Search for `href="https://github.com`

Replace all instances with your links.

### Change Color Scheme
**File**: `tailwind.config.ts`
```typescript
colors: {
  background: '#050505', // Change this
}
```

### Adjust Animation Speed
**Pattern**: Look for `transition={{ duration: 6 }}`
```typescript
transition={{ duration: 3 }}  // Faster
transition={{ duration: 10 }} // Slower
```

### Add New Project
**File**: `src/components/sections/Projects.tsx`

Add to `projects` array:
```typescript
{
  title: 'Project Name',
  description: 'Description...',
  tech: ['Tech1', 'Tech2'],
  image: '🎨',
  link: 'https://...',
  github: 'https://...',
  color: 'from-purple-500/20 to-pink-500/20',
  gradient: 'from-purple-600 to-pink-600',
}
```

### Add Skill Category
**File**: `src/components/sections/Skills.tsx`

Add to `skillCategories` array:
```typescript
{
  title: 'Category Name',
  icon: '🎯',
  skills: ['Skill1', 'Skill2'],
  color: 'from-color-500/20 to-color-500/20',
}
```

## 🌐 Navigation

### Scroll to Section
Click navbar item or use:
```typescript
const scrollToSection = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

### Add New Navigation Item
**File**: `src/components/sections/Navbar.tsx` (line ~5)
```typescript
const navItems = [
  { label: 'New Section', href: '#new-id' },
];
```

## 🎬 Animation Snippets

### Scroll Reveal
```typescript
<ScrollReveal delay={0.2}>
  <h2>Content here</h2>
</ScrollReveal>
```

### Floating Element
```typescript
<FloatingElement delay={0} duration={6}>
  <div>Floating content</div>
</FloatingElement>
```

### Staggered Items
```typescript
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### Hover Animation
```typescript
whileHover={{ y: -5, scale: 1.05 }}
```

## 📱 Responsive Classes

```typescript
md:      // Medium screens (768px+)
lg:      // Large screens (1024px+)
2xl:     // Extra large (1536px+)
```

Example:
```typescript
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🔧 Component Usage

### Button
```typescript
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

**Variants**: primary, secondary, ghost
**Sizes**: sm, md, lg

### Badge
```typescript
<Badge variant="success">Available</Badge>
```

**Variants**: default, success, warning

### Glass Card
```typescript
<GlassCard className="p-6">
  Content here
</GlassCard>
```

## 🎨 Tailwind Classes

### Gradients
```typescript
bg-gradient-to-r from-purple-600 to-cyan-600
bg-gradient-to-b from-transparent to-purple-500/20
```

### Sizing
```typescript
w-full  // Full width
h-screen // Full viewport height
px-6    // Horizontal padding
py-8    // Vertical padding
m-4     // Margin (all sides)
```

### Text
```typescript
text-gradient      // Gradient text color
text-gradient font-bold
text-gray-300      // Muted text
text-gray-400      // More muted
text-white         // Primary text
```

### Effects
```typescript
blur-glass         // Glassmorphism
glow-effect        // Glow on hover
floating           // Float animation
magnetic           // Magnetic hover
```

## 🔄 Common Workflows

### Add Experience Entry
1. Open `src/components/sections/Experience.tsx`
2. Add to `experiences` array
3. Update dates, company, role
4. Add highlight bullets

### Update Project
1. Open `src/components/sections/Projects.tsx`
2. Find project in `projects` array
3. Update description, tech, links
4. Save and test

### Customize Colors
1. Open `tailwind.config.ts`
2. Update color values
3. Update gradient definitions
4. Run `npm run dev` to see changes

### Fix Mobile Layout
1. Check responsive classes (md:, lg:)
2. Verify mobile-first approach
3. Test with `npm run dev`
4. Use DevTools device mode

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Animations Not Smooth
- Reduce particle count
- Check browser performance tab
- Disable non-essential animations
- Use will-change sparingly

## 📦 Dependency Info

**Latest Versions**:
- Next.js: 15.x
- React: 19.x
- TypeScript: 5.x
- Tailwind: 3.x
- Framer Motion: 11.x

**Update dependencies**:
```bash
npm update
npm outdated  # Check for updates
```

## 🚀 Deployment Quick Links

- **Vercel**: https://vercel.com/import
- **Netlify**: https://netlify.com
- **Railway**: https://railway.app
- **Render**: https://render.com

## 📊 Performance Tips

1. Keep animations short (< 1s)
2. Limit particle count (< 30)
3. Use CSS animations instead of JS
4. Lazy load heavy components
5. Optimize images

## 🎯 Before Deploy

- [ ] Update all personal info
- [ ] Test all links
- [ ] Check mobile responsive
- [ ] Verify build succeeds
- [ ] Check console for errors
- [ ] Test animations in target browser
- [ ] Update meta tags
- [ ] Add favicon

## 📞 Quick Help

**Need help with:**
- **Setup**: See README.md
- **Development**: See DEVELOPMENT.md
- **Customization**: See CUSTOMIZATION.md
- **Deployment**: See DEPLOYMENT.md
- **Features**: See FEATURES.md

---

## 🔗 Important URLs

- **Local Dev**: http://localhost:3000
- **Package Docs**: https://npmjs.com
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev

---

**Version**: 1.0.0 | **Last Updated**: 2026
