export const showPartialAccountAddress = (account) => {
  if (!account) return;
  const amount = 3;
  const firstCharacters = account.slice(0, amount);
  const lastCharacters = account.slice(account.length - amount);

  return `${firstCharacters}...${lastCharacters}`;
};

export const removeSpacingAndToLowerCase = (account) => {
  if (!account) return;
  return account.toLowerCase().trim();
};
