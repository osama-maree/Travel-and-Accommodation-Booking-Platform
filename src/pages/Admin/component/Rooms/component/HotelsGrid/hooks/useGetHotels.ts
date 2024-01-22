import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../api";
const useGetHotels = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getHotels1"],
    queryFn: getHotels,
  });
  return { data, isLoading };
};

export default useGetHotels;
