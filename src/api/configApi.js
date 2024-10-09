import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: api_url || "http://localhost:3000",
  withCredentials: true,
});

export default api;
