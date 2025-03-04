const array1 = [1, 2, 3, 4, 5];
const array2 = [9, 8, 7, 6];

const newArray = [...array1, ...array2].sort((a, b) => a - b);

console.log(newArray);

// The sort() method takes a comparison function as an argument. This function is called with two elements (a and b) from the array.
// The comparison function should return:
// A negative value (a - b < 0) if a should come before b.
// Zero (a - b === 0) if a and b are considered equal.
// A positive value (a - b > 0) if a should come after b.

// when a = 10 and b = 5, a - b = 10 - 5 = 5 (positive) → 10 comes after 5.
// When a = 5 and b = 10, a - b = 5 - 10 = -5 (negative) → 5 comes before 10.

function mergeArr(arr1, arr2) {
  let i = 0;
  let j = 0;

  let array1 = arr1[i];
  let array2 = arr2[j];
  let mergedArr = [];

  while (array1 || array2) {
    if (array2 == undefined || array1 < array2) {
      mergedArr.push(array1);
      i++;
      array1 = arr1[i];
    } else {
      mergedArr.push(array2);
      j++;
      array2 = arr2[j];
    }
  }

  return console.log(mergedArr);
}
mergeArr([1, 3, 4, 5], [2, 6, 8, 9]);
