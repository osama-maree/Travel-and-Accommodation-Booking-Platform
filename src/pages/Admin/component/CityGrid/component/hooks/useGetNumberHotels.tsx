import { useQuery } from "@tanstack/react-query";
import { getHotelsNumber } from "../../api";

const useGetNumberHotels = (id: number | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getNumHotels", id],
    queryFn: () => getHotelsNumber(id),
  });
  return { data, isLoading, error };
};

export default useGetNumberHotels;
