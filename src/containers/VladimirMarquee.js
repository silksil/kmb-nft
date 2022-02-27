import { styled } from "@mui/system";
import React from "react";

import Marquee from "react-fast-marquee";

const Image = styled("img")(() => ({
  width: 160,
  height: 160,
  marginLeft: 14,
}));

const paths = [
  {
    path: "1",
  },
  {
    path: "2",
  },
  {
    path: "3",
  },
  {
    path: "4",
  },
  {
    path: "5",
  },
];

export function VladimirMarquee() {
  return (
    <Marquee gradient={false} speed={25}>
      {paths.map(({ path }) => (
        <Image key={path} src={`static/avatars/vladimir/vladimir-${path}.png`} alt="Vladimir" />
      ))}
    </Marquee>
  );
}