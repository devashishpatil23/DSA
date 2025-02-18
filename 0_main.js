const arr = [1, 5, 6, 7];
n = 10;
output = [];

for (let i = 1; i <= n; i++) {
  !arr.includes(i) ? output.push(i) : null;
}

console.log(output);
