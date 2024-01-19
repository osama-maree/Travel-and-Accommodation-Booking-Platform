import axiosInstance from "../../../../../../api";
import { RequestBody, Response } from "./types";

export const booking = async (body: RequestBody) => {
  const url = "/bookings";
  return axiosInstance.post<Response>(url, body).then((res) => res.data);
};
