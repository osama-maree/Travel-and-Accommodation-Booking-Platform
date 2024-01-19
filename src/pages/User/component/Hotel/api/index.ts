import axiosInstance from "../../../../../api";
import { Response } from "./types";
export const getHotel = async (id:string | undefined) => {
  return axiosInstance
    .get<Response>(`/hotels/${id}`)
    .then((response) => response.data);
};
