import { styled } from '@mui/material/styles';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Icon } from '../../components/Icon';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

import { varFadeInUp, MotionInView } from '../../components/animate';
import faq from '../../data/faq';
import { BackgroundBlur } from '../BackgroundBlur';
import { Box } from '@mui/system';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const Subtitle = styled((props) => <Typography variant="h2" {...props} />)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export function LandingFAQs() {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <Subtitle>FAQs</Subtitle>

        <Box position="relative" zIndex>
          <BackgroundBlur color="secondary" height="140%" top="-20%" left="-20%" width="140%" opacityStrength={0.2} />

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
        </Box>
      </Container>
    </RootStyle>
  );
}
