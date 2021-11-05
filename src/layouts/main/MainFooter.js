import { Link as ScrollLink } from 'react-scroll';
import { Link, Container, Typography, IconButton, Box } from '@mui/material';
import Logo from '../../components/Logo';

export default function MainFooter() {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <ScrollLink to="move_top" spy smooth>
          <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
        </ScrollLink>

        <Typography variant="caption" component="p">
          © All rights reserved
          <br /> made by &nbsp;
          <Link href="https://minimals.cc/">minimals.cc</Link>
        </Typography>
      </Container>
    </Box>
  );
}
