import { FormikHelpers, useFormik } from "formik";
import { validationSchema } from "../../../CreateHotel/schema";
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "../../../../../../../../hooks/useSnackbar";
import { createHotel } from "../api";
import { RequestBody } from "../../../CreateHotel/types";
import { INITIAL_FORM_STATE } from "../../../CreateHotel/constant";
const useCreateHotel = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: createHotel,
    onSuccess: (data) => {
      showSnackbar({
        severity: "success",
        message: "Create New Hotel Success",
      });
    },
    onError: (error) => {
      showSnackbar({
        severity: "error",
        message: "Error Create Hotel",
      });
    },
  });
  const formik = useFormik<RequestBody>({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values, { resetForm }: FormikHelpers<RequestBody>) => {
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

export default useCreateHotel;
