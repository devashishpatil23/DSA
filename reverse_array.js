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
