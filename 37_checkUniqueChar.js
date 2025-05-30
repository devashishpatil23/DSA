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
