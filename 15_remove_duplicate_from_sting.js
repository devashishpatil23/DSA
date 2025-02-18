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

console.log(removeDuplicate("aasssccccc"));

// 2nd apporch
const str = "aabbccddd";

const uniqueString = [...new Set(str)].join("");

console.log(uniqueString);
