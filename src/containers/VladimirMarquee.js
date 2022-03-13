import React from "react";
import NextImage from "next/image";

import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";

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

export function VladimirMarquee() {
  return (
    <Marquee gradient={false} speed={25}>
      {paths.map(({ path }) => (
        <Box sx={{ marginLeft: 100 }} key={path}>
          <NextImage width={160} height={160} key={path} src={`/static/avatars/vladimir/vladimir-${path}.png`} alt="Vladimir" />
        </Box>
      ))}
    </Marquee>
  );
}
