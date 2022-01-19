import { styled } from '@mui/system';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Image = styled('img')(() => ({
  width: 320,
  height: 320,
  marginLeft: 14,
}));

export function PutzieMarquee() {
  return (
    <Marquee gradient={false} speed={10}>
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
      <Image src="/static/avatars/puut-1.png" />
    </Marquee>
  );
}
