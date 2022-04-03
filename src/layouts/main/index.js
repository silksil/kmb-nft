import { Box, styled, alpha } from "@mui/system";
import PropTypes from "prop-types";
import MainNavbar from "./MainNavbar";
import { IconButton, Stack, Typography } from "@mui/material";
import { SOCIALS } from "src/utils/socials";
import { Icon } from "src/components/Icon";
import { Image } from "src/components/Image.js";

MainLayout.propTypes = {
  children: PropTypes.node
};

const APP_BAR_DESKTOP = 88;
const APP_BAR_MARGIN = 24;

const BoxLining = styled(Box)(({ theme }) => ({
  width: "98%",
  position: "absolute",
  left: "1vw",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.background.neutral}`,

  top: APP_BAR_DESKTOP / 2 + APP_BAR_MARGIN / 2,
  bottom: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    border: "none"
  }
}));
const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.4)})`;

const SocialIcon = styled((props) => <Icon {...props} />)(({ theme }) => ({
  direction: "column",
  filter: shadowIcon(theme.palette.secondary.main)
}));
const MissionCTA = styled(Typography)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  bottom: theme.spacing(1),
  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    right: theme.spacing(2),
    bottom: theme.spacing(2)
  }
}));

const SocialStack = styled(Stack)(({ theme }) => ({
  position: "absolute",
  filter: shadowIcon(theme.palette.secondary.main),

  bottom: 0,
  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    left: theme.spacing(1),
    bottom: theme.spacing(2)
  }
}));

const Opensea = styled((props) => <Image src="static/marketplaces/open-sea.svg" alt="open sea logo" {...props} />)(({ theme }) => ({
  width: theme.icons.m.width,
  height: theme.icons.m.height,
  filter: shadowIcon(theme.palette.secondary.main)
}));

export default function MainLayout({ children }) {
  const openseaUrl = process.env.NEXT_PUBLIC_OPENSEA_COLLECTION_URL;

  return (
    <div style={{ backgroundImage: "url(/static/illustrations/stars.svg)", backgroundSize: "auto", width: "100%" }}>
      <BoxLining>
        <SocialStack spacing={0.5}>
          {SOCIALS.map((social) => (
            <IconButton key={social.name} target="_blank" rel="noreferrer" color="primary" href={social.url}>
              <SocialIcon icon={social.icon} size="m" />
            </IconButton>
          ))}
          {openseaUrl && (
            <IconButton color="primary" target="_blank" rel="noreferrer" href={openseaUrl}>
              <Opensea />
            </IconButton>
          )}
        </SocialStack>

        <MissionCTA variant="body2" color="primary">
          For 🇺🇦
        </MissionCTA>
      </BoxLining>
      <MainNavbar />

      <div>{children}</div>
    </div>
  );
}
