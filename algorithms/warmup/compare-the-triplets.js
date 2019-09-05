function compareTriplets(alice, bob) {
  return alice.reduce(
    (acc, aliceRating, idx) => {
      const bobRating = bob[idx];

      aliceRating > bobRating && acc[0]++;
      bobRating > aliceRating && acc[1]++;

      return acc;
    },
    [0, 0]
  );
}

module.exports = compareTriplets;
