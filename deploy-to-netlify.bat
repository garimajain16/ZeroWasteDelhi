@echo off
echo 🚀 Deploying Zero Waste Delhi to Netlify...
echo.

echo 📦 Your dist folder is ready for deployment!
echo 📁 Location: %cd%\dist
echo.

echo 🌐 Next steps:
echo 1. Go to https://netlify.com
echo 2. Sign up/login with your GitHub account
echo 3. Click "Add new site" then "Deploy manually"
echo 4. Drag and drop the 'dist' folder from this directory
echo 5. Your app will be live in seconds!
echo.

echo 🔗 Your backend is already live at:
echo https://zero-waste-delhi-backend.onrender.com
echo.

echo 📂 Opening dist folder for you...
start explorer "%cd%\dist"

echo.
echo ✅ Ready to deploy! Just drag the dist folder to Netlify.
pause