# 🚀 Deploy to GitHub & Firebase - Complete Guide

## 📋 Prerequisites

Before starting, make sure you have:
- [ ] GitHub account (you already have the repo: https://github.com/Gurutej11-web/Polaris-Portfolio)
- [ ] Git installed on your computer
- [ ] Firebase account (free)
- [ ] Node.js installed (for Firebase CLI)

---

## 🎯 **OPTION 1: Quick Deploy (Recommended - No Git Install Needed)**

### Step 1: Upload to GitHub via Web Browser

1. **Go to your repo:** https://github.com/Gurutej11-web/Polaris-Portfolio

2. **Click "Add file" → "Upload files"**

3. **Drag and drop these files:**
   - `portfolio.html` (MOST IMPORTANT!)
   - All `.md` files (documentation)
   
   **Or drag the entire folder contents**

4. **Scroll down, type commit message:**
   ```
   Initial commit: Complete Polaris 26382 Portfolio
   ```

5. **Click "Commit changes"**

### Step 2: Enable GitHub Pages (Instant Hosting!)

1. **In your repo, click "Settings"**

2. **Scroll to "Pages" in left sidebar**

3. **Under "Source", select:**
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`

4. **Click "Save"**

5. **Wait 1-2 minutes, your site will be live at:**
   ```
   https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html
   ```

**✅ DONE! No Git or Firebase needed!**

---

## 🎯 **OPTION 2: Using Git (If You Install It)**

### Step 1: Install Git

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Download 64-bit installer
   - Run installer (use default settings)

2. **Restart your terminal/VS Code** after installation

### Step 2: Configure Git (First Time Only)

Open terminal and run:

```bash
git config --global user.name "Gurutej11-web"
git config --global user.email "your-email@example.com"
```

### Step 3: Push to GitHub

```bash
cd "c:\Users\Bandla_951807\Polaris Porfolio"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Complete Polaris 26382 Portfolio with all data"

# Add your GitHub repo
git remote add origin https://github.com/Gurutej11-web/Polaris-Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If it asks for authentication:**
- Use GitHub Personal Access Token (not password)
- Generate at: https://github.com/settings/tokens

### Step 4: Enable GitHub Pages

Same as Option 1, Step 2 above.

---

## 🔥 **OPTION 3: Firebase Hosting (Most Professional)**

### Why Firebase?
- ✅ Custom domain support
- ✅ Free SSL certificate
- ✅ Fast CDN
- ✅ Professional URL
- ✅ Analytics built-in

### Step 1: Install Node.js & Firebase CLI

1. **Install Node.js:**
   - Go to: https://nodejs.org/
   - Download LTS version
   - Run installer (use default settings)
   - Restart terminal after installation

2. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser - sign in with your Google account.

### Step 3: Initialize Firebase

```bash
cd "c:\Users\Bandla_951807\Polaris Porfolio"

firebase init hosting
```

**Answer the prompts:**
- "Use an existing project" or "Create a new project"
- **What do you want to use as your public directory?** Type: `.` (current directory)
- **Configure as a single-page app?** `N` (No)
- **Set up automatic builds?** `N` (No)
- **File portfolio.html already exists. Overwrite?** `N` (No)

### Step 4: Configure Firebase

The command creates `firebase.json`. Edit it to:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "/",
        "destination": "/portfolio.html"
      }
    ]
  }
}
```

### Step 5: Deploy to Firebase

```bash
firebase deploy
```

**Your site will be live at:**
```
https://your-project-id.web.app
```

**And also at:**
```
https://your-project-id.firebaseapp.com
```

---

## 🎨 **RECOMMENDED: Option 1 (GitHub Pages) - Easiest!**

For a competition portfolio, GitHub Pages is perfect:
- ✅ Free forever
- ✅ No installation needed
- ✅ Works in 5 minutes
- ✅ Easy to update (just upload new files)
- ✅ Professional URL

**Steps:**
1. Go to your repo on GitHub
2. Upload `portfolio.html`
3. Enable GitHub Pages in Settings
4. Share this URL with judges:
   ```
   https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html
   ```

---

## 📱 **After Deployment: Create QR Code**

### Option 1: Use QR Code Generator Website

1. Go to: https://qr-code-generator.com/
2. Paste your URL
3. Download QR code image
4. Print and attach to your robot/pit

### Option 2: Use Google Chrome

1. Open your portfolio URL in Chrome
2. Click the share icon (or click in address bar)
3. Click "Create QR Code"
4. Download and print

---

## 🔄 **How to Update Your Portfolio**

### If Using GitHub Pages (Option 1):
1. Go to your repo
2. Click on `portfolio.html`
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down, click "Commit changes"
6. Wait 1-2 minutes for update to go live

### If Using Git (Option 2):
```bash
cd "c:\Users\Bandla_951807\Polaris Porfolio"
git add .
git commit -m "Update portfolio with new competition results"
git push
```

### If Using Firebase (Option 3):
```bash
cd "c:\Users\Bandla_951807\Polaris Porfolio"
firebase deploy
```

---

## 🎯 **Quick Start: 5-Minute Deploy**

**For fastest deployment (NO installations needed):**

1. **Open:** https://github.com/Gurutej11-web/Polaris-Portfolio

2. **Click:** "Add file" → "Upload files"

3. **Drag:** `portfolio.html` from your Polaris Porfolio folder

4. **Type:** "Add Polaris 26382 Portfolio" as commit message

5. **Click:** "Commit changes"

6. **Go to:** Settings → Pages

7. **Select:** Branch: main, Folder: / (root)

8. **Click:** Save

9. **Wait 2 minutes**, then visit:
   ```
   https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html
   ```

**✅ DONE! Share this URL with judges!**

---

## 🌐 **Your URLs After Deployment**

### GitHub Pages:
- Main URL: `https://gurutej11-web.github.io/Polaris-Portfolio/`
- Direct portfolio: `https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html`

### Firebase (if you choose Option 3):
- Main URL: `https://your-project-id.web.app`
- Alternate: `https://your-project-id.firebaseapp.com`

---

## 📊 **Comparison: Which to Choose?**

| Feature | GitHub Pages | Firebase Hosting |
|---------|-------------|------------------|
| **Setup Time** | 5 minutes | 15 minutes |
| **Installation Needed** | None | Node.js + Firebase CLI |
| **Cost** | Free forever | Free (generous limits) |
| **Custom Domain** | Yes (paid) | Yes (free SSL) |
| **Speed** | Fast | Very Fast (CDN) |
| **Updates** | Click to edit | Terminal command |
| **Best For** | Quick portfolio | Professional projects |

**Recommendation for FTC Competition:** **GitHub Pages (Option 1)**

---

## ❓ **Troubleshooting**

### GitHub Pages not showing up?
- Wait 2-5 minutes after enabling
- Make sure file is named `portfolio.html` (not `Portfolio.html`)
- Check Settings → Pages for the green checkmark
- Try accessing: `https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html`

### Firebase deploy failed?
- Make sure you're logged in: `firebase login`
- Check you're in the right directory: `cd "c:\Users\Bandla_951807\Polaris Porfolio"`
- Make sure Node.js is installed: `node --version`
- Try: `firebase deploy --debug` for more info

### Git not recognized?
- Install Git from: https://git-scm.com/download/win
- Restart terminal/VS Code after installation
- Or use Option 1 (no Git needed!)

---

## 🎊 **After Deployment Checklist**

- [ ] Portfolio is live and accessible
- [ ] Judge Mode works (press J key)
- [ ] Navigation works (Space key)
- [ ] All sections load correctly
- [ ] Created QR code
- [ ] Tested on mobile device
- [ ] Shared URL with team
- [ ] Added URL to engineering notebook

---

## 📝 **URLs to Share with Judges**

**Short version for verbal:**
"Visit github.io slash Gurutej11-web slash Polaris-Portfolio"

**Full URL for documents:**
```
https://gurutej11-web.github.io/Polaris-Portfolio/portfolio.html
```

**Or with QR code:**
[Print QR code and attach to robot/pit display]

---

## 🏆 **You're Ready to Deploy!**

**Fastest Path:** Option 1 (GitHub Pages) - 5 minutes, no installation
**Most Professional:** Option 3 (Firebase) - Custom domain, analytics
**Most Control:** Option 2 (Git) - Version control, collaboration

**Recommendation:** Start with GitHub Pages (Option 1), it's perfect for competition portfolios!

---

**Team Polaris #26382 · Going Live! 🚀**
