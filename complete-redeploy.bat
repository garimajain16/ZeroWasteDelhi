@echo off
echo 🚀 Complete Zero Waste Delhi Redeployment
echo ==========================================
echo.

echo 📋 Step 1: Clean and rebuild frontend...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo 📋 Step 2: Commit all changes...
git add .
git commit -m "Complete redeployment with production URLs"

echo.
echo 📋 Step 3: Push to GitHub (triggers backend redeploy)...
git push origin main

echo.
echo 📋 Step 4: Deploy frontend to Netlify...
echo 📁 Your dist folder is ready for deployment
echo 🌐 Go to: https://app.netlify.com/sites/elaborate-mandazi-d14229/deploys
echo 📤 Drag and drop the 'dist' folder to redeploy

echo.
echo 📂 Opening dist folder and Netlify...
start explorer "%cd%\dist"
start https://app.netlify.com/sites/elaborate-mandazi-d14229/deploys

echo.
echo ✅ Redeployment initiated!
echo 🔗 Backend: https://zero-waste-delhi-backend.onrender.com
echo 🔗 Frontend: https://elaborate-mandazi-d14229.netlify.app
echo.
echo ⏳ Wait 2-3 minutes for backend to redeploy, then test your app!
pause