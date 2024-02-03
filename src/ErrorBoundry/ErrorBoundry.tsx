import React, { ErrorInfo, FC, useState } from "react";
import { ErrorBoundary, ErrorBoundaryProps } from "react-error-boundary";
import UnexpectedError from "./Error";
import { ErrorBoundaryFCProps } from "./types";

const ErrorBoundaryFC: FC<ErrorBoundaryFCProps> = (props) => {
  const { children } = props;

  const [someKey, setSomeKey] = useState(null);

  const resetErrorBoundary: ErrorBoundaryProps["onReset"] = () =>
    setSomeKey(null);
  const logErrorToService: ErrorBoundaryProps["onError"] = (
    error: Error,
    info: ErrorInfo
  ) => {
    console.error("Caught an error:", error, info);
  };

  return (
    <ErrorBoundary
      FallbackComponent={UnexpectedError}
      onError={logErrorToService}
      onReset={resetErrorBoundary} // reset the state of your app here
      resetKeys={[someKey]} //when changed, will trigger a reset of the error boundary.
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryFC;
