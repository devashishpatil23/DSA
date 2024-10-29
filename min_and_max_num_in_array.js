//   1st approach
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length -1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min, max);
}

findMinMax([9, 4, 5, 3, 1]);

//   2nd approach
const arr = [2, 3, 1, 5, 7, 1];
const minVal = Math.min(...arr);
const maxVal = Math.max(...arr);

console.log(minVal, maxVal);
