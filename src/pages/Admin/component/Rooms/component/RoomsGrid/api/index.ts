import axiosInstance from "../../../../../../../api";
import { Response, param } from "./types";
export const getRooms = async (id: number) => {
  const params = { checkInDate: "10-11-2001", checkOutDate: "11-11-11" };
  return await axiosInstance
    .get<Response[]>(`/hotels/${id}/rooms`, {
      params,
    })
    .then((response) => response.data);
};
export const DeleteRoom= async (params:param) => {
  return await axiosInstance
    .delete(`/hotels/${params.hotelId}/rooms/${params.roomId}`)
    .then((response) => response.data);
};
