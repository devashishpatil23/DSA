function sortArr(arr) {
  // Base case: An array with 0 or 1 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the first element as the pivot
  const pivot = arr[0];

  // Initialize left and right arrays
  const left = [];
  const right = [];

  // Partition the array into left and right based on the pivot
  for (let i = 1; i < arr.length; i++) {
    // Start from index 1 to avoid including pivot
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right arrays and combine them with the pivot
  const sortLeft = sortArr(left);
  const sortRight = sortArr(right);

  return [...sortLeft, pivot, ...sortRight];
}

// Example usage
console.log(sortArr([5, 6, 4, 1, 2, 3, 4]));
