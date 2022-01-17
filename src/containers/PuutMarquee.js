import { styled } from '@mui/system';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Image = styled('img')(({ theme }) => ({
  width: 320,
  height: 320,
  marginLeft: 14,
}));

export function PuutMarquee() {
  return (
    <Marquee pauseOnHover gradient={false}>
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
      <Image src="/static/avatars/putin-1.png" />
    </Marquee>
  );
}
