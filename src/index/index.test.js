const index = require("./index");

describe("Testes de Desconto", () => {
  test("Apply discount", () => {
    const result = index.applyDiscount(10, 5);

    expect(result).toEqual(5);
  });

  test("Apply discount - Discount greater than value", () => {
    const result = index.applyDiscount(10, 15);

    expect(result).toEqual(0);
  });

  test("Apply discount - Discount equal to value", () => {
    const result = index.applyDiscount(10, 10);

    expect(result).toEqual(0);
  });
});
