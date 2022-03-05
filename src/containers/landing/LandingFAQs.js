import { styled } from "@mui/material/styles";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, alpha } from "@mui/material";
import { Icon } from "../../components/Icon";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";

import { varFadeInUp, MotionInView } from "../../components/animate";
import faq from "../../data/faq";
import { Box } from "@mui/system";
import { shadowHeading } from "src/utils/shadowHeading";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const Subtitle = styled((props) => <Typography variant="h2" {...props} />)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  filter: shadowHeading(theme.palette.secondary.main),

  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const StyledAccordion = styled((props) => <Accordion {...props} />)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  marginBottom: theme.spacing(2),
}));

export function LandingFAQs() {
  return (
    <RootStyle>
      <Container maxWidth="md">
        <Subtitle>Q&A</Subtitle>

        <Box position="relative" zIndex>
          <MotionInView variants={varFadeInUp}>
            {faq.map((accordion, index) => (
              <StyledAccordion key={`${index}-${accordion.heading}`}>
                <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
                  <Typography variant="subtitle1">{accordion.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{accordion.detail}</Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </MotionInView>
        </Box>
      </Container>
    </RootStyle>
  );
}
