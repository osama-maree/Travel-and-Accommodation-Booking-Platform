import axiosInstance from "../../../../../../../api";
import { Response } from "./types";
export const getHotels = async () => {
  return await axiosInstance
    .get<Response[]>(`/hotels`)
    .then((response) => response.data);
};
