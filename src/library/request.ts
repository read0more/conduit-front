import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.response.use(({ status, data }) => {
  if (200 <= status && status < 400) {
    return { data };
  }

  return { error: new Error(data.message || "Error") };
});

export default instance;
