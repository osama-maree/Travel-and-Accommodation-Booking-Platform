export interface roomType {
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
  quantity: number;
}