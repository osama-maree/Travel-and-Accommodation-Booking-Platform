import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roomType } from "../../pages/User/component/Hotel/component/AvailbleRooms/types";

interface initialStateType {
  rooms: roomType[];
}
interface actionStateType {
  room: roomType;
}

interface actionRemove {
  roomId: number;
}
const initialState: initialStateType = {
  rooms: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<actionStateType>) => {
      const isFound = state.rooms?.find(
        (room) => room.roomId === action.payload.room.roomId
      );
      if (isFound) {
        state.rooms = state.rooms.map((room) =>
          room.roomId === isFound.roomId
            ? { ...room, quantity: isFound.quantity }
            : { ...room }
        );
      } else state.rooms.push(action.payload.room);
    },
    removeFromCart: (state, action: PayloadAction<actionRemove>) => {
      state.rooms = state.rooms.filter(
        (room) => room.roomId !== action.payload.roomId
      );
    },
    removeCart: (state) => {
      state.rooms = [];
    },
  },
});

export const { addToCart, removeFromCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
