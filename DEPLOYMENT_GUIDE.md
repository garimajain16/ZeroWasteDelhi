# Complete Deployment Guide

## Overview
This guide will help you deploy your Zero Waste Delhi application:
- **Backend**: Node.js/Express API on Render
- **Frontend**: React/Vite app on Vercel

## Prerequisites
- GitHub repository with your code
- MongoDB Atlas database (already configured)
- Gmail account for email functionality

## Step 1: Deploy Backend to Render

1. **Create Render Account**: https://render.com
2. **New Web Service**:
   - Connect GitHub repo
   - Name: `zero-waste-delhi-backend`
   - Environment: Node
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`

3. **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=mongodb+srv://zerowastedelhi:zerowaste123@cluster0.n3dr2.mongodb.net/zero_waste_delhi_app?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-zero-waste-delhi-2024
   JWT_EXPIRE=7d
   EMAIL_USER=zerowastedelhi86@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password-here
   ADMIN_EMAIL=zerowastedelhi86@gmail.com
   ```

4. **Deploy** and copy the backend URL

## Step 2: Update Frontend Configuration

1. **Update vercel.json** with your actual backend URL:
   ```json
   {
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "https://YOUR-BACKEND-URL.onrender.com/api/$1"
       }
     ]
   }
   ```

## Step 3: Deploy Frontend to Vercel

1. **Create Vercel Account**: https://vercel.com
2. **New Project**:
   - Import GitHub repo
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Environment Variables**:
   ```
   VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com
   ```

4. **Deploy**

## Step 4: Test Deployment

1. Visit your Vercel frontend URL
2. Test user registration/login
3. Test waste entry functionality
4. Check dashboard data

## Troubleshooting

### Common Issues:
- **CORS Errors**: Ensure backend CORS is configured for your frontend domain
- **API Timeouts**: Render free tier sleeps - first request takes time
- **Environment Variables**: Double-check all variables are set correctly

### Logs:
- **Render**: Check function logs in Render dashboard
- **Vercel**: Check function logs in Vercel dashboard

## Production Considerations

1. **Security**:
   - Use strong JWT secrets
   - Enable HTTPS only
   - Set proper CORS origins

2. **Performance**:
   - Consider Render paid tier to avoid cold starts
   - Optimize database queries
   - Enable caching where appropriate

3. **Monitoring**:
   - Set up error tracking
   - Monitor API response times
   - Track user engagement

## URLs After Deployment
- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-backend.onrender.com
- **Database**: MongoDB Atlas (already configured)