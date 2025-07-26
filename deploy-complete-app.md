# Quick Deploy Commands

## Prerequisites Check
```bash
# Ensure you have the required accounts
# 1. GitHub account with your code pushed
# 2. Render account: https://render.com
# 3. Vercel account: https://vercel.com
```

## Option 1: Manual Deployment (Recommended)

### Backend (Render):
1. Go to https://render.com → New → Web Service
2. Connect GitHub repo
3. Settings:
   - Name: `zero-waste-delhi-backend`
   - Build: `cd backend && npm install`
   - Start: `cd backend && npm start`
4. Add environment variables from DEPLOYMENT_GUIDE.md
5. Deploy

### Frontend (Vercel):
1. Go to https://vercel.com → New Project
2. Import GitHub repo
3. Framework: Vite
4. Deploy
5. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`

## Option 2: CLI Deployment

### Install CLIs:
```bash
npm install -g vercel
```

### Deploy Frontend:
```bash
# Login and deploy
vercel login
vercel --prod
```

## Post-Deployment:
1. Update vercel.json with actual backend URL
2. Test the application
3. Monitor logs for any issues

## Expected URLs:
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-backend.onrender.com`