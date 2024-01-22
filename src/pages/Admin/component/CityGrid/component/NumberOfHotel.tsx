import React from "react";

import Loader from "../../../../../container/Loader";

import useGetNumberHotels from "./hooks/useGetNumberHotels";
import { CloseOutlined } from "@mui/icons-material";

interface props {
  id: number | null;
}
const NumberOfHotel: React.FC<props> = ({ id }) => {
  const { data, isLoading } = useGetNumberHotels(id);

  if (isLoading) return <Loader />;
  if (!data)
    return (
      <CloseOutlined color="error" sx={{ margin: "0px", padding: "0px" }} />
    );
  return <>{data}</>;
};

export default NumberOfHotel;
