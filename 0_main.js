function reverseAString(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

console.log(reverseAString("my namw is john"));

// apporch 2

const str = "hello boy";

const revStr = str.split("").reverse().join("");

console.log(revStr);
