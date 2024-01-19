import { BaseResponse } from "../../../../../../types";

export interface Response extends BaseResponse {
  customerName: string;
  hotelName: string;
  roomNumber: number;
  roomType: string;
  bookingDateTime: Date;
  totalCost: number;
  paymentMethod: string;
  bookingStatus: string;
  confirmationNumber: string;
}
export interface RequestBody {
  customerName: string;
  hotelName: string;
  roomNumber: number;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}