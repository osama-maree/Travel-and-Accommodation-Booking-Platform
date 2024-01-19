import { useQuery } from "@tanstack/react-query";
import { getPictureGallery } from "../api";
const usePictureGallery = (id: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getPictureGallery", id],
    queryFn: () => getPictureGallery(id),
  });
  return { data, isLoading, error };
};

export default usePictureGallery;
