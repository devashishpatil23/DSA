function hasUniqueCh(str) {
  const charObj = new Set();
  for (let ch of str) {
    if (charObj.has(ch)) {
      return false;
    } else {
      charObj.add(ch);
    }
  }
  return true;
}

console.log(hasUniqueCh("helo"));



// ----------------show unique char
function uniquechar(str) {
    let str1 = str.split("")
    return [... new Set(str1)].join("")
}

// console.log(uniquechar('hello'))

// way 2
function uniquechar2(str) {
    let data = [];
    for (let i = 0; i < str.length; i++) {
        if (!data.includes(str[i])) {
            data.push(str[i])
        }
    }
    return data.join("");
}

//  console.log(uniquechar2('hellobittu'))