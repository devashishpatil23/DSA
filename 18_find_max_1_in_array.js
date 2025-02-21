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

// ---------------------------------
function findMax1(arr) {
  let count = 0;
  let maxCount = 0;

  for (let el of arr) {
    if (el === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(findMax1([1, 2, 3, 1, 1, 1, 2, 3]));
