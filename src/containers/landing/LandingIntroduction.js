import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';

import { MotionInView, varFadeInUp } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

const ImageList = styled((props) => <Stack spacing={5} {...props} />)(() => ({
  justifyContent: 'center',
}));

export function LandingIntroduction() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Typography>Express your own style with just one click.</Typography>
        </MotionInView>

        <Box sx={{ position: 'relative' }}>
          <Box component="img" src="/static/home/theme-color/grid.png" />
          <Box position="absolute" top="0" margin="auto" width="100%">
            <ImageList direction="row">
              <Box component="img" src="/static/avatars/putin-1.png" height="240px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="240px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="240px" />
            </ImageList>
            <ImageList direction="row">
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
            </ImageList>
            <ImageList direction="row">
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
              <Box component="img" src="/static/avatars/putin-1.png" height="160px" />
            </ImageList>
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
}
