import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import { getRecentHotels } from "../api";
import { useAppSelector } from "../../../../../store";

interface tokenType {
  user_id: number;
  given_name: string;
  family_nam: string;
  userType: string;
  nbf: number;
  exp: number;
  iss: string;
}
const useRecentHotels = () => {
  const { token } = useAppSelector((state) => state.auth);
  const decoded: tokenType = jwtDecode(token);
  const id = decoded.user_id;
  const { data, isLoading, error } = useQuery({
    queryKey: ["recent-hotels", id],
    queryFn: () => getRecentHotels(id),
  });

  return { data, isLoading, error };
};

export default useRecentHotels;
