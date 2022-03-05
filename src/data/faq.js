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

const WhatsNext = () => (
  <>
    <h4>Primary sales</h4> All ETH from primary sales will be donated to Ukraine trough{" "}
    <a href="https://unchain.fund/" target="_blank" rel="noreferrer">
      unchain.fund
    </a>{" "}
    once the whole collection has been sold.
    <br />
    <br />
    <h4>Secondary sales</h4> What will be done with the ETH made from secondary sales will be decided by the token holders. This can be either: <br />
    <br />
    1. Donated to Ukraine <br />
    2. Start a KMG DAO: putting ETH into a treasury governed by KMG holders.
    <br /> 3. A combination of the above. <br />
    <br />
    <h4>KMG DAO</h4>
    If the community decides to put the money made from secondary sales into the treasury, this funds can be used to start new initiatives. Inspired by Nouns DAO, the vision is to have an ecosystem where the holders can propose, vote, and collaborate on new initiatives. In contrast to{" "}
    <a target="_blank" href="https://nouns.wtf/vote" rel="noreferrer">
      Nouns DAO
    </a>
    , the emphasis of these initiatives should not be on just "fun", but also on “fighting the bad" and doing good. <br />
    <br />
    If the community decides to start a DAO, 20% of the secondary sales will go to the founders to work on setting up an ecosystem (voting system, discourse forum etc.) and 80% will go to the treasury to fund new initiatives. If the community decides to donate the money of secondary sales to Ukraine, 100% of the secondary sales will be donated to Ukraine periodically. <br />
    <br />
    <h4>When and how will this be decided?</h4> What will be done with the ETH from secondary sales will be decided once the whole collection has been minted. How the community will decided this will be announced in the Discord channel.
  </>
);

const Team = () => (
  <>
    <h4>Primary sales</h4> All ETH from primary sales will be donated to Ukraine trough{" "}
    <a href="https://unchain.fund/" target="_blank" rel="noreferrer">
      unchain.fund
    </a>{" "}
    once the whole collection has been sold.
    <br />
    <br />
    <h4>Secondary sales</h4> What will be done with the ETH made from secondary sales will be decided by the token holders. This can be either: <br />
    <br />
    1. Donated to Ukraine. <br />
    2. Start a KMG DAO: putting ETH into a treasury governed by KMG holders.
    <br /> 3. A combination of the above. <br />
    <br />
    <h4>KMG DAO</h4>
    If the community decides to put the money made from secondary sales into the treasury, this funds can be used to start new initiatives. Inspired by Nouns DAO, the vision is to have an ecosystem where the holders can propose, vote, and collaborate on new initiatives. In contrast to{" "}
    <a target="_blank" href="https://nouns.wtf/vote" rel="noreferrer">
      Nouns DAO
    </a>{" "}
    , the emphasis of these initiatives should not be on just "fun", but also on “fighting the bad" and doing good. <br />
    <br />
    If the community decides to start a DAO, 20% of the secondary sales will go to the founders to work on setting up an ecosystem (voting system, discourse forum, treasury contract etc.) and 80% will go to the treasury to fund new initiatives. If the community decides to donate the money of secondary sales to Ukraine, 100% of the secondary sales will be donated to Ukraine periodically. <br />
    <br />
    <h4>When and how will this be decided?</h4> What will be done with the ETH from secondary sales will be decided once the whole collection has been minted. How the community will decided this will be announced in the Discord channel.
  </>
);

const FAQ = [
  {
    heading: "What's next?",
    detail: <WhatsNext />,
  },
  {
    heading: "Team",
    detail: "The team consist out of Sophie, Sil (boyfriend of Sophie) and Oscar (the brother of Sophie).",
  },
  {
    heading: "When",
    detail: "To be announced.",
  },
  {
    heading: "Copy rights",
    detail: <CopyRight />,
  },
  {
    heading: "Technical details",
    detail: <TechnicalDetails />,
  },
];

export default FAQ;
