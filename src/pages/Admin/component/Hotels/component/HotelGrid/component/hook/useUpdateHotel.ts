import { INITIAL_FORM_STATE } from "../../../CreateHotel/constant";
import { FormikHelpers, useFormik } from "formik";
import { validationSchema } from "../../../CreateHotel/schema";
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "../../../../../../../../hooks/useSnackbar";
import { EditHotel } from "../api";
import { RequestBody } from "../../../CreateHotel/types";
import useSearch from "../../../../../../context/useSearch";
import { ModalType } from "../../../../../../types";
const useUpdateHotel = () => {
  const { showSnackbar } = useSnackbar();
  const { open, setOpen } = useSearch();
  const INITIAL_STATE = {
    ...INITIAL_FORM_STATE,
    ...open.hotel,
  };
  const { mutate, isPending } = useMutation({
    mutationFn: EditHotel,
    onSuccess: (data) => {
      showSnackbar({
        severity: "success",
        message: "Update  Hotel Success",
      });
    },
    onError: (error) => {
      showSnackbar({
        severity: "error",
        message: "Error Update Hotel",
      });
    },
  });
  const formik = useFormik<RequestBody>({
    initialValues: INITIAL_STATE,
    onSubmit: (values, { resetForm }: FormikHelpers<RequestBody>) => {
      const body = { body: values, id: open?.hotel?.id };
      mutate(body);
      setOpen((prev: ModalType) => {
        return { ...prev, hotel: { ...INITIAL_FORM_STATE, id: 0 } };
      });
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

export default useUpdateHotel;
