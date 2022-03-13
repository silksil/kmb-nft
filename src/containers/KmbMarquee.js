import { Box } from "@mui/system";
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
  }
];

export function KmbMarquee() {
  return (
    <Marquee gradient={false} speed={25} direction="right" style={{ padding: 0, margin: 0 }}>
      {paths.map(({ path }) => (
        <Box ml="8px" key={path}>
          <NextImage width={160} height={160} src={`/static/avatars/kmb/${path}.png`} alt="A KMB" />
        </Box>
      ))}
    </Marquee>
  );
}
