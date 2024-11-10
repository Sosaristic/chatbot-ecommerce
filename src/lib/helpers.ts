export const formatAmount = (amount: number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    currency: 'NGN',
    style: 'currency',
    currencySign: 'standard',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
