import { Box, Grid, Typography } from "@mui/material";

const FaqsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:"center",
                py: 8,
        px: { xs: 2, md: 10 },
        backgroundColor: "#f9fcff",
      }}
    >
      <Grid container spacing={6}>
        {/* First Column */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            What is it about?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Who is it for?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FaqsSection;