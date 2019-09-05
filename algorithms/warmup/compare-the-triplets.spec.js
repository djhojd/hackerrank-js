const fn = require('./compare-the-triplets');

test('should return two integers denoting the respective comparison points earned by Alice and Bob', () => {
  const alice = [5, 6, 7];
  const bob = [3, 6, 10];
  const output = [1, 1];

  expect(fn(alice, bob)).toStrictEqual(output);
});

test('should return two integers denoting the respective comparison points earned by Alice and Bob', () => {
  const alice = [17, 28, 30];
  const bob = [99, 16, 8];
  const output = [2, 1];

  expect(fn(alice, bob)).toStrictEqual(output);
});
