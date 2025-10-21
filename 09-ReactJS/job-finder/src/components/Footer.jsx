import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 4, mt: 6 }}>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              © theFront, 2021. Macarilan. All rights reserved
            </Typography>
          </Grid>
          <Grid item>
            <Button href="#" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button href="#" sx={{ mx: 1 }}>
              Documentation
            </Button>
            <Button href="#" sx={{ mx: 1 }} variant="outlined">
              Purchase now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
