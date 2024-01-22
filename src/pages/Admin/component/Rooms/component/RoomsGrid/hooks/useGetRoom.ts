
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
const useGetRoom = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getRoom", id],
    queryFn: () => getRooms(id),
  });
  return { data, isLoading, error };
};

export default useGetRoom;
