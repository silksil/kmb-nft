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
    path: '6',
  },
  {
    path: '7',
  },
  {
    path: '8',
  },
];

export function KmgMarquee() {
  return (
    <Marquee gradient={false} speed={15}>
      {paths.map(({ path }) => (
        <Image key={path} src={`static/avatars/kmg/kmg-${path}.png`} alt="An KMG" />
      ))}
    </Marquee>
  );
}
