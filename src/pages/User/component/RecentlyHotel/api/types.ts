import { BaseResponse } from "../../../../../types";

export interface Response extends BaseResponse {
  hotelId: number;
  cityName: string;
  starRating: number;
  visitDate: Date;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}
