import { BaseResponse } from "../../../../../../../types";
export interface Response extends BaseResponse {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}
