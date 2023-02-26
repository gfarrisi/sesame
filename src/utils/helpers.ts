export const formatCurrency = (value: number) => {
  return `$${parseFloat(value.toString()).toFixed(2).toLocaleString()}`;
};

export const formatAddress = (address: string, length: number) => {
  const lengthToTrim = length || 4;
  return `${address.substring(0, lengthToTrim)}...${address.substring(
    address.length - lengthToTrim,
    address.length,
  )}`;
};
