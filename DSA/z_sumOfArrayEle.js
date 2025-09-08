function sumOfEle(arr) {
  let sum = 0;

  for (let el of arr) {
    sum += el;
  }

  return sum;
}

console.log(sumOfEle([1, 2, 3, 4, 5]));

const array = [1, 2, 3, 4, 5, 6];

const sum = array.reduce((sum, el) => {
  sum += el;
  return sum;
}, 0);

console.log(sum);

//  average

function average(arr) {
  let sum = 0;

  for (let el of arr) {
    sum += el;
  }

  return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
