function removeWhiteSpace(str) {
  const newStr = str.replace(/\s/g, "");

  return newStr;
}

console.log(removeWhiteSpace("  str s    d    s "));
