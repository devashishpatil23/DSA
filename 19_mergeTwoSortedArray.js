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

const sortedData = (arr1, arr2) => {
  let i = 1; // Start index for arr1
  let j = 1; // Start index for arr2
  let array1 = arr1[0]; // First element of arr1
  let array2 = arr2[0]; // First element of arr2

  let mergedArray = []; // Array to store the merged result

  // Merging arrays until both are fully traversed
  while (array1 || array2) {
    // If array2 is undefined or array1 is smaller, push array1
    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      array1 = arr1[i]; // Move to the next element in arr1
      i++;
    } else {
      mergedArray.push(array2);
      array2 = arr2[j]; // Move to the next element in arr2
      j++;
    }
  }

  console.log(mergedArray);
};

// Example usage:
sortedData([1, 3, 4, 5], [2, 6, 8, 9]);
