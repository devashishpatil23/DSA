// 1. Reverse a String

// approch 1
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("hello World"));

// approch 2
let str = "hello";
console.log(str.split("").reverse().join(""));
