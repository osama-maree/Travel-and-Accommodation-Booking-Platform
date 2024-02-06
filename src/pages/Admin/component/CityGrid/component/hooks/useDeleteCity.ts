import { useMutation } from "@tanstack/react-query";
import { DeleteCity } from "../../api";
import useSnackbar from "../../../../../../hooks/useSnackbar";
import { AxiosBaseError } from "../../../../../../types";

const useDeleteCity = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending,isSuccess } = useMutation({
    mutationFn: DeleteCity,
    onSuccess: (data: any) => {
      showSnackbar({ severity: "success", message: "success delete city" });
    },
    onError: (error: AxiosBaseError) => {
      showSnackbar({
        severity: "error",
        message: "Error Delete City",
      });
    },
  });
  return { mutate, isPending,isSuccess };
};

export default useDeleteCity;
