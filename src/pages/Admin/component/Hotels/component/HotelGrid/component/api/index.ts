import axiosInstance from "../../../../../../../../api";

import { RequestBody } from "../../../CreateHotel/types";

export const createHotel = async (body: RequestBody) => {
  return await axiosInstance.post(`/cities/${body.cityId}/hotels`, body);
};
interface header {
  body: RequestBody;
  id: number | undefined;
}
export const EditHotel = async (head: header) => {
  return await axiosInstance.put(`/hotels/${head?.id}`, head.body);
};
