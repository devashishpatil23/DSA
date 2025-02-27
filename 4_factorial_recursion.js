function findFactorial(num) {
  let result = 1;
  for (i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(findFactorial(5));

function findFactorial(num) {
  if (num === 0 || num === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return num * findFactorial(num - 1); // Recursive case: multiply num by factorial of (num - 1)
  }
}

console.log(findFactorial(5));

//   findFactorial(5)
//   -> 5 * findFactorial(4)
//     -> 5 * (4 * findFactorial(3))
//       -> 5 * (4 * (3 * findFactorial(2)))
//         -> 5 * (4 * (3 * (2 * findFactorial(1))))
//           -> 5 * (4 * (3 * (2 * 1))) // base case: findFactorial(1) returns 1
//           -> 5 * (4 * (3 * 2))
//           -> 5 * (4 * 6)
//           -> 5 * 24
//           -> 120


