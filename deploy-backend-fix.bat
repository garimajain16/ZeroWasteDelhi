@echo off
echo 🚀 Deploying backend CORS fix to Render...
echo.

cd backend
echo 📦 Installing dependencies...
call npm install

echo 🔄 Committing CORS fix...
git add .
git commit -m "Fix CORS configuration for production deployment"

echo 📤 Pushing to GitHub (this will trigger Render deployment)...
git push origin main

echo.
echo ✅ Backend deployment initiated!
echo 🔗 Check your Render dashboard for deployment status
echo 📊 Your backend will be available at: https://zero-waste-delhi-backend.onrender.com
echo.
pause