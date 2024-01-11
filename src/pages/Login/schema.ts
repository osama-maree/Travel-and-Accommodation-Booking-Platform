import *as  Yup from 'yup';
export const validationSchema = Yup.object({
  userName: Yup.string().required("Required"),
  password: Yup.string().min(3).required("Required"),
});
