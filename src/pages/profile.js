import MainLayout from "src/layouts/main";
import { Page } from "src/components/Page";
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Icon, Typography } from "@mui/material";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";

const data = [
  {
    title: "Do this",
    description: "Explaning what it does here"
  },
  {
    title: "Do this",
    description: "Explaning what it does here"
  },
  {
    title: "Do this",
    description: "Explaning what it does here"
  },
  {
    title: "Do this",
    description: "Explaning what it does here"
  }
];

export default function LandingPage() {
  return (
    <Page title="Profile" id="move_top" sx={{ height: "100%" }}>
      <MainLayout>
        <Container maxWidth="lg" sx={{ mt: 20 }}>
          <Typography variant="h3" component="h1" paragraph>
            How to invest in crypto
          </Typography>
          <Typography sx={{ mb: 8 }}>Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, viea.</Typography>
          <Grid container spacing={4}>
            {data.map((principle) => {
              return (
                <Grid item xs={12} md={6} key={principle.title}>
                  <Accordion key={principle.title}>
                    <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
                      <Typography variant="subtitle1">{principle.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{principle.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </MainLayout>
    </Page>
  );
}
