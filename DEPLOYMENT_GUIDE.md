# 🚀 Deployment Guide: Vercel + Railway

This guide will help you deploy your Students Record application using:
- **Frontend**: Vercel (React.js)
- **Backend**: Railway (Node.js + MySQL)

## 📋 Prerequisites

1. GitHub account
2. Vercel account (free)
3. Railway account (free)
4. Your project pushed to GitHub

## 🎯 Step-by-Step Deployment

### Part 1: Deploy Backend to Railway

#### 1.1 Set up Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Connect your GitHub repository

#### 1.2 Deploy Backend
1. Click "New Project" in Railway dashboard
2. Select "Deploy from GitHub repo"
3. Choose your `Students-Record` repository
4. Railway will automatically detect it's a Node.js project

#### 1.3 Add MySQL Database
1. In your Railway project dashboard, click "New"
2. Select "Database" → "MySQL"
3. Railway will create a MySQL database for you
4. Note down the database credentials (you'll need them later)

#### 1.4 Configure Environment Variables
1. Go to your backend service in Railway
2. Click on "Variables" tab
3. Add these environment variables:
   ```
   DB_HOST=your-railway-mysql-host
   DB_USER=your-railway-mysql-user
   DB_PASSWORD=your-railway-mysql-password
   DB_NAME=railway
   PORT=8081
   NODE_ENV=production
   ```

#### 1.5 Set up Database Schema
1. Go to your MySQL database in Railway
2. Click "Query" tab
3. Run this SQL to create the table:
   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     phone VARCHAR(20),
     email VARCHAR(255) UNIQUE,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

#### 1.6 Get Backend URL
1. Once deployed, Railway will give you a URL like: `https://your-app-name.railway.app`
2. **Save this URL** - you'll need it for the frontend

### Part 2: Deploy Frontend to Vercel

#### 2.1 Set up Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Connect your GitHub repository

#### 2.2 Update Frontend Configuration
1. Open `frontend/src/config.js`
2. Replace the placeholder URL with your Railway backend URL:
   ```javascript
   const API_BASE_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-actual-railway-url.railway.app'  // Replace with your actual Railway URL
     : 'http://localhost:8081';
   ```

#### 2.3 Deploy to Vercel
1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Vercel will automatically detect it's a React project
4. Configure build settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click "Deploy"

#### 2.4 Configure Environment Variables (Optional)
1. In Vercel project settings, go to "Environment Variables"
2. Add: `NODE_ENV=production`

### Part 3: Final Configuration

#### 3.1 Update CORS in Backend
Your backend already has CORS enabled, which is good for production.

#### 3.2 Test Your Deployment
1. Visit your Vercel frontend URL
2. Test all CRUD operations:
   - View students
   - Add new student
   - Update student
   - Delete student

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Make sure your Railway backend URL is correct in `frontend/src/config.js`
   - Verify CORS is enabled in your backend

2. **Database Connection Issues**
   - Check environment variables in Railway
   - Verify database credentials
   - Ensure database table exists

3. **Build Failures**
   - Check that all dependencies are in package.json
   - Verify build commands in Vercel settings

## 📱 Your Live URLs

After deployment, you'll have:
- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-app-name.railway.app`

## 🔄 Updating Your App

To update your deployed app:
1. Make changes to your code
2. Push to GitHub
3. Both Vercel and Railway will automatically redeploy

## 💰 Cost

- **Vercel**: Free tier includes 100GB bandwidth/month
- **Railway**: Free tier includes $5 credit/month (usually enough for small apps)

## 🎉 You're Done!

Your Students Record application is now live on the internet! Share the Vercel URL with others to use your app.
