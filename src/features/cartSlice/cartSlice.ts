import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { propsType } from "../../pages/User/component/MainSection/types";

interface initialStateType {
  hotels: propsType[];
}
interface actionStateType {
  hotel: propsType;
}

const initialState: initialStateType = {
  hotels: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<actionStateType>) => {
      const found = state.hotels.find(
        (hotel) => hotel.hotelId === action.payload.hotel.hotelId
      );
      if (!found) state.hotels.push(action.payload.hotel);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
