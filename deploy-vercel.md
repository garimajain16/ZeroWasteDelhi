# Deploy Frontend to Vercel

## Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub** (Recommended):
   - Go to https://vercel.com and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: `Vite`
     - Root Directory: `./` (leave as default)
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Set Environment Variables** in Vercel Dashboard:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

4. **Deploy**: Click "Deploy"

## Alternative: Deploy via CLI:
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Important Notes:
- Update the backend URL in vercel.json after Render deployment
- Vercel automatically redeploys on GitHub pushes
- Free tier includes custom domains and SSL