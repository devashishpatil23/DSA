
function firstNonRepeatedChar(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return console.log(str[i]);
    }
  }
  return null;
}

firstNonRepeatedChar("programming");
