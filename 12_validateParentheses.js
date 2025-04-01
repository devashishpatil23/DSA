function isValidParentheses(s) {
  const stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };
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

console.log(isValidParentheses("{[()]}")); // Output: true

//===================================================================

function validParenthis(str) {
  const stack = [];

  for (let ch of str) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        return false; // Unmatched closing parenthesis
      }
      stack.pop(); // Remove last opening parenthesis
    }
  }

  return stack.length === 0; // If stack is empty, parentheses are balanced
}

// Example usage:
console.log(validParenthis("(())")); // true
console.log(validParenthis("(()")); // false
console.log(validParenthis(")(")); // false
console.log(validParenthis("()()")); // true
