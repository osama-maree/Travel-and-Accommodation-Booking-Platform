import axiosInstance from "../../../../../api";
import { propsType } from "../../MainSection/types";
import { querySearchRequest } from "./reuest.dto";
export const searchRes = async (param: querySearchRequest | null) => {
  const url = "/home/search";
  return axiosInstance
    .get<propsType[]>(url, {
      params: param,
    })
    .then((response) => response.data);
};
