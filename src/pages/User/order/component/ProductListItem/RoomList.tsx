import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ImageListItem,
  Typography,
  List,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../../../../store";
interface roomTypeProps {
  handleRemove: (roomId: number) => void;
}
const RoomList: React.FC<roomTypeProps> = ({ handleRemove }) => {
  const { rooms } = useAppSelector((state) => state.cart);

  return (
    <List>
      {rooms?.map((room) => (
        <ListItem
          key={room.roomId}
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
              <Box>
                Price: ${room.price} per night | #days: {room.quantity}
                <Typography sx={{}}>
                  Total Price: ${room.price * room.quantity}
                </Typography>
              </Box>
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
      ))}
    </List>
  );
};

export default RoomList;
