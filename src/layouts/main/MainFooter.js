import { Link as ScrollLink } from 'react-scroll';
import { Link, Container, Typography, IconButton, Box, Stack } from '@mui/material';
import Logo from '../../components/Logo';
import twitter from '@iconify/icons-eva/twitter-fill';
import discord from '@iconify/icons-ic/baseline-discord';
import instagram from '@iconify/icons-ant-design/instagram-filled';
import { Icon } from 'src/components/Icon';

const SOCIALS = [
  { name: 'Instagram', icon: instagram },
  { name: 'Linkedin', icon: discord },
  { name: 'Twitter', icon: twitter },
];

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
        <Stack spacing={1.5} direction="row" justifyContent={{ xs: 'center' }} sx={{ mt: 5, mb: { xs: 5 } }}>
          {SOCIALS.map((social) => (
            <IconButton key={social.name} color="secondary" sx={{ p: 1 }}>
              <Icon icon={social.icon} size="xl" />
            </IconButton>
          ))}
        </Stack>
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
