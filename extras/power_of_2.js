function isPowerOf2(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOf2(16));


// in each iterarition value of n is getting half so TC is onabort(logn)