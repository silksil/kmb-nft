import { styled } from '@mui/material/styles';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Icon } from '../../components/Icon';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

import { varFadeInUp, MotionInView } from '../../components/animate';
import faq from '../../data/faq';
import { BackgroundBlur } from '../BackgroundBlur';
import { Box } from '@mui/system';
import { shadowHeading } from 'src/utils/shadowHeading';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const Subtitle = styled((props) => <Typography variant="h2" {...props} />)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  filter: shadowHeading(theme.palette.secondary.main),

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
          <BackgroundBlur height="200%" top="-50%" left="-50%" width="200%" />

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
