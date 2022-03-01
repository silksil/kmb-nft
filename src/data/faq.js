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
    The images are stored on IPFS. The ERC721 contract is verified on Etherscan and can be found{" "}
    <a target="_blank" href={etherScanLink} rel="noreferrer">
      here
    </a>
    .
  </>
);

const IncomeDistribution = () => (
  <>
    100% of the primary sales will be donated to Ukraine. <br />
    <br /> 50% of the income from royalty fees will go into the treasury. The other 50% will go to the creators to build the ecosystem and/or start new initiatives.
  </>
);
const FAQ = [
  {
    heading: "When?",
    detail: "It is gonna be an unnounced stealth drop.",
  },
  {
    heading: "Copy rights?",
    detail: <CopyRight />,
  },
  {
    heading: "Cost?",
    detail: "To be announced.",
  },
  {
    heading: "Maximum mintable?",
    detail: "5 per transaction.",
  },
  {
    heading: "Technical details?",
    detail: <TechnicalDetails />,
  },
  {
    heading: "Income distribution?",
    detail: <IncomeDistribution />,
  },
];

export default FAQ;
