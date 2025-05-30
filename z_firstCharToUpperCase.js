function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));

// -------------------------------
function upperCaseStringArray(arr) {
  return arr.map((str) => str.toUpperCase());
}

console.log(upperCaseStringArray(["hello", "world", "javascript"]));
// -------------------------------

