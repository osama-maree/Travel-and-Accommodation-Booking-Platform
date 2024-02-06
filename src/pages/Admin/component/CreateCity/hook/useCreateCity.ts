import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "../../../../../hooks/useSnackbar";
import { createCity } from "../api";
import useAdmin from "../../../context/useAdmin";
const useCreateCity = () => {
   const {cities,setCities}=useAdmin()
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: createCity,
    onSuccess: (data) => {
      setCities([...cities,data])
      showSnackbar({ severity: "success", message: "Create New City Success" });
    },
    onError: (error) => {
      console.log(error);
      showSnackbar({
        severity: "error",
        message: "Error Create City",
      });
    },
  });
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values, { resetForm }) => {
      mutate(values);
      resetForm();
    },
    validationSchema,
    validateOnMount: true,
  });

  return {
    formik,
    isPending,
  };
};

export default useCreateCity;
