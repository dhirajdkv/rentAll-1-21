import axios from "axios";

const localURL = "http://localhost:8000";
const hostedURL = "http://localhost:8000";

const baseURL = process.env.NODE_ENV === "development" ? localURL : hostedURL;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
