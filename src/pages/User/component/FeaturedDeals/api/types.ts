import { BaseResponse } from "../../../../../types";

export interface Response extends BaseResponse{
    hotelId: number,
    originalRoomPrice:number,
    discount:number,
    finalPrice:number,
    cityName: string
    hotelName: string
    hotelStarRating:number,
    title: string
    description: string
    roomPhotoUrl:string,

}