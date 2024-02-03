import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  headers: {
    Authorization: ` Bearer ${localStorage.getItem("access-token")}`,
  },
};
const axiosInstance = axios.create({
  baseURL:
process.env.REACT_APP_API_URL,
  ...defaultAxiosSettings,
});
export default axiosInstance;
