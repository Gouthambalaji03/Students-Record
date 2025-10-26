// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://students-record-production.up.railway.app'  // Your Railway backend URL
  : 'http://localhost:8081';

export default API_BASE_URL;
