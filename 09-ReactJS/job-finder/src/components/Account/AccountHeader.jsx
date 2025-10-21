import { Box, Typography } from "@mui/material";

export default function AccountHeader() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Account settings
      </Typography>
      <Typography variant="body1">
        Change account information and settings
      </Typography>
    </Box>
  );
}