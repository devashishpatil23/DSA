function removeDup(str) {
  const obj = new Set();
  let result = "";
  for (let ch of str) {
    if (!obj.has(ch)) {
      obj.add(ch);
      result += ch;
    }
  }
  return result;
}

console.log(removeDup("helsssslo0000"));



// 2nd apporch
const str = "aabbccddd";

const uniqueString = [...new Set(str)].join("");

console.log(uniqueString);

// check if string unique.
function uniqueString(str) {
  const hasCh = new Set();
  for (let ch of str) {
    if (hasCh.has(ch)) {
      return false;
    } else {
      hasCh.add(ch);
    }
  }
  return true;
}

console.log(uniqueString("strring"));

// find  dup from string
function findDupFromStr(string){
  let result = "";
  const chars = new Set()

  for(let ch of string){
    if(!chars.has(ch)){
    chars.add(ch);
    }else if(!result.includes(ch)){
  result+= ch
    }
  }
  return result;
}
console.log(findDupFromStr('fhdghirtwhdkjgshfe'))

/// remove alternate numbers

const originalArray = [1, 2, 3, 4, 5, 6];
console.log(removeAlternateElements(originalArray));

function removeAlternateElements(arr) {
  return arr.filter((el, i) => i % 2 == 0);
}

// check if array has dup el and return true or false
const array = [1, 2, 3, 1, 4];

const newArray = new Set(array);

console.log(array.length !== newArray.size);
