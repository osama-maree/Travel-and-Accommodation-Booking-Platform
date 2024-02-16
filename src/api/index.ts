import axios from "axios";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { logOut } from "../features/authSlice/authSlice";
const axiosInstance = axios.create({
  baseURL:
    "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const dispatch = useDispatch();
    if (error.response && error.response.status === 401) {
      dispatch(logOut());
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
