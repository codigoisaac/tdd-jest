function applyDiscount(value, discount) {
  const newPrice = value >= discount ? value - discount : 0;

  return newPrice;
}

module.exports = {
  applyDiscount,
};
