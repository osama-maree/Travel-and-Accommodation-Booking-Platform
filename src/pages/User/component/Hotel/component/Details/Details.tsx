// HotelInfo.tsx
import React from "react";
import { Box, Typography, Paper, Rating, Divider } from "@mui/material";
import CustomerFeedback from "./FeedBack";
import useGetGuestReviews from "./hooks/useGetReviews";
import Loader from "../../../../../../container/Loader";
interface HotelInfoProps {
  name: string;
  starRating: number;
  description: string;
  city: string;
  id: string | undefined;
}

const HotelInfo: React.FC<HotelInfoProps> = ({
  name,
  starRating,
  description,
  city,
  id,
}) => {
  const { data } = useGetGuestReviews(id);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        height: "609px",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Rating name="star-rating" value={starRating} precision={0.5} readOnly />
      <Box mt={2}>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
      <Typography my={2} variant="body1">
        {city}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Guest-Reviews
      </Typography>
      <Divider />
      {data ? (
        data.map((item) => (
          <CustomerFeedback
            key={item.reviewId}
            customerName={item.customerName}
            rating={item.rating}
            description={item.description}
          />
        ))
      ) : (
        <Loader />
      )}
    </Paper>
  );
};

export default HotelInfo;
