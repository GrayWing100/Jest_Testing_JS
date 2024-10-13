const sum = require("./sum");

test("properly adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

it("5 + 7 should be 12", () => {
  const result = sum(5, 7);
  expect(result).toBe(12);
});

test("sum two numbers", () => {
  const value = 2 + 3;
  expect(value).toBe(5);
  expect(value).toBeGreaterThan(4);
  expect(value).toBeGreaterThanOrEqual(5);
  expect(value).toBeLessThan(8);
  expect(value).toBeLessThanOrEqual(5);
});

test("Adding floats numbers", () => {
  const value = 0.4 + 0.3;
  expect(value).toBeCloseTo(0.6999999);
});
