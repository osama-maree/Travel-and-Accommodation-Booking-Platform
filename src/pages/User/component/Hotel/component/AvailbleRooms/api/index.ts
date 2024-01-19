import axiosInstance from "../../../../../../../api";
import {
  extractDate,
  extractTomorowDate,
} from "../../../../../../../utilties/extractDate";
import { Response } from "./types";
export const getAvailableRooms = async (id: string | undefined) => {
  const param = {
    checkInDate: extractDate(),
    checkOutDate: extractTomorowDate(),
  };
  return axiosInstance
    .get<Response[]>(`/hotels/${id}/rooms`, {
      params: param,
    })
    .then((response) => response.data);
};
