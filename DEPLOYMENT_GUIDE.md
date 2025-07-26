# 🚀 Zero Waste Delhi - Deployment Guide

## 🎯 Quick Deployment Plan (30 minutes)

**Frontend:** Vercel (Free)
**Backend:** Railway (Free tier)
**Database:** MongoDB Atlas (Already set up ✅)

---

## 📋 Pre-Deployment Checklist

### ✅ READY:
- [x] Code pushed to GitHub: https://github.com/garimajain16/ZeroWasteDelhiProject
- [x] MongoDB Atlas connected and working
- [x] Production build tested
- [x] All features working (dashboard, auth, leaderboard)

### ⚠️ NEEDED:
- [ ] Gmail App Password for email functionality
- [ ] Environment variables for production

---

## 🔧 STEP 1: Set Up Gmail App Password (5 minutes)

### Why needed?
For email notifications (welcome emails, waste confirmations)

### Steps:
1. **Go to:** https://myaccount.google.com/security
2. **Enable 2-Step Verification** (if not already enabled)
3. **Go to:** App passwords section
4. **Generate password** for "Mail" application
5. **Copy the 16-character password** (save it!)

---

## 🚀 STEP 2: Deploy Backend to Railway (10 minutes)

### 2.1 Sign Up & Connect
1. **Go to:** https://railway.app
2. **Sign up** with GitHub account
3. **Click:** "New Project"
4. **Select:** "Deploy from GitHub repo"
5. **Choose:** `garimajain16/ZeroWasteDelhiProject`

### 2.2 Configure Backend
1. **Root Directory:** Set to `backend`
2. **Build Command:** `npm install`
3. **Start Command:** `npm start`

### 2.3 Set Environment Variables
Click "Variables" and add:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://zerowastedelhi:zerowaste123@cluster0.n3dr2.mongodb.net/zero_waste_delhi_app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=zero-waste-delhi-super-secure-jwt-secret-key-2024
JWT_EXPIRE=7d
EMAIL_USER=zerowastedelhi86@gmail.com
EMAIL_PASSWORD=YOUR_GMAIL_APP_PASSWORD_HERE
ADMIN_EMAIL=zerowastedelhi86@gmail.com
```

**Replace `YOUR_GMAIL_APP_PASSWORD_HERE` with the password from Step 1!**

### 2.4 Deploy
1. **Click:** "Deploy"
2. **Wait:** 2-3 minutes for build
3. **Copy:** Your backend URL (e.g., `https://your-app.railway.app`)

---

## 🌐 STEP 3: Deploy Frontend to Vercel (10 minutes)

### 3.1 Sign Up & Connect
1. **Go to:** https://vercel.com
2. **Sign up** with GitHub account
3. **Click:** "New Project"
4. **Import:** `garimajain16/ZeroWasteDelhiProject`

### 3.2 Configure Frontend
1. **Framework:** Vite (auto-detected)
2. **Root Directory:** Leave as root (not backend)
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`

### 3.3 Set Environment Variables
Click "Environment Variables" and add:

```env
VITE_API_URL=https://your-backend-url.railway.app
```

**Replace with your actual Railway backend URL from Step 2!**

### 3.4 Deploy
1. **Click:** "Deploy"
2. **Wait:** 2-3 minutes for build
3. **Get:** Your live URL (e.g., `https://your-app.vercel.app`)

---

## 🔧 STEP 4: Update CORS Settings (5 minutes)

### Why needed?
So your frontend can communicate with backend

### Steps:
1. **Go to:** Your GitHub repository
2. **Edit:** `backend/server.js`
3. **Find:** CORS configuration (around line 30)
4. **Update:** 

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-url.vercel.app'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
```

**Replace `your-frontend-url.vercel.app` with your actual Vercel URL!**

5. **Commit and push** changes
6. **Railway will auto-redeploy** your backend

---

## ✅ STEP 5: Test Your Live App (5 minutes)

### Test These Features:
1. **Visit your Vercel URL**
2. **Sign up** for a new account
3. **Login** with your account
4. **Add waste entry** 
5. **Check dashboard** shows real data
6. **View leaderboard** 
7. **Test on mobile** device

### Expected Results:
- ✅ App loads quickly
- ✅ User registration works
- ✅ Dashboard shows real data
- ✅ Waste entry submission works
- ✅ Leaderboard updates
- ✅ Mobile responsive
- ✅ Email notifications sent

---

## 🎉 SUCCESS INDICATORS

### Your app is live when:
- ✅ **Frontend URL** loads the app
- ✅ **Backend URL/api/health** returns success
- ✅ **User registration** creates accounts
- ✅ **Dashboard** shows real waste data
- ✅ **Database** saves new entries

### Live URLs:
- **Frontend:** https://your-app.vercel.app
- **Backend:** https://your-app.railway.app
- **Database:** MongoDB Atlas (already working)

---

## 🔧 Troubleshooting

### Common Issues:

**1. CORS Error:**
- Update CORS settings in backend/server.js
- Redeploy backend

**2. API Not Found:**
- Check VITE_API_URL in Vercel
- Ensure Railway backend is running

**3. Database Connection:**
- Verify MongoDB URI in Railway
- Check Atlas network access

**4. Email Not Working:**
- Verify Gmail app password
- Check EMAIL_PASSWORD in Railway

---

## 📱 Post-Deployment

### Share Your App:
- **Frontend URL:** Share with users
- **GitHub Repo:** https://github.com/garimajain16/ZeroWasteDelhiProject
- **Features:** Full waste management platform

### Monitor:
- **Railway Dashboard:** Backend performance
- **Vercel Dashboard:** Frontend analytics
- **MongoDB Atlas:** Database usage

---

**Ready to deploy? Start with Step 1 (Gmail App Password) and follow the guide!** 🚀