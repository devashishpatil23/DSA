const arr = [1, 5, 6, 7];
n = 10;
output = [];

for (let i = 1; i <= n; i++) {
  !arr.includes(i) ? output.push(i) : null;
}

console.log(output);

// .includes(i) is called on arr, which takes O(m) time in the worst case (since .includes() performs a linear search).

//2nd approch

const arr = new Set([4, 7, 5, 8, 9]);
const n = 10;
const result = [];

for (let i = 0; i <= n; i++) {
  if (!arr.has(i)) result.push(i);
}

console.log(result);

// Constructing the Set takes O(m).
// The loop runs in O(n).
// Overall, this optimized version runs in O(n + m) instead of O(n * m)

const arr = [1, 2, 4, 5];

for (let i = 1; i < arr.length; i++) {
  if (arr.indexOf(i) === -1) {
    console.log(i);
  }
}
