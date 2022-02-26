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
    . The contract supports the{" "}
    <a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Votes" rel="noreferrer">
      ERC721Votes standard
    </a>
    . In the future, if the community decides so, we can create a DAO with voting capabilities that uses an individual NFT as a vote.
  </>
);

const FAQ = [
  {
    heading: "Vision",
    detail: "To write.",
  },
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
    detail: "90% of the primary sales will be donated. 90% of the secondary sales will be put in the treasure. 10% of the primary and secondary sales will go to the creators to drive this project.",
  },
];

export default FAQ;
