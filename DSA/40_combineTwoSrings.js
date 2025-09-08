function combineString(str1, str2) {
  const len = str1.length + str2.length;
  let result = "";

  for (let i = 0; i < len; i++) {
    if (i < str1.length) result += str1[i];
    if (i < str2.length) result += str2[i];
  }

  return result;
}

console.log(combineString("hello0000", "1234"));
