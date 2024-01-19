import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import useStyles from "./styles";
interface CustomerFeedbackProps {
  customerName: string;
  rating: number;
  description: string;
}
const CustomerFeedback: React.FC<CustomerFeedbackProps> = ({
  customerName,
  rating,
  description,
}) => {
  const classes=useStyles()
  return (
    <Box
    mt={1}
     className={classes.box}
    >
      <Typography variant="body1" gutterBottom>
        Customer: {customerName}
      </Typography>
      <Rating name="customer-rating" value={rating}  readOnly />
     
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>

    </Box>
  );
};

export default CustomerFeedback;
