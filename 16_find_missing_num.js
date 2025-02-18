// 4. Question: Given an array containing numbers from 1 to N, with one number missing, find the missing number.
function findMissingNumber(arr) {
  const n = arr.length + 1; // (added 1 because that number is missing)
  const Expectedsum = (n * (n + 1)) / 2;
  const ActualarrSum = arr.reduce((acc, curr) => acc + curr, 0);
  return Expectedsum - ActualarrSum;
}
console.log(findMissingNumber([1, 2, 3, 5]));
// Output: 4
