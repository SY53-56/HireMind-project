

import axios from 'axios';

const isLocal = window.location.hostname === "localhost";
export const API = axios.create({
      baseURL: isLocal
    ? "http://localhost:5000"
    : "https://mega-project-12.onrender.com",
  withCredentials: true,
})