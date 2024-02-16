import {  ReactNode } from "react";
import { AlertColor } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { createSlice } from "@reduxjs/toolkit";
interface State {
  open: boolean;
  severity: AlertColor;
  variant: "filled" | "outlined" | "standard";
  title?: ReactNode;
  message: ReactNode;
  anchorOrigin: SnackbarOrigin;
  action: ReactNode;
  autoHideDuration: number | null | undefined;
  icon: ReactNode;
}
export const initialState: State = {
  open: false,
  severity: "info",
  variant: "filled",
  title: null,
  message: "",
  anchorOrigin: { vertical: "top", horizontal: "center" },
  action: null,
  autoHideDuration: 6000,
  icon: undefined,
};



// interface ReducerAction {
//   type: REDUCER_ACTION_TYPE;
//   payload?: ShowSnackbarPayload;
// }

export const snackBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      
    },
    hideSnackbar: (state, action) => {
      state.open = false;
      state.message = action.payload.message;
    },
  },
});

export const {showSnackbar,hideSnackbar } = snackBarSlice.actions;
export default snackBarSlice.reducer;

