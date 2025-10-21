import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Divider,
} from "@mui/material";

export default function AccountForm() {
  return (
    <Box sx={{ p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6" gutterBottom>
        Change your private information
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Please read our <Link href="#">terms of use</Link> to be informed how we
        manage your private data.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="First name" required />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Email" type="email" required />
        </Grid>
        <Grid item size={{ xs: 12, md: 12 }}>
          <TextField fullWidth label="Bio" multiline rows={4} />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Country" required />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="City" required />
        </Grid>
        <Grid item size={{ xs: 12, md: 12 }}>
          <TextField fullWidth label="Address" required />
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 2 }}>
        You may also consider to update your{" "}
        <Link href="#">billing information</Link>.
      </Typography>

      <Box sx={{ mt: 3, textAlign: "right" }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}
