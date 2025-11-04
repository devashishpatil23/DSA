function removeDuplicate(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return console.log(uniqueArr);
}

removeDuplicate([1, 1, 3, 2, 4, 5, 6, 4, 5, 3, 8, 7]);

// approch 2

const uniqueArr = (arr) => {
  return console.log([...new Set(arr)]);

  // return console.log(Array.from(new Set(arr)));
};
uniqueArr([1, 1, 3, 2, 4, 5, 6, 4, 5, 3, 8, 7]);

/// find duplicate
const originalArray = [1, , 1, 4, 5, 5, 6, 2, 3, 4, 5, 6];
console.log(findDuplicates(originalArray));

function findDuplicates(arr) {
  return arr.filter((el, i) => arr.indexOf(el) !== i);
}
