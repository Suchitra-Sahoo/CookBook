// src/config/api.js
const API_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_DEPLOYED_API_URL
    : import.meta.env.VITE_API_URL;

export default API_URL;
