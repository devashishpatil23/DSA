function findCount(arr, n) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
      maxCount = Math.max(maxCount, count); //stores max count only
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(findCount([1, 2, 3, 1, 1, 1, 5, 5, 1, 1, 1, 1], 1));
