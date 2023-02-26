export const formatCurrency = (value: number) => {
  return `$${parseFloat(value.toString()).toFixed(2).toLocaleString()}`;
};
