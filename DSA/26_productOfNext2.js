function productNext2(arr) {
  return arr.map((_, i) => arr[i] * arr[(i + 1) % arr.length]);
}

console.log(productNext2([1, 2, 3, 4, 5]));
