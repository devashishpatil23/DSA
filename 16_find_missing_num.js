function findMissingNumber(arr,n){
const result = [];

for(let i=1; i<=n; i++){
if(arr.indexOf(i) === -1){
result.push(i)
}
}
return result

}


console.log(findMissingNumber([1, 5, 6, 7],10))


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


