let arr = [1, 2, 3, 4, 5, 6];
const len = arr.length;
const k = 3;
arr = [...arr.splice(len - k, k), ...arr];

console.log(arr);

function arrayRotation(arr, numberOfRotation) {
  for (let i = 0; i < numberOfRotation; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(arrayRotation([1, 2, 3, 4, 5], 3));
