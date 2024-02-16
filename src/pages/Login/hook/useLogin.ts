import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api";
import useSnackbar from "../../../hooks/useSnackbar";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../features/authSlice/authSlice";
const useLogin = () => {
  const { showSnackbar } = useSnackbar();
   const dispatch = useDispatch();

  const {
    mutate: loginMutate,
    isPending,
    isSuccess
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(
        loginSuccess({ token: data.authentication, userType: data.userType })
      );
    showSnackbar({ severity: "success", message: "success login" });
    
    },
    onError: () => {
      showSnackbar({
        severity: "error",
        message: "Error logging in",
      });
    },
  });
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values, { resetForm }) => {
      loginMutate(values);
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

export default useLogin;
