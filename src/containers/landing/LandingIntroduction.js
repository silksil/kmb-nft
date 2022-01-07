import { motion } from 'framer-motion';
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, RadioGroup, CardActionArea, FormControlLabel, Stack } from '@mui/material';

import { MotionInView, varFadeInUp, varFadeInDown } from '../../components/animate';
import useThemeSettings from 'src/hooks/useThemeSettings';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundImage: theme.palette.mode === 'light' ? `linear-gradient(180deg, ${theme.palette.grey[300]} 0%, ${alpha(theme.palette.grey[300], 0)} 100%)` : 'none',
}));

const ImageList = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  justifyContent: 'center',
}));

export function LandingIntroduction() {
  const { themeColor } = useThemeSettings();

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Meet the Squat
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary'),
            }}
          >
            Express your own style with just one click.
          </Typography>
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
