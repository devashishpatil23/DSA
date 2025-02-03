function evenNumArr(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return console.log(evenNum);
}
evenNumArr([1, 2, 3, 4, 5, 80]);

// with filter method
const arr = [1, 2, 3, 4, 5, 7, 80, 60];
const evenNum = arr.filter((e) => e % 2 == 0);
console.log(evenNum);
