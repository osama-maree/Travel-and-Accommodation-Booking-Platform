import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";

import useSnackbar from "../../../../../hooks/useSnackbar";
import { createCity } from "../api";
const useCreateCity = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: createCity,
    onSuccess: (data) => {
      showSnackbar({ severity: "success", message: "Create New City Success" });
    },
    onError: (error) => {
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
