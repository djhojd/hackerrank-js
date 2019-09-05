function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  const lastIdx = arr.length - 1;

  arr.forEach((row, idx) => {
    diag1 += row[idx];
    diag2 += row[lastIdx - idx];
  });

  return Math.abs(diag1 - diag2);
}

module.exports = diagonalDifference;
