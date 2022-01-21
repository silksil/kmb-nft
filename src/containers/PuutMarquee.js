import { styled } from '@mui/system';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Image = styled('img')(() => ({
  width: 320,
  height: 320,
  marginLeft: 14,
}));

const images = [
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
  {
    src: '/static/avatars/puut-1.png',
  },
];

export function PuutMarquee() {
  return (
    <Marquee gradient={false} speed={10} direction="right">
      {images.map(({ src }) => (
        <Image key={src} src={src} alt="Putzie nft" />
      ))}
    </Marquee>
  );
}
