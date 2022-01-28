const CopyRight = () => (
  <>
    The artwork is{' '}
    <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer">
      public domain.
    </a>
  </>
);

const FAQ = [
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
