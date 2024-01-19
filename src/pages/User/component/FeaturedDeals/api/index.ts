import axiosInstance from "../../../../../api";
import { Response } from "./types";

export const getFeaturedDeals = async () => {
  return axiosInstance
    .get<Response[]>("/home/featured-deals")
    .then((response) => response.data);
};
