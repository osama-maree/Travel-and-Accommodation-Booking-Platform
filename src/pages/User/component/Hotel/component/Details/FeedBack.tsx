import React from "react";
import { Box, Typography, Rating } from "@mui/material";
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
  return (
    <Box
      mt={1}
      sx={{ padding: "10px", borderRadius: "5px", border: "1px solid #eee" }}
    >
      <Typography variant="body1" gutterBottom>
        Customer: {customerName}
      </Typography>
      <Rating name="customer-rating" value={rating} readOnly />

      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};

export default CustomerFeedback;
