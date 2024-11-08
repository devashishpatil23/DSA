function moveAllNegToLeft(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++;
    }
  }
  return arr;
}

const arr = [1, -2, -4, 6, -5, 4, 0];

console.log(moveAllNegToLeft(arr));
