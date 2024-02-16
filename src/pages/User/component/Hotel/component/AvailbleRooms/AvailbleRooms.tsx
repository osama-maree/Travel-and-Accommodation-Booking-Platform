import { Grid, Paper } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../../../../../container/Loader";
import useGetRooms from "./hooks/useGetRooms";
import AvailableRoom from "./component";
import { roomType } from "./types";
import useSnackbar from "../../../../../../hooks/useSnackbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../../features/cartSlice/cartSlice";
import './styles.css'
interface roomsProps {
  id: string | undefined;
}
const AvailbleRooms: React.FC<roomsProps> = ({ id }) => {
  const { data, isLoading } = useGetRooms(id);
  const [rooms, setRooms] = useState<roomType[]>();
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      setRooms(
        data?.map((room) => {
          return { ...room, quantity: 0 };
        })
      );
    }
  }, [data]);
  const handleQuantityInc = (index: number) => {
    setRooms(
      rooms?.map((room) =>
        room.roomId === index
          ? { ...room, quantity: room.quantity === 0 ? 1 : room.quantity + 1 }
          : { ...room }
      )
    );
  };
  const handleQuantityDec = (index: number) => {
    setRooms(
      rooms?.map((room) =>
        room.roomId === index
          ? { ...room, quantity: room.quantity === 0 ? 0 : room.quantity - 1 }
          : { ...room }
      )
    );
  };
  const handleAddToCart = useCallback(
    (room: roomType) => {
      dispatch(addToCart({ room }));
      showSnackbar({
        severity: "success",
        message: "Added to cart",
      });
    },
    [showSnackbar, dispatch]
  );

  if (isLoading) return <Loader />;
  return (
    <Paper className="room-root">
      <Grid container columnSpacing={2} rowGap={2} mb={1}>
        {rooms?.map((room) => (
          <Grid key={room.roomId} item xs={12} sm={6} md={6}>
            <AvailableRoom
              roomDetails={room}
              handleQuantityInc={handleQuantityInc}
              handleQuantityDec={handleQuantityDec}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AvailbleRooms;
