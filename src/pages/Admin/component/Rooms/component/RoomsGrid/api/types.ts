import { BaseResponse } from "../../../../../../../types";
export interface Response extends BaseResponse {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: {
    name: string;
    description: string;
  }[];
  price: number;
  availability: boolean;
}
export interface param{
  hotelId:number;
  roomId:number;
}