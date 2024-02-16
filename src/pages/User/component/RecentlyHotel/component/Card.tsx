import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Response } from "../api/types";
import { Box, Rating } from "@mui/material";
import dayjs from "dayjs";
interface cardProps {
  hotel: Response;
}
const ImgMediaCard: React.FC<cardProps> = ({ hotel }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={hotel.thumbnailUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.cityName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Rating name="read-only" value={hotel.starRating} readOnly />

          <Typography variant="body2" color="text.secondary">
            visited In:{dayjs(hotel.visitDate).format("YYYY-MM-DD")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ImgMediaCard;
