// function findMissing(arr, n) {
//   const result = [];

//   for (let i = 0; i <= n; i++) {
//     if (!arr.includes(i)) result.push(i);
//   }
//   return [...result];
// }

// console.log(findMissing([2, 3, 5, 7], 10));

function findMissing(arr, n) {
  const newArr = new Set([...arr]);
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (!newArr.has(i)) result.push(i);
  }
  return result;
}

console.log(findMissing([2, 3, 5, 7], 10));
