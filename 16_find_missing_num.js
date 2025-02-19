const arr = [1, 5, 6, 7];
n = 10;
output = [];

for (let i = 1; i <= n; i++) {
  !arr.includes(i) ? output.push(i) : null;
}

console.log(output);

// .includes(i) is called on arr, which takes O(m) time in the worst case (since .includes() performs a linear search).

//2nd approch

const arr2 = new Set([1, 5, 6, 7]); // O(m)
n = 10;
output = [];

for (let i = 1; i <= n; i++) {
  if (!arr.has(i)) output.push(i); // O(1) lookup
}

console.log(output);


// Constructing the Set takes O(m).
// The loop runs in O(n).
// Overall, this optimized version runs in O(n + m) instead of O(n * m)