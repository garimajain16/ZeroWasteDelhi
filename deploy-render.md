# Deploy Backend to Render

## Steps:

1. **Create Render Account**: Go to https://render.com and sign up/login

2. **Connect GitHub**: Link your GitHub repository to Render

3. **Create Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Configure:
     - Name: `zero-waste-delhi-backend`
     - Environment: `Node`
     - Build Command: `cd backend && npm install`
     - Start Command: `cd backend && npm start`
     - Instance Type: Free (or paid for better performance)

4. **Set Environment Variables** in Render Dashboard:
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

5. **Deploy**: Click "Create Web Service"

6. **Get Backend URL**: After deployment, copy the URL (e.g., https://zero-waste-delhi-backend.onrender.com)

## Important Notes:
- Free tier sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- Consider upgrading to paid tier for production use