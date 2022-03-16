import { Box, styled } from "@mui/system";
import React from "react";
import NextImage from "next/image";

import Marquee from "react-fast-marquee";

const paths = [
  {
    path: "1"
  },
  {
    path: "2"
  },
  {
    path: "3"
  },
  {
    path: "4"
  },
  {
    path: "5"
  },
  {
    path: "6"
  },
  {
    path: "7"
  },
  {
    path: "8"
  },
  {
    path: "9"
  }
];

const ImageContainer = styled(Box)(({ theme }) => ({
  marginLeft: 16,
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadiusMd,
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    width: 160,
    height: 160
  }
}));

export function KmbMarquee() {
  return (
    <Marquee gradient={false} speed={25} direction="right" style={{ padding: 0, margin: 0 }}>
      {paths.map(({ path }) => (
        <ImageContainer key={path}>
          <NextImage width={1000} height={1000} src={`/static/avatars/kmb/${path}.png`} alt="A KMB" />
        </ImageContainer>
      ))}
    </Marquee>
  );
}
