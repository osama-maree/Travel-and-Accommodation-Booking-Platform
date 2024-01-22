
import axiosInstance from "../../../../../api";
import { RequestBody } from "../types";

export const createCity = async (body: RequestBody) => {
  const url = "/cities";
  return await axiosInstance.post(url, body).then((res) => res.data);
};
