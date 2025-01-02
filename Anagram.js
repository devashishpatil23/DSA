function checkAnagram(str1, str2) {
  strObj = {};
  for (let char of str1) {
    strObj[char] = (strObj[char] || 0) + 1;
  }

  for (let char of str2) {
    if (strObj[char]) {
      strObj[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram("run", "urn"));

// 2nd apporch
const anagramCheck = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return console.log(sortedStr2 === sortedStr1);
};

anagramCheck("aaabbbccc", "bbbcccaaa");
