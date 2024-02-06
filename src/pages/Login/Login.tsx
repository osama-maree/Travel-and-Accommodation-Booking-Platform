import React from "react";
import LoginForm from "./component/LoginForm";
import { Box, Grid } from "@mui/material";
import useStyles from "./styles";
import Lottie from "lottie-react";
import animationData from "../../lotties/login.json";
const Login = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.login}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.grid}
          sx={{ clipPath: { md: "ellipse(95% 90% at 0% 50%)", xs: "none" } }}
        >
          <LoginForm />{" "}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          p={2}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Lottie
            animationData={animationData}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
