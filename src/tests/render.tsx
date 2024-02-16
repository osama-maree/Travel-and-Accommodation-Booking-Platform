import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import ErrorBoundry from "../ErrorBoundry";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "../container/Loader";
import { QueryClientProvider } from "@tanstack/react-query";
import SnackbarProvider from "../context/SnackbarContext";
import { AdminProvider } from "../pages/Admin/context/AdminContext";
import { queryClient } from "../queryCient";

const testRender = (
  Component: React.ReactElement,
  options: RenderOptions = {}
) => {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ErrorBoundry>
        <BrowserRouter>
            <Provider store={store}>
              <PersistGate loading={<Loader />} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                  <SnackbarProvider>
                    <AdminProvider>{children}</AdminProvider>
                  </SnackbarProvider>
                </QueryClientProvider>
              </PersistGate>
            </Provider>
        </BrowserRouter>
      </ErrorBoundry>
    );
  }
  options = { wrapper: Wrapper, ...options };
  return render(Component, options);
};
export default testRender;
