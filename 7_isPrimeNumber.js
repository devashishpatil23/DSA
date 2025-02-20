// A prime number is a number greater than 1 that has no divisors other than 1 and itself.

//composite numbe are divisilbe by num less or equalt to then there sq root and prime number are not
function isPrimeNumber(x) {
  if (x <= 1) {
    return false;
  }
  // optimal solution
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(6));

function isPrimeNumber(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(6));


// containe 1 for loop - big O = O(n) - as the value of n incrase the num of line expression exicutes alos increase