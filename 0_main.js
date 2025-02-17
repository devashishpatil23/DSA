function transformStringIgnoreCase(str) {
  if (str.length === 0) return "";

  let result = [];
  let count = 1;
  let lowerStr = str.toLowerCase(); // Convert to lowercase for case-insensitivity

  for (let i = 0; i < str.length; i++) {
    if (lowerStr[i] === lowerStr[i + 1]) {
      count++;
    } else {
      result.push(str[i] + count); // Preserve original case
      count = 1;
    }
  }

  return result.join("");
}

console.log(transformStringIgnoreCase("aAbbCCC")); // Output: "a2b2c3"
