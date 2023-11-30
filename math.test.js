const { add, subtract } = require("./math");

// Test for the add function
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(4);
});

// Test for the subtract function
test("subtracts 4 - 2 to equal 2", () => {
  expect(subtract(4, 2)).toBe(2);
});
