import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

export default function Newsletter() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 6, textAlign: "center" }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Subscribe to our newsletter
        </Typography>
        <Typography variant="body1" paragraph>
          Don’t lose a chance to be among the firsts to know about our upcoming news and updates.
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1, width: "300px" }}
          />
        </Box>
      </Container>
    </Box>
  );
}