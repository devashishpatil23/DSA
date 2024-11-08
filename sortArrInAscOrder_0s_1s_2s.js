function sortArrInAscOrder(arr) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  for (let num of arr) {
    if (num == 0) count0++;
    else if (num == 1) count1++;
    else if (num == 2) count2++;
  }

  let index = 0;

  while (count0 > 0) {
    arr[index] = 0;
    index++;
    count0--;
  }
  while (count1 > 0) {
    arr[index] = 1;
    index++;
    count1--;
  }
  while (count2 > 0) {
    arr[index] = 2;
    index++;
    count2--;
  }

  return arr;
}
let arr = [0, 1, 0, 2, 1, 2, 1];
let sortedArr = sortArrInAscOrder(arr);

console.log(sortedArr);
