# Polaris 23682 Engineering Portfolio - Deployment Guide

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 🌐 Deployment Options

### Option 1: Firebase Hosting (Recommended)

**Setup:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

**Configuration:**
- Public directory: `dist`
- Single-page app: Yes
- Automatic builds: Optional

**Deploy:**
```bash
npm run build
firebase deploy
```

**Custom Domain:**
```bash
firebase hosting:channel:deploy production
```

### Option 2: Vercel

**Quick Deploy:**
```bash
npm install -g vercel
vercel
```

**Custom Configuration:**
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Option 3: Netlify

**Via CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Via Git:**
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 4: GitHub Pages

**Setup:**
```bash
npm install --save-dev gh-pages
```

**Add to package.json:**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Configure vite.config.js:**
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

**Deploy:**
```bash
npm run deploy
```

## 📱 QR Code Generation

After deployment, generate QR codes for your live URL:

### Online Tools:
- QR Code Generator: https://www.qr-code-generator.com/
- QR Code Monkey: https://www.qrcode-monkey.com/

### Via npm:
```bash
npm install -g qrcode
qrcode "https://your-deployed-url.com" -o qr-code.png
```

## 🎯 Post-Deployment Checklist

- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all animations work smoothly
- [ ] Check interactive charts load correctly
- [ ] Test Judge Mode toggle functionality
- [ ] Validate all scroll anchors work
- [ ] Confirm QR code redirects properly
- [ ] Test on tablet for judge presentations
- [ ] Verify performance (Lighthouse score > 90)
- [ ] Check accessibility features
- [ ] Test on slow 3G connection

## 🔧 Environment Variables

Create `.env` file for configuration:
```
VITE_TEAM_NUMBER=23682
VITE_SEASON=2025-2026
VITE_ANALYTICS_ID=your-analytics-id
```

## 📊 Analytics Integration

### Google Analytics:
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Customization Before Deploy

### Update Team Information:
- `src/components/Hero.jsx` - Team number and season
- `src/components/Footer.jsx` - Contact info and links
- `src/components/LiveStats.jsx` - Current performance metrics
- `README.md` - Team details

### Update Performance Data:
- Autonomous success rates
- OPR estimates
- Cycle times
- Outreach metrics

## 🔐 Security Best Practices

- Never commit `.env` files
- Use environment variables for API keys
- Enable HTTPS on custom domains
- Set up proper CORS if using APIs
- Implement rate limiting if needed

## 📱 Sharing Strategy

1. **Physical Robot**: Attach QR code sticker
2. **Team Jerseys**: Print QR on back
3. **Engineering Notebook**: Include on first page
4. **Pit Display**: Large format QR code poster
5. **Business Cards**: Mini QR codes for judges
6. **Social Media**: Share link in bio

## 🎤 Judge Presentation Tips

1. Load site before match in case of connectivity issues
2. Enable Judge Mode for key highlights
3. Pre-scroll to most impressive sections
4. Have backup screenshots in case of network failure
5. Practice navigation gestures on tablet

## 🆘 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Slow loading:**
- Optimize images
- Enable lazy loading
- Use CDN for heavy assets

**Charts not rendering:**
- Check Recharts is installed
- Verify data format matches expected schema

## 📞 Support

For deployment issues:
- Check Vite docs: https://vitejs.dev/
- Firebase docs: https://firebase.google.com/docs
- React docs: https://react.dev/

---

**Remember:** Test thoroughly before competition day!
