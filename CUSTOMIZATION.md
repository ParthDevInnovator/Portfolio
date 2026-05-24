# Portfolio Customization Guide

Complete guide to personalizing your portfolio with your own information, styling, and branding.

## 👤 Personal Information

### Update Your Name & Title

**File**: `src/components/sections/Hero.tsx`

```typescript
// Line ~50
<h1 className="text-5xl md:text-7xl font-bold leading-tight">
  <span className="text-gradient">Your Title Here</span>
  <br />
  <span className="text-white">&</span>
  <br />
  <span className="text-gradient">Your Subtitle</span>
</h1>
```

### Update Hero Tagline

**File**: `src/components/sections/Hero.tsx`

```typescript
// Line ~60
<p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
  Your custom tagline and description here...
</p>
```

### Update About Section

**File**: `src/components/sections/About.tsx`

```typescript
// Around line 50
<p className="text-lg text-gray-300 leading-relaxed">
  Replace this with your personal story and background...
</p>
```

### Update Social Links

Update in all relevant components (Hero, Navbar, Contact, Footer):

```typescript
{
  icon: Github,
  href: 'https://github.com/ParthDevInnovator',  
  label: 'GitHub',
},
{
  icon: Linkedin,
  href: 'https://www.linkedin.com/in/parth-makwana712/?skipRedirect=true',  // Change this
  label: 'LinkedIn',
},
{
  icon: Mail,
  href: 'mailto:parthmakwana8998@gmail.com',  // Change this
  label: 'Email',
}
```

## 📋 Experience & Education

### Add Work Experience

**File**: `src/components/sections/Experience.tsx`

```typescript
const experiences = [
  {
    company: 'Company Name',
    role: 'Your Role',
    duration: 'Month Year – Present',
    icon: '🚀',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
      'Achievement 4',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  // Add more experiences...
];
```

## 🎯 Skills

### Customize Skill Categories

**File**: `src/components/sections/Skills.tsx`

```typescript
const skillCategories = [
  {
    title: 'Your Category',
    icon: '🎯', // Change emoji
    skills: ['Skill 1', 'Skill 2', 'Skill 3'], // Your skills
    color: 'from-color-500/20 to-color-500/20',
  },
  // Add more categories...
];
```

**Available Color Combinations**:
- `from-purple-500/20 to-pink-500/20`
- `from-cyan-500/20 to-blue-500/20`
- `from-green-500/20 to-emerald-500/20`
- `from-yellow-500/20 to-orange-500/20`
- `from-pink-500/20 to-red-500/20`

## 💼 Projects

### Add Your Projects

**File**: `src/components/sections/Projects.tsx`

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Short description of your project...',
    longDescription: 'Longer description if needed...',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'], // Technologies used
    image: '🎨', // Emoji or icon
    link: 'https://project-link.com', // Live demo link
    github: 'https://github.com/yourusername/project', // GitHub link
    color: 'from-purple-500/20 to-pink-500/20', // Card color
    gradient: 'from-purple-600 to-pink-600', // Button gradient
  },
  // Add more projects...
];
```

## 🏆 Hackathons & Achievements

### Update Hackathon Section

**File**: `src/components/sections/Hackathon.tsx`

```typescript
<h3 className="text-2xl md:text-3xl font-bold text-white">
  Your Hackathon Name
</h3>
<p className="text-purple-300 font-medium mt-2">Event Category</p>

<p className="text-lg text-gray-300 leading-relaxed">
  Your project description...
</p>

// Update tech stack
{[
  'Technology 1',
  'Technology 2',
  'Technology 3',
  'Technology 4',
  'Technology 5',
  'Technology 6',
].map((tech, i) => (
  // ...
))}
```

## 🎨 Visual Customization

### Change Color Scheme

**File**: `tailwind.config.ts`

```typescript
colors: {
  background: '#050505', // Main bg color
  surface: 'rgba(255,255,255,0.04)', // Card bg
  border: 'rgba(255,255,255,0.08)', // Border color
}
```

### Custom Gradient Colors

**File**: `tailwind.config.ts`

```typescript
backgroundImage: {
  'glow-gradient': 'radial-gradient(circle, rgba(YOUR_R, YOUR_G, YOUR_B, 0.3) 0%, transparent 70%)',
}
```

### Update Typography

Change font in `src/app/layout.tsx`:

```typescript
import { Geist } from "geist/font";
import { YourFont } from "your-font/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={YourFont.className}>
      {/* ... */}
    </html>
  );
}
```

### Adjust Animation Speed

**For all animations**, look for `transition` properties:

```typescript
// Slower animation (duration in seconds)
transition={{ duration: 1 }}  // 1 second

// Faster animation
transition={{ duration: 0.3 }}  // 0.3 seconds
```

### Modify Button Styles

**File**: `src/components/ui/Button.tsx`

```typescript
const variants = {
  primary: 'bg-gradient-to-r from-YOUR-COLOR-600 to-YOUR-COLOR-700 hover:from-YOUR-COLOR-500',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
  ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/20',
};
```

## 🌐 Metadata & SEO

### Update Site Metadata

**File**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description here...",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Your Title",
    description: "Your custom description...",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### Update Footer

**File**: `src/components/sections/Footer.tsx`

```typescript
<p className="text-gray-400 text-sm md:text-base">
  Designed & Developed by{' '}
  <span className="text-gradient font-semibold">Your Name</span>
</p>

// Update social links at bottom
{[
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
  { label: 'Twitter', href: 'https://twitter.com/your-username' },
].map((link, i) => (
  // ...
))}
```

## 📱 Responsive Adjustments

### Customize Breakpoints

**File**: `tailwind.config.ts`

Add custom breakpoints:

```typescript
theme: {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

### Mobile Optimization

Components use responsive classes:
- `md:` - medium screens and up
- `lg:` - large screens and up
- Remove prefix for mobile defaults

## 🎬 Animation Fine-tuning

### Scroll Reveal Delay

```typescript
<ScrollReveal delay={0.2}>  // Increase delay
  <h2>Your content</h2>
</ScrollReveal>
```

### Floating Duration

```typescript
<FloatingElement delay={0} duration={6}>  // Change duration
  <div>Floating content</div>
</FloatingElement>
```

### Stagger Animation

```typescript
transition={{ duration: 0.8, delay, ease: 'easeOut' }}
// ease options: 'easeIn', 'easeOut', 'easeInOut', 'linear', 'circIn', etc.
```

## 📞 Contact Information

### Update Email Link

Appears in multiple places:

**Navbar** (`src/components/sections/Navbar.tsx`):
```typescript
href="mailto:your-email@example.com"
```

**Contact Section** (`src/components/sections/Contact.tsx`):
```typescript
href="mailto:your-email@example.com"
```

### Update Resume Link

**Contact Section** (`src/components/sections/Contact.tsx`):
```typescript
{
  icon: Download,
  label: 'Resume',
  href: 'https://your-resume-link.com',  // Add your resume link
  color: 'hover:text-cyan-400',
}
```

## 🔧 Advanced Customizations

### Add Custom CSS

**File**: `src/app/globals.css`

Add at the end of the file:

```css
/* Your custom styles */
.custom-class {
  /* your styles */
}
```

### Create Custom Component

**File**: `src/components/ui/YourComponent.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';

interface YourComponentProps {
  title: string;
  // other props
}

export function YourComponent({ title }: YourComponentProps) {
  return (
    <motion.div>
      {/* Your component JSX */}
    </motion.div>
  );
}
```

### Customize Background Effects

**File**: `src/components/effects/BackgroundEffects.tsx`

Adjust particle count, colors, speeds, etc.

## ✅ Before Deploying

Checklist before going live:

- [ ] Update all personal information
- [ ] Add your projects with correct links
- [ ] Update work experience
- [ ] Add skills and technologies
- [ ] Update social media links
- [ ] Change email address
- [ ] Update meta tags and SEO
- [ ] Test all links work correctly
- [ ] Test on mobile devices
- [ ] Test animations in target browsers
- [ ] Update resume link
- [ ] Test form submissions if any
- [ ] Add favicon in `public/` folder
- [ ] Test performance in DevTools

## 📝 Common Customizations

### Hide a Section

In `src/app/page.tsx`, comment out the section import and usage:

```typescript
// import Hackathon from '@/components/sections/Hackathon';
// ...
// <Hackathon />  // Comment this out
```

### Add New Section

1. Create `src/components/sections/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to JSX with appropriate ID for navigation

### Change Hover Effects

Edit component hover states in Framer Motion `whileHover` props:

```typescript
whileHover={{ y: -5, scale: 1.05 }}  // Change these values
```

## 🎨 Color Reference

**Primary Colors**:
- Purple: `from-purple-600 to-purple-700`
- Cyan: `from-cyan-600 to-blue-600`
- Pink: `from-pink-600 to-purple-600`

**Gradient Combinations**:
- Purple → Cyan: `from-purple-500 via-purple-400 to-cyan-500`
- Pink → Purple: `from-pink-500 to-purple-600`

## 📚 Additional Resources

- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Framer Motion Animation Examples](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Gradient Generator](https://www.colordot.it/)

---

Feel free to experiment and customize to make it truly yours!
