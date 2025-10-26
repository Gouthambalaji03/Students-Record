# 🎓 Students Record Management System

A full-stack web application for managing student records with a modern React frontend and Node.js backend.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple)

## 🚀 Live Demo

- **Frontend**: [Deployed on Vercel](https://your-vercel-url.vercel.app)
- **Backend API**: [Deployed on Railway](https://your-railway-url.railway.app)

## ✨ Features

- 📋 **View All Students** - Display student records in a clean table format
- ➕ **Add New Students** - Create new student records with validation
- ✏️ **Update Students** - Edit existing student information
- 🗑️ **Delete Students** - Remove student records
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🎨 **Modern UI** - Clean interface built with Bootstrap

## 🛠 Tech Stack

### Frontend
- **React.js 19.2.0** - Modern UI library
- **Bootstrap 5.3.8** - Responsive CSS framework
- **Axios 1.12.2** - HTTP client for API calls
- **React Router DOM 7.9.4** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MySQL 2.18.1** - Database
- **CORS 2.8.5** - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend hosting
- **Railway** - Backend hosting and database

## 📁 Project Structure

```
Students-Record/
├── frontend/                 # React.js frontend
│   ├── public/              # Static files
│   │   ├── index.html       # Main HTML template
│   │   ├── favicon.ico      # Site icon
│   │   └── manifest.json    # PWA manifest
│   ├── src/                 # Source code
│   │   ├── App.js           # Main app component
│   │   ├── Home.js          # Student list component
│   │   ├── Create.js        # Add student component
│   │   ├── Update.js        # Edit student component
│   │   ├── config.js        # API configuration
│   │   └── index.js         # App entry point
│   ├── package.json         # Frontend dependencies
│   └── README.md            # Frontend documentation
├── backend/                 # Node.js backend
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── env.example          # Environment variables template
├── database/                # Database files
│   └── schema.sql           # Database schema
├── vercel.json              # Vercel deployment config
├── railway.json             # Railway deployment config
├── package.json             # Root package.json
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gouthambalaji03/Students-Record.git
   cd Students-Record
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up the database**
   - Create a MySQL database named `student_db`
   - Run the SQL schema from `database/schema.sql`:
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

4. **Configure environment variables**
   ```bash
   cd backend
   cp env.example .env
   # Edit .env with your database credentials
   ```

5. **Run the application**
   ```bash
   # From root directory
   npm run dev
   ```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8081

## 📦 Available Scripts

### Root Directory
```bash
npm run dev          # Start both frontend and backend
npm run frontend     # Start only frontend
npm run backend      # Start only backend
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies
```

### Frontend Directory
```bash
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
npm run eject        # Eject from Create React App
```

### Backend Directory
```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all students |
| POST | `/create` | Create a new student |
| PUT | `/update/:id` | Update a student by ID |
| DELETE | `/delete/:id` | Delete a student by ID |

### API Examples

**Get all students:**
```bash
GET http://localhost:8081/
```

**Create a new student:**
```bash
POST http://localhost:8081/create
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "123-456-7890",
  "email": "john.doe@example.com"
}
```

**Update a student:**
```bash
PUT http://localhost:8081/update/1
Content-Type: application/json

{
  "name": "John Smith",
  "phone": "098-765-4321",
  "email": "john.smith@example.com"
}
```

**Delete a student:**
```bash
DELETE http://localhost:8081/delete/1
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically

### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Add MySQL database
3. Set environment variables
4. Deploy automatically

### Environment Variables

**Backend (.env):**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
PORT=8081
NODE_ENV=development
```

**Frontend (config.js):**
```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-railway-backend-url.railway.app'
  : 'http://localhost:8081';
```

## 🎨 Screenshots

### Home Page
- Clean table layout showing all students
- Add, Update, Delete buttons for each student
- Responsive design for all screen sizes

### Add Student Form
- Form validation for required fields
- Email format validation
- Success/error feedback

### Update Student Form
- Pre-populated form with existing data
- Same validation as add form
- Seamless editing experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gouthambalaji**
- GitHub: [@Gouthambalaji03](https://github.com/Gouthambalaji03)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Bootstrap team for the responsive CSS framework
- Express.js team for the lightweight web framework
- Vercel and Railway for excellent hosting platforms

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the [Issues](https://github.com/Gouthambalaji03/Students-Record/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the author for direct support

## 🔄 Version History

- **v1.0.0** - Initial release with full CRUD functionality
- **v1.1.0** - Added deployment configuration
- **v1.2.0** - Improved UI and added responsive design

---

⭐ **Star this repository if you found it helpful!**
