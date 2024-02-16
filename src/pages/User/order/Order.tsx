import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store";
import Modal from "./component/Modal";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cartSlice/cartSlice";
import RoomList from "./component/ProductListItem/RoomList";
const Order = () => {
  const [isOpen, setOpen] = React.useState(false);
  const { rooms } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const handleRemove = (roomId: number) => {
    dispatch(removeFromCart({ roomId }));
  };
  const totalAmount = rooms.reduce((accumulator, room) => {
    const { quantity, price } = room;
    return accumulator + quantity * price;
  }, 0);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        my={3}
      >
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Orders Details
        </Typography>
        <Button sx={{ color: "#00acc1", border: "solid 1px #00acc1" }}>
          Total Price: ${totalAmount}
        </Button>
      </Box>
      <Divider />
      {rooms.length ? (
        <RoomList handleRemove={handleRemove} />
      ) : (
        <Alert
          severity="error"
          sx={{
            margin: "1rem 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Please Add Item To Your Cart!&#128516;
        </Alert>
      )}
      {!!rooms.length && (
        <Button onClick={handleOpen} variant="contained" sx={{ mt: 3 }}>
          Checkout
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} price={totalAmount} />
    </Container>
  );
};

export default Order;
