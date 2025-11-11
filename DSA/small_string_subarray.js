function getSortedSmallestStrings(arrays) {
  const smallestStrings = [];

  // Step 1: pick smallest string from each subarray
  for (const subarray of arrays) {
    let minString = subarray[0];
    for (const str of subarray) {
      if (str.length < minString.length) {
        minString = str;
      }
    }
    smallestStrings.push(minString);
  }

  // Step 2: sort the selected strings by length
  smallestStrings.sort((a, b) => a.length - b.length);

  return smallestStrings;
}

const arr = [
  ["apple", "kiwi", "banana"],
  ["cat", "elephant", "dog"],
  ["red", "blue"],
];

console.log(getSortedSmallestStrings(arr));

const result = arr
  // Step 1: pick smallest string (by length) from each subarray
  .map((sub) =>
    sub.reduce((smallest, current) =>
      current.length < smallest.length ? current : smallest
    )
  )
  // Step 2: sort the selected strings by length
  .sort((a, b) => a.length - b.length);

console.log(result);
