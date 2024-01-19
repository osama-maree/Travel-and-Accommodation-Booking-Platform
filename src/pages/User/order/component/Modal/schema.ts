import * as Yup from "yup";
export const validationSchema = Yup.object({
  customerName: Yup.string().min(3).required("Required"),
  hotelName: Yup.string().min(3).required("Required"),
  paymentMethod: Yup.string().min(3).required("Required"),
  roomNumber: Yup.number().required("Required"),
  roomType: Yup.string().min(3).required("Required"),
  bookingDateTime: Yup.string().required("Required"),
  totalCost: Yup.number().required("Required"),
});
