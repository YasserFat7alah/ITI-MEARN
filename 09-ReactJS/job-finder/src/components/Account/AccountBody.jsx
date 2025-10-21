import { useState } from "react";
import { Container, Grid } from "@mui/material";
import AccountSidebar from "./AccountSidebar";
import AccountForm from "./AccountForm";

export default function AccountBody() {
  const [selected, setSelected] = useState("General");

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Sidebar - Left on desktop, full width on mobile */}
        <Grid size={{ xs: 12, md: 3 }}>
          <AccountSidebar selected={selected} setSelected={setSelected} />
        </Grid>

        {/* Form - Right on desktop, full width on mobile */}
        <Grid item size={{ xs: 12, md: 9 }}>
          <AccountForm selected={selected} />
        </Grid>
      </Grid>
    </Container>
  );
}
