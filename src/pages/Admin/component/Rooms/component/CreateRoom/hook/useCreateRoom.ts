import { INITIAL_FORM_STATE } from "../constant";
import { useFormik } from "formik";
import { validationSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "../../../../../../../hooks/useSnackbar";
import { createRoom } from "../api";
const useCreateCity = (id:number) => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: createRoom,
    onSuccess: (data) => {
      showSnackbar({ severity: "success", message: "Create New Room Success" });
    },
    onError: (error) => {
      showSnackbar({
        severity: "error",
        message: "Error Create Room",
      });
    },
  });
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values, { resetForm }) => {
      mutate({...values,id:id});
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
