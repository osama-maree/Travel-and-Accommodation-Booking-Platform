import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack } from "@mui/system";
import { Button, CardActions, Divider, IconButton } from "@mui/material";
import { RemoveCircleOutline } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { roomType } from "../types";
import  "../styles.css";
export interface roomTypeProps {
  roomDetails: roomType;
  handleQuantityInc: (index: number) => void;
  handleQuantityDec: (index: number) => void;
  handleAddToCart: (room: roomType) => void;
}

const RoomCard: React.FC<roomTypeProps> = ({
  roomDetails,
  handleQuantityInc,
  handleQuantityDec,
  handleAddToCart,
}) => {
  const {
    roomId,
    roomNumber,
    roomPhotoUrl,
    roomType,
    capacityOfAdults,
    capacityOfChildren,
    price,
    availability,
    quantity,
  } = roomDetails;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={roomPhotoUrl}
        alt={`Room ${roomNumber}`}
      />
      <CardContent className="roomCardContent">
        <Box>
          <Typography variant="h5" component="div">
            Room {roomNumber} - {roomType}
          </Typography>
          <Typography color="textSecondary">
            Capacity: {capacityOfAdults} Adults, {capacityOfChildren} Children
          </Typography>
          <Typography color="textSecondary">
            Price: ${price} per night
          </Typography>
          <Box className="roomBox">
            <Typography color="textSecondary" mr={1}>
              Availability:
            </Typography>
            {availability ? (
              <CheckIcon color="success" />
            ) : (
              <CloseIcon color="error" />
            )}
          </Box>
        </Box>
        {availability && (
          <Box>
            <Typography variant="body1" align="center" color="textSecondary">
              Days
            </Typography>
            <Divider />

            <Stack direction="row" spacing={1} mt={1} className="stack">
              <IconButton
                size="small"
                disabled={quantity === 0}
                onClick={() => handleQuantityDec(roomId)}
              >
                <RemoveCircleOutline color="info" />
              </IconButton>
              <Typography variant="body1" className="typo">
                {quantity}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleQuantityInc(roomId)}
              >
                <ControlPointIcon color="success" />
              </IconButton>
            </Stack>
          </Box>
        )}
      </CardContent>
      <CardActions className="roomCardAction">
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleAddToCart(roomDetails)}
          disabled={quantity === 0}
        >
          {quantity === 0
            ? availability
              ? "Please enter a #days"
              : "Unavailable Room"
            : "Add to Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
