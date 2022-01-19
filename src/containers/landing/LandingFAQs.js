import { styled } from '@mui/material/styles';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Icon } from '../../components/Icon';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

import { varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';
import faq from '../../data/faq';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

export function LandingFAQs() {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              FAQs
            </Typography>
          </MotionInView>
        </ContentStyle>
        <MotionInView variants={varFadeInUp}>
          {faq.map((accordion, index) => (
            <Accordion key={`${index}-${accordion.heading}`} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
