function secondMaxEle(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

console.log(secondMaxEle([1, 2, 32, 3, 4, 33, 4]));


// 2nd loweest num
function findSecondLowestLinear(arr) {
  let first = Infinity, second = Infinity;

  for (let num of arr) {
    if (num < first) {
      second = first;
      first = num;
    } else if (num < second && num !== first) {
      second = num;
    }
  }

  return second !== Infinity ? second : null;
}

// Example usage
const input = [10, 5, 3, 14, 8, 2];
console.log("Second lowest (O(n)):", findSecondLowestLinear(input)); // Output: 3

