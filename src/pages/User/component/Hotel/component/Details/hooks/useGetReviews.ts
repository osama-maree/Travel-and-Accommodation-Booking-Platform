import { useQuery } from "@tanstack/react-query";
import { getGuestReviews } from "../api";
const useGetGuestReviews = (id: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getGuestReviews", id],
    queryFn: () => getGuestReviews(id),
  });

  return { data, isLoading, error };
};

export default useGetGuestReviews;
