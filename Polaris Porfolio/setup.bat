@echo off
cls
echo.
echo ========================================================================
echo  POLARIS 23682 - Engineering Portfolio Setup
echo  Into the Deep Season 2025-2026
echo ========================================================================
echo.
echo This script will help you set up your portfolio website.
echo.
echo Requirements:
echo  - Node.js (will check if installed)
echo  - Internet connection (to download packages)
echo.
pause

echo.
echo Checking for Node.js installation...
echo.

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo  1. Visit: https://nodejs.org/
    echo  2. Download the LTS version
    echo  3. Run the installer
    echo  4. Restart your computer
    echo  5. Run this script again
    echo.
    pause
    exit /b 1
)

echo [SUCCESS] Node.js is installed!
node --version
echo.
npm --version
echo.

echo ========================================================================
echo  Installing dependencies...
echo  This may take 2-5 minutes depending on your internet speed.
echo ========================================================================
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Installation failed!
    echo.
    echo Please try:
    echo  1. Check your internet connection
    echo  2. Run this script as Administrator
    echo  3. Delete node_modules folder and try again
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================================================
echo  SUCCESS! Installation complete!
echo ========================================================================
echo.
echo Your portfolio is ready to use!
echo.
echo Next steps:
echo  1. To start the development server, run: start-dev.bat
echo  2. To customize content, read: SETUP.md
echo  3. To deploy, read: DEPLOYMENT.md
echo.
echo Opening documentation in 5 seconds...
timeout /t 5 /nobreak >nul

start INDEX.md

echo.
echo ========================================================================
echo  Quick Commands:
echo ========================================================================
echo.
echo  Start development server:
echo    npm run dev
echo.
echo  Build for production:
echo    npm run build
echo.
echo  Preview production build:
echo    npm run preview
echo.
echo ========================================================================
echo.
echo Good luck with your portfolio!
echo.
pause
