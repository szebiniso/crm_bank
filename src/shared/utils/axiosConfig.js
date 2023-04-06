import axios from "axios";

const API = axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// axios.defaults.withCredentials = true

export default API;
