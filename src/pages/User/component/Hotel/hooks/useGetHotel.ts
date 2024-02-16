
import { useQuery } from "@tanstack/react-query";
import { getHotel } from "../api";


const useGetHotel= (id:string | undefined) => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["getHotel",id],
    queryFn: () =>getHotel(id),
  });

  return { data, isLoading, error };
};

export default useGetHotel;
