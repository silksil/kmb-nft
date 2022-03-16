const etherScanLink = `${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`;
import { TWITTER, DISCORD } from "src/utils/socials";

// const TechnicalDetails = () => (
//   <>
//     The images are stored on IPFS. The ERC721 contract is verified on Etherscan and can be found{" "}
//     <a target="_blank" href={etherScanLink} rel="noreferrer">
//       here
//     </a>
//     .
//   </>
// );

// const WhatsNext = () => (
//   <>
//     <h4>Secondary sales</h4> What will with income from secondary sales, will be decided by the token holders. This can be either: <br />
//     1. Donated to Ukraine <br />
//     2. Start a KMB DAO: putting ETH into a treasury governed by KMB holders.
//     <br /> 3. A combination of the above. <br />
//     <br />
//     <h4>KMB DAO</h4>
//     If the community decides to put the money made from secondary sales into the treasury, this funds can be used to start new initiatives. Inspired by{" "}
//     <a target="_blank" href="https://nouns.wtf/vote" rel="noreferrer">
//       Nouns DAO
//     </a>
//     , the vision is to have an ecosystem where the holders can propose, vote, and collaborate on new initiatives. In contrast to Nouns DAO , the emphasis of these initiatives should not be on just &quot;fun&quot;, but also on &quot;doing good&quot;. <br />
//     <br />
//     If the community decides to start a DAO, a % of the secondary sales will go to the founders to work on setting up an ecosystem (voting system, discourse forum etc.). If the community decides to donate the money of secondary sales to Ukraine, 100% of the secondary sales will be donated to Ukraine periodically. <br />
//     <br />
//     <h4>When and how will this be decided?</h4> Once the whole collection has been minted. How the community will decided this, will be announced in the Discord channel.
//   </>
// );

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

const Summary = () => (
  <ul>
    <li>
      All income from primary sales will be donated to Ukraine through{" "}
      <a href="https://unchain.fund/" target="_blank" rel="noreferrer">
        unchain.fund
      </a>
      .
    </li>
    <li>
      The artwork is{" "}
      <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer">
        public domain
      </a>
      .
    </li>
    <li>There are 10.000 items in the collection: 95% KMBs, 5% Vladimirs.</li>
    <li>The characters have been programmatically generated using over 100 traits.</li>
    <li>Some characters are more rare than others.</li>
    <li>The images are stored on IPFS.</li>
    <li>50 characters have been reserved for giveaways and the team.</li>
    <li>ERC-721 tokens are used on the Ethereum blockchain.</li>
    {/* <li>
        ERC721 contract is verified on Etherscan and can be found{" "}
        <a target="_blank" href={etherScanLink} rel="noreferrer">
          here
        </a>
      </li> */}
  </ul>
);

const MintInfo = () => (
  <ul>
    <li>Max. 5 tokens can be minted per transaction.</li>
    <li>Mint price will be 0.01 ETH.</li>
    <li>
      The launch date will be announced on{" "}
      <a target="_blank" href={TWITTER.url} rel="noreferrer">
        Twitter
      </a>{" "}
      and{" "}
      <a target="_blank" href={DISCORD.url} rel="noreferrer">
        Discord
      </a>
    </li>
  </ul>
);

const FAQ = [
  {
    heading: "Summary",
    detail: <Summary />
  },
  {
    heading: "Team",
    detail: <Team />
  },
  {
    heading: "Minting details",
    detail: <MintInfo />
  }
];

export default FAQ;
