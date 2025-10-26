# 📚 Students Record Management System

A full-stack web application for managing student records with a modern React frontend and Node.js backend API.

## 🚀 Features

- **View Students**: Display all student records in a responsive table
- **Add Students**: Create new student records with validation
- **Update Students**: Edit existing student information
- **Delete Students**: Remove student records with confirmation
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant UI updates after operations

## 🛠 Tech Stack

### Frontend
- **React.js** - Modern UI library
- **Bootstrap 5** - Responsive CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Students-Record/
├── frontend/                 # React.js frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── App.js          # Main app component
│   │   ├── Home.js         # Home page component
│   │   ├── Create.js       # Create student component
│   │   ├── Update.js       # Update student component
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── .gitignore          # Frontend git ignore rules
├── backend/                 # Node.js backend API
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .gitignore          # Backend git ignore rules
├── package.json            # Root package.json with scripts
├── .gitignore              # Root git ignore rules
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **MySQL** database server
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Students-Record.git
   cd Students-Record
   ```

2. **Install all dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up the database**
   ```sql
   -- Create database
   CREATE DATABASE student_db;
   
   -- Use the database
   USE student_db;
   
   -- Create users table
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       phone VARCHAR(20),
       email VARCHAR(255) UNIQUE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   
   -- Insert sample data (optional)
   INSERT INTO users (name, phone, email) VALUES
   ('John Doe', '123-456-7890', 'john.doe@example.com'),
   ('Jane Smith', '098-765-4321', 'jane.smith@example.com'),
   ('Bob Johnson', '555-123-4567', 'bob.johnson@example.com');
   ```

4. **Configure environment variables**
   ```bash
   # Create environment file for backend
   cd backend
   cp .env.example .env
   
   # Edit .env with your database credentials
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=student_db
   PORT=8081
   NODE_ENV=development
   ```

5. **Run the application**
   ```bash
   # From root directory - runs both frontend and backend
   npm run dev
   
   # Or run separately:
   # Backend only
   npm run backend
   
   # Frontend only
   npm run frontend
   ```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8081

## 📦 Available Scripts

### Root Directory Scripts
```bash
npm run dev          # Start both frontend and backend in development mode
npm run frontend     # Start only the frontend
npm run backend      # Start only the backend
npm run build        # Build the frontend for production
npm run install-all  # Install dependencies for all packages
```

### Frontend Scripts
```bash
cd frontend
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
npm run eject        # Eject from Create React App
```

### Backend Scripts
```bash
cd backend
npm start            # Start the server with nodemon
npm test             # Run tests (if configured)
```

## 🔧 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get all students | - |
| POST | `/create` | Create a new student | `{name, phone, email}` |
| PUT | `/update/:id` | Update a student | `{name, phone, email}` |
| DELETE | `/delete/:id` | Delete a student | - |

### Example API Usage

```javascript
// Get all students
fetch('http://localhost:8081/')
  .then(response => response.json())
  .then(data => console.log(data));

// Create a new student
fetch('http://localhost:8081/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john@example.com'
  })
});
```

## 🚀 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend)
1. **Frontend**: Deploy to Vercel
   - Connect GitHub repository
   - Set root directory to `frontend`
   - Build command: `npm run build`

2. **Backend**: Deploy to Railway
   - Connect GitHub repository
   - Set root directory to `backend`
   - Add MySQL database
   - Set environment variables

### Option 2: Netlify (Frontend) + Heroku (Backend)
1. **Frontend**: Deploy to Netlify
2. **Backend**: Deploy to Heroku with MySQL addon

### Option 3: Full-Stack on Railway
- Deploy both frontend and backend on Railway
- Use Railway's MySQL database service

## 🔒 Environment Variables

### Backend (.env)
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
PORT=8081
NODE_ENV=development
```

### Frontend (for production)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests (if configured)
cd backend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Use meaningful commit messages
- Follow React best practices
- Write clean, readable code
- Add comments for complex logic
- Test your changes before committing

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL server is running
   - Verify database credentials in `.env`
   - Ensure database and table exist

2. **Port Already in Use**
   - Change port in backend `.env` file
   - Kill process using the port: `lsof -ti:8081 | xargs kill -9`

3. **CORS Issues**
   - Backend has CORS enabled for all origins
   - Check if backend is running on correct port

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Bootstrap team for the responsive framework
- Express.js for the robust backend framework
- MySQL for reliable database management

---

**Happy Coding! 🎉**
