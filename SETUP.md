# Polaris 23682 Portfolio - Complete Setup Guide

## 📋 Prerequisites Installation

### Step 1: Install Node.js

1. **Download Node.js**
   - Visit: https://nodejs.org/
   - Download the LTS version (recommended)
   - Run the installer
   - Keep all default settings
   - Click "Install"

2. **Verify Installation**
   Open Command Prompt and run:
   ```cmd
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.x.x and 10.x.x)

### Step 2: Navigate to Project

Open Command Prompt and navigate to the project:
```cmd
cd "c:\Users\Bandla_951807\Polaris Porfolio"
```

### Step 3: Install Dependencies

```cmd
npm install
```

This will install all required packages:
- React (UI framework)
- Vite (build tool)
- Tailwind CSS (styling)
- Recharts (data visualization)
- Lucide React (icons)
- And all other dependencies

**Note:** This may take 2-5 minutes depending on your internet speed.

### Step 4: Start Development Server

```cmd
npm run dev
```

The website will open automatically at: `http://localhost:3000`

## 🎨 What You'll See

Your portfolio website includes:

### 1. **Header Navigation**
- Polaris logo with team number
- Quick jump navigation to all sections
- **Judge Mode toggle** - highlights key innovations

### 2. **Live Stats Ticker**
- Scrolling performance metrics at the top
- Updates automatically
- Shows: Cycle Time, OPR, Odometry Drift, Weight, etc.

### 3. **Hero Section**
- Large team branding
- 3D robot visualization
- Quick stats cards
- Call-to-action buttons

### 4. **Strategic Analysis**
- Interactive autonomous path visualizer
- Animated SVG field map
- Robot capability radar chart
- Success rate metrics

### 5. **Mechanical Systems**
- Drivetrain specifications with physics formulas
- Active intake details
- Linear lift system with preset positions
- Performance metrics for each subsystem

### 6. **Code Vault**
- Syntax-highlighted PID controller code
- Real-time error decay graph
- Autonomous path code samples
- Sensor fusion specifications
- System performance metrics

### 7. **Impact & Sustainability**
- Outreach hours chart
- Community program details
- 3-year sustainability roadmap
- Environmental responsibility metrics

### 8. **Team Gallery**
- Team structure visualization
- Core values display
- Team statistics

### 9. **Footer**
- Contact information
- Quick navigation
- Social links
- QR code placeholder

## 🎯 Customization Guide

### Update Team Information

1. **Team Number and Branding**
   - Edit: `src/components/Header.jsx`
   - Edit: `src/components/Hero.jsx`
   - Edit: `src/components/Footer.jsx`

2. **Performance Metrics**
   - Edit: `src/components/LiveStats.jsx`
   - Update the `stats` array with your actual numbers

3. **Autonomous Data**
   - Edit: `src/components/StrategicAnalysis.jsx`
   - Update `capabilityData` array
   - Modify routine success rates

4. **Robot Specifications**
   - Edit: `src/components/MechanicalSystems.jsx`
   - Update motor configurations
   - Modify performance metrics
   - Change formulas if needed

5. **Code Samples**
   - Edit: `src/components/CodeVault.jsx`
   - Replace with your actual code
   - Update PID parameters
   - Modify sensor specifications

6. **Outreach Data**
   - Edit: `src/components/ImpactSustainability.jsx`
   - Update `outreachData` array
   - Modify program descriptions

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'ice-blue': '#F0F9FF',  // Background color
  'arctic': {
    500: '#0ea5e9',  // Primary blue
    // ... other shades
  }
}
```

### Add Images

1. Place images in `public/` folder
2. Reference in components:
   ```jsx
   <img src="/team-photo.jpg" alt="Team" />
   ```

### Modify Animations

Edit `tailwind.config.js` under `animation` and `keyframes` sections.

## 🚀 Building for Production

When ready to deploy:

```cmd
npm run build
```

This creates an optimized `dist` folder with your production website.

## 🌐 Deployment Options

### Option 1: Firebase (Recommended)

1. Install Firebase CLI:
   ```cmd
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```cmd
   firebase login
   ```

3. Initialize:
   ```cmd
   firebase init hosting
   ```
   - Select: Create new project or use existing
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub deploys: Optional

4. Deploy:
   ```cmd
   npm run build
   firebase deploy
   ```

5. Your site will be live at: `https://your-project.web.app`

### Option 2: Vercel (Easiest)

1. Install Vercel CLI:
   ```cmd
   npm install -g vercel
   ```

2. Deploy:
   ```cmd
   vercel
   ```

3. Follow prompts - it's automatic!

### Option 3: Netlify

1. Drag and drop the `dist` folder to: https://app.netlify.com/drop

2. Or install CLI:
   ```cmd
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## 📱 Creating QR Codes

After deployment:

1. Visit: https://www.qr-code-generator.com/
2. Enter your live URL
3. Customize colors to match your brand
4. Download high-resolution PNG
5. Print and attach to:
   - Robot
   - Team jerseys
   - Engineering notebook
   - Pit display

## 🎤 Using at Competition

### Judge Mode
1. Click "Judge Mode" button in header
2. Key innovations get highlighted with glow effect
3. Perfect for pit interviews

### Pit Presentation
1. Load site on iPad/tablet before match
2. Walk judges through each section
3. Interactive charts are touch-friendly
4. Smooth scrolling for easy navigation

### Alliance Selection
- Show performance metrics
- Demonstrate autonomous routines
- Prove reliability with data

## 🔧 Troubleshooting

### Port Already in Use
```cmd
npm run dev -- --port 3001
```

### Clear Cache
```cmd
npm run build -- --force
```

### Reinstall Dependencies
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Component Not Showing
- Check browser console (F12)
- Verify all imports are correct
- Ensure data format matches expected structure

## 📊 Performance Optimization

### Before Competition:
- [ ] Test on mobile devices
- [ ] Test on tablet (judge presentation device)
- [ ] Check loading speed on 3G
- [ ] Verify all animations work
- [ ] Test Judge Mode toggle
- [ ] Validate all links and navigation
- [ ] Create backup PDF screenshots

### Image Optimization:
- Use WebP format
- Compress before adding
- Max width: 1920px
- Recommended tools: TinyPNG, Squoosh

## 🎓 Learning Resources

- **React**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Recharts**: https://recharts.org/
- **Vite**: https://vitejs.dev/guide/

## 📞 Getting Help

### Common Issues:

**"npm is not recognized"**
- Restart Command Prompt after installing Node.js
- Or restart your computer

**"Cannot find module"**
```cmd
npm install
```

**Blank white page**
- Check browser console (F12)
- Look for red error messages
- Often a typo in component code

**Charts not showing**
- Verify data format
- Check Recharts documentation
- Ensure responsive container is used

## 🎯 Recommended Workflow

1. **Week 1**: Set up project, customize branding
2. **Week 2**: Update all metrics with real data
3. **Week 3**: Add team photos and customize content
4. **Week 4**: Test on devices, deploy to web
5. **Week 5**: Generate QR codes, print materials
6. **Competition**: Load on tablet, practice presentation

## ✅ Pre-Competition Checklist

- [ ] All team data is accurate
- [ ] Performance metrics are current
- [ ] QR codes are generated and printed
- [ ] Site is deployed and accessible
- [ ] Tested on judge presentation device
- [ ] Backup screenshots prepared
- [ ] Judge Mode tested and working
- [ ] All animations smooth on target device
- [ ] Load time is under 3 seconds
- [ ] Mobile responsive verified

---

## 🏆 Success Tips

1. **Keep it Updated**: Update metrics after each match
2. **Practice Presentation**: Know exactly which sections to show judges
3. **Have Backup**: Download PDF version in case of no internet
4. **QR Everywhere**: Make it easy for judges to find
5. **Judge Mode**: Use it during pit interviews for maximum impact

---

**You now have a world-class engineering portfolio! Good luck at competition! 🚀**

For questions or issues, refer to:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment instructions
- This file - Complete setup guide

**Team Polaris 23682 · Into the Deep · 2025-2026**
