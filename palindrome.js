// Check is string is palidrome

// Approch 1
function checkPalidrome(str) {
  let j = str.length - 1;
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}
console.log(checkPalidrome("madam"));

// approch 2
function checkPalidrome(str) {
  let rev = str.split("").reverse().join("");
  return str == rev;
}

console.log(checkPalidrome("madam"));
