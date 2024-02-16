import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
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
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemove(room.roomId)}
            >
              <DeleteIcon color="error" />
            </IconButton>
          }
        >
          <Box
            sx={{
              maxWidth: "110px",
              mr: "1rem",
            }}
          >
            <img
              src={room.roomPhotoUrl}
              alt={"name"}
              style={{ maxWidth: "100%" }}
              loading="lazy"
            />
          </Box>
          <ListItemText
            primary={room.roomType}
            secondary={
              <>
                Price: ${room.price} per night | #days: {room.quantity} <br />
                Total Price: ${room.price * room.quantity}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RoomList;
