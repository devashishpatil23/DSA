function findDupCount(arr) {
  let countObj = {};

  for (let el of arr) {
    countObj[el] = (countObj[el] || 0) + 1;
  }
  return countObj;
}

console.log(findDupCount([1, 1, 2, 3, 4, 5, 5, 6]));
//-------------------
function count(str,l){
  let count = 0;
  
  for(let ch of str){
  if(ch === l){
  count +=1
  }
  }
  
  return count
  }
  
  console.log(count('hello','l'))

// ------------------------------

const str = "hello worlddddd";
const newStr = str.split("");

const count = newStr.reduce((count, cur) => {
  if (cur === "d") count += 1;
  
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
