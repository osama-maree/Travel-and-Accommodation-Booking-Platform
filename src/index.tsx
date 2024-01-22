import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SnackbarProvider from "./context/SnackbarContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryCient";
import MUIThemeProvider from "./styling/MUIThemeProvider";
import { persistor, store } from "./store";
import { AdminProvider } from "./pages/Admin/context/SearchContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <MUIThemeProvider>
            <QueryClientProvider client={queryClient}>
              <SnackbarProvider>
                <AdminProvider>
                  <Routes>
                    <Route path="/*" element={<App />} />
                  </Routes>
                </AdminProvider>
              </SnackbarProvider>
            </QueryClientProvider>
          </MUIThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
