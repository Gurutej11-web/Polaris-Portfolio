# 🔧 Troubleshooting Guide - Polaris 23682 Portfolio

## Common Issues & Solutions

---

## Installation Problems

### ❌ "npm is not recognized"

**Problem**: Node.js is not installed or not in PATH

**Solutions**:
1. **Install Node.js**:
   - Visit https://nodejs.org/
   - Download LTS version (20.x.x)
   - Run installer with default settings
   - **Restart Command Prompt** (important!)
   - Or restart your computer

2. **Verify Installation**:
   ```cmd
   node --version
   npm --version
   ```
   Should show version numbers

3. **Still not working?**
   - Check PATH environment variable
   - Add `C:\Program Files\nodejs\` to PATH
   - Restart computer

---

### ❌ "Cannot find module" or "Module not found"

**Problem**: Dependencies not installed

**Solution**:
```cmd
cd "c:\Users\Bandla_951807\Polaris Porfolio"
npm install
```

**If still fails**:
```cmd
# Clean installation
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

### ❌ "EACCES: permission denied"

**Problem**: Insufficient permissions

**Solutions**:
1. **Run as Administrator**:
   - Right-click Command Prompt
   - Select "Run as administrator"
   - Navigate to project and run `npm install`

2. **Change ownership** (Windows):
   ```cmd
   takeown /f "c:\Users\Bandla_951807\Polaris Porfolio" /r /d y
   ```

---

## Development Server Problems

### ❌ "Port 3000 is already in use"

**Problem**: Another process is using port 3000

**Solutions**:
1. **Use different port**:
   ```cmd
   npm run dev -- --port 3001
   ```

2. **Find and kill process**:
   ```cmd
   netstat -ano | findstr :3000
   taskkill /PID [PID_NUMBER] /F
   ```

3. **Restart computer** (easiest)

---

### ❌ "Failed to compile"

**Problem**: Syntax error in code

**Solutions**:
1. **Check error message** - it shows the file and line number
2. **Common issues**:
   - Missing closing bracket `}`
   - Missing closing tag `</div>`
   - Typo in component name
   - Missing comma in array/object

3. **Example fix**:
   ```javascript
   // ❌ Wrong
   const data = [
     { name: 'Test' value: 10 }  // Missing comma
   ]
   
   // ✅ Correct
   const data = [
     { name: 'Test', value: 10 }
   ]
   ```

---

### ❌ Changes not showing in browser

**Problem**: Browser cache or server not reloading

**Solutions**:
1. **Hard refresh**:
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Clear cache**:
   - Chrome: F12 → Network tab → Disable cache checkbox

3. **Restart dev server**:
   - Press `Ctrl + C` in terminal
   - Run `npm run dev` again

4. **Try incognito mode**

---

## Build Problems

### ❌ "npm run build" fails

**Problem**: Build error

**Solutions**:
1. **Check for errors**:
   - Read error message carefully
   - Look for file name and line number

2. **Clean rebuild**:
   ```cmd
   rmdir /s /q dist
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   npm run build
   ```

3. **Check disk space** - need at least 500MB free

---

### ❌ Build succeeds but site doesn't work

**Problem**: Path or configuration issue

**Solutions**:
1. **Check base path** in `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/',  // Should be '/' for most cases
     // ...
   })
   ```

2. **Test production build locally**:
   ```cmd
   npm run build
   npm run preview
   ```

3. **Check browser console** (F12) for errors

---

## Display Problems

### ❌ Blank white page

**Problem**: JavaScript error or missing component

**Solutions**:
1. **Check browser console** (F12):
   - Look for red errors
   - Note the file and line number

2. **Common causes**:
   - Missing import statement
   - Component name typo
   - Missing props

3. **Verify all files exist**:
   - Check `src/components/` folder
   - Ensure all imports match file names

---

### ❌ Charts not showing

**Problem**: Recharts not loading or data format issue

**Solutions**:
1. **Verify Recharts is installed**:
   ```cmd
   npm list recharts
   ```
   If not listed:
   ```cmd
   npm install recharts
   ```

2. **Check data format**:
   ```javascript
   // ✅ Correct format
   const data = [
     { name: 'A', value: 10 },
     { name: 'B', value: 20 }
   ];
   ```

3. **Ensure ResponsiveContainer**:
   ```javascript
   <ResponsiveContainer width="100%" height={300}>
     <LineChart data={data}>
       {/* ... */}
     </LineChart>
   </ResponsiveContainer>
   ```

---

### ❌ Animations not working

**Problem**: CSS or browser compatibility

**Solutions**:
1. **Check browser support** - use Chrome/Edge/Firefox
2. **Disable hardware acceleration** if glitchy
3. **Check CSS classes**:
   ```javascript
   // Make sure class exists
   className="float-animation"
   ```

4. **Verify Tailwind config** has animation defined

---

### ❌ Images not loading

**Problem**: Incorrect path or missing file

**Solutions**:
1. **Check file exists** in `public/` folder
2. **Use correct path**:
   ```javascript
   // ✅ Correct (no 'public' in path)
   <img src="/polaris-icon.svg" />
   
   // ❌ Wrong
   <img src="/public/polaris-icon.svg" />
   ```

3. **Check file name** - case sensitive on some servers

---

## Mobile/Responsive Issues

### ❌ Layout broken on mobile

**Problem**: Responsive classes not applied

**Solutions**:
1. **Check Tailwind responsive prefixes**:
   ```javascript
   // ✅ Correct
   className="grid md:grid-cols-2 lg:grid-cols-4"
   
   // ❌ Wrong
   className="grid-cols-4"  // Always 4 columns
   ```

2. **Test in DevTools**:
   - F12 → Toggle device toolbar
   - Try different screen sizes

3. **Verify viewport meta tag** in `index.html`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

---

### ❌ Touch/click not working on mobile

**Problem**: Touch targets too small

**Solutions**:
1. **Increase button size**:
   ```javascript
   // Minimum 44x44px touch target
   className="px-6 py-3"  // Better
   ```

2. **Check z-index** - element might be behind another

3. **Test on actual device** - emulator may not show all issues

---

## Performance Problems

### ❌ Slow loading

**Problem**: Large bundle size or slow network

**Solutions**:
1. **Optimize images**:
   - Compress before adding
   - Use WebP format
   - Max size: 500KB each

2. **Check bundle size**:
   ```cmd
   npm run build
   # Check dist/ folder size
   ```

3. **Test on 3G**:
   - Chrome DevTools → Network tab
   - Set throttling to "Slow 3G"

---

### ❌ Animations laggy

**Problem**: Too many animations or weak device

**Solutions**:
1. **Reduce animations** on low-end devices
2. **Use CSS animations** (GPU accelerated)
3. **Disable animations** if needed:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; }
   }
   ```

---

## Deployment Problems

### ❌ Firebase deploy fails

**Problem**: Not logged in or wrong project

**Solutions**:
1. **Login first**:
   ```cmd
   firebase login
   ```

2. **Check project**:
   ```cmd
   firebase projects:list
   firebase use [project-name]
   ```

3. **Rebuild before deploy**:
   ```cmd
   npm run build
   firebase deploy
   ```

---

### ❌ Deployed site shows 404

**Problem**: Routing configuration

**Solutions**:
1. **Check firebase.json**:
   ```json
   {
     "hosting": {
       "public": "dist",
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

2. **Verify build folder**:
   - Should be `dist/` not `build/`

---

### ❌ Vercel deployment fails

**Problem**: Build command or output directory

**Solutions**:
1. **Correct settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

2. **Check build locally first**:
   ```cmd
   npm run build
   ```

---

## Data/Content Issues

### ❌ Stats not updating

**Problem**: Static data in component

**Solution**:
1. **Update data in component file**:
   - `src/components/LiveStats.jsx` for ticker
   - `src/components/StrategicAnalysis.jsx` for charts
   - etc.

2. **Example**:
   ```javascript
   const stats = [
     { label: 'Cycle Time', value: '14.2s', icon: '⚡' },
     // Change '14.2s' to your actual value
   ];
   ```

---

### ❌ Judge Mode not working

**Problem**: State not passed correctly

**Solutions**:
1. **Check App.jsx**:
   ```javascript
   const [judgeMode, setJudgeMode] = useState(false);
   ```

2. **Verify props passed**:
   ```javascript
   <StrategicAnalysis judgeMode={judgeMode} />
   ```

3. **Check toggle button** in Header.jsx

---

## Browser-Specific Issues

### ❌ Works in Chrome but not Safari

**Problem**: Browser compatibility

**Solutions**:
1. **Check CSS compatibility**
2. **Add vendor prefixes** (Autoprefixer should handle this)
3. **Test in Safari DevTools**

---

### ❌ Works on desktop but not mobile browser

**Problem**: Mobile browser limitations

**Solutions**:
1. **Test in actual mobile browsers**
2. **Check viewport meta tag**
3. **Reduce animations on mobile**

---

## Emergency Quick Fixes

### Nuclear Option: Complete Reset

If nothing else works:

```cmd
# 1. Backup your customizations
copy src\components\*.jsx backup\

# 2. Delete everything except source files
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json

# 3. Reinstall
npm install

# 4. Test
npm run dev

# 5. Restore customizations if needed
```

---

## Getting Help

### Before Asking for Help:

1. ✅ Check this troubleshooting guide
2. ✅ Read the error message completely
3. ✅ Check browser console (F12)
4. ✅ Try the nuclear option above
5. ✅ Search the error on Google

### When Asking for Help:

Include:
- Full error message
- What you were doing when error occurred
- What you've tried already
- Screenshots of error
- Browser and OS version

### Where to Get Help:

1. **Documentation**:
   - `SETUP.md`
   - `QUICK-REFERENCE.md`
   - `README.md`

2. **Online Communities**:
   - Stack Overflow
   - FTC Discord servers
   - React community forums

3. **Official Docs**:
   - React: https://react.dev
   - Vite: https://vitejs.dev
   - Tailwind: https://tailwindcss.com

---

## Prevention Tips

### Best Practices:

1. **Always work on a copy** - don't edit original files directly
2. **Test frequently** - run dev server often
3. **Commit to Git** - version control saves lives
4. **Read error messages** - they usually tell you what's wrong
5. **Use browser DevTools** - F12 is your friend
6. **Keep dependencies updated** - but test after updating
7. **Document changes** - comment your code
8. **Test on multiple devices** - before competition

### Pre-Competition Checklist:

- [ ] Site loads on laptop
- [ ] Site loads on tablet
- [ ] Site loads on phone
- [ ] Judge Mode works
- [ ] All sections scroll
- [ ] Charts display correctly
- [ ] Animations smooth
- [ ] QR code works
- [ ] Backup screenshots ready
- [ ] Device fully charged

---

## Success Stories

### "It worked after I..."

- ✅ Restarted my computer
- ✅ Cleared browser cache
- ✅ Reinstalled node_modules
- ✅ Ran as administrator
- ✅ Used a different port
- ✅ Fixed a typo in import
- ✅ Updated Node.js
- ✅ Checked file paths
- ✅ Read the error message
- ✅ Followed SETUP.md exactly

---

## Final Resort

**If ABSOLUTELY NOTHING works:**

1. Take a deep breath 🧘
2. Step away for 5 minutes ☕
3. Come back with fresh eyes 👀
4. Start with SETUP.md from scratch 📝
5. Follow every step exactly ✅
6. Don't skip steps ⏭️
7. Test after each major step ✔️

**It WILL work!** This is a tested, working application. 99% of issues are:
- Missing Node.js installation
- Typos in file names
- Not running `npm install`
- Browser cache
- Port conflicts

---

**Remember: Every expert developer has spent hours debugging. You've got this! 💪**

**Need urgent help? Check our community Discord or create a GitHub issue with all the details above.**

---

**Team Polaris 23682 · Troubleshooting Guide · 2025-2026**
