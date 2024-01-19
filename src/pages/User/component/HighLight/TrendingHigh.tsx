import React from 'react'
import useGetTrendingHighLight from './hooks/useGetTrendingHighLight'
import Lottie from 'lottie-react';
import animationData from '../../../../lotties/infinity-loader.json'
import { Grid } from '@mui/material';
import MediaCard from './component';
const TrendingHigh = () => {
  const {data,isLoading}=useGetTrendingHighLight()
    if (isLoading)
      return (
        <Lottie
          animationData={animationData}
          style={{ width: "300px", height: "300px" }}
        />
      );
  return (
    <Grid container spacing={2}>
      {data?.map((city) => (
        <Grid key={city.cityId} item xs={12} sm={6} md={4}>
          <MediaCard city={city} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TrendingHigh