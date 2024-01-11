import React from "react";
import LoginForm from "./component/LoginForm";
import { Box } from "@mui/material";
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.login}>
      <LoginForm />
    </Box>
  );
};

export default Login;
