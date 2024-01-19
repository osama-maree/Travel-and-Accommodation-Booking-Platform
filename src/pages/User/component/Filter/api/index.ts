
import axiosInstance from "../../../../../api";
import { Response } from "./types";

export const getAmenities = async () => {
  return axiosInstance
    .get<Response[]>("/search-results/amenities")
    .then((response) => response.data);
};
