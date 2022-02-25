const CopyRight = () => (
  <>
    The artwork is{" "}
    <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer">
      public domain
    </a>
    , so feel free to copy anything and make your own twist out of this project. Maybe can send the KMG&lsquo;s on a different mission to make this world a bit better.
  </>
);

const etherScanLink = `${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`;

const TechnicalDetails = () => (
  <>
    The images are stored on IPFS. The contract is verified on Etherscan and can be found{" "}
    <a target="_blank" href={etherScanLink} rel="noreferrer">
      here
    </a>
    . The contract supports the ERC721Votes standard, and thus has the capibility to create DAO with voting capabilities that can directly use an individual NFT as a vote. The latter still requires some work. Given the urgency we decided to postpone this for now, but we are open for other developers joining us in setting this up.
  </>
);

const FAQ = [
  {
    heading: "Which charity?",
    detail: "That still has to be decided community. It can be every charity, and even multiple charities, as long it supports the people in Ukraine.",
  },
  {
    heading: "When?",
    detail: "It is gonna be an unnounced stealth drop ASAP given the urgency. We are currenlty working on the finishing touches for the smart contract and design.",
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
    heading: "Royalty fee?",
    detail: "The royalty on secondary sales is 7.5%. Just as the primary sales, 90% of this income will be used to help the people in Ukraine. The remaining 10% will be used by the creators to drive this project in the hope to increase the amount donated to Ukraine.",
  },
];

export default FAQ;
