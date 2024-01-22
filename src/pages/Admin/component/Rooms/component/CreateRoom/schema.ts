import * as Yup from "yup";
export const validationSchema = Yup.object({
  roomNumber: Yup.number().required("Required"),
  cost: Yup.number().required("Required"),
});
