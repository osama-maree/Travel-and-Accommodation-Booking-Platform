import { BaseResponse } from "../../../../../types";

export interface Response extends BaseResponse{
    cityId: number,
    cityName: string,
    countryName: string,
    description: string,
    thumbnailUrl: string
}