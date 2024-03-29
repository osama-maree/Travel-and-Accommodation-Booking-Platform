import { useQuery } from "@tanstack/react-query";
import { getAmenities } from "../api";

const useGetAmenities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["featuredAmenities"],
    queryFn: getAmenities,
  });
  return { data, isLoading };
};

export default useGetAmenities;
