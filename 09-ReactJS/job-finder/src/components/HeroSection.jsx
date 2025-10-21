import {
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 }, backgroundColor: "#fffdfdff" }}>
      <Grid container spacing={4} alignItems="center" wrap="wrap-reverse">
        {/* Left Side - Text Content */}
        <Grid
          item
          xs={12}
          md
          sx={{
            flex: "1 1 0",
            minWidth: "300px",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Find the world's best remote job
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Discover thousands of opportunities with the best remote companies
            in the world. Work from anywhere, anytime.
          </Typography>

          <Stack direction="row" spacing={2} mt={3}>
            <Button variant="contained" size="large">
              Explore
            </Button>
            <Button
              variant="text"
              size="large"
              startIcon={<PlayCircleOutlineIcon />}
            >
              Watch the video
            </Button>
          </Stack>
          {/* Search Bar */}
          <Box mt={3}>
            <TextField
              fullWidth
              placeholder="Search for remote jobs..."
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid
          item
          xs={12}
          md="auto"
          sx={{ flexShrink: 1, textAlign: "center" }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Remote work illustration"
            sx={{
              width: "100%",
              maxWidth: 600,
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
