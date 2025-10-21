import { Box } from "@mui/material";
import sponsorLogo from "../assets/sponsers.png"; 

const SponsorSection = () => {
  return (
    <Box
      sx={{
        py: 4, 
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", 
      }}
    >
      <Box
        component="img"
        src={sponsorLogo}
        alt="Sponsor logo"
        sx={{
          maxWidth: "1000px", 
          width: "100%", 
          height: "auto",
        }}
      />
    </Box>
  );
};

export default SponsorSection;