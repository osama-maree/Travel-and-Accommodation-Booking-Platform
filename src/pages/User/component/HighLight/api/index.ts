import axiosInstance from "../../../../../api";
import { Response } from "./types";

export const getTrendingHighLight = async () => {
  return axiosInstance
    .get<Response[]>("/home/destinations/trending")
    .then((response) => response.data);
};
