# Portfolio Deployment Guide

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

**Benefits**:
- Zero configuration
- Automatic deployments
- Free SSL
- Global CDN
- Preview deployments

**Steps**:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Git Repository"
4. Select your portfolio repository
5. Click Deploy
6. Your site is live!

**Auto-deploy**: Changes pushed to main branch automatically deploy.

---

### 2. Netlify

**Benefits**:
- Easy setup
- Generous free tier
- Form submissions
- Analytics

**Steps**:
```bash
npm run build
```

**Using Git**:
1. Push to GitHub
2. Connect repository on [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

---

### 3. Docker (Self-hosted)

**Benefits**:
- Full control
- Can run anywhere
- Production-ready

**Build image**:
```bash
docker build -t portfolio:latest .
```

**Run container**:
```bash
docker run -p 3000:3000 portfolio:latest
```

**Using Docker Compose**:
```bash
docker-compose up -d
```

---

### 4. Traditional Node.js Server

**Steps**:
```bash
# Build
npm run build

# Start
npm start
```

**Using PM2** (for process management):
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

---

### 5. Railway

**Benefits**:
- Modern, simple deployment
- Free tier available
- GitHub integration

**Steps**:
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Select repository
5. Auto-detected Next.js
6. Deploy!

---

### 6. Render

**Benefits**:
- Free static site hosting
- Auto-deploy from Git
- SSL included

**Steps**:
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub
4. Select repository
5. Set Start Command: `npm start`
6. Deploy!

---

### 7. AWS Amplify

**Benefits**:
- Scalable
- AWS ecosystem
- Free tier available

**Steps**:
1. Go to AWS Amplify Console
2. Create new app
3. Connect GitHub
4. Auto-detect Next.js
5. Configure settings
6. Deploy!

---

### 8. DigitalOcean

**Benefits**:
- Affordable
- Good performance
- Good documentation

**Using DigitalOcean App Platform**:
1. Create new app
2. Connect GitHub
3. Select repository
4. Choose Node.js runtime
5. Configure build/start commands
6. Deploy!

---

## 🔐 Environment Variables

For all platforms, ensure these are set:

```
NODE_ENV=production
PORT=3000
```

Optional:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings
2. Domains
3. Add custom domain
4. Follow DNS instructions

### Netlify
1. Site settings
2. Domain management
3. Add custom domain
4. Update DNS records

### Other platforms
1. Get nameservers from provider
2. Update domain DNS settings
3. Wait for propagation (24-48 hours)

---

## 📊 Performance Checklist

- [ ] Enable compression
- [ ] Set up CDN
- [ ] Enable caching
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Enable gzip
- [ ] Set cache headers

---

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run type-check
      - name: Deploy
        run: npm run deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```

---

## 📈 Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Free uptime monitoring
- [Pingdom](https://www.pingdom.com) - Performance monitoring

### Analytics
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Google Analytics](https://analytics.google.com)

---

## 🚨 Troubleshooting

### Build fails
```bash
npm run build  # Test locally first
```

### Port already in use
```bash
# Change PORT environment variable
PORT=3001 npm start
```

### Deploy stuck
- Check logs in provider console
- Ensure all dependencies are listed in package.json
- Verify build command works locally

---

## ✅ Pre-deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Test production run: `npm start`
- [ ] All links working
- [ ] No console errors
- [ ] Mobile responsive test
- [ ] SEO meta tags updated
- [ ] Social links verified
- [ ] Email links working
- [ ] No hardcoded localhost links

---

## 🎯 Recommended Setup

1. **Primary**: Vercel (simplest, free, best for Next.js)
2. **Backup**: GitHub Pages (static export)
3. **Self-hosted**: DigitalOcean (affordable control)

---

For specific platform documentation, visit their docs website.
