# Deploy Frontend to Vercel - Quick Guide

## Prerequisites
- Your backend is already deployed on Render
- Your code is pushed to GitHub

## Method 1: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

## Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel --prod
```

## Your Configuration is Ready!

✅ `vercel.json` - Routes API calls to your Render backend
✅ `package.json` - Has `vercel-build` script
✅ `vite.config.ts` - Optimized build settings

## After Deployment

1. Vercel will give you a URL like: `https://your-app.vercel.app`
2. Test your app to make sure API calls work
3. Your frontend will automatically proxy `/api/*` calls to your Render backend

## If You Need to Update Backend URL

Update the URL in `vercel.json`:
```json
{
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "https://YOUR-ACTUAL-BACKEND-URL.onrender.com/api/$1"
    }
  ]
}
```

That's it! Your frontend will be live in minutes.