
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

import yas from '../assets/yas.jpg'

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "Yasser Fathallah",
    role: "Developer",
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident...",
    name: "Yasser Mohamed",
    role: "Senior Frontend Developer",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation...",
    name: "YAS",
    role: "SEO at SafeZone",

  },
];

export default function Testimonials() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Take a look what our customers say
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        paragraph
      >
        Take a quick glance at some of our past projects...
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((t, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ p: 2, textAlign: "center" }}>
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {t.text}
                </Typography>
                <Avatar
                  src={yas}
                  alt={t.name}
                  sx={{ width: 56, height: 56, mx: "auto", my: 2 }}
                />
                <Typography variant="subtitle1">{t.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {t.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
