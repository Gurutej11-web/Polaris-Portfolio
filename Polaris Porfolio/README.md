# Polaris 23682 Engineering Portfolio

<div align="center">
  <h3>🏔️ Arctic Glassmorphism Design · Into the Deep Season 2025-2026</h3>
  <p>A comprehensive digital twin of our engineering journey</p>
</div>

## 🚀 Overview

The Polaris 23682 Engineering Portfolio is a professional-grade web application showcasing our FTC team's technical capabilities, strategic analysis, and community impact. Built with modern web technologies and featuring interactive data visualizations, this portfolio serves as a "digital twin" of our robot and engineering process.

## ✨ Key Features

### 🎨 Arctic Glassmorphism Design
- Custom design system with Ice Blue (#F0F9FF) foundation
- Semi-transparent glass cards with backdrop blur effects
- Sky-500 and Cyan-400 accent colors for technical highlights
- Smooth animations and hover effects throughout

### 📊 Interactive Data Visualizations
- **Autonomous Path Visualizer**: Real-time SVG animation of robot pathing
- **Capability Radar Chart**: 5-axis performance mapping
- **PID Response Curve**: Live error decay visualization
- **Outreach Growth Chart**: Monthly impact tracking

### 🤖 Technical Documentation
- **Drivetrain**: 4-motor Mecanum with custom CNC plates
- **Active Intake**: Variable geometry with 35A compliant wheels
- **Linear Lift**: 3-stage continuous rigging with magnetic limit switches
- **Control Systems**: Custom PID implementation with sensor fusion

### 🎯 Judge Mode
- Toggle feature to highlight critical innovations
- Ring-glow effects on key technical achievements
- Optimized for pit interviews and alliance scouting

## 🛠️ Tech Stack

- **Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **Charts**: Recharts 2.10
- **Icons**: Lucide React 0.294
- **Animations**: Framer Motion 10.16

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/polaris23682/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🚀 Deployment

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Vercel
```bash
npm install -g vercel
vercel
```

## 📱 QR Code Integration

Generate a QR code for the deployed URL and place it:
- On the physical robot
- On team jerseys
- Inside the Engineering Notebook
- On pit display boards

## 📊 Performance Metrics

- **Load Time**: < 2 seconds on 3G
- **Lighthouse Score**: 95+ Performance
- **Mobile Responsive**: 100%
- **Accessibility**: WCAG 2.1 AA compliant

## 🎯 Strategic Use Cases

### For Judges
- Quick access to technical innovations during pit interviews
- Interactive demonstrations of autonomous pathing
- Real-time data visualization of robot capabilities
- Evidence of systematic engineering process

### For Alliance Selection
- Performance metrics (OPR, cycle time, reliability)
- Autonomous routine success rates
- Subsystem specifications and capabilities
- Team sustainability and growth trajectory

### For Outreach
- Professional showcase of STEM education impact
- Quantifiable community engagement metrics
- Inspiration for other teams and students

## 📖 Project Structure

```
polaris-portfolio/
├── public/
│   └── polaris-icon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LiveStats.jsx
│   │   ├── StrategicAnalysis.jsx
│   │   ├── MechanicalSystems.jsx
│   │   ├── CodeVault.jsx
│   │   ├── ImpactSustainability.jsx
│   │   ├── TeamGallery.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design Philosophy

The "Arctic" aesthetic was chosen to reflect the Polaris (North Star) brand identity:
- **Ice Blue Foundation**: Clean, professional background
- **Glass Morphism**: Modern, depth-filled card design
- **Sky/Cyan Accents**: Technical highlights and call-to-actions
- **Deep Scroll Architecture**: Narrative-driven user journey

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'ice-blue': '#F0F9FF',
  'arctic': { ... }
}
```

### Data
Update performance metrics in respective component files:
- `LiveStats.jsx` - Top banner statistics
- `StrategicAnalysis.jsx` - Autonomous data
- `MechanicalSystems.jsx` - Subsystem specs
- `CodeVault.jsx` - PID parameters

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

## 📞 Contact

- **Team Email**: team@polaris23682.com
- **GitHub**: github.com/polaris23682
- **Website**: [Your Deployed URL]

## 🏆 Acknowledgments

- FIRST Tech Challenge for the platform
- Our mentors and sponsors
- The FTC community for inspiration and support

---

<div align="center">
  <p><strong>Polaris 23682 · Into the Deep · 2025-2026</strong></p>
  <p>Est. OPR 82.5 · 94.3% Auto Consistency · 14.2s Cycle Time</p>
</div>
