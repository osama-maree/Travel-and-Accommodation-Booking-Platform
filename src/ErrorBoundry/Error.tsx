import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React, { FC } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import  "./style.css";
import { UnexpectedErrorProps } from "./types";
const UnexpectedError: FC<UnexpectedErrorProps> = (props) => {
  const { resetErrorBoundary } = props;
  const REACT_APP_IS_PRODUCTION=false;
  if (REACT_APP_IS_PRODUCTION)
    return (
      <Stack gap={2} className="root productionError">
        <Typography variant="h4" className="error">
          <ErrorOutlineIcon fontSize={"large"} className="icon" /> Unexpected
          Error
        </Typography>
        <Button
          onClick={resetErrorBoundary}
          variant="contained"
          color="warning"
        >
          Try again
        </Button>
      </Stack>
    );

  return (
    <Stack gap={2} role="alert" className="root">
      <Typography variant="h4" fontWeight={500}>
        Unexpected Error: {props.error?.message ?? JSON.stringify(props.error)}
      </Typography>
      <pre className="errorMessage">{props?.error?.message}</pre>
      <pre className="errorStack">{props?.error?.stack}</pre>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Button
          onClick={resetErrorBoundary}
          fullWidth={false}
          variant="contained"
          color="warning"
        >
          Try again
        </Button>
      </Stack>
    </Stack>
  );
};

export default UnexpectedError;
