# Quick Reference Guide - Polaris 23682 Portfolio

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

## 📁 File Structure Quick Reference

```
src/
├── components/
│   ├── Header.jsx           # Navigation + Judge Mode toggle
│   ├── Hero.jsx             # Landing section with robot viz
│   ├── LiveStats.jsx        # Scrolling stats ticker
│   ├── StrategicAnalysis.jsx # Autonomous paths + radar chart
│   ├── MechanicalSystems.jsx # Drivetrain, intake, lift specs
│   ├── CodeVault.jsx        # PID code + performance graphs
│   ├── ImpactSustainability.jsx # Outreach + sustainability
│   ├── TeamGallery.jsx      # Team members + values
│   └── Footer.jsx           # Contact info + links
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css                # Global styles + Tailwind

public/
└── polaris-icon.svg         # Team logo

Config Files:
├── package.json             # Dependencies + scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Design system
├── postcss.config.js       # CSS processing
└── .eslintrc.json          # Code linting rules
```

## 🎨 Common Customizations

### Update Team Number
**Files to Edit:**
- `src/components/Header.jsx` (line 15)
- `src/components/Hero.jsx` (line 12)
- `src/components/Footer.jsx` (line 10)
- `index.html` (title tag)
- `README.md` (all references)

### Change Performance Metrics
**File:** `src/components/LiveStats.jsx`
```javascript
const stats = [
  { label: 'Avg Cycle Time', value: '14.2s', icon: '⚡' },
  // Update these values with your actual data
];
```

### Modify Autonomous Paths
**File:** `src/components/StrategicAnalysis.jsx`
- Line 30: Update success rates
- Line 80-110: Modify SVG path coordinates
- Line 115-150: Update routine statistics

### Change Robot Specifications
**File:** `src/components/MechanicalSystems.jsx`
- Line 50-70: Drivetrain specs
- Line 120-140: Intake specifications
- Line 200-230: Lift system details

### Update PID Parameters
**File:** `src/components/CodeVault.jsx`
- Line 25: Update PID data array
- Line 135-137: Update kP, kI, kD values

### Modify Outreach Data
**File:** `src/components/ImpactSustainability.jsx`
- Line 10-16: Update monthly data
- Line 90-150: Update program descriptions

## 🎯 Judge Mode Highlights

To add Judge Mode highlight to a component:
```jsx
<div className={`glass-card p-8 ${judgeMode ? 'judge-highlight' : ''}`}>
  {judgeMode && (
    <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
      YOUR HIGHLIGHT TEXT
    </span>
  )}
</div>
```

## 🎨 Color Reference

```javascript
// Primary Colors
'ice-blue': '#F0F9FF'    // Background
'sky-500': '#0ea5e9'     // Primary actions
'cyan-400': '#22d3ee'    // Technical highlights
'slate-900': '#0f172a'   // Text

// Glassmorphism
'bg-white/60'            // Glass card background
'backdrop-blur-xl'       // Blur effect
'border-white/40'        // Border

// Judge Mode
'ring-cyan-400'          // Highlight ring
'glow-effect'            // Pulsing animation
```

## 📊 Chart Data Format

### Radar Chart
```javascript
const capabilityData = [
  { subject: 'Speed', value: 88, fullMark: 100 },
  // value: 0-100
];
```

### Line Chart (PID)
```javascript
const pidData = [
  { time: 0, error: 100, setpoint: 0 },
  // time in ms, error in %, setpoint is target
];
```

### Bar Chart (Outreach)
```javascript
const outreachData = [
  { month: 'Sep', hours: 18, students: 65 },
  // hours: number, students: number
];
```

## 🔧 Common Fixes

### "npm is not recognized"
Install Node.js from https://nodejs.org

### Port 3000 in use
```bash
npm run dev -- --port 3001
```

### Changes not showing
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### Build errors
```bash
# Clean install
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Chart not rendering
- Check data array format
- Verify ResponsiveContainer is used
- Check browser console for errors

## 🎤 Judge Presentation Checklist

**Before Competition:**
- [ ] Update all metrics with current data
- [ ] Test Judge Mode toggle
- [ ] Verify all animations work
- [ ] Load site on presentation device
- [ ] Create backup screenshots
- [ ] Print QR codes

**During Pit Interview:**
1. Enable Judge Mode (top right button)
2. Navigate to Strategic Analysis (show auto paths)
3. Scroll to highlighted mechanical features
4. Show PID graph in Code Vault
5. Display Impact metrics if time permits

**Key Talking Points:**
- "Judge Mode highlights our key innovations"
- "Our custom CNC plates reduce flex by 35%"
- "Magnetic limit switches ensure 10,000+ cycle reliability"
- "PID controller achieves zero steady-state error"
- "94.3% autonomous consistency"

## 📱 Deployment Quick Reference

### Firebase
```bash
npm run build
firebase deploy
```

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod
```

## 🎨 Tailwind Classes Quick Reference

### Layout
```css
container mx-auto     /* Centered container */
grid lg:grid-cols-2   /* 2-column grid on large screens */
flex items-center     /* Flex with vertical center */
space-y-4            /* Vertical spacing */
```

### Glass Card
```css
glass-card           /* Pre-defined glass style */
hover:shadow-xl      /* Shadow on hover */
transition-all       /* Smooth transitions */
```

### Typography
```css
text-5xl font-black  /* Large bold heading */
text-gradient        /* Gradient text effect */
font-mono            /* Monospace font */
```

### Colors
```css
text-sky-500         /* Primary blue text */
bg-cyan-400/20       /* Cyan background 20% opacity */
border-white/40      /* White border 40% opacity */
```

## 🔍 Debugging Tips

### Check Console
Press F12 → Console tab → Look for red errors

### React DevTools
1. Install React DevTools browser extension
2. F12 → React tab
3. Inspect component props and state

### Network Issues
F12 → Network tab → Check if resources load

### CSS Not Working
- Check class spelling
- Verify Tailwind config
- Try `npm run dev` again

## 📞 Quick Help

**Node.js not installed?**
https://nodejs.org → Download LTS → Install → Restart terminal

**Git not installed?**
https://git-scm.com → Download → Install

**Code editor needed?**
https://code.visualstudio.com → Download VS Code

**Can't find a file?**
Use Ctrl+P in VS Code to search files

**Syntax error?**
Check for:
- Missing closing brackets `}`
- Missing closing tags `</div>`
- Missing commas in arrays
- Typos in import statements

## 🎯 Performance Tips

### Before Build
- Optimize images (< 500KB each)
- Remove unused code
- Test on slow connection

### Lighthouse Score
Run in Chrome:
1. F12 → Lighthouse tab
2. Generate report
3. Aim for 90+ in all categories

### Load Time
Target: < 3 seconds on 3G
- Check with Chrome DevTools
- Throttle to "Slow 3G"
- Measure load time

## ✅ Pre-Competition Checklist

**1 Week Before:**
- [ ] All data is accurate
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] QR codes printed
- [ ] Site deployed

**Competition Day:**
- [ ] Site loads on device
- [ ] Judge Mode works
- [ ] All sections scroll smoothly
- [ ] Backup screenshots ready
- [ ] Battery charged

---

## 💡 Pro Tips

1. **Judge Mode is your secret weapon** - Always demonstrate it
2. **Practice navigation** - Know exactly where to scroll
3. **Have backup** - Screenshots in case no internet
4. **QR everywhere** - Make it easy for judges to find
5. **Update live** - Add new metrics after matches

---

**Need more help? Check:**
- `SETUP.md` - Complete installation guide
- `DEPLOYMENT.md` - Deployment instructions
- `FEATURES.md` - All features explained
- `README.md` - Project overview

**Emergency Contact:**
- GitHub Issues: [Your repo]/issues
- Discord: FTC Community servers
- Email: team@polaris23682.com

---

**Quick Start (For First Time):**
1. Install Node.js
2. Open terminal in project folder
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

**You're ready to go! 🚀**
