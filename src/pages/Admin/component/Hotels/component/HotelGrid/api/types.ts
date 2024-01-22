import { BaseResponse } from './../../../../../../../types/index';


export interface hotelResponse extends BaseResponse{
  id: number;
  name: string;
  description: string;
  hotelType:number;
  starRating:number;
  latitude: number;
  longitude: number;
}
export interface hotelResponseItem extends BaseResponse {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: 
    {
      name: string;
      description: string;
    }[];
  starRating: number;
  availableRooms: number;
  imageUrl:string;
  cityId:number;
}
export interface hotel {
  id: number;
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}