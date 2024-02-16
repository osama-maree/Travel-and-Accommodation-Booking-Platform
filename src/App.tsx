import React from "react";
import Snackbar from "./container/Snackbar";
import AppRoutes from "./routes/Routes";
function App() {
  return (
    <React.Fragment>
      <AppRoutes />
      <Snackbar />
    </React.Fragment>
  );
}

export default App;
