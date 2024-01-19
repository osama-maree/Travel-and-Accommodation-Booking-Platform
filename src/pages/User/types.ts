export interface dataTypes {
  city: string;
  adults: number;
  numberOfRooms: number;
  children: number;
  checkInDate: string;
  checkOutDate: string;
}
export interface filter {
  priceRange: number[];
  starRating: number |null;
  amenities: string;
  roomType: string;
}