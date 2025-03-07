function findPairs(arr, val) {
  const pairs = [];

  const seen = new Set();

  for (let num of arr) {
    const buddy = val - num;

    if (seen.has(buddy)) {
      pairs.push([buddy, num]);
    } else {
      seen.add(num);
    }
  }

  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 10));
