// A prime number is a number greater than 1 that has no divisors other than 1 and itself.

// The main idea is that if  𝑛 is divisible by any number greater than its square root, it must also be divisible by a smaller number.

function isPrimeNumber(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(6));
