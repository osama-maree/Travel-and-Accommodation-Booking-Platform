
import axiosInstance from "../../../../../../../api";
import { Search } from "../../../../../types";
import { hotelResponse, hotelResponseItem } from "./types";
export const searchHotel= async (param:Search |null) => {
  const url = "/hotels";
  return await axiosInstance
    .get<hotelResponse[]>(url, {
      params: param,
    })
    .then((response) => response.data);
};

export const DeleteHotel = async (id: number) => {
  const response= await axiosInstance.get<hotelResponseItem>(`/hotels/${id}`).then((response) => response.data);
  return axiosInstance
    .delete(`/cities/${response.cityId}/hotels/${id}`)
    .then((response) => response.data);
};
