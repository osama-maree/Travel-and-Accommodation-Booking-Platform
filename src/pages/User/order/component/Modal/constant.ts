import { extractDate } from "../../../../../utilties/extractDate";

export const INITIAL_FORM_STATE = {
  customerName: "Ali",
  hotelName: "Ghaza Hotel",
  roomNumber: 2,
  roomType: "room",
  bookingDateTime: extractDate(),
  totalCost: 0,
  paymentMethod: "",
};
