import { useMutation } from "@tanstack/react-query";
import useSnackbar from "../../../../../../../hooks/useSnackbar";
import { DeleteRoom } from "../api";
const useDeleteRoom = () => {
  const { showSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteRoom,
    onSuccess: () => {
      showSnackbar({ severity: "success", message: "success delete Room" });
    },
    onError: () => {
      showSnackbar({
        severity: "error",
        message: "Error Delete Room",
      });
    },
  });
  return { mutate, isPending };
};

export default useDeleteRoom;
