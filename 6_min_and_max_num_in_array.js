function findminAndMaxNum(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(findminAndMaxNum([9, 6, 3, 3, 45, 6]));

// apporch 2

const arr = [33, 4, 2, 55, 6, 7];
const min = Math.min(...arr);
const max = Math.max(...arr);

console.log([min, max]);
