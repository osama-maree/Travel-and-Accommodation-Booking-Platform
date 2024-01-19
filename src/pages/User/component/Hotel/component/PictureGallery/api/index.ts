
import axiosInstance from "../../../../../../../api";
import { Response } from "./types";

export const getPictureGallery= async (id:string | undefined) => {

  return axiosInstance
    .get<Response[]>(`/hotels/${id}/gallery`)
    .then((response) => response.data);
};
