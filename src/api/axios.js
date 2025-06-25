// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mernecommerce-backend-ml42.onrender.com', // ✅ no "/URL"
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
