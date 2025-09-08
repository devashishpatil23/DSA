
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



// remove dup from string
function removeDupChar(str){
  let result= "";
  const hasChar = new Set();

  for(let el of str){
    if(!hasChar.has(el)){
       hasChar.add(el)
    }else if(!result.includes(el)){
            result += el;
    }
  }

return result;
}

console.log(removeDupChar("fhdghirtwhdkjgshfe"))