import { BaseResponse } from "../../../../../types";

export interface Response extends BaseResponse {
  id: number;
  name: string;
  description:String;
}
export interface hotelResponse extends BaseResponse {
  id: number;
  name: string;
  description: string;
  hotelType:number;
  starRating:number;
  latitude: number;
  longitude: number;
}