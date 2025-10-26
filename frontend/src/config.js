// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-railway-backend-url.railway.app'  // Replace with your Railway backend URL
  : 'http://localhost:8081';

export default API_BASE_URL;
