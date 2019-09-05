function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach(item => {
    item === 0 && zero++;
    item < 0 && negative++;
    item > 0 && positive++;
  });

  const arrLength = arr.length;
  const digits = 6;

  const printPositive = (positive / arrLength).toFixed(digits);
  const printNegative = (negative / arrLength).toFixed(digits);
  const printZero = (zero / arrLength).toFixed(digits);

  return [printPositive, printNegative, printZero];
}

module.exports = plusMinus;
