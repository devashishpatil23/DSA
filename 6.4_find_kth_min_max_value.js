function findKthMinMaxValue(arr, k) {
  const n = arr.length;
  if (k > n || k <= 0) {
    console.log("Please enter valid k");
  }

  const sortedArr = arr.sort((a, b) => a - b);
  const min = sortedArr[k - 1];
  const max = sortedArr[n - k];

  return console.log(min, max);
}

findKthMinMaxValue([2, 3, 5, 6, 7, 9], 2);
