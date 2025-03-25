function validate(str) {
  const stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (brackets[char] !== last) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validate("{[()]}"));
console.log(validate("{[)}"));
console.log(validate("()[]{}"));
console.log(validate("(]"));
console.log(validate("({})"));
console.log(validate("{{{"));




function isValidParentheses(s) {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  for (const char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("{[()]}"));  // Output: true