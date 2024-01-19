import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";


interface MUIThemeProviderProps {}
const theme= createTheme({})
const MUIThemeProvider: FC<PropsWithChildren<MUIThemeProviderProps>> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider