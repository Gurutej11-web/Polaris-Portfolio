@echo off
cls
echo.
echo ========================================================================
echo  POLARIS 23682 - Building for Production
echo ========================================================================
echo.
echo Building optimized production version...
echo.

call npm run build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Build failed!
    echo.
    echo Check the error messages above for details.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================================================
echo  SUCCESS! Production build complete!
echo ========================================================================
echo.
echo The optimized website is in the 'dist' folder.
echo.
echo Next steps:
echo  1. Deploy the 'dist' folder to your hosting service
echo  2. See DEPLOYMENT.md for detailed instructions
echo  3. To preview locally, run: npm run preview
echo.
echo ========================================================================
echo.
pause
