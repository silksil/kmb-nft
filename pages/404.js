import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { LogoOnlyTopCornerLayout } from 'src/layouts/LogoOnlyTopCornerLayout';
import { MotionContainer, varBounceIn } from 'src/components/animate';
import { Page } from 'src/components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

export default function PageNotFound() {
  return (
    <LogoOnlyTopCornerLayout>
      <RootStyle title="404 Page Not Found">
        <Container>
          <MotionContainer initial="initial" open>
            <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
              <motion.div variants={varBounceIn}>
                <Typography variant="h3" paragraph>
                  Sorry, page not found!
                </Typography>
              </motion.div>
              <Typography sx={{ color: 'text.secondary' }}>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>

              <NextLink href="/">
                <Button size="large" variant="contained" sx={{ my: { xs: 2, sm: 4 } }}>
                  Go to Home
                </Button>
              </NextLink>
            </Box>
          </MotionContainer>
        </Container>
      </RootStyle>
    </LogoOnlyTopCornerLayout>
  );
}
