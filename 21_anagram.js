function checkAnagram(str1, str2) {
  const freq = {};

  for (let ch of str1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let ch of str2) {
    if (freq[ch]) {
      freq[ch] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram("hello", "hedllo"));

// 2nd apporch
const anagramCheck = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return console.log(sortedStr2 === sortedStr1);
};

anagramCheck("aaabbbccc", "bbbcccaaa");
