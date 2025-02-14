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

console.log(validate("{[()]}")); // ✅ true
console.log(validate("{[)}")); // ❌ false
console.log(validate("()[]{}")); // ✅ true
console.log(validate("(]")); // ❌ false
console.log(validate("({})")); // ✅ true
console.log(validate("{{{")); // ✅ true
