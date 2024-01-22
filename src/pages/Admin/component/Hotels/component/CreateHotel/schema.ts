import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  hotelType: Yup.number().required("Required"),
  starRating: Yup.number().required("Required"),
  latitude: Yup.number().required("Required"),
  longitude: Yup.number().required("Required"),
  cityId: Yup.number().required("Required"),
});