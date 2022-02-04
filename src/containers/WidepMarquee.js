import { styled } from '@mui/system';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Image = styled('img')(() => ({
  width: 320,
  height: 320,
  marginLeft: 14,
}));

const paths = [
  {
    path: '1',
  },
  {
    path: '2',
  },
  {
    path: '3',
  },
  {
    path: '4',
  },
  {
    path: '5',
  },
  {
    path: '2',
  },
  {
    path: '4',
  },
];

export function WidepMarquee() {
  return (
    <Marquee gradient={false} speed={25}>
      {paths.map(({ path }) => (
        <Image key={path} src={`static/avatars/widep/widep-${path}.png`} alt="Wide P." />
      ))}
    </Marquee>
  );
}
