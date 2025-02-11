function findDupCount(arr) {
  let countObj = {};

  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
  }
  return countObj;
}

console.log(findDupCount([1, 1, 2, 3, 4, 5, 5, 6]));
//-------------------
function countRepeated(str, n) {
  let count = 0;
  const newStr = str.split(" ").join("");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === n) {
      count += 1;
    }
  }
  return count;
}

console.log(countRepeated("hello world", "l"));

// ------------------------------

const str = "hello worlddddd";
const newStr = str.split("");

const count = newStr.reduce((count, cur) => {
  if (cur === "d") {
    count += 1;
  }
  return count;
}, 0);

console.log(count);

// --------------------------------------

// const str = "helllo";
// const newStr = str.split("");

// const count = newStr.reduce((countobj, ele) => {
//   countobj[ele] = (countobj[ele] || 0) + 1;
//   return countobj;
// }, {});

// console.log(count);
