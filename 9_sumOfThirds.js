function sumOfThird(arr) {
  if (arr.length == 0 || arr.length < 3) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfThird([1, 2, 3, 4, 5, 6, 7, 8, 9]));
