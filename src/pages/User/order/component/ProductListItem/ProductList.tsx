import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ImageListItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { roomType } from "../../../component/Hotel/component/AvailbleRooms/types";
interface roomTypeProps {
  room: roomType;
  handleRemove: (roomId: number) => void;
}
const ProductListItem: React.FC<roomTypeProps> = ({ room, handleRemove }) => {
  return (
    <ListItem
      sx={{
        mb: 2,
        bgcolor: "#eeee",
        borderRadius: "7px",
      }}
    >
      <ImageListItem
        sx={{
          width: "110px",
          mr: "1rem",
        }}
      >
        <img
          src={room.roomPhotoUrl}
          alt={"name"}
          style={{ borderRadius: "100px !important" }}
          loading="lazy"
        />
      </ImageListItem>
      <ListItemText
        primary={room.roomType}
        secondary={
          <React.Fragment>
            Price: ${room.price} per night | #days: {room.quantity}
            <Typography sx={{}}>
              Total Price: ${room.price * room.quantity}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleRemove(room.roomId)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ProductListItem;
