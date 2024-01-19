import React from "react";
import useRecentHotels from "./hooks/useGetRecentHotels";
import Lottie from "lottie-react";
import animationData from "../../../../lotties/infinity-loader.json";
import { Grid } from "@mui/material";
import ImgMediaCard from "./component";

const RecentlyHotel = () => {
  const { data, isLoading } = useRecentHotels();
  if (isLoading)
    return (
      <Lottie
        animationData={animationData}
        style={{ width: "300px", height: "300px" }}
      />
    );
  return (
    <Grid container spacing={2}>
      {data?.map((hotel) => (
        <Grid key={hotel.hotelId} item xs={12} sm={6} md={4}>
          <ImgMediaCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecentlyHotel;
