import { useMutation } from "@tanstack/react-query";
import { DeleteCity } from "../../api";
import useSnackbar from "../../../../../../hooks/useSnackbar";
const useDeleteCity = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending,isSuccess } = useMutation({
    mutationFn: DeleteCity,
    onSuccess: () => {
      showSnackbar({ severity: "success", message: "success delete city" });
    },
    onError: () => {
      showSnackbar({
        severity: "error",
        message: "Error Delete City",
      });
    },
  });
  return { mutate, isPending,isSuccess };
};

export default useDeleteCity;
