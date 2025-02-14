function validateparentheses(str) {
  const stack = [];
  const brakets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last !== brakets[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validateparentheses("({})"));
