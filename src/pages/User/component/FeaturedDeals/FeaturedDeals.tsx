import React from "react";
import useGetFeaturedDeals from "./hooks/useGetFeaturedDeals";
import animationData from '../../../../lotties/infinity-loader.json'
import RecipeReviewCard from "./component";
import { Grid } from "@mui/material";
import Lottie from "lottie-react";

const FeaturedDeals = () => {
  const { data, isLoading } = useGetFeaturedDeals();

  if (isLoading) return (
    <Lottie
      animationData={animationData}
      style={{ width: "300px", height: "300px" }}
    />
  );
  return (
    <Grid container spacing={2}>
      {data?.map((hotel) => (
        <Grid key={hotel.hotelId} item xs={12} sm={6} md={4}>
          <RecipeReviewCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedDeals;
