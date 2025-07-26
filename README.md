# 🌱 Zero Waste Delhi

A comprehensive waste management platform for Delhi NCR that gamifies waste disposal and promotes environmental consciousness through real-time tracking, rewards, and community engagement.

## 🎯 Features

### 🔐 User Management
- **Secure Authentication** - JWT-based login/signup system
- **User Profiles** - Personal dashboard with statistics
- **Real-time Data** - Live waste tracking and points

### 📊 Dashboard & Analytics
- **Personal Dashboard** - Track your environmental impact
- **Weekly Reports** - See your weekly waste contributions
- **Progress Tracking** - Monitor your eco-journey over time
- **Real-time Stats** - Live updates of waste collected and points earned

### 🗑️ Waste Management
- **Smart Waste Entry** - Easy waste submission with location detection
- **Multiple Waste Types** - Organic, recyclable, hazardous, and general waste
- **Location Tracking** - GPS-based waste collection points
- **Bin Finder** - Locate nearby smart waste bins

### 🏆 Gamification
- **Points System** - Earn points for waste contributions
- **Leaderboard** - Compete with other users
- **Achievements** - Unlock badges for milestones
- **Weekly Goals** - Set and achieve weekly targets

### 📧 Notifications
- **Welcome Emails** - Onboarding for new users
- **Confirmation Emails** - Waste submission confirmations
- **Admin Notifications** - Real-time admin updates

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Vite** for build tooling

### Backend
- **Node.js** with Express
- **MongoDB Atlas** for database
- **JWT** for authentication
- **bcrypt** for password hashing
- **Nodemailer** for email services

### Features
- **Responsive Design** - Mobile-first approach
- **Real-time Updates** - Live data synchronization
- **Secure API** - Rate limiting and CORS protection
- **Email Integration** - Automated notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account
- Gmail account for email services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zero-waste-delhi.git
   cd zero-waste-delhi
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create `backend/.env`:
   ```env
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-jwt-secret-key
   JWT_EXPIRE=7d
   PORT=5000
   NODE_ENV=development
   
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password
   ADMIN_EMAIL=your-admin-email@gmail.com
   ```

5. **Start the development servers**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (in new terminal):
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📱 Usage

### For Users:
1. **Sign Up** - Create account with email/password
2. **Add Waste** - Submit waste entries with location
3. **Track Progress** - Monitor your environmental impact
4. **Compete** - Check leaderboard rankings
5. **Earn Rewards** - Collect points and achievements

### For Admins:
- Monitor user activities via email notifications
- Track system-wide waste collection statistics
- Manage user accounts and data

## 🌍 Environmental Impact

### Current Statistics:
- **43.1 kg** total waste collected
- **285 points** distributed to users
- **8 waste entries** submitted
- **3 active users** contributing

### Waste Types Supported:
- **Organic** - Kitchen waste, food scraps
- **Recyclable** - Paper, plastic, metal
- **Hazardous** - E-waste, batteries, chemicals
- **General** - Mixed household waste

## 🔧 Development

### Project Structure
```
zero-waste-delhi/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   └── styles/            # CSS styles
├── backend/               # Backend source code
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── services/         # Business logic
└── docs/                 # Documentation
```

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build

# The built files will be in the dist/ directory
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
EMAIL_USER=your-production-email
EMAIL_PASSWORD=your-production-email-password
```

### Deployment Platforms
- **Frontend:** Vercel, Netlify, GitHub Pages
- **Backend:** Railway, Heroku, DigitalOcean
- **Database:** MongoDB Atlas (already configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MongoDB Atlas** for cloud database services
- **Tailwind CSS** for the beautiful UI framework
- **React** team for the amazing frontend library
- **Node.js** community for the robust backend platform

## 📞 Support

For support, email zerowastedelhi86@gmail.com or create an issue in this repository.

---

**Made with 💚 for a cleaner Delhi**

🌱 **Together, let's make Delhi zero waste!** 🌱