import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "../api";
const useGetFeaturedDeals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["featuredDeals"],
    queryFn:getFeaturedDeals,
  });
  return {data,isLoading} 
};

export default useGetFeaturedDeals;
