# 🔑 How to Get Railway Database Keys

This guide shows you exactly how to get your database credentials from Railway.

## 📋 Step-by-Step Process

### Step 1: Deploy Your Backend to Railway

1. **Go to Railway**
   - Visit [railway.app](https://railway.app)
   - Sign up with your GitHub account
   - Click "New Project"

2. **Deploy from GitHub**
   - Select "Deploy from GitHub repo"
   - Choose your `Students-Record` repository
   - Railway will automatically detect your Node.js backend

### Step 2: Add MySQL Database

1. **In your Railway project dashboard:**
   - Click the "+" button (New)
   - Select "Database"
   - Choose "MySQL"

2. **Railway will create a MySQL database for you**
   - Wait for it to finish provisioning (usually 1-2 minutes)

### Step 3: Get Your Database Credentials

1. **Click on your MySQL database service** in Railway dashboard

2. **Go to the "Variables" tab**
   - You'll see all the environment variables Railway created automatically

3. **Copy these values:**
   ```
   MYSQL_HOST=your-host-value
   MYSQL_USER=your-username-value  
   MYSQL_PASSWORD=your-password-value
   MYSQL_DATABASE=your-database-name
   MYSQL_PORT=3306
   ```

### Step 4: Set Environment Variables for Your Backend

1. **Go to your backend service** (not the database)
2. **Click "Variables" tab**
3. **Add these environment variables:**

   ```
   DB_HOST=your-mysql-host-value
   DB_USER=your-mysql-user-value
   DB_PASSWORD=your-mysql-password-value
   DB_NAME=your-mysql-database-value
   PORT=8081
   NODE_ENV=production
   ```

   **Important:** Use the values from Step 3, but rename them to match your backend code:
   - `MYSQL_HOST` → `DB_HOST`
   - `MYSQL_USER` → `DB_USER`
   - `MYSQL_PASSWORD` → `DB_PASSWORD`
   - `MYSQL_DATABASE` → `DB_NAME`

### Step 5: Create Database Table

1. **Go back to your MySQL database service**
2. **Click "Query" tab**
3. **Run this SQL command:**

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

### Step 6: Get Your Backend URL

1. **Go to your backend service**
2. **Click "Settings" tab**
3. **Copy the "Domain" URL** - this is your backend API URL
   - Example: `https://your-app-name.railway.app`

## 🔍 Visual Guide

### Railway Dashboard Layout:
```
Your Project
├── Backend Service (Node.js)
│   ├── Variables (set DB_HOST, DB_USER, etc.)
│   └── Settings (get your backend URL)
└── MySQL Database
    ├── Variables (get MYSQL_HOST, MYSQL_USER, etc.)
    └── Query (create your table)
```

## ⚠️ Important Notes

1. **Never share your database credentials** publicly
2. **Railway automatically rotates passwords** periodically
3. **Use the Variables tab** to manage environment variables
4. **Your backend URL** is what you'll use in your frontend config

## 🎯 What You'll Get

After following these steps, you'll have:
- ✅ Backend deployed at: `https://your-app-name.railway.app`
- ✅ Database credentials configured
- ✅ Database table created
- ✅ Environment variables set

## 🔄 Next Step

Once you have your backend URL, update your frontend:
1. Open `frontend/src/config.js`
2. Replace the placeholder with your actual Railway URL:
   ```javascript
   const API_BASE_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-actual-railway-url.railway.app'  // Your real URL here
     : 'http://localhost:8081';
   ```

## 🆘 Need Help?

If you get stuck:
1. Check Railway's documentation
2. Look at the deployment logs in Railway dashboard
3. Verify all environment variables are set correctly
4. Make sure the database table was created successfully
