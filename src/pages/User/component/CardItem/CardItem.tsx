import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { propsType } from "../MainSection/types";

interface hotelProps {
  hotel: propsType;
  handleBooking: (hotelId:number) => void;
}
const CardItem: React.FC<hotelProps> = ({ hotel, handleBooking }) => {

  return (
    <Card
      sx={{ width: "100%", border: "1px solid #eeee", position: "relative" }}
    >
      <CardActionArea component={Link} to={`/hotel/${hotel.hotelId}`}>
        <CardMedia
          component="img"
          height="190"
          image={hotel.roomPhotoUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hotel.hotelName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hotel.cityName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        sx={{ position: "absolute", bottom: "12px", right: "12px" }}
        onClick={() => handleBooking(hotel.hotelId)}
      >
        Go For Booking
      </Button>
    </Card>
  );
};
const MemoizedComponent = React.memo(CardItem);
export default MemoizedComponent;
