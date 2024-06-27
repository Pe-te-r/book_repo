// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://book-api-1-8wmi.onrender.com/api/', 
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;
