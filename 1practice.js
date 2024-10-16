// #Day1: Reverse an Array:
// There are multiple approaches to reverse an array in JavaScript
// Approach 1: Using the reverse() method
// Approach 2: Using the spread operator
// Approach 3: Using the map() method
// Approach 4: Using a for...of loop
// Approach 5: Using a while loop
// Approach 6: Using the reduce() method
// Approach 7: Using a for loop
// Approach 8: Using recursion

// const originalArray = [1, 2, 3, 4, 5];

// 1.const reversedArray = originalArray.reverse(); // [5, 4, 3, 2, 1]

// 2.const reversedArray = [...originalArray].reverse();

// 3.const reversedArray = originalArray.map((_, index, arr) => arr[arr.length - 1 - index]);

// 4.const reversedArray = [];
// for (const item of originalArray) {
//   reversedArray.unshift(item);
// }

// 5.let i = originalArray.length - 1;
// while (i >= 0) {
//   reversedArray.push(originalArray[i]);
//   i--;
// }

// 6.const reversedArray = originalArray.reduce((acc, current) => {
//   acc.unshift(current);
//   return acc;
// }, []);

// 7.const reversedArray = [];
// for (let i = originalArray.length - 1; i >= 0; i--) {
//   reversedArray.push(originalArray[i]);
// }

// 8.function reverseArray(arr) {
//   if (arr.length === 0) {
//     return [];
//   } else {
//     const [first, ...rest] = arr;
//     return [...reverseArray(rest), first];
//   }
// }
// const reversedArray = reverseArray(originalArray);

// 1st - approch
function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return console.log(revArr);
}

reverseArray([1, 2, 3, 4, 5]);

// 2nd approch

let arr = [1, 2, 3, 4, 5, 6, 7];
let revArr = arr.reverse();

console.log(revArr);

// 3rd apporch

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let revArray = [];

for (let i = 0; i < array.length; i++) {
  // unshit add ele at begining of array
  revArray.unshift(array[i]);
}

console.log(revArray);
