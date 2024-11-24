// // connection btw frontend and backend
// import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api"; // backend URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;

import axios from "axios";
import store from "../store/store";

const API_BASE_URL = "http://localhost:3000/api"; // backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const state = store.getState(); // Get the current state from the Redux store
    const token = state.auth.token; // Access the token from the auth slice

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header if the token exists
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle the error
  }
);

export default api;
