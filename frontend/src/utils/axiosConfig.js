// src/utils/axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat-app-uuy5.onrender.com",

  withCredentials: true,
});

export default instance;
