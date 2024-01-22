import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().min(3).required("Required"),
  description: Yup.string().min(3).required("Required"),
});
