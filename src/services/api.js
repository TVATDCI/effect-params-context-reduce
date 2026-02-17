import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token here if needed in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      error.message = `Server Error: ${error.response.status}`;
    } else if (error.request) {
      // Request was made but no response received
      error.message = "Network Error: Unable to reach server";
    }
    return Promise.reject(error);
  },
);

export default api;
