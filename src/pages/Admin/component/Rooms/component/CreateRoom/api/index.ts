import axiosInstance from "../../../../../../../api";
import { Body } from "./types";
export const createRoom = async (body: Body) => {
  return await axiosInstance
    .post(`/hotels/${body.id}/rooms`, body)
    .then((res) => res.data);
};
