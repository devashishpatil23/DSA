function removeDuplicate(str) {
  let charObj = {};
  let result = "";

  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = true;
      result += char;
    }
  }

  return result;
}


function removeDup(str){
const obj = new Set();
let result = ""
for(let ch of str){
if(!obj.has(ch)){
obj.add(ch)
result += ch
}
}
return result;
}

console.log(removeDup('helsssslo0000'))



console.log(removeDuplicate("aasssccccc"));

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
