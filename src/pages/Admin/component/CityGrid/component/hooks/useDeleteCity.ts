import { useMutation } from "@tanstack/react-query";
import { DeleteCity } from "../../api";
import useSnackbar from "../../../../../../hooks/useSnackbar";
import { AxiosBaseError } from "../../../../../../types";

const useDeleteCity = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteCity,
    onSuccess: (data: any) => {
      showSnackbar({ severity: "success", message: "success delete city" });
    },
    onError: (error: AxiosBaseError) => {
      console.log(error)
      showSnackbar({
        severity: "error",
        message: "Error Delete City",
      });
    },
  });
  return { mutate, isPending };
};

export default useDeleteCity;
