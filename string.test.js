const { describe } = require("node:test");

describe("Testing strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});
//////
describe("Arrays testiing", () => {
  const shoppingList = ["diapers", "milk", "paper", "bread", "salt"];
  expect(shoppingList).toContain("bread");
});
//////
function compiledAdndroidCode() {
  throw new Error("You are using the wrong JDK");
}
describe("error mesage- exception", () => {
  it("compiling android goes as exception", () => {
    expect(() => compiledAdndroidCode()).toThrow(Error);
    expect(() => compiledAdndroidCode()).toThrow(
      "compiling android goes as exception"
    );
  });
});
