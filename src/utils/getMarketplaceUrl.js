export const getMarketplaceCollectionUrl = (marketplace) => {
  if (!marketplace) {
    console.warn('Pass the marketplace and contractAdress');
    return;
  }
  if (marketplace === 'OPENSEA') return `${process.env.NEXT_PUBLIC_OPENSEA_COLLECTION_URL}/collection/${process.env.NEXT_PUBLIC}`;

  if (marketplace === 'RARIBLE') return `${process.env.NEXT_PUBLIC_OPENSEA_COLLECTION_URL}/collection/${process.env.NEXT_PUBLIC}`;

  return;
};
