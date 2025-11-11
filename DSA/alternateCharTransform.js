function trasformAlternateChars(str) {
  let result = "";
  for (let el of str) {
    if (el === el.toUpperCase()) {
      result += el.toLowerCase();
    } else {
      result += el.toUpperCase();
    }
  }
  return result;
}

console.log(trasformAlternateChars("JavaScript")); // "jAVAsCRIPT"C
