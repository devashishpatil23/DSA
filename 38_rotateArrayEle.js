let arr = [1, 2, 3, 4, 5, 6];
const len = arr.length;
const k = 3;
arr = [...arr.splice(len - k, k), ...arr];

console.log(arr);
