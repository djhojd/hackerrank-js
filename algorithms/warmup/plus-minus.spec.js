const fn = require('./plus-minus');

test('should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals', () => {
  const input = [-4, 3, -9, 0, 4, 1];
  const output = ['0.500000', '0.333333', '0.166667'];

  expect(fn(input)).toStrictEqual(output);
});

test('should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals', () => {
  const input = [1, 1, 0, -1, -1];
  const output = ['0.400000', '0.400000', '0.200000'];

  expect(fn(input)).toStrictEqual(output);
});
