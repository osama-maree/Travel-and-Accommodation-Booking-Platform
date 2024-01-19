import { useQuery } from "@tanstack/react-query";
import { getAvailableRooms } from "../api";


const useGetRooms = (id: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getAvailableRooms", id],
    queryFn: () => getAvailableRooms(id),
  });
  return { data, isLoading, error };
};

export default useGetRooms;
