function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return console.log(revStr);
}
reverseString("hello");

//  2nd appor
const str = "hello";
const revStr = str.split("").reverse().join("");
console.log(revStr);
