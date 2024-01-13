import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType {
  open: boolean;
}
export interface initialActionType{
  payload:initialStateType
}
const initialState: initialStateType = {
open:false
};

export const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    handleToggle: (state: initialStateType,action:initialActionType) => {
      state.open= action.payload.open;
    },
   
  },
});

export const {handleToggle} = openSlice.actions;
export default openSlice.reducer;
