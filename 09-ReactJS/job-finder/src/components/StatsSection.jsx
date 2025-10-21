import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const StatsSection = () => {
  const stats = [
    { number: "300", desc: "300+ component compositions, which will help you to build any page easily." },
    { number: "45", desc: "45+ landing and supported pages to build a professional website." },
    { number: "99", desc: "99% of our customers rated 5-star our themes over 5 years." },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 }, textAlign: "center", backgroundColor: "#f9fbff" }}>
      {/* Heading */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Hiring? Candidates are working for you
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        We get thousands of job postings weekly, but only accept the openings at the top companies.
      </Typography>

      {/* Stats */}
      <Grid container spacing={4} mt={4} justifyContent="center">
        {stats.map((item, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {item.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <Button variant="contained" color="primary">
          Explore
        </Button>
              <Button variant="text" color="primary"
              startIcon={<PlayCircleOutlineIcon />}>
          Watch the video
        </Button>
      </Stack>
    </Box>
  );
};

export default StatsSection;