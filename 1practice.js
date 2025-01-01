const checkPalidrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
    return true;
  }
};

console.log(checkPalidrome("masam"));

//  2nd apporch

const str = "saas";
const revStr = str.split("").reverse().join("");
console.log(str === revStr);
