function findDupCount(arr) {
  let countObj = {};

  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
  }
  return countObj;
}

console.log(findDupCount([1, 1, 2, 3, 4, 5, 5, 6]));
