import axiosInstance from "../../../../../../../api";
import { Response } from "./types";

export const getGuestReviews = async (id: string | undefined) => {
  return axiosInstance
    .get<Response[]>(`/hotels/${id}/reviews`)
    .then((response) => response.data);
};
