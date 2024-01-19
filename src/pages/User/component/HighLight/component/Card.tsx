import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Response } from "../api/types";
interface mediaProps{
    city:Response
}
const MediaCard:React.FC<mediaProps>=({city})=> {
  return (
    <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={city.thumbnailUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {city.cityName}-{city.countryName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {city.description}
        </Typography>
      </CardContent>
 
    </Card>
  );
}
export default MediaCard