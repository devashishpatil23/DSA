function tarnspose(arr) {
  const cols = arr[0].length;
  const rows = arr.length;
  const newArray = [];

  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(arr[j][i]);
    }
    newArray.push(newRow);
  }

  return newArray;
}

console.log(
  tarnspose([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
);
