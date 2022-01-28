import NextLink from 'next/link';

const CopyRight = () => (
  <>
    The artwork is{' '}
    <NextLink target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/">
      public domain.
    </NextLink>
  </>
);

const FAQ = [
  {
    heading: 'Mission?',
    detail: 'To plant an idea of how policitics could get involved into the Metaverse.',
  },
  {
    heading: 'Copy rights?',
    detail: <CopyRight />,
  },
  {
    heading: 'How many?',
    detail: 'There will be a total of 8,888 characters minted.',
  },
  {
    heading: 'Which blockchain?',
    detail: 'To be announced.',
  },
  {
    heading: 'How much?',
    detail: 'To be announced.',
  },
  {
    heading: 'When?',
    detail: 'To be announced.',
  },
  {
    heading: 'Maximum mintable?',
    detail: 'To be announced.',
  },

  {
    heading: 'Data storage?',
    detail: 'The NFTs are stored on IPFS.',
  },
  {
    heading: 'Roadmap?',
    detail: 'No roadmap, just vibes.',
  },
];

export default FAQ;
