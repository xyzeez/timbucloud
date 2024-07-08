export const getUniqueCategories = (items) => {
  const categories = new Set();

  for (const item of items) {
    categories.add(item.category);
  }

  return Array.from(categories);
};

export const getDiscountPercentage = (price, salePrice) => {
  if (!salePrice) return;

  if (price <= 0 || salePrice <= 0) {
    return 'Invalid price(s)';
  }
  const discountAmount = salePrice - price;

  const discountPercent = (discountAmount / price) * 100;

  return discountPercent.toFixed(0);
};
