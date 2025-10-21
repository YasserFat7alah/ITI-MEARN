import { Box, Grid, Typography, Button } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const ProcessSection = () => (
  <Box sx={{ py: 8, px: { xs: 2, md: 10 }, textAlign: "center" }}>
    <Typography variant="overline" color="primary" gutterBottom>
      Process
    </Typography>
    <Typography variant="h4" gutterBottom>
      Our process to find you a new job is fast
    </Typography>
    <Typography variant="body1" color="text.secondary" gutterBottom>
      Fill out our standardized application on our platform. Most applicants
      finish in under an hour.
    </Typography>
    <Button variant="contained" sx={{ mt: 2 }}>
      Start searching →
    </Button>

    <Grid
      container
      spacing={4}
      mt={4}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {[
        {
          title: "Complete your application",
          desc: "Fill out our standardized application. Most applicants finish in under an hour.",
        },
        {
          title: "Select companies",
          desc: "We’ll match you with relevant openings and you pick which ones you like.",
        },
        {
          title: "Choose your offer",
          desc: "After 3–5 days your offers arrive, then you have 7 days to select your new role.",
        },
      ].map((step, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Box sx={{ textAlign: "center" }}>
            <WorkOutlineIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {step.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {step.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ProcessSection;
