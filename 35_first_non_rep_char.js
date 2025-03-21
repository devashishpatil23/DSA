// 1st apporch
function findNonRepChar(str) {
  const charCount = {};
  for (const char of str) {

    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return console.log(char);
    }
  }
  return null;
}

findNonRepChar("hello");

// 2nd apporch
function firstNonRepeatedChar(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return console.log(str[i]);
    }
  }
  return null;
}

firstNonRepeatedChar("programming");
