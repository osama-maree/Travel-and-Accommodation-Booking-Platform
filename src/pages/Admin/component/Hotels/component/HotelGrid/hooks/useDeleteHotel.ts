import { useMutation } from "@tanstack/react-query";
import { DeleteHotel } from "../api";
import useSnackbar from "../../../../../../../hooks/useSnackbar";
import { AxiosBaseError } from "../../../../../../../types";


const useDeleteHotel = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteHotel,
    onSuccess: (data: any) => {
      showSnackbar({ severity: "success", message: "success delete hotel" });
    },
    onError: (error: AxiosBaseError) => {
      console.log(error)
      showSnackbar({
        severity: "error",
        message: "Error Delete hotel",
      });
    },
  });

  return { mutate, isPending };
};

export default useDeleteHotel;
