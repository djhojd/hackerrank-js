const fn = require('./simple-array-sum');

test('calculates the sum of numbers from array', () => {
  const input = [1, 2, 3, 4, 10, 11];
  const output = 31;

  expect(fn(input)).toBe(output);
});
