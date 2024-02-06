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
import useStyles from "./styles";
import RoomList from "./component/ProductListItem/RoomList";

const Order = () => {
  const [isOpen, setOpen] = React.useState(false);
  const { rooms } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const handleRemove = (roomId: number) => {
    dispatch(removeFromCart({ roomId }));
  };
  let totalAmount = rooms.reduce((accumulator, room) => {
    const { quantity, price } = room;
    return accumulator + quantity * price;
  }, 0);

  return (
    <Container>
      <Box className={classes.box} my={3}>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Orders Details
        </Typography>
        <Button className={classes.price}>Total Price: ${totalAmount}</Button>
      </Box>
      <Divider />
      {!!rooms.length ? (
        <RoomList handleRemove={handleRemove} />
      ) : (
        <Alert severity="error" className={classes.alert}>
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
