import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { booking } from "../api";
import useSnackbar from "../../../../../../hooks/useSnackbar";
import { useDispatch } from "react-redux";
import { removeCart } from "../../../../../../features/cartSlice/cartSlice";
const useBooking = () => {
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    mutate: bookingMutate,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: booking,
    onSuccess: (data) => {
      dispatch(removeCart());
      showSnackbar({ severity: "success", message: "Booking Success" });
    },
    onError: (error) => {
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
