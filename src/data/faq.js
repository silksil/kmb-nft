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
    <h4>Secondary sales</h4> What will with income from secondary sales, will be decided by the token holders. This can be either: <br />
    1. Donated to Ukraine <br />
    2. Start a KMG DAO: putting ETH into a treasury governed by KMG holders.
    <br /> 3. A combination of the above. <br />
    <br />
    <h4>KMG DAO</h4>
    If the community decides to put the money made from secondary sales into the treasury, this funds can be used to start new initiatives. Inspired by{" "}
    <a target="_blank" href="https://nouns.wtf/vote" rel="noreferrer">
      Nouns DAO
    </a>
    , the vision is to have an ecosystem where the holders can propose, vote, and collaborate on new initiatives. In contrast to Nouns DAO , the emphasis of these initiatives should not be on just "fun", but also on "doing good". <br />
    <br />
    If the community decides to start a DAO, a % of the secondary sales will go to the founders to work on setting up an ecosystem (voting system, discourse forum etc.). If the community decides to donate the money of secondary sales to Ukraine, 100% of the secondary sales will be donated to Ukraine periodically. <br />
    <br />
    <h4>When and how will this be decided?</h4> Once the whole collection has been minted. How the community will decided this, will be announced in the Discord channel.
  </>
);

const Team = () => (
  <div>
    The team consist out of:
    <ul>
      <li>
        <a href="" target="_blank" rel="noreferrer">
          Sophie
        </a>
        : design, girlfriend of Sil and sister of Oscar.
      </li>
      <li>
        <a href="https://twitter.com/sil_kreulen" target="_blank" rel="noreferrer">
          Sil
        </a>
        : engineering, boyfriend of Sophie.
      </li>
      <li>
        <a href="" target="_blank" rel="noreferrer">
          Oscar
        </a>
        : community, brother of Sophie.
      </li>
    </ul>
  </div>
);

const PrimarySales = () => (
  <>
    All income from primary sales will be donated to organizations that support the people of Ukraine. ETH will be distributed through{" "}
    <a href="https://unchain.fund/" target="_blank" rel="noreferrer">
      unchain.fund
    </a>
    .
  </>
);

const FAQ = [
  {
    heading: "Primary Sales",
    detail: <PrimarySales />
  },
  {
    heading: "Secondary Sales",
    detail: <WhatsNext />
  },
  {
    heading: "Team",
    detail: <Team />
  },
  {
    heading: "When",
    detail: "To be announced."
  },
  {
    heading: "Copy rights",
    detail: <CopyRight />
  },
  {
    heading: "Technical details",
    detail: <TechnicalDetails />
  }
];

export default FAQ;
