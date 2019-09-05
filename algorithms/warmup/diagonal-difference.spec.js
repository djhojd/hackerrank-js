const fn = require('./diagonal-difference');

test("should calculate the absolute difference between the sums of the matrix's two diagonals", () => {
  const row1 = [11, 2, 4];
  const row2 = [4, 5, 6];
  const row3 = [10, 8, -12];
  const input = [row1, row2, row3];
  const output = 15;

  expect(fn(input)).toBe(output);
});
