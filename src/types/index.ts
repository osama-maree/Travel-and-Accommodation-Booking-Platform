import { AxiosError } from "axios";

export interface BaseResponse {
  status: number;
  statusText: string;
  data:any
}
export interface AxiosBaseError extends AxiosError<BaseResponse> {}



