function allNonRepChar(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const findAllRepChar = Object.keys(charCount).filter(
    (e) => charCount[e] == 1
  );
  console.log(findAllRepChar);
  return null;
}

allNonRepChar("happy");
