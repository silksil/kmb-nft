const CopyRight = () => (
  <>
    The artwork is{" "}
    <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer">
      public domain
    </a>
    .
  </>
);

const etherScanLink = `${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`;

const TechnicalDetails = () => (
  <>
    The images are stored on IPFS. The contract is verified on Etherscan and can be found{" "}
    <a target="_blank" href={etherScanLink} rel="noreferrer">
      here
    </a>
    .
  </>
);

const FAQ = [
  {
    heading: "Copy rights?",
    detail: <CopyRight />,
  },
  {
    heading: "How many?",
    detail: "To be announced.",
  },
  {
    heading: "Cost?",
    detail: "To be announced.",
  },
  {
    heading: "When?",
    detail: "To be announced.",
  },
  {
    heading: "Maximum mintable?",
    detail: "To be announced.",
  },
  {
    heading: "Roadmap?",
    detail: "No roadmap, just vibes.",
  },
  {
    heading: "Technical details?",
    detail: <TechnicalDetails />,
  },
];

export default FAQ;
