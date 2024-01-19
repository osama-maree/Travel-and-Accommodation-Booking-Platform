import { BaseResponse } from "../../../../../types";
interface amenType{
  name:string;
  description:string;
}
export interface Response extends BaseResponse {
 hotelName: string;
  location:string;
  description:string;
  latitude:number;
  longitude: number;
  amenities:amenType[],
  starRating: number;
  availableRooms: 50,
  imageUrl: string;
  cityId:number
}
