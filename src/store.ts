
import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";
import rootReducer, { RootState } from "./features/rootReducer";
import { TypedUseSelectorHook,useSelector } from "react-redux";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }),
});


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
