function checkCorSqr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

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

console.log(checkCorSqr([1, 2, 3], [1, 4, 9]));
