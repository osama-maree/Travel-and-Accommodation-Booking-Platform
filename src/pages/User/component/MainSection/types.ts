import { dataTypes } from "../../types";

interface amenType { id: number; name: string; description: string }

export interface propsType {
  amenities: amenType[];
  cityName: string;
  discount: number;
  hotelId: number;
  hotelName: string;
  latitude: number;
  longitude: number;
  roomPhotoUrl: string;
  roomPrice: number;
  roomType: string;
  starRating: number;
}
export interface mainSectionProps {
  searchTerm: dataTypes | null;
}