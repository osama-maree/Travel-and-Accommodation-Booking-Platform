import axiosInstance from "../../../../../api";
import { Response } from "./types";

export const getRecentHotels = async (id:number) => {

  return axiosInstance
    .get<Response[]>(`/home/users/${id}/recent-hotels`)
    .then((response) => response.data);
};
