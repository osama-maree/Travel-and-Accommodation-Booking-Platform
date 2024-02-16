import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Response } from "../api/types";
import ExpandMore from "../../../../../container/ExpandMore";
import { Box, Divider, Rating } from "@mui/material";
import "./styles.css"
interface cardProps {
  hotel: Response;
}
const RecipeReviewCard: React.FC<cardProps> = ({ hotel }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt={hotel.hotelName} src={hotel.roomPhotoUrl} />}
        title={hotel.title}
        subheader={hotel.hotelName}
        action={
          <>
            <Typography variant="body2" color="text.secondary">
              Discount:{hotel.discount}%
            </Typography>
          </>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={hotel.roomPhotoUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="cardAction">
        <Box className="box">
          <Typography variant="body2" color="text.secondary" ml={1}>
            Rating:{" "}
          </Typography>
          <Rating name="read-only" value={hotel.hotelStarRating} readOnly />
        </Box>
        <Typography variant="body2" color="text.secondary" marginLeft={2}>
          City:{hotel.cityName}
        </Typography>
        <ExpandMore
          expand={expanded.toString()}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ padding: "0px", margin: "0px" }}
      >
        <Divider />
        <CardContent className="cardContent">
          <Typography variant="body2" color="text.secondary">
            Price Before Dis:{hotel.originalRoomPrice}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price after Dis:{hotel.finalPrice}$
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
