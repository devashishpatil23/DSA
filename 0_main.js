function checkSquare(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};

  for (let el of arr1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }
  for (let el of arr2) {
    obj2[el] = (obj2[el] || 0) + 1;
  }

  for (let key in obj1) {
    const square = key ** 2;
    if (!(square in obj2)) return false;
    if (obj2[square] !== obj1[key]) return false;
  }
  return true;
}

console.log(checkSquare([1, 2, 4], [1, 4, 9]));
