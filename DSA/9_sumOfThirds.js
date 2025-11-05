const arr = [2, 5, 7, 9, 3, 1, 4, 6, 8];

// pick 3rd elements → arr[2], arr[5], arr[8] = 7, 1, 8
let sum = 0;
for (let i = 2; i < arr.length; i += 3) {
  sum += arr[i];
}

console.log(sum); // 16
