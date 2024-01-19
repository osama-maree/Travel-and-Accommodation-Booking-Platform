import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { booking } from "../api";
import useSnackbar from "../../../../../../hooks/useSnackbar";
const useBooking = () => {
  const { showSnackbar } = useSnackbar();
  const {
    mutate: bookingMutate,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: booking,
    onSuccess: (data) => {
      console.log(data)
      showSnackbar({ severity: "success", message: "Booking Success" });
    },
    onError: (error) => {
      console.log(error)
      console.log("Sss")
      showSnackbar({
        severity: "error",
        message: "Error Booking",
      });
    },
  });
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values, { resetForm }) => {
      bookingMutate(values);
      resetForm();
    },
    validationSchema,
    validateOnMount: true,
  });

  return {
    formik,
    isPending,
    isSuccess,
  };
};

export default useBooking;
