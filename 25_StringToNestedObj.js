function createObj(str, value) {
  const keys = str.split(".");
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    current[key] = i === keys.length - 1 ? value : {};
    current = current[key];
  }
  return result;
}

console.log(createObj("a.b.c", "hello"));


// We use const result = {}; because result is our final object, and we never reassign it—only modify its properties. Using const ensures it stays immutable at the top level. On the other hand, let current = result; is necessary because current acts as a pointer that helps us build the nested object step by step. Since we reassign current inside the loop to move deeper, it must be let, not const."

// ✅ This answer is clear, concise, and demonstrates understanding of variable scoping and object


// "current is a reference to result, so when we update current, it modifies result as well. Since objects in JavaScript are stored by reference, assigning current[key] = {} actually updates result. Then, current = current[key] moves the pointer deeper, ensuring that nested properties are created correctly inside result."

// Would you like me to explain this with memory diagrams or a visual example? 🚀