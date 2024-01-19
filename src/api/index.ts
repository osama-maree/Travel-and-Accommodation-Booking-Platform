import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  headers: {
    Authorization: ` Bearer ${localStorage.getItem("access-token")}`,
  },
};
const axiosInstance = axios.create({
  baseURL:
    "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api",
  ...defaultAxiosSettings,
});
export default axiosInstance;
