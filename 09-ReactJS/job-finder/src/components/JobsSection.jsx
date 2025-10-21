import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const JobsSection = () => {
  const jobs = [
    {
      category: "Web design",
      title: "Web designer Internship",
      location: "Milan, Italy",
      type: "Full time",
    },
    {
      category: "Business analyst",
      title: "Senior business analysts",
      location: "Yerevan, Armenia",
      type: "Full time",
    },
    {
      category: "Photography",
      title: "Mid-level photographer",
      location: "Yerevan, Armenia",
      type: "Remote",
    },
    {
      category: "Video creator",
      title: "Senior video creator",
      location: "Paris, France",
      type: "Remote",
    },
    {
      category: "Health & Fitness",
      title: "Expert fitness consultant",
      location: "Yerevan, Armenia",
      type: "Full time",
    },
    {
      category: "Marketing",
      title: "Senior digital marketing specialist",
      location: "Milan, Italy",
      type: "Full time",
    },
    {
      category: "Finance & Sales",
      title: "Senior sales manager",
      location: "Paris, France",
      type: "Part time",
    },
    {
      category: "Graphic design",
      title: "Junior Graphic designer",
      location: "Yerevan, Armenia",
      type: "Remote",
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 } }}>

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Top developer jobs listed in our portal
          </Typography>
          
      <Typography variant="body2" color="text.secondary" gutterBottom>
        We get thousands of job postings weekly, but only accept the openings at
        the top companies.{" "}
        <Button variant="text" size="small">
          Set career interests →
        </Button>
      </Typography>

      <Grid container spacing={3} mt={2}>
        {jobs.map((job, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} sx= {{width: "30%"}}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Chip label={job.category} size="small" sx={{ mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {job.type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="contained">View all →</Button>
      </Box>
    </Box>
  );
};

export default JobsSection;
