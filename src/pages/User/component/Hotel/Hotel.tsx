import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetHotel from "./hooks/useGetHotel";
import Lottie from "lottie-react";
import animationData from "../../../../lotties/infinity-loader.json";
import Location from "./component/Location";
import Details from "./component/Details";
import PictureGallery from "./component/PictureGallery";
import AvailbleRooms from "./component/AvailbleRooms";

const MyLayout: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHotel(id);
  if (isLoading)
    return (
      <Lottie
        animationData={animationData}
        style={{ width: "200px", height: "200px", margin: "1rem" }}
      />
    );
  return (
    <>
      {data ? (
        <Grid container spacing={2}>
          <Grid container item spacing={2}>
            <Grid item xs={12} md={3}>
              <Details
                id={id}
                starRating={data.starRating}
                city={data.location}
                description={data.description}
                name={data.hotelName}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <PictureGallery id={id} />
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={12} md={3}>
              <Location
                hotelName={data.hotelName}
                latitude={data.latitude}
                longitude={data.longitude}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <AvailbleRooms id={id} />
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default MyLayout;
