import { useQuery } from "@tanstack/react-query";
import { getTrendingHighLight } from "../api";
const useGetTrendingHighLight = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["TrendingHighLight"],
    queryFn: getTrendingHighLight,
  });
  return { data, isLoading };
};

export default useGetTrendingHighLight;
