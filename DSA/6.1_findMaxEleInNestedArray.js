function findMaxEle(arr) {
  let max = -Infinity;

  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    }
  }
  traverse(arr);
  return max;
}

const array = [[3, 4, 58], 11111, [709, 9999, 8, 9, [10, 11]], [111, 2]];

console.log("Largest element:", findMaxEle(array));

////-----
console.log(Math.max(...array.flat(Infinity)));
