const MARKETPLACES = {
  RARIBLE: 'rarible',
  OPENSEA: 'opensea',
};

const getMarketplaceCollectionUrl = ({ marketplace, contractAddress }) => {
  if (!marketplace || contractAddress) {
    console.warn('Pass the marketplace and contractAdress');
    return;
  }
  switch (marketplace) {
    case marketplaceS.OPENSEA:
      return `process.env.OPENSEA_PREFIX${contractAddress}`
    default:
    console.warn("Pass the the correcnt marketplace enum")

};

// const getMarketplaceCollectionUrl = ({marketPlace, contractAddress, tokenIdMintedNft}) => {

// }
